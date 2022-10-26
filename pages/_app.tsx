import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

// Set up Chakra theme
const colors = {
  rvnavy: '#0D253A',
  rvnavywhite: '#F7FAFD',
  rvmagenta: '#FF008B',
  rvyellow: '#FFFF00',
  rvgreen: '#00FF67',
  rvturquoise: '#00FFF7'
}
const theme = extendTheme({ colors })

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
