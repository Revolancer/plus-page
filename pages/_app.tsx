import '../styles/fonts.css'
import '../styles/globals.css'
import '../styles/colorschemes.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

// Lightgallery styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import Script from 'next/script'
import Analytics from '../components/analytics'
import Head from 'next/head'

// Set up Chakra theme
const theme = extendTheme({
  colors: {
    rvnavy: '#0D253A',
    rvnavywhite: '#F7FAFD',
    rvmagenta: '#FF008B',
    rvyellow: '#FFFF00',
    rvgreen: '#00FF67',
    rvturquoise: '#00FFF7'
  },
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif'
  }
})

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
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
      <Analytics />
    </ChakraProvider>
    </>
  )
}
