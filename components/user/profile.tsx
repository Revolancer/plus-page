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
    case 'blue':
      break
    case 'purple':
      break
    case 'red':
    default:
      user.colorScheme = 'red'
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
