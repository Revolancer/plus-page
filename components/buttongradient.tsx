import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandGradient = defineStyle({
  backgroundGradient: 'orange.500',
  color: 'white',
  fontFamily: 'serif',
  fontWeight: 'normal',
  bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
  _focus: {
    backgroundGradient: 'orange.500',
    bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
    filter: 'auto',
    brightness: '85%'
  },
  _active: {
    backgroundGradient: 'orange.500',
    bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
    filter: 'auto',
    brightness: '85%'
  },
  _hover: {
    backgroundGradient: 'orange.500',
    bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
    filter: 'auto',
    brightness: '85%'
  }
})

export const buttonGradient = defineStyleConfig({
  variants: { brandGradient }
})
