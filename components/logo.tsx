import { Text } from '@chakra-ui/react'

export default function Logo (): JSX.Element {
  return (
    <>
    <Text fontSize={{ base: '2xl', lg: '4xl' }}><Text as="span" bgClip="text" bgGradient="linear(to-tl, rvyellow, rvmagenta)" fontWeight="semibold">plus</Text>.page</Text>
    </>
  )
}
