import { Flex, Spacer, Text } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { CustomLink } from '../../pages/[user]'

export default function Links ({ links, max = 9, styles }: { links: CustomLink[], max?: number, styles: { [key: string]: any } }): JSX.Element {
  return (
    <>
      {links.map((link, i) => {
        if (i >= max) { return <></> }
        link.name = link.name.replace(/[\n\s]/g, ' ').slice(0, 44)
        return (
          <a href={link.url}
              key={link.url + link.name}
              className={styles.customLink}>
            <Flex align="baseline" gap="4">
            <Text>{link.name}</Text>
            <Spacer />
            <FaExternalLinkAlt />
            </Flex>
          </a>
        )
      })}
    </>
  )
}
