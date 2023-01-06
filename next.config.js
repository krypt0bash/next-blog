/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_API: process.env.SUPABASE_API,
  }
}

module.exports = nextConfig
