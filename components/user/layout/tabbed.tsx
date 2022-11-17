import { UserProfileProps } from '../profile'
import Header from './tabbed/header'
import { useRef } from 'react'

import styles from '../../../styles/themes/tabbed.module.css'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import PortfolioGallery from '../gallery'
import Link from '../../link'
import ContactForm from '../contactform'
import { FaExternalLinkAlt, FaPencilAlt } from 'react-icons/fa'

export default function TabbedLayout ({ user, modal }: UserProfileProps): JSX.Element {
  const sectionRefs = [
    useRef(null),
    useRef(null)
  ]

  return (
    <>
    <ContactForm modal={modal} styles={styles} user={user} />
    <Box w="full" h="full">
      <Header user={user} sectionRefs={sectionRefs} modal={modal} />
      <Container maxW='container.md'>
        <Box className={styles.profileBody}>
          <section ref={sectionRefs[0]}>
            <>
            <span tabIndex={-1} id="about" className={styles.scrollTo}></span>
            <Heading fontSize="2xl" mb="2">About Me</Heading>
            {user.about}
            </>
          </section>
          {user.portfolio.length > 0 &&
          <section ref={sectionRefs[1]}>
            <span tabIndex={-1} id="portfolio" className={styles.scrollTo}></span>
            <Heading fontSize="2xl" mb="2">My Portfolio</Heading>
            <PortfolioGallery images={user.portfolio} max={9} />
          </section>
          }
          <Text width="full" align="center" className={styles.attribution}>
            <Link href="/" fontWeight="semibold">Made with plus.page</Link><br />
            <Link fontSize="xs" href="https://revolancer.com/my-account/settings/plus-page/" target="_blank" rel="nofollow" className={styles.loginEditLink}>Log in to customise <FaExternalLinkAlt style={{ display: 'inline-block' }} /></Link>
          </Text>
        </Box>
      </Container>
    </Box>
    <Box position="fixed" top={0} left={0} width="100vw" height="100vh" zIndex="-1" overflow="hidden">
      <Box position="fixed" top="-10vh" left="-10vw" width="120vw" height="120vh" backgroundImage={user.backgroundImage} backgroundPosition="top" backgroundSize="cover" backgroundAttachment="scroll" backgroundRepeat="no-repeat"></Box>
    </Box>
    <Link href="https://revolancer.com/my-account/settings/plus-page/" target="_blank">
    <Button position="fixed" bottom="4" left="4" className={styles.editButton} leftIcon={<FaPencilAlt />}>Customise</Button>
    </Link>
    </>
  )
}
