import { Flex, Spacer, Text } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { CustomLink } from '../../pages/[user]'

export default function Links ({ links, max = 10, styles }: { links: CustomLink[], max?: number, styles: { [key: string]: any } }): JSX.Element {
  return (
    <>
      {links.map((link, i) => {
        if (i >= max) { return <></> }
        link.label = link.label.replace(/[\n\s]/g, ' ').slice(0, 40)
        link.url = link.url.replace(/[\n\s]/g, ' ').slice(0, 256)
        return (
          <a href={link.url}
              key={link.url + link.label}
              className={styles.customLink}
              target="_blank"
              rel="noopener noreferrer nofollow">
            <Flex align="baseline" gap="4">
            <Text>{link.label}</Text>
            <Spacer />
            <FaExternalLinkAlt />
            </Flex>
          </a>
        )
      })}
    </>
  )
}
