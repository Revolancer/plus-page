import { setCookie, getCookie, hasCookie } from 'cookies-next'
import uuidGen from 'react-uuid'

export default function FirstPartyAnalytics (): JSX.Element {
  let uuid: string
  let sessId: string
  if (typeof window !== 'undefined') {
    if (!hasCookie('pages_sess')) {
      setCookie('pages_sess', uuidGen())
    }
    sessId = getCookie('pages_sess') as string
    if (!hasCookie('pages_uuid')) {
      setCookie('pages_uuid', uuidGen(), { maxAge: 60 * 60 * 24 * 365 })
    }
    uuid = getCookie('pages_uuid') as string
  }

  const apiHost: string = (process.env.NEXT_PUBLIC_PAGES_API_HOST as string)
  const mode: string = (process.env.NEXT_PUBLIC_ANALYTICS_FIRSTPARTY as string)

  const submitForm = async (values: any): Promise<void> => {
    try {
      const formBody = []
      for (const key in values) {
        formBody.push(
          encodeURIComponent(key) +
            '=' +
            encodeURIComponent(values[key])
        )
      }
      const formBodyStr = formBody.join('&')
      const response = await fetch(apiHost + 'analytics',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBodyStr
        })
      await response.json()
    } catch {
    }
  }
  const getIp = async (): Promise<string> => {
    const ip = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
      .then(async res => await res.text())
      .then(data => {
        const ipRegex = /ip=([a-f:.0-9]+)/
        const matches = data.match(ipRegex)
        if (matches !== null) {
          return matches[1]
        }
        return 'unknown'
      })
      .catch(e => 'unknown')
    return ip
  }
  const postAnalytics = async (): Promise<void> => {
    const ip = await getIp()
    const datetime = Date.now()
    const data = {
      url: window.location.href,
      hit_ip: ip,
      hit_datetime: datetime,
      hit_sess_uuid: sessId,
      hit_uuid: uuid
    }
    if (mode === 'prod') {
      await submitForm(data)
    } else {
      console.log(data)
    }
  }
  if ((typeof window) !== 'undefined') {
    if ((window as any).hasRunAnalyticsCode !== true) {
      (window as any).hasRunAnalyticsCode = true
      void postAnalytics()
    }
  }

  return (
  <>
  </>)
}
