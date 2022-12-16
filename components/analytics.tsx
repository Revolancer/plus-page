import CloudflareAnalytics from './analyticsProviders/cloudflare'
import FirstPartyAnalytics from './analyticsProviders/firstparty'
import GoogleAnalytics4 from './analyticsProviders/ga4'
import MetaPixel from './analyticsProviders/metapixel'

export default function Analytics (): JSX.Element {
  return (<>
    <GoogleAnalytics4 />
    <MetaPixel />
    <CloudflareAnalytics />
    <FirstPartyAnalytics />
  </>)
}
