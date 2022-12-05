import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { unescapeHTML } from '../components/helpers'
import UserProfile from '../components/user/profile'

export interface SocialLink {
  name: string
  url: string
}

export interface CustomLink {
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
  links: CustomLink[]
  layout: string
}

const getUser = async (username: string): Promise<User | null> => {
  const apiEndpoint: string = (process.env.NEXT_PUBLIC_PAGES_API_HOST as string) + '/user/'
  const url = apiEndpoint + username
  let body: { [key: string]: any } = { exists: false }
  try {
    const response = await fetch(url)
    body = await response.json()
  } catch (e) {
    return null
  }

  if (!(body.exists as boolean)) {
    return null
  }

  if (!(body.enabled as boolean)) {
    return null
  }

  const user: User = {
    slug: username,
    hasPlus: body.plus === true,
    portfolio: body.folio,
    avatar: body.avatar,
    backgroundImage: body.bgImage,
    colorScheme: body.colourScheme,
    about: body.desc,
    socials: body.socials,
    links: body.customLinks,
    name: body.displayName,
    tagline: body.tagLine,
    layout: body.layout
  }

  if (!Array.isArray(user.portfolio)) {
    user.portfolio = []
  }

  if (typeof user.avatar !== 'string' || user.avatar === '') {
    user.avatar = 'https://revolancer.com/data/themes/topwork/assets/images/avatar-placeholder.png'
  }

  if (typeof user.backgroundImage !== 'string' || user.backgroundImage === '') {
    user.backgroundImage = '/assets/free/background.png'
  }

  if (typeof user.colorScheme !== 'string' || user.colorScheme === '') {
    user.colorScheme = 'gray'
  }

  if (typeof user.about !== 'string') {
    user.about = ''
  }

  if (!Array.isArray(user.socials)) {
    user.socials = []
  }

  if (!Array.isArray(user.links)) {
    user.links = []
  }

  if (typeof user.name !== 'string' || user.name === '') {
    user.name = username
  }

  if (typeof user.tagline !== 'string') {
    user.tagline = ''
  }

  if (typeof user.layout !== 'string' || user.layout === '') {
    user.layout = 'tabbed'
  }

  user.about = user.about.replace(/(<([^>]+)>)/gi, '')

  user.about = unescapeHTML(user.about)
  user.name = unescapeHTML(user.name)
  user.tagline = unescapeHTML(user.tagline)

  return user
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=86400'
  )

  const username = params?.user as string

  const user = await getUser(username)
  if (user === null) {
    return {
      notFound: true
    }
  }
  return {
    props: { user } // will be passed to the page component as props
  }
}

const UserPage = ({ user }: { user: User | null }): JSX.Element => {
  return (
    <>
      {(user != null) &&
      <>
      <Head>
        <title>{user.name}</title>
        <meta name="description" content={user.about} />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:image" property="og:image" content={user.avatar} />
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
