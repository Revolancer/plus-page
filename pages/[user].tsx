import { GetServerSideProps } from 'next'
import { Box } from '@chakra-ui/react'

interface User {
  name?: String
  slug: String
  hasPlus: Boolean
}

const getUser = async (username: string): Promise<User | null> => {
  const apiEndpoint: string = 'https://2c2cbe6f-ebbf-4aa3-8e0f-418f40523bd7.mock.pstmn.io/users/'
  const url = apiEndpoint + username
  const response = await fetch(url)
  let body = { exists: false }
  try {
    body = await response.json()
  } catch (e) {
    return null
  }
  console.log(body)

  if (!(body?.exists)) {
    return null
  }

  return {
    slug: username,
    hasPlus: body?.plus as Boolean
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=3000'
  )

  const username = context.params?.user as string

  const user = await getUser(username)
  return {
    props: { user } // will be passed to the page component as props
  }
}

const UserProfile = ({ user }: { user?: User }): JSX.Element => {
  return (
    <Box>
      User {user?.slug}
      {
        ((user?.hasPlus) === true) &&
        <span> with Revolancer Plus</span>
      }
    </Box>
  )
}

export default UserProfile
