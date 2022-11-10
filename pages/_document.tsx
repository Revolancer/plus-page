import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document (): JSX.Element {
  return (
    <Html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <Script strategy="afterInteractive" id='smooth-scroll'>
          {`document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault()
                  targetRef = '#' + this.getAttribute('href').split('#')[1]
                  target = document.querySelector(targetRef)
                  if (target){
                    target.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }
              })
          })`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
