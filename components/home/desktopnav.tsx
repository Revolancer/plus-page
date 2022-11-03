import { Button, Spacer } from '@chakra-ui/react'
import Link from '../link'

function DesktopNav (modal: any): JSX.Element {
  return (
    <>
      <Link href='#features' className="smooth-scroll">
        Features
      </Link>
      <Link href='#pricing' className="smooth-scroll">
        Pricing
      </Link>
      <Spacer />
      <Button
        onClick={modal.onOpen}
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
      >
        Get Started
      </Button>
    </>
  )
}

export default DesktopNav
