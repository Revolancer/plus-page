import { Box, Button, Container, Flex, Grid, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/home/header'
import Hero from '../components/home/hero'

import laptopMock from '../public/assets/home/laptopmock2.png'
import featIcon1 from '../public/assets/home/feats1.png'
import featIcon2 from '../public/assets/home/feats2.png'
import featIcon3 from '../public/assets/home/feats3.png'
import featIcon4 from '../public/assets/home/feats4.png'
import featIcon5 from '../public/assets/home/feats5.png'
import featIcon6 from '../public/assets/home/feats6.png'

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
        <Flex direction="column" gap={{ base: '8', lg: '12' }} alignItems="center">
          <Text align="center">
            <Text as="span" fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }} align="center">Your online presence made <Text as="span" bgClip="text" bgGradient="linear(to-br, orange.500, yellow.400)">simple</Text></Text>
            <br />
            <Text as="span" fontWeight="bold" fontSize={{ base: 'xl', lg: '3xl' }} align="center">Designed for use on social media</Text>
          </Text>
          <Text align="center" maxW="70ch"><strong>The only link you need</strong> - put your best talents on display, wow your dream clients, dazzle them with your portfolio, and make it easy for them to connect with you.</Text>
          <Text align="center">Plus Page can help you achieve just that!</Text>
          <Image
            src={laptopMock}
            alt="" />
          <span tabIndex={-1} id='features' className={styles.scrollto}></span>
          <Text fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }} align="center">Your <Text as="span" bgClip="text" bgGradient="linear(to-br, #FF6752, #FFC021)">Plus Page</Text></Text>
          <Grid templateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }} gap="8" w="full" maxW="container.lg">
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon1} alt="" /><Text fontSize="xl" fontWeight="bold">Simple</Text><Text align="center">Simply register and add personal information, we&rsquo;ll take care of the rest.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon2} alt="" /><Text fontSize="xl" fontWeight="bold">Personalised</Text><Text align="center">Make it your own by choosing a colour scheme and background of your choice.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon3} alt="" /><Text fontSize="xl" fontWeight="bold">Contact Form</Text><Text align="center">Reel in your dream clients by making communication simple and hassle-free.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon4} alt="" /><Text fontSize="xl" fontWeight="bold">About You</Text><Text align="center">Let your best qualities and talents shine in your About Me section.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon5} alt="" /><Text fontSize="xl" fontWeight="bold">Portfolio</Text><Text align="center">Showcase images of your past work, so clients can see your skills straight away.</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon6} alt="" /><Text fontSize="xl" fontWeight="bold">Social Media</Text><Text align="center">Show off your full digital presence by adding links to all your social media profiles in one place.</Text></Flex>
          </Grid>
        </Flex>
      </Container>
      <Container maxW="90rem" p={{ base: '8', lg: '16' }}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 400px' }} gap={{ base: '8', lg: '24' }} w="full">
            <Flex direction="column" gap="4" p="4">
              <Text fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>All you need for a <Text as="span" bgClip="text" bgGradient="linear(to-r, #FF4D61, #FFB229)" filter="auto" brightness="90%">fraction of the price.</Text></Text>
              <Text>Even a small website could cost £1000+ to design and build, customising it to have interactive elements can quickly double the initial budget.</Text>
              <Text>On top of that, you can expect to pay £600+ per year to maintain it. <em>Yikes!</em></Text>
              <Text>Plus Pages covers everything from only £99 per year or £249 for a lifetime subscription.</Text>
              <Text fontSize="xs">*All price estimations were made on average service prices in the UK.</Text>
            </Flex>
            <Flex h="full" direction="column" justifyContent="space-around" w="full">
              <Flex direction="column" gap="2" p="4" borderRadius="8" boxShadow="lg" backgroundColor="black" color="white" maxW="350px" w="full" marginInline="auto">
                <Text align="center" fontSize="lg" fontWeight="bold">Average Website Cost</Text>
                <Flex alignItems="center">
                  <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                  <Text as="span">Hosting</Text>
                  <Spacer />
                  <Text>£180/year</Text>
                </Flex>
                <Flex alignItems="center">
                  <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                  <Text as="span">Domain Name</Text>
                  <Spacer />
                  <Text>£20/year</Text>
                </Flex>
                <Flex alignItems="center">
                  <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                  <Text as="span">Development</Text>
                  <Spacer />
                  <Text>£1500</Text>
                </Flex>
                <Flex alignItems="center">
                  <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                  <Text as="span">Website Designer</Text>
                  <Spacer />
                  <Text>£1000</Text>
                </Flex>
                <Flex alignItems="center">
                  <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                  <Text as="span">SEO Optimisation</Text>
                  <Spacer />
                  <Text>£500</Text>
                </Flex>
                <Flex alignItems="center">
                  <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
                  <Text as="span">Maintenance</Text>
                  <Spacer />
                  <Text>£600/year</Text>
                </Flex>
                <Spacer />
                <Flex alignItems="center">
                  <Text as="span" fontSize="lg" fontWeight="semibold">Total:</Text>
                  <Spacer />
                  <Text fontWeight="bold" fontSize="2xl" bgClip="text" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" filter="auto">£3000 + £800/year</Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
          <Text fontWeight="bold" fontSize='xl' mt="4">With plus.page you can
          <Text as="span" bgClip="text" bgGradient="linear(to-r, #FF4D61, #FFB229)" filter="auto" brightness="90%"> easily save </Text>
          up to
          <Text as="span" bgClip="text" bgGradient="linear(to-b, #FF4D61, #FFB229)" filter="auto" brightness="90%"> £3000 </Text>
          upfront and over
          <Text as="span" bgClip="text" bgGradient="linear(to-bl, #FF4D61, #FFB229)" filter="auto" brightness="90%"> £700 </Text>
          annually
          </Text>
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
