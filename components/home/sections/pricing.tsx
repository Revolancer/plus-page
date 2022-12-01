import { Container, Grid, Flex, Heading, Text, Box, Spacer, Divider, Button, UseDisclosureReturn, Switch, Stack } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { FaCheck } from 'react-icons/fa'

let theStyles: { [key: string]: any }

function togglePricing (e: ChangeEvent<HTMLInputElement>): void {
  const pricelabel = document.getElementById(theStyles.priceLabel)
  const periodlabel = document.getElementById(theStyles.periodLabel)
  const upselllabel = document.getElementById(theStyles.upsellLabel)
  const billedatlabel = document.getElementById(theStyles.billedAtLabel)

  if (!(pricelabel instanceof HTMLElement) ||
      !(periodlabel instanceof HTMLElement) ||
      !(upselllabel instanceof HTMLElement) ||
      !(billedatlabel instanceof HTMLElement)) {
    return
  }

  const useAnnual = e.target.checked

  if (useAnnual) {
    pricelabel.innerText = '8.25'
    periodlabel.innerText = 'Annual'
    billedatlabel.innerText = 'Billed at £99 annually'
    upselllabel.style.visibility = 'hidden'
    upselllabel.style.opacity = '0'
    upselllabel.style.maxHeight = '0'
  } else {
    pricelabel.innerText = '20'
    periodlabel.innerText = 'Monthly'
    billedatlabel.innerText = 'Billed at £20 monthly'
    upselllabel.style.visibility = 'visible'
    upselllabel.style.opacity = '1'
    upselllabel.style.maxHeight = '1000px'
  }
}

export function SectionPricing ({ styles, registrationModal }: { styles: { [key: string]: any }, registrationModal: UseDisclosureReturn }): JSX.Element {
  theStyles = styles
  console.log(styles)
  return (
    <Container maxW="90rem" p={{ base: '8', lg: '16' }} position="relative" bgColor="whiteAlpha.600">
      <span tabIndex={-1} id='pricing' className={styles.scrollto}></span>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 400px' }} gap={{ base: '8', lg: '24' }} w="full">
        <Flex direction="column" gap="4" p="4">
          <Heading fontWeight="bold" fontSize={{ base: '2xl', lg: '5xl' }}>Plans &amp; Pricing</Heading>
          <Text>
            Get your mini website for as little as £8.25 per month!
          </Text>
          <Text>
            Choose between our Annual and Monthly plans and rest easy as both will cover all your website needs.
          </Text>
          <Text>
          With plus.page, setup is a breeze. Get started in minutes, not hours.
          Let us take care of your online presence, while you focus on what matters most to your business &ndash; your clients.
          </Text>
        </Flex>
        <Flex overflow="hidden" direction="column" p="4" borderRadius="8" boxShadow="lg" backgroundColor="white" w={{ base: '100%', md: '80' }} marginInline="auto">
          <Stack direction="row">
            <Switch colorScheme='orange' onChange={togglePricing} defaultChecked={true} />
            <Text fontWeight="bold" id={styles.periodLabel}>Annual</Text>
          </Stack>
          <Text fontWeight="bold">
            <Text as="span" fontSize="2xl">£</Text><Text as="span" fontSize="2xl" id={styles.priceLabel}>8.25</Text><Text as="span">/month</Text>
          </Text>
          <Text id={styles.billedAtLabel} fontSize="sm">Billed at £99 annually</Text>
          <Text fontWeight="bold" id={styles.upsellLabel} fontSize="sm" textColor="orange.400">Switch to Annual pricing and save 60%</Text>
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
            color="white"
            bgGradient='linear(to-l, rvyellow, rvmagenta)'
            _focus={{
              bgGradient: 'linear(to-l, rvyellow, rvmagenta)',
              filter: 'auto',
              brightness: '85%'
            }}
            _active={{
              bgGradient: 'linear(to-l, rvyellow, rvmagenta)',
              filter: 'auto',
              brightness: '85%'
            }}
            _hover={{
              bgGradient: 'linear(to-l, rvyellow, rvmagenta)',
              filter: 'auto',
              brightness: '85%'
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Grid>
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
