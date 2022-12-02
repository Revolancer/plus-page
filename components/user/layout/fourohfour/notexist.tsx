import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function goHome (): void {
  window.location.href = 'https://plus.page/'
}

export default function NotExist ({ slug }: { slug: string }): JSX.Element {
  const [pageSlug, setPageSlug] = useState(slug)
  const router = useRouter()

  useEffect(() => {
    // update some client side state to say it is now safe to render the client-side only component
    setPageSlug(router.asPath)
  }, [router.asPath])

  return (
    <Stack>
      <Heading fontSize="3xl">Whoops... this page doesn&rsquo;t exist!</Heading>
      <Text>This URL may be available, make it yours at <Link href="https://plus.page/">plus.page</Link></Text>
      <Stack alignItems="center">
        <Box
          border="2px solid black"
          borderRadius="8"
          marginBlockStart="4"
          marginBlockEnd="2"
          padding="4"
          fontSize={{ base: 'xs', md: 'lg' }}
          fontWeight="bold">
          plus.page{pageSlug.slice(0, 20)}
        </Box>
        <Button
          onClick={goHome}
          color="white"
          bgGradient='linear(to-br, #FF3C6B, #FFC520)'
          _focus={{
            bgGradient: 'linear(to-br, #FF3C6B, #FFC520)',
            filter: 'auto',
            brightness: '85%'
          }}
          _active={{
            bgGradient: 'linear(to-br, #FF3C6B, #FFC520)',
            filter: 'auto',
            brightness: '85%'
          }}
          _hover={{
            bgGradient: 'linear(to-br, #FF3C6B, #FFC520)',
            filter: 'auto',
            brightness: '85%'
          }}
          marginInline="auto"
        >
          Claim this name
        </Button>
      </Stack>
    </Stack>
  )
}
