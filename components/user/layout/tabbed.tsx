import { UserProfileProps } from '../profile'

export default function TabbedLayout ({ user }: UserProfileProps): JSX.Element {
  return (
    <>{user?.slug}</>
  )
}
