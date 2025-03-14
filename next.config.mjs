/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    //redirect từ trang detail cũ sang trang detail mới
    return [
      {
        source: '/',
        destination: '/blog', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

export default nextConfig
