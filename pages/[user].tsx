import { GetServerSideProps } from 'next'
import UserProfile from '../components/user/profile'

export interface SocialLink {
  name: string
  url: string
}

export interface User {
  name: string
  slug: string
  hasPlus: boolean
  portfolio: string[]
  avatar: string
  backgroundImage: string
  colorScheme: string
  about: string
  socials: SocialLink[]
  layout: string
}

const getUser = async (username: string): Promise<User | null> => {
  const apiEndpoint: string = (process.env.NEXT_PUBLIC_PAGES_API_HOST as string) + '/users/'
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

  const user: User = {
    slug: username,
    hasPlus: body.plus,
    portfolio: body.portfolio,
    avatar: body.avatar,
    backgroundImage: body.background,
    colorScheme: body.colourScheme,
    about: body.description,
    socials: body.socials,
    name: body.displayName,
    layout: body.layout
  }

  if (typeof user.hasPlus === 'undefined') {
    user.hasPlus = false
  }

  if (typeof user.portfolio === 'undefined') {
    user.portfolio = []
  }

  if (typeof user.avatar === 'undefined') {
    user.avatar = ''
  }

  if (typeof user.backgroundImage === 'undefined') {
    user.backgroundImage = ''
  }

  if (typeof user.colorScheme === 'undefined') {
    user.colorScheme = ''
  }

  if (typeof user.about === 'undefined') {
    user.about = ''
  }

  if (typeof user.socials === 'undefined') {
    user.socials = []
  }

  if (typeof user.name === 'undefined') {
    user.name = username
  }

  if (typeof user.layout === 'undefined') {
    user.layout = 'advanced'
  }

  return user
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

const UserPage = ({ user }: { user: User | null }): JSX.Element => {
  return (
    <>
      {(user != null) &&
      <UserProfile user={user} />
      }
    </>
  )
}

export default UserPage
