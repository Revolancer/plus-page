/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'revolancer.com',
        pathname: '/**'
      }
    ]
  },
  compiler: {
    emotion: true
  },
  experimental: {
    runtime: 'experimental-edge'
  },
  webpack: (config, ctx) => {
    if (ctx.nextRuntime === 'edge') {
      if (!config.resolve.conditionNames) {
        config.resolve.conditionNames = ['require', 'node']
      }
      if (!config.resolve.conditionNames.includes('worker')) {
        config.resolve.conditionNames.push('worker')
      }
    }
    return config
  }
}

module.exports = nextConfig
