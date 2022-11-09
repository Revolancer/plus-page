import { Box } from '@chakra-ui/react'
import { User } from '../../pages/[user]'
import TabbedLayout from './layout/tabbed'

export interface UserProfileProps {
  user: User
}

export default function UserProfile ({ user }: UserProfileProps): JSX.Element {
  let ProfileLayout: ({ user }: UserProfileProps) => JSX.Element

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

  return (
    <Box data-theme={user.colorScheme}>
      <ProfileLayout user={user} />
    </Box>
  )
}
