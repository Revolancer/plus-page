import { Box, useDisclosure } from '@chakra-ui/react'
import { User } from '../../pages/[user]'
import TabbedLayout from './layout/tabbed'

export interface UserProfileProps {
  user: User
  modal: any
}

export default function UserProfile ({ user }: { user: User }): JSX.Element {
  let ProfileLayout: ({ user, modal }: UserProfileProps) => JSX.Element

  switch (user.layout) {
    case 'tabs':
    default:
      ProfileLayout = TabbedLayout
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

  const contactModal = useDisclosure()

  if (typeof document !== 'undefined') {
    document.body.dataset.theme = user.colorScheme
  }

  return (
    <Box data-theme={user.colorScheme}>
      <ProfileLayout user={user} modal={contactModal} />
    </Box>
  )
}
