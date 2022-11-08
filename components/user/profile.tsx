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

  return (
    <ProfileLayout user={user} />
  )
}
