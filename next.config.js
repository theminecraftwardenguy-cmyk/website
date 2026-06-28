/** @type {import('next').NextConfig} */
const nextConfig = {
  // PHP files have been removed — this is a pure Next.js project
  // Auth uses in-memory store (global.__users) — works with Vercel serverless
  // For persistent users across deploys, swap in a DB like PlanetScale or Neon
}
module.exports = nextConfig
