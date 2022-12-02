import { UserProfileProps } from '../profile'
import Header from './fourohfour/header'
import { useRef } from 'react'

import styles from '../../../styles/themes/fourohfour.module.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import PortfolioGallery from '../gallery'
import Link from '../../link'
import NotExist from './fourohfour/notexist'

export default function FourOhFourLayout ({ user }: UserProfileProps): JSX.Element {
  const sectionRefs = [
    useRef(null),
    useRef(null)
  ]

  return (
    <>
    <Box w="full" h="full">
      <Header user={user} sectionRefs={sectionRefs} />
      <Container maxW='container.md'>
        <Box className={styles.profileBody}>
          <section ref={sectionRefs[0]}>
          <NotExist slug={user.slug} />
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
          </Text>
        </Box>
      </Container>
    </Box>
    <Box position="fixed" top={0} left={0} width="100vw" height="100vh" zIndex="-1" overflow="hidden">
      <Box position="fixed" top="-10vh" left="-10vw" width="120vw" height="120vh" backgroundImage={user.backgroundImage} backgroundPosition="top" backgroundSize="cover" backgroundAttachment="scroll" backgroundRepeat="no-repeat"></Box>
    </Box>
    </>
  )
}
