import Script from 'next/script'

export default function FirstPartyAnalytics (): JSX.Element {
  return (
  <>
  <Script
  id="clientcollector"
  strategy="afterInteractive"
  defer
  dangerouslySetInnerHTML={{
    __html: `
    const getIp = async () => {
        const ip = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
          .then(res => res.text())
          .then(data => {
            let ipRegex = /ip=([a-f:.0-9]+)/
            let ip = data.match(ipRegex)[1];
            return ip;
          })
          .catch(e => 0);
        return ip;
    };
    const postAnalytics = async (ip) => {
        console.log(await ip);
    }
    if ((typeof window) !== 'undefined') {
        console.log('Doing an analytics');
        const ip = getIp();
        postAnalytics(ip);
    }
    `
  }}
  />
  </>)
}
