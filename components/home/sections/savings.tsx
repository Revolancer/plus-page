import { Container, Grid, Flex, Heading, Text, Box, Spacer } from '@chakra-ui/react'

export function SectionSavings (): JSX.Element {
  return (
    <Container maxW="90rem" p={{ base: '8', lg: '16' }}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 400px' }} gap={{ base: '8', lg: '24' }} w="full">
        <Flex direction="column" gap="4" p="4">
          <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>All you need for a <Text as="span" bgClip="text" bgGradient="linear(to-r, #FF4D61, #FFB229)" filter="auto" brightness="90%">fraction of the price.</Text></Heading>
          <Text>Even a small website could cost £1000+ to design and build, customising it to have interactive elements can quickly double the initial budget.</Text>
          <Text>On top of that, you can expect to pay £800+ per year to maintain it. <em>Yikes!</em></Text>
          <Text>plus.page covers everything from only £8.25 per month!</Text>
          <Text fontSize="xs">*All price estimations were made on average service prices in the UK.</Text>
        </Flex>
        <Flex h="full" direction="column" justifyContent="space-around" w="full">
          <Flex direction="column" gap="2" p="4" borderRadius="8" boxShadow="lg" backgroundColor="black" color="white" maxW="350px" w="full" marginInline="auto">
            <Text align="center" fontSize="lg" fontWeight="bold">Average Website Cost</Text>
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
              <Text>£50/month</Text>
            </Flex>
            <Flex alignItems="center">
              <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
              <Text as="span">Hosting</Text>
              <Spacer />
              <Text>£20/month</Text>
            </Flex>
            <Flex alignItems="center">
              <Box w="4" h="4" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" display="inline-block" m="2" borderRadius="4"></Box>
              <Text as="span">Domain Name</Text>
              <Spacer />
              <Text>£2/month</Text>
            </Flex>
            <Spacer />
            <Flex alignItems="center">
              <Text as="span" fontSize="lg" fontWeight="semibold">Total:</Text>
              <Spacer />
              <Text textAlign="right" fontWeight="bold" fontSize="2xl" bgClip="text" bgGradient="linear(to-br, #FF4D61, #FFB229)" bgColor="orange.500" filter="auto">£3000 upfront + £<Text as="span" id="competitorPricingMonthly" data-value="72">72</Text><Text as="span" fontSize="md">/month</Text></Text>
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
  )
}
