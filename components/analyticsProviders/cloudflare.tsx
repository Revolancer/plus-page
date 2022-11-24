import Script from 'next/script'

export default function CloudflareAnalytics (): JSX.Element {
  const beacon = {
    token: process.env.NEXT_PUBLIC_ANALYTICS_CLOUDFLARE
  }

  return (
  <Script
  strategy="afterInteractive"
  id="cloudflare-analytics"
  defer
  src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon={JSON.stringify(beacon)} />
  )
}
