import { Box } from '@chakra-ui/react'
import { User } from '../../pages/[user]'
import FreeLayout from './layout/free'
import TabbedLayout from './layout/tabbed'

import { setCookie } from 'cookies-next'
import FourOhFourLayout from './layout/fourohfour'

export interface UserProfileProps {
  user: User
}

export default function UserProfile ({ user }: UserProfileProps): JSX.Element {
  let ProfileLayout: (props: UserProfileProps) => JSX.Element

  switch (user.layout) {
    case 'fourohfour':
      ProfileLayout = FourOhFourLayout
      break
    case 'tabbed':
    default:
      ProfileLayout = TabbedLayout
  }

  if (!user.hasPlus) {
    ProfileLayout = FreeLayout
    user.colorScheme = 'gray'
  }

  switch (user.colorScheme) {
    case 'gray':
      break
    case 'red':
      break
    case 'orange':
      break
    case 'yellow':
      break
    case 'green':
      break
    case 'teal':
      break
    case 'blue':
      break
    case 'cyan':
      break
    case 'purple':
      break
    case 'pink':
      break
    default:
      user.colorScheme = 'gray'
  }

  if (typeof document !== 'undefined') {
    document.body.dataset.theme = user.colorScheme
  }

  setCookie('referrer', user.slug)

  return (
    <Box data-theme={user.colorScheme}>
      <ProfileLayout user={user} />
    </Box>
  )
}
