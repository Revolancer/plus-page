import { border, Box, Container, Flex, Text, textDecoration } from '@chakra-ui/react'
import Image from 'next/image'
import Link from '../../../link'
import { UserProfileProps } from '../../profile'

export default function Header ({ user }: UserProfileProps): JSX.Element {
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
            <Link
            href="#about"
            textColor={user.colorScheme + '.500'}
            fontWeight="semibold"
            _active={{
              border: '1px'
            }}>About Me</Link>
            <Link href="#portfolio">Portfolio</Link>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
