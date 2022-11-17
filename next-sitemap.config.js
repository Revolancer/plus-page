/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://plus.page',
  generateRobotsTxt: true,
  exclude: ['/sitemap-pages/index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://plus.page/sitemap-pages/index.xml'
    ]
  }
}
