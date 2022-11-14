import { User } from '../../pages/[user]'
import { updateImageUrl } from '../helpers'

export default function ProfileGraph ({ user }: { user: User }): JSX.Element {
  const avatar = updateImageUrl(user.avatar)
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:image" content={avatar} />
      <meta property="og:title" content={user.name} />
      <meta property="og:description" content={user.about} />
    </>
  )
}
