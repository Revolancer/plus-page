import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document (): JSX.Element {
  return (
    <Html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

        <Script strategy="afterInteractive" id='smooth-scroll'>
          {`document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault()
                  target = document.querySelector(this.getAttribute('href').replace('/',''))
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
