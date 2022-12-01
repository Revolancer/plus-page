import { Container, Grid, Flex, Heading, Text, Box, Spacer, Divider, Button, UseDisclosureReturn } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'

export default function SectionPricing (styles: { [key: string]: any }, registrationModal: UseDisclosureReturn): JSX.Element {
  return (
    <Container maxW="90rem" p={{ base: '8', lg: '16' }} position="relative" bgColor="whiteAlpha.600">
      <span tabIndex={-1} id='pricing' className={styles.scrollto}></span>
      <Flex direction="column" gap="4" p="4">
        <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>Plans &amp; Pricing</Heading>
        <Text size="sm">Get your mini website created in minutes for as little as £99 per year or take advantage of our limited-time-only Lifetime offer!</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={{ base: '4', md: '8' }} maxW="full" w={{ base: '100%', md: 'max' }} marginInline="auto">
          <Flex overflow="hidden" direction="column" p="4" borderRadius="8" boxShadow="lg" backgroundColor="white" w={{ base: '100%', md: '80' }} marginInline="auto">
            <Box w="115%" minH="3" bgGradient="linear(to-r,rvmagenta,rvyellow)" marginInline="-4" marginBlockStart="-4" marginBlockEnd="4" textColor="white">
              <Text casing="uppercase" fontSize="2xl" fontWeight="bold" paddingBlock="2" textAlign="center">
                25% Off
              </Text>
            </Box>
            <Text fontWeight="bold">Standard</Text>
            <Text fontWeight="bold">
              <Text as="span" fontSize="2xl" marginInlineEnd="1"><del>£99</del></Text>
              <Text
                as="span"
                bgClip="text"
                bgGradient="linear(to-bl, rvyellow, rvmagenta)"
                filter="auto"
                brightness="90%"
                fontWeight="bold"
                marginBlockStart="2"
                marginBlockEnd="4"
                fontSize="2xl">
                  £75
                  <Text as="span" fontSize="lg">
                    /year
                  </Text>
                </Text>
              </Text>
            <Divider borderColor="black" borderBottomWidth="2px" marginBlock="4" />
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Choose a colour scheme</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Add your background image</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Link your social media</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Receive messages directly to your inbox</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Access to Revolancer Plus</Text>
            </Flex>
            <Spacer minH="4" />
            <Button
              onClick={registrationModal.onOpen}
              colorScheme="blackAlpha"
              backgroundColor="black"
            >
              Get Started
            </Button>
          </Flex>
          <Flex overflow="hidden" direction="column" p="4" borderRadius="8" boxShadow="lg" backgroundColor="black" color="white" w={{ base: '100%', md: '80' }} marginInline="auto">
            <Box w="115%" minH="3" bgGradient="linear(to-r,rvmagenta,rvyellow)" marginInline="-4" marginBlockStart="-4" marginBlockEnd="4" textColor="white">
              <Text casing="uppercase" fontSize="2xl" fontWeight="bold" paddingBlock="2" textAlign="center">
                50% Off
              </Text>
            </Box>
            <Text fontWeight="bold">Lifetime (limited time only)</Text>
            <Text fontWeight="bold">
              <Text as="span" fontSize="2xl" marginInlineEnd="1"><del>£249</del></Text>
              <Text
                as="span"
                bgClip="text"
                bgGradient="linear(to-bl, rvyellow, rvmagenta)"
                filter="auto"
                brightness="90%"
                fontWeight="bold"
                marginBlockStart="2"
                marginBlockEnd="4"
                fontSize="2xl">
                  £125
                  <Text as="span" fontSize="lg" marginInlineStart="1">
                    for life
                  </Text>
                </Text>
              </Text>
            <Divider borderColor="white" borderBottomWidth="2px" marginBlock="4" />
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Choose a colour scheme</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Add your background image</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Link your social media</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Receive messages directly to your inbox</Text>
            </Flex>
            <Flex gap="2" alignItems="top">
              <Box flexShrink={0} pt="1">
              <FaCheck />
              </Box>
              <Text>Access to Revolancer Plus</Text>
            </Flex>
            <Text bgClip="text" bgGradient="linear(to-bl, rvyellow, rvmagenta)" filter="auto" brightness="90%" fontWeight="bold" marginBlockStart="2" marginBlockEnd="4">One page, one payment for life</Text>
            <Spacer />
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
      <Box w="full" h="full" position="absolute" top={0} left={0} overflow="hidden" zIndex={-1}>
      <Box w="full" h="full" position="absolute" top={0} left={0}
      filter="auto" blur="30px" brightness="110%">
        <Box w="80%" height="100%" position="absolute" top="50%" left="10%" borderRadius="full" backgroundColor="orange.500"
              bgGradient='linear(to-tl, rvyellow, rvmagenta)' />
      </Box>
      </Box>
    </Container>
  )
}
