import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { MutableRefObject } from 'react'
import { User } from '../../../../pages/[user]'
import Link from '../../../link'
import useScrollSpy from 'react-use-scrollspy'

export default function Header ({ user, sectionRefs }: { user: User, sectionRefs: Array<MutableRefObject<null>> }): JSX.Element {
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80
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
        <Container maxW='container.md'>
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
              textColor={user.colorScheme + '.500'}
              fontWeight="semibold"
              data-active={activeSection === 0}
              className={(activeSection === 0 ? 'section-link-active' : '') + ' smooth-scroll'}>About Me</Link>
              <Link href="#portfolio"
              textColor={user.colorScheme + '.500'}
              fontWeight="semibold"
              data-active={activeSection === 1}
              className={(activeSection === 1 ? 'section-link-active' : '') + ' smooth-scroll'}>Portfolio</Link>
            </nav>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
