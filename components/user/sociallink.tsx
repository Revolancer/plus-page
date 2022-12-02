import { IconType } from 'react-icons'
import { Fa500Px, FaBandcamp, FaBehance, FaBloggerB, FaDeviantart, FaFacebook, FaGithubAlt, FaGitlab, FaGlobe, FaInstagram, FaItchIo, FaLinkedinIn, FaPatreon, FaPinterestP, FaRedditAlien, FaSoundcloud, FaTiktok, FaTumblr, FaTwitter, FaUnsplash, FaVimeoV, FaYoutube } from 'react-icons/fa'
import { SocialLink } from '../../pages/[user]'
import Link from '../link'

export default function SocialLinkIcon ({ link }: { link: SocialLink }): JSX.Element {
  // Assign icon for social link
  let Icon: IconType
  switch (link.name) {
    case 'website':
      Icon = FaGlobe
      break
    case 'facebook':
      Icon = FaFacebook
      break
    case 'instagram':
      Icon = FaInstagram
      break
    case 'linkedin':
      Icon = FaLinkedinIn
      break
    case 'behance':
      Icon = FaBehance
      break
    case 'youtube':
      Icon = FaYoutube
      break
    case 'vimeo':
      Icon = FaVimeoV
      break
    case 'tiktok':
      Icon = FaTiktok
      break
    case 'pinterest':
      Icon = FaPinterestP
      break
    case 'tumblr':
      Icon = FaTumblr
      break
    case '500px':
      Icon = Fa500Px
      break
    case 'unsplash':
      Icon = FaUnsplash
      break
    case 'deviantart':
      Icon = FaDeviantart
      break
    case 'github':
      Icon = FaGithubAlt
      break
    case 'gitlab':
      Icon = FaGitlab
      break
    case 'bandcamp':
      Icon = FaBandcamp
      break
    case 'soundcloud':
      Icon = FaSoundcloud
      break
    case 'blogger':
      Icon = FaBloggerB
      break
    case 'itchio':
      Icon = FaItchIo
      break
    case 'patreon':
      Icon = FaPatreon
      break
    case 'reddit':
      Icon = FaRedditAlien
      break
    case 'twitter':
      Icon = FaTwitter
      break
    default:
      Icon = FaGlobe
      break
  }

  return (<Link href={link.url} target="_blank" rel="nofollow" aria-label={link.name}><Icon /></Link>)
}
