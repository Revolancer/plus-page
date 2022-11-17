import { UserProfileProps } from '../profile'
import Header from './free/header'
import { useRef } from 'react'

import styles from '../../../styles/themes/free.module.css'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import PortfolioGallery from '../gallery'
import Link from '../../link'
import { FaEnvelope, FaExternalLinkAlt, FaPencilAlt } from 'react-icons/fa'
import { User } from '../../../pages/[user]'

let thisUser: User

function contactPressed (): void {
  if (typeof window !== 'undefined') {
    window.location.href = `https://revolancer.com/project-request/?ref=${thisUser.slug}`
  }
}

export default function FreeLayout ({ user, modal }: UserProfileProps): JSX.Element {
  thisUser = user

  const sectionRefs = [
    useRef(null),
    useRef(null)
  ]

  return (
    <>
    <Box w="full" h="full">
      <Header user={user} sectionRefs={sectionRefs} modal={modal} />
      <Container maxW='container.md'>
        <Box className={styles.profileBody}>
          {user.about.length > 0 &&
          <section ref={sectionRefs[0]}>
            <>
            <span tabIndex={-1} id="about" className={styles.scrollTo}></span>
            <Heading fontSize="2xl" mb="2">About Me</Heading>
            {user.about}
            </>
          </section>
          }
          {user.portfolio.length > 0 &&
          <section ref={sectionRefs[1]}>
            <span tabIndex={-1} id="portfolio" className={styles.scrollTo}></span>
            <Heading fontSize="2xl" mb="2">My Portfolio</Heading>
            <PortfolioGallery images={user.portfolio} max={3} />
          </section>
          }
          <Text width="full" align="center" className={styles.attribution}>
            <Button
              onClick={contactPressed}
              className={styles.contactButton}
              leftIcon={<FaEnvelope />}
              size={{ base: 'xs', md: 'sm' }}
              w="max"
            >
              Request a project
            </Button> <br /><br />
            <Link href="/" fontWeight="semibold">Want a website like this? Claim your <strong>plus.page</strong> today!</Link><br />
            <Link href={`https://revolancer.com/?ref=${user.slug}`} fontWeight="semibold">Made by <strong>Revo</strong><Text as="span" fontWeight="light">lancer</Text></Link><br />
            <Link fontSize="xs" href="https://revolancer.com/my-account/settings/plus-page/" target="_blank" rel="nofollow" className={styles.loginEditLink}>Log in to customise <FaExternalLinkAlt style={{ display: 'inline-block' }} /></Link>
          </Text>
        </Box>
      </Container>
    </Box>
    <Box position="fixed" top={0} left={0} width="100vw" height="100vh" zIndex="-1" overflow="hidden">
      <Box position="fixed" top="-10vh" left="-10vw" width="120vw" height="120vh" backgroundColor="rvnavy" backgroundImage="/assets/free/background.png" backgroundPosition="top" backgroundSize="cover" backgroundAttachment="scroll" backgroundRepeat="no-repeat"></Box>
    </Box>
    <Link href="https://revolancer.com/my-account/settings/plus-page/" target="_blank">
    <Button position="fixed" bottom="4" left="4" className={styles.editButton} leftIcon={<FaPencilAlt />}>Customise</Button>
    </Link>
    </>
  )
}
