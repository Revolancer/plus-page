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
    </ChakraProvider>
  )
}
