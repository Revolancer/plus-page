import Script from 'next/script'

export default function GoogleAnalytics4 (): JSX.Element {
  const ga4 = process.env.NEXT_PUBLIC_ANALYTICS_GA4 as string

  return (
  <>
  <Script
    strategy="afterInteractive"
    defer
    src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
    />
  <Script
  id="ga4"
  strategy="afterInteractive"
  defer
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ga4}', {
      page_path: window.location.pathname,
    });
    `
  }}
  />
  </>)
}
