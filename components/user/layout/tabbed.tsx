import { UserProfileProps } from '../profile'
import Header from './tabbed/header'
import { useRef } from 'react'

import styles from '../../../styles/themes/tabbed.module.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import PortfolioGallery from '../gallery'
import Link from '../../link'
import ContactForm from '../contactform'

export default function TabbedLayout ({ user, modal }: UserProfileProps): JSX.Element {
  const sectionRefs = [
    useRef(null),
    useRef(null)
  ]

  return (
    <>
    <ContactForm modal={modal} styles={styles} user={user} />
    <Box w="full" h="full" backgroundImage={user.backgroundImage} backgroundPosition="top" backgroundSize="cover" backgroundAttachment="fixed" backgroundRepeat="no-repeat">
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
          <section ref={sectionRefs[1]}>
            <>
            <span tabIndex={-1} id="portfolio" className={styles.scrollTo}></span>
            <Heading fontSize="2xl" mb="2">My Portfolio</Heading>
            <PortfolioGallery images={user.portfolio} />
            </>
          </section>
          <Text width="full" align="center" mt="12">
            <Link href="/" fontWeight="semibold">Made with plus.page</Link>
          </Text>
        </Box>
      </Container>
    </Box>
    </>
  )
}
