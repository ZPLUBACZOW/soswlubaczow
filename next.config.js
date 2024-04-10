/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'server592165.nazwa.pl',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'server592165.nazwa.pl',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
