import { Box, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
import { MutableRefObject } from 'react'
import { User } from '../../../../pages/[user]'

import styles from '../../../../styles/themes/tabbed.module.css'
import SocialLinkIcon from '../../sociallink'
import { getThumb } from '../../../helpers'

export default function Header ({ user, sectionRefs }: { user: User, sectionRefs: Array<MutableRefObject<null>> }): JSX.Element {
  const avatar = user.avatar

  return (
    <>
      <Box
      color="black"
      backgroundColor="white"
      p="8"
      position="sticky"
      top="0"
      zIndex="5"
      borderBottomRadius="16"
      boxShadow="lg"
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
                  <Heading fontSize="2xl" fontWeight="bold" as="h1" className={styles.heading}>{user.name.replace(/\u00a0/g, ' ')}</Heading>
                  {user.tagline as unknown as boolean && <Text className={styles.tagline} fontSize="xl">{user.tagline}</Text>}
                </Flex>
                <Flex direction="row" wrap="wrap" className={styles.socialIcons} gap="1">
                  {user.socials.map((link, i) => {
                    if (i >= 7) return (<></>)
                    return <SocialLinkIcon link={link} key={'socials_' + (i as unknown as string)} />
                  })}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
