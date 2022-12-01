import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Button,
  MenuItem
} from '@chakra-ui/react'

import { FaBars } from 'react-icons/fa'
import Link from '../link'

export function MobileNav (modal: any): JSX.Element {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Navigation'
        icon={<FaBars />}
        variant='outline'
        bgColor='black'
        _active={{
          bgColor: 'whiteAlpha.400'
        }}
        _focus={{
          bgColor: 'black'
        }}
        _hover={{
          bgColor: 'whiteAlpha.400'
        }}
      />
      <MenuList
        bgColor='black'
      >
        <Link href='#features'>
          <MenuItem
            _focus={{
              bgColor: 'black'
            }}
            _hover={{
              bgColor: 'whiteAlpha.400'
            }}
          >
            Features
          </MenuItem>
        </Link>
        <Link href='#pricing'>
          <MenuItem
            _focus={{
              bgColor: 'black'
            }}
            _hover={{
              bgColor: 'whiteAlpha.400'
            }}
          >
            Plans &amp; Pricing
          </MenuItem>
        </Link>
        <Link href='#faq'>
          <MenuItem
            _focus={{
              bgColor: 'black'
            }}
            _hover={{
              bgColor: 'whiteAlpha.400'
            }}
          >
            FAQs
          </MenuItem>
        </Link>
        <Link href='https://revolancer.com/login/' target="_blank">
          <MenuItem
            _focus={{
              bgColor: 'black'
            }}
            _hover={{
              bgColor: 'whiteAlpha.400'
            }}
          >
            Log in
          </MenuItem>
        </Link>
        <MenuItem as={Button}
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
          marginInline="3"
          marginBlock="1.5"
          w="max"
        >
          Get Started
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
