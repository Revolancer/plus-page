/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    adjustFontFallbacks: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'revolancer.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
