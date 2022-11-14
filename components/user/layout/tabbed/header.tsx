import { Box, Button, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
import { MutableRefObject } from 'react'
import { User } from '../../../../pages/[user]'
import Link from '../../../link'
import useScrollSpy from 'react-use-scrollspy'

import styles from '../../../../styles/themes/tabbed.module.css'
import SocialLinkIcon from '../../sociallink'
import { FaEnvelope } from 'react-icons/fa'
import { updateImageUrl } from '../../../helpers'

export default function Header ({ user, sectionRefs, modal }: { user: User, sectionRefs: Array<MutableRefObject<null>>, modal: any }): JSX.Element {
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -220
  })
  const avatar = updateImageUrl(user.avatar)

  return (
    <>
      <Box
      color="black"
      backgroundColor="white"
      p="8"
      pb="0"
      position="sticky"
      top="0"
      zIndex="5"
      borderBottomRadius="16"
      boxShadow="lg"
      >
        <Container maxW='30rem' p='0'>
          <Flex alignItems='top' gap='8'>
            <Box w="24" h="24" objectFit="cover" borderRadius="full" overflow="hidden" position="relative" flexShrink="0">
            <Image src={avatar}
              w="24" h="24"
              alt={user.name + '\'s Profile Picture'}
              style={{ objectFit: 'cover' }}
              data-src={avatar}
              borderRadius="full" overflow="hidden"
              data-aspect-ratio='1/1' />
            </Box>
            <Flex alignItems='top' gap='2' direction="column" flexGrow="1">
              <Flex direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'start', md: 'space-between' }} flexGrow="1">
                <Flex direction="column" gap="2">
                  <Heading fontSize="xl" fontWeight="bold" as="h1" className={styles.heading}>{user.name.replace(/\u00a0/g, ' ')}</Heading>
                  {user.tagline as unknown as boolean && <Text className={styles.tagline}>{user.tagline}</Text>}
                </Flex>
                <Flex direction="row" wrap="wrap" className={styles.socialIcons} gap="0.5">
                  {user.socials.map((link, i) => {
                    if (i >= 7) return (<></>)
                    return <SocialLinkIcon link={link} key={'socials_' + (i as unknown as string)} />
                  })}
                </Flex>
              </Flex>
              <Button
                onClick={modal.onOpen}
                className={styles.contactButton}
                leftIcon={<FaEnvelope />}
                size={{ base: 'xs', md: 'sm' }}
                w="max"
              >
                Contact me
              </Button>
            </Flex>
          </Flex>
          <Flex gap="8" mt="4">
            <nav>
              <Link
              href="#about"
              className={(activeSection === 0 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>About Me</Link>
              {user.portfolio.length > 0 &&
              <Link href="#portfolio"
              className={(activeSection === 1 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>Portfolio</Link>
              }
            </nav>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
