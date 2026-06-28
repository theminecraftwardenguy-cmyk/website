/**
 * In-memory user store.
 *
 * NOTE: Data resets on every cold start / new serverless instance.
 * For persistent auth swap this for a cloud DB:
 *   - Vercel Postgres (postgres.vercel-storage.com)
 *   - Neon (neon.tech) — free PostgreSQL
 *   - PlanetScale (planetscale.com) — free MySQL
 *
 * Just replace the Map with your DB client queries — the API routes
 * call these helpers, so you'd only change this file.
 */

export interface User {
  id: string
  name: string
  email: string
  hash: string
  createdAt: string
}

declare global {
  // eslint-disable-next-line no-var
  var __wh_users: Map<string, User> | undefined
}

function getStore(): Map<string, User> {
  if (!global.__wh_users) global.__wh_users = new Map()
  return global.__wh_users
}

export function findUser(email: string): User | undefined {
  return getStore().get(email.toLowerCase())
}

export function createUser(user: User): void {
  getStore().set(user.email.toLowerCase(), user)
}

export function deleteUser(email: string): boolean {
  return getStore().delete(email.toLowerCase())
}

export function userExists(email: string): boolean {
  return getStore().has(email.toLowerCase())
}
