import { Box, Container, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
import DesktopNav from '../components/home/desktopnav'
import MobileNav from '../components/home/mobilenav'
import RegistrationForm from '../components/home/registerform'
import Logo from '../components/logo'

export default function Home (): JSX.Element {
  const registrationModal = useDisclosure()

  return (
    <>
    <RegistrationForm {...registrationModal} />
    <Box color="black" backgroundColor="white" minW="100vw" minH="100vh">
      <Box color="white" backgroundColor="black" p="8">
        <Container maxW='container.xl'>
          <Flex alignItems='baseline' gap='8'>
            <Logo />
            <Flex alignItems="end" display={{ base: 'none', lg: 'flex' }} gap='8' grow='1'>
              <DesktopNav {...registrationModal} />
            </Flex>
            <Spacer display={{ base: 'block', lg: 'none' }} />
            <Box display={{ base: 'block', lg: 'none' }}>
              <MobileNav {...registrationModal} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
    </>
  )
}
