import { Box, Button, Container, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'

import phoneMock from '../../public/assets/home/phonemock.png'

export default function Hero (modal: any): JSX.Element {
  return (
    <>
      <Box w="full" minH="60vh" position="relative" overflow="hidden">
      <Box w="full" h="full" backgroundColor="whiteAlpha.700" position="absolute">
      <Container maxW='110rem' w="full" h="full" >
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }} w="full" h="full" >
          <Flex p="12" w="full" h="full" justifyContent={{ md: 'center' }} direction="column" gap="4">
            <Text fontSize={{ base: '3xl', lg: '6xl' }} fontWeight="bold">
              Looking to set up a website?
            </Text>
            <Text>
              Don&rsquo;t! Do this instead - it&rsquo;s quicker, cheaper, easier
            </Text>
            <Button
              mt="6"
              onClick={modal.onOpen}
              bgGradient='linear(to-tl, rvyellow, rvmagenta)'
              _focus={{
                bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
                filter: 'auto',
                brightness: '85%'
              }}
              _active={{
                bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
                filter: 'auto',
                brightness: '85%'
              }}
              _hover={{
                bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
                filter: 'auto',
                brightness: '85%'
              }}
              w="max"
              color="white"
            >
              Get Started
            </Button>
          </Flex>
          <Flex direction="column" justifyContent="end">
            <Image
              src={phoneMock}
              alt=""
              priority={true} />
          </Flex>
        </Grid>
      </Container>
      </Box>
      <Box filter='auto' blur='20px' zIndex="-1" w="full" h="full" background="white" position="absolute" overflow="hidden">
        <Box borderRadius="50%" bottom="min(-20vw,-24vh)" right="0" width="max(55vw, 45vh)" height="max(36vw, 33vh)" bgGradient="linear(to-r,rvmagenta,rvyellow)" position="absolute"></Box>
        <Box display={{ base: 'none', md: 'block' }} borderRadius="50%" bottom="-10vh" left="-5vw" width="max(20vw, 20vh)" height="max(20vw, 20vh)" bgGradient="linear(to-br,rvmagenta,rvyellow)" position="absolute"></Box>
        <Box borderRadius="50%" top="-70px" right="-5vw" width="max(20vw, 20vh)" height="max(min(20vh,300px),200px)" bgGradient="linear(to-tl,rvmagenta,rvyellow)" position="absolute"></Box>
      </Box>
      </Box>
      <Box w="full" minH="3" bgGradient="linear(to-r,rvmagenta,rvyellow)">
      </Box>
    </>
  )
}
