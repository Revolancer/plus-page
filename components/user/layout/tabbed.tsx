import { UserProfileProps } from '../profile'
import Header from './tabbed/header'

export default function TabbedLayout ({ user }: UserProfileProps): JSX.Element {
  return (
    <>
    <Header user={user} />
    </>
  )
}
