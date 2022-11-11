import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Link from '../link'
import Logo from '../logo'

export default function Footer (): JSX.Element {
  return (
    <>
      <Box color="white" backgroundColor="black" paddingInline="8" paddingBlock="20" zIndex="5">
        <Container maxW='110rem'>
          <Flex gap='8' direction="column">
            <Box w="max">
            <Logo />
            </Box>
            <Flex gap={{ base: '2', md: '8' }} direction={{ base: 'column', md: 'row' }} flexWrap="wrap">
              <Link href='#features' className="smooth-scroll">
                Features
              </Link>
              <Link href='#pricing' className="smooth-scroll">
                Plans &amp; Pricing
              </Link>
              <Link href='#faq' className="smooth-scroll">
                FAQs
              </Link>
              <Link href='https://revolancer.com/terms-and-conditions/?utm_source=plus_page&utm_medium=landing_page&utm_campaign=landing_page'>
                Terms
              </Link>
              <Link href='https://revolancer.com/impressum/?utm_source=plus_page&utm_medium=landing_page&utm_campaign=landing_page'>
                Impressum
              </Link>
              <Link href='https://revolancer.com/?utm_source=plus_page&utm_medium=landing_page&utm_campaign=landing_page'>
                Revolancer
              </Link>
            </Flex>
            <Text color="whiteAlpha.600">&copy; {new Date().getFullYear()} Revolancer Ltd</Text>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
