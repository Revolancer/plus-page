import { useRouter } from 'next/router'

const UserProfile = (): JSX.Element => {
  const router = useRouter()
  const { user } = router.query

  return <p>User: {user}</p>
}

export default UserProfile
