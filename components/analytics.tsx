import CloudflareAnalytics from './analyticsProviders/cloudflare'
import FirstPartyAnalytics from './analyticsProviders/firstparty'
import GoogleAnalytics4 from './analyticsProviders/ga4'

export default function Analytics (): JSX.Element {
  return (<>
    <GoogleAnalytics4 />
    <CloudflareAnalytics />
    <FirstPartyAnalytics />
  </>)
}
