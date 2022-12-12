import { Box, Button, Container, Flex, Heading, Text, Image, useDisclosure } from '@chakra-ui/react'
import { MutableRefObject } from 'react'
import { User } from '../../../../pages/[user]'
import Link from '../../../link'
import useScrollSpy from 'react-use-scrollspy'

import styles from '../../../../styles/themes/free.module.css'
import { FaEnvelope, FaQrcode } from 'react-icons/fa'
import { getThumb } from '../../../helpers'
import QrCodeModal from '../../qrcode'

let thisUser: User

function contactPressed (): void {
  if (typeof window !== 'undefined') {
    window.location.href = `https://revolancer.com/project-request/?ref=${thisUser.slug}`
  }
}

export default function Header ({ user, sectionRefs, headerRef }: { user: User, sectionRefs: Array<MutableRefObject<null>>, headerRef: MutableRefObject<HTMLDivElement | undefined> }): JSX.Element {
  thisUser = user

  let height = 250
  if (typeof headerRef.current !== 'undefined' &&
      typeof headerRef.current.offsetHeight !== 'undefined') {
    height = headerRef.current.offsetHeight + 10
  }

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -1 * height
  })
  const avatar = user.avatar

  const qrModal = useDisclosure()

  return (
    <>
      <QrCodeModal modal={qrModal} styles={styles} user={user} />
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
      // @ts-expect-error: Type error
      ref={headerRef}
      >
        <Container maxW='30rem' p='0'>
          <Flex alignItems='top' gap='8'>
            <Box w="24" h="24" objectFit="cover" borderRadius="full" overflow="hidden" position="relative" flexShrink="0">
            <Image src={getThumb(avatar)}
              w="24" h="24"
              alt={user.name + '\'s Profile Picture'}
              style={{ objectFit: 'cover' }}
              borderRadius="full" overflow="hidden"
              data-aspect-ratio='1/1' />
            </Box>
            <Flex alignItems='top' gap='2' direction="column" flexGrow="1">
              <Flex direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'start', md: 'space-between' }} flexGrow="1">
                <Flex direction="column" gap="2">
                  <Heading fontSize="xl" fontWeight="bold" as="h1" className={styles.heading}>{user.name.replace(/\u00a0/g, ' ')}</Heading>
                  <Text className={styles.tagline}><Link href={`https://revolancer.com/user/${user.slug}?ref=${user.slug}`}>Freelancer on <strong>Revo</strong><Text as="span" fontWeight="light">lancer</Text></Link></Text>
                </Flex>
              </Flex>
              <Flex gap="2">
                <Button
                  onClick={contactPressed}
                  className={styles.contactButton}
                  leftIcon={<FaEnvelope />}
                  size={{ base: 'xs', md: 'sm' }}
                  w="max"
                >
                  Request a project
                </Button>
                <Button
                  onClick={qrModal.onOpen}
                  className={styles.qrButton}
                  size={{ base: 'xs', md: 'sm' }}
                  w="max"
                >
                  <FaQrcode />
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="8" mt="4">
            <nav>
              {user.links.length > 0 &&
              <Link
              href="#links"
              className={(activeSection === 0 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>My Links</Link>
              }
              {user.about.length > 0 &&
              <Link
              href="#about"
              className={(activeSection === 1 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>About Me</Link>
              }
              {user.portfolio.length > 0 &&
              <Link href="#portfolio"
              className={(activeSection === 2 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>Portfolio</Link>
              }
            </nav>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
