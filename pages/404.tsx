import Head from 'next/head'
import UserProfile from '../components/user/profile'
import { User } from './[user]'

const get404User = (path: string): User => {
  const user: User = {
    slug: path,
    hasPlus: true,
    portfolio: [
      'https://revolancer.com/media/2022/12/404.jpg',
      'https://revolancer.com/media/2022/12/404-2.png',
      'https://revolancer.com/media/2022/12/404-3.jpg',
      'https://revolancer.com/media/2022/12/404-7.jpg',
      'https://revolancer.com/media/2022/12/404-5.jpg',
      'https://revolancer.com/media/2022/12/404-6.jpg'
    ],
    avatar: 'https://revolancer.com/media/2022/12/404-pfp.jpg',
    backgroundImage: 'https://revolancer.com/media/2022/12/404-bg.jpg',
    colorScheme: 'gray',
    about: '',
    socials: [
      { name: 'tiktok', url: 'https://www.tiktok.com/@revolancer' },
      { name: 'instagram', url: 'https://www.instagram.com/revolancer/' },
      { name: 'youtube', url: 'https://www.youtube.com/@revolancerhq' },
      { name: 'facebook', url: 'https://www.facebook.com/revolancercom' },
      { name: 'twitter', url: 'https://twitter.com/revolancercom' },
      { name: 'linkedin', url: 'https://uk.linkedin.com/company/revolancer' }
    ],
    links: [],
    name: 'Error 404',
    tagline: 'Page not found',
    layout: 'fourohfour'
  }

  return user
}

const UserPage = (): JSX.Element => {
  const user = get404User('/404')

  return (
    <>
      <Head>
        <title>This plus.page could be yours!</title>
      </Head>
      <UserProfile user={user} />
    </>
  )
}

export default UserPage
