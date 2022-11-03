import { Box, Container, Flex, Grid, Text, useDisclosure } from '@chakra-ui/react'
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
        <a id='features' className={styles.scrollto}></a>
        <Flex direction="column" gap={{ base: '8', lg: '20' }} alignItems="center">
          <Text fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }} align="center">Create your online home <Text as="span" bgClip="text" bgGradient="linear(to-br, orange.500, yellow.400)">for life.</Text></Text>
          <Text align="center">Pizza time is here</Text>
          <Image
            src={laptopMock}
            alt="" />
          <Grid templateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }} gap="8">
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon1} alt="" /><Text fontSize="xl" fontWeight="bold">Simplicity</Text><Text align="center">Pizza time is here</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon2} alt="" /><Text fontSize="xl" fontWeight="bold">Personalisation</Text><Text align="center">Pizza time is here</Text></Flex>
            <Flex direction="column" alignItems="center" gap="4"><Image src={featIcon3} alt="" /><Text fontSize="xl" fontWeight="bold">Link-in-bio</Text><Text align="center">Pizza time is here</Text></Flex>
          </Grid>
        </Flex>
      </Container>
    </Box>
    </>
  )
}
