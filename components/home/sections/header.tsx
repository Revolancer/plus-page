import { Box, Container, Flex, Spacer } from '@chakra-ui/react'
import { DesktopNav } from '../desktopnav'
import { MobileNav } from '../mobilenav'
import { RegistrationForm } from '../registerform'
import Logo from '../../logo'

export function Header (registrationModal: any): JSX.Element {
  return (
    <>
      <RegistrationForm {...registrationModal} />
      <Box color="white" backgroundColor="black" p="8" position="sticky" top="0" zIndex="5">
        <Container maxW='110rem'>
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
    </>
  )
}
