import { GetServerSideProps } from 'next'
import { Box } from '@chakra-ui/react'

interface User {
  name?: string
  slug: string
  hasPlus: boolean
}

const getUser = async (username: string): Promise<User | null> => {
  const apiEndpoint: string = (process.env.PAGES_API_HOST as string) + '/users/'
  const url = apiEndpoint + username
  const response = await fetch(url)
  let body: any = { exists: false }
  try {
    body = await response.json()
  } catch (e) {
    return null
  }
  console.log(body)

  if (!(body.exists as boolean)) {
    return null
  }

  return {
    slug: username,
    hasPlus: body?.plus as boolean
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
        (user?.hasPlus as boolean) &&
        <span> with Revolancer Plus</span>
      }
    </Box>
  )
}

export default UserProfile
