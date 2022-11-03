import { Flex, Text } from '@chakra-ui/react'

export default function Logo (): JSX.Element {
  return (
    <Flex direction="column" alignItems="end">
    <Text fontSize={{ base: '2xl', lg: '4xl' }} as="span"><Text as="span" bgClip="text" bgGradient="linear(to-tl, rvyellow, rvmagenta)" fontWeight="semibold">plus</Text>.page</Text>
    <Text fontSize={{ base: 'xs', lg: 'md' }} as="span" mt="-2.5" color="whiteAlpha.800">by <Text as="span" fontWeight="semibold">Revo</Text>lancer</Text>
    </Flex>
  )
}
