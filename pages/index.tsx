import { Box, Button, Container, Flex, Grid, Heading, Text, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Hero, Header, Footer, SectionSavings, SectionPricing } from '../components/home'

import laptopMock from '../public/assets/home/laptopmock2.png'
import phoneFooter from '../public/assets/home/phonemock3.png'
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
      <title>plus.page by Revolancer - Claim your mini website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Claim your mini website with plus.page by Revolancer today - ideal for freelancers, digital professionals, and those looking to get found online." />
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
          <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }} textAlign="center">Your <Text as="span" bgClip="text" bgGradient="linear(to-br, #FF6752, #FFC021)">Plus Page</Text></Heading>

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
      <SectionSavings />
      <SectionPricing styles={styles} registrationModal={registrationModal} />
      <Box w="full" minH="3" bgGradient="linear(to-r,rvmagenta,rvyellow)">
      </Box>
      <Container maxW="90rem" p={{ base: '8', lg: '16' }}>
        <Flex direction="column" gap="4">
          <span tabIndex={-1} id='faq' className={styles.scrollto}></span>
          <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>FAQs</Heading>
          <Text fontSize="lg" fontWeight="bold">Do I need to pay for hosting?</Text>
          <Text>No, you don’t. It’s already included in the plan you’ve subscribed to -  £99 per year or £249 for lifetime</Text>
          <Text fontSize="lg" fontWeight="bold">Is it easy to set up my plus.page?</Text>
          <Text>Absolutely! Simply fill out the information in your Revolancer account and we’ll handle the rest.</Text>
          <Text fontSize="lg" fontWeight="bold">Is my plus.page SEO optimised?</Text>
          <Text>Yes, it is! We made sure to follow the best SEO practices so your website will be easy to find.</Text>
        </Flex>
      </Container>
      <Box w="full" bgColor="blackAlpha.900" color="white">
        <Container maxW="90rem" paddingInline={{ base: '8', lg: '16' }}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }} gap="8" w="full">
            <Flex direction="column" gap="4" paddingBlock="8" justifyContent={{ md: 'center' }} h={{ md: 'full' }}>
              <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>Claim your mini website now</Heading>
              <Text>Everything you need in one simple page.</Text>
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
                mt="4"
                w="max"
              >
                Get Started
              </Button>
            </Flex>
            <Image
              src={phoneFooter}
              alt="" />
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
    </>
  )
}
