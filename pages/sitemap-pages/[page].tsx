import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=86400'
  )

  const fields: ISitemapField[] = []
  let body: string[] = []

  const page = ctx.params?.page as string

  let errored = false

  const pagenum = Number(page.split('.')[0])

  if (isNaN(pagenum) || !Number.isInteger(pagenum) || pagenum < 1) {
    errored = true
  }

  if (!errored) {
    const url: string = `${process.env.NEXT_PUBLIC_PAGES_API_HOST as string}/sitemap/${pagenum}`
    try {
      const response = await fetch(url)
      body = await response.json()
    } catch (e) {
      errored = true
    }
  }

  if (!errored) {
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
  }

  return await getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap (): void {}
