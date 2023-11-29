/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
    svgAllow: true,
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
