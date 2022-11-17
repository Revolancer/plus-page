// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapIndex } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let resp: any

  const url: string = (process.env.NEXT_PUBLIC_PAGES_API_HOST as string) + '/sitemap/'
  try {
    const response = await fetch(url)
    resp = await response.json()
  } catch (e) {
  }

  let pages = Number(resp)

  if (isNaN(pages) || !Number.isInteger(pages) || pages < 1) {
    pages = 0
  }

  const maps: string[] = []

  while (pages > 0) {
    maps.push(`https://plus.page/sitemap-pages/${pages--}.xml`)
  }

  return await getServerSideSitemapIndex(ctx, maps)
}

// Default export to prevent next.js errors
export default function SitemapIndex (): void {}
