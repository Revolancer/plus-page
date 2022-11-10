import { Box, Button, Container, Flex, Grid, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/home/header'
import Hero from '../components/home/hero'

import laptopMock from '../public/assets/home/laptopmock.png'
import featIcon1 from '../public/assets/home/featicon1.png'
import featIcon2 from '../public/assets/home/featicon2.png'
import featIcon3 from '../public/assets/home/featicon3.png'

import styles from '../styles/Home.module.css'

export default function Home (): JSX.Element {
  const registrationModal = useDisclosure()
  return (
    <>
    <Head>
      <title>plus.page by Revolancer - Your digital home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box color="black" minW="100vw" minH="100vh">
      <Header {...registrationModal} />
      <Hero {...registrationModal} />
      <Container maxW="110rem" p={{ base: '8', lg: '16' }}>
        <span tabIndex={-1} id='features' className={styles.scrollto}></span>
        <Flex direction="column" gap={{ base: '8', lg: '20' }} alignItems="center">
          <Text fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }} align="center">Create your online home <Text as="span" bgClip="text" bgGradient="linear(to-br, orange.500, yellow.400)">for life.</Text></Text>
          <Text align="center">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</Text>
          <Image
            src={laptopMock}
            alt="" />
          <Grid templateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }} gap="8" w="full" maxW="container.lg">
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon1} alt="" /><Text fontSize="xl" fontWeight="bold">Simplicity</Text><Text align="center">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon2} alt="" /><Text fontSize="xl" fontWeight="bold">Personalisation</Text><Text align="center">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon3} alt="" /><Text fontSize="xl" fontWeight="bold">Link-in-bio</Text><Text align="center">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</Text></Flex>
          </Grid>
        </Flex>
      </Container>
      <Container maxW="90rem" p={{ base: '8', lg: '16' }}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 300px' }} gap="24" w="full">
            <Flex direction="column" gap="4" p="4">
              <Text fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>All you need for a <Text as="span" bgClip="text" bgGradient="linear(to-r, #FF4D61, #FFB229)" filter="auto" brightness="90%">fraction of the price.</Text></Text>
              <Text>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</Text>
            </Flex>
            <Flex direction="column" gap="2" p="4" borderRadius="8" boxShadow="lg" backgroundColor="black" color="white" maxW="300px" w="full" marginInline="auto">
              <Text align="center" fontSize="lg" fontWeight="bold">Average Website Cost</Text>
              <Flex alignItems="center">
                <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                <Text as="span">Hosting</Text>
                <Spacer />
                <Text>£100</Text>
              </Flex>
              <Flex alignItems="center">
                <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                <Text as="span">Design</Text>
                <Spacer />
                <Text>£1000</Text>
              </Flex>
              <Flex alignItems="center">
                <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                <Text as="span">Development</Text>
                <Spacer />
                <Text>£500</Text>
              </Flex>
              <Flex alignItems="center">
                <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                <Text as="span">SEO Optimisation</Text>
                <Spacer />
                <Text>£400</Text>
              </Flex>
              <Spacer />
              <Flex alignItems="center">
                <Text as="span" fontSize="lg" fontWeight="semibold">Total:</Text>
                <Spacer />
                <Text>£2000</Text>
              </Flex>
            </Flex>
          </Grid>
      </Container>
      <Container maxW="90rem" p={{ base: '8', lg: '16' }}>
        <span tabIndex={-1} id='pricing' className={styles.scrollto}></span>
        <Flex direction="column" gap="4" p="4">
          <Text fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>Pricing</Text>
          <Text>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap="4" maxW="full" w={{ base: '100%', md: 'max' }} marginInline="auto">
            <Flex direction="column" gap="2" p="4" borderRadius="8" boxShadow="lg" w={{ base: '100%', md: '80' }} marginInline="auto">
              <Text align="center" fontSize="lg" fontWeight="bold">Standard</Text>
              <Button
                onClick={registrationModal.onOpen}
                colorScheme="blackAlpha"
              >
                Get Started
              </Button>
            </Flex>
            <Flex direction="column" gap="2" p="4" borderRadius="8" boxShadow="lg" backgroundColor="black" color="white" w={{ base: '100%', md: '80' }} maxW="full" marginInline="auto">
              <Text align="center" fontSize="lg" fontWeight="bold">Lifetime</Text>
              <Button
                onClick={registrationModal.onOpen}
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
                color="white"
              >
                Get Started
              </Button>
            </Flex>
          </Grid>
        </Flex>
      </Container>
    </Box>
    </>
  )
}
