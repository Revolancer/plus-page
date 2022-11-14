import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { updateImageUrl } from '../components/helpers'
import UserProfile from '../components/user/profile'

export interface SocialLink {
  name: string
  url: string
}

export interface User {
  name: string
  tagline: string
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
  const apiEndpoint: string = (process.env.NEXT_PUBLIC_PAGES_API_HOST as string) + '/user/'
  const url = apiEndpoint + username
  let body: any = { exists: false }
  try {
    const response = await fetch(url)
    body = await response.json()
  } catch (e) {
    return null
  }

  if (!(body.exists as boolean)) {
    return null
  }

  const user: User = {
    slug: username,
    hasPlus: body.plus,
    portfolio: body.folio,
    avatar: body.avatar,
    backgroundImage: body.bgImage,
    colorScheme: body.colourScheme,
    about: body.desc,
    socials: body.socials,
    name: body.displayName,
    tagline: body.tagLine,
    layout: body.layout
  }

  console.log(body)

  if (typeof user.hasPlus === 'undefined') {
    user.hasPlus = false
  }

  if (typeof user.portfolio === 'undefined') {
    user.portfolio = []
  }

  if (typeof user.avatar === 'undefined') {
    user.avatar = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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

  if (!Array.isArray(user.socials)) {
    user.socials = []
  }

  if (typeof user.name === 'undefined' || user.name === '') {
    user.name = username
  }

  if (typeof user.tagline === 'undefined') {
    user.tagline = ''
  }

  if (typeof user.layout === 'undefined') {
    user.layout = 'advanced'
  }

  user.about = user.about.replace(/<br\s*[/]?>/gi, '\n')

  return user
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  /* res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=86400'
  ) */

  const username = params?.user as string

  const user = await getUser(username)
  return {
    props: { user } // will be passed to the page component as props
  }
}

const UserPage = ({ user }: { user: User | null }): JSX.Element => {
  if (user === null || !user.hasPlus) {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  let avatar = ''

  if (user != null) {
    avatar = updateImageUrl(user.avatar)
  }
  return (
    <>
      {(user != null) &&
      <>
      <Head>
        <title>{user.name}</title>
        <meta name="description" content={user.about} />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:image" property="og:image" content={avatar} />
        <meta name="og:title" property="og:title" content={user.name} />
        <meta name="og:description" property="og:description" content={user.about} />
      </Head>
      <UserProfile user={user} />
      </>
      }
    </>
  )
}

export default UserPage
