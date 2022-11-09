import { UserProfileProps } from '../profile'
import Header from './tabbed/header'
import { useRef } from 'react'

import styles from '../../../styles/themes/tabbed.module.css'
import { Box, Container } from '@chakra-ui/react'

export default function TabbedLayout ({ user }: UserProfileProps): JSX.Element {
  const sectionRefs = [
    useRef(null),
    useRef(null)
  ]

  return (
    <>
    <Header user={user} sectionRefs={sectionRefs} />
      <Container maxW='container.md'>
        <Box className={styles.profileBody}>
      <section ref={sectionRefs[0]}>
        <>
        <a id="about" className={styles.scrollTo} />
        {user.about}
        </>
      </section>
      <section ref={sectionRefs[1]}>
        <>
        <a id="portfolio" className={styles.scrollTo} />
        {user.portfolio.forEach(image => {
          <Box>Image</Box>
        })}
        </>
      </section>
        </Box>
    </Container>
    </>
  )
}
