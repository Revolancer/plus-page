import { Button, Spacer } from '@chakra-ui/react'
import Link from '../link'

function DesktopNav (modal: any): JSX.Element {
  return (
    <>
      <Link href='#features'>
        Features
      </Link>
      <Link href='#pricing'>
        Pricing
      </Link>
      <Spacer />
      <Button
        onClick={modal.onOpen}
        bgGradient='linear(to-tl, rvyellow, rvmagenta)'
        _focus={{
          bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
          filter: 'auto',
          brightness: '120%'
        }}
        _active={{
          bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
          filter: 'auto',
          brightness: '120%'
        }}
        _hover={{
          bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
          filter: 'auto',
          brightness: '120%'
        }}
      >
        Get Started
      </Button>
    </>
  )
}

export default DesktopNav
