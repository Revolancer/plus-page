import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

// Intentional - next-sitemap return type not *strictly* typesafe
// We can ignore this, it's good enough
// @ts-expect-error
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=86400'
  )

  const url: string = (process.env.NEXT_PUBLIC_PAGES_API_HOST as string) + '/sitemap'
  let body: string[] = []
  try {
    const response = await fetch(url)
    body = await response.json()
  } catch (e) {
    return null
  }

  const fields: ISitemapField[] = []

  body.forEach(slug => {
    fields.push(
      {
        loc: `https://plus.page/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.5
      }
    )
  })
  return await getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap (): void {}
