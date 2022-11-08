import { User } from '../../pages/[user]'

export interface UserProfileProps {
  user: User
}

export default function UserProfile ({ user }: UserProfileProps): JSX.Element {
  return (
    <>{user?.slug}</>
  )
}
