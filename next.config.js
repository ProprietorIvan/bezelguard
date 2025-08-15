/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: swcMinify is deprecated in newer Next.js versions
  // Using static exports for deployment, but we need API routes for email
  // output: 'export',
  // Configure sitemap generation
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
