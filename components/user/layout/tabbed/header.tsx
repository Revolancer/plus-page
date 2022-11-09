import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { MutableRefObject } from 'react'
import { User } from '../../../../pages/[user]'
import Link from '../../../link'
import useScrollSpy from 'react-use-scrollspy'

import styles from '../../../../styles/themes/tabbed.module.css'

export default function Header ({ user, sectionRefs }: { user: User, sectionRefs: Array<MutableRefObject<null>> }): JSX.Element {
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -190
  })

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
            <Box w="24" h="24" objectFit="cover" borderRadius="full" overflow="hidden" position="relative">
              <Image fill src={user.avatar}
              alt={user.name + '\'s Profile Picture'}
              priority={true}
              sizes='240px'
              style={{ objectFit: 'cover' }}/>
            </Box>
            <Flex direction="column" gap="2">
              <Text fontSize="xl" fontWeight="bold">{user.name}</Text>
            </Flex>
          </Flex>
          <Flex gap="8" mt="4">
            <nav>
              <Link
              href="#about"
              className={(activeSection === 0 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>About Me</Link>
              <Link href="#portfolio"
              className={(activeSection === 1 ? styles.sectionLinkActive : '') + ' ' + styles.sectionLink + ' smooth-scroll'}>Portfolio</Link>
            </nav>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
