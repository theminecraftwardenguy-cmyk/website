import { NextResponse } from 'next/server'

declare global { var __users: Map<string, unknown> }
if (!global.__users) global.__users = new Map()

export async function POST(req: Request) {
  const { email } = await req.json()
  if (email) global.__users.delete(email.toLowerCase())
  return NextResponse.json({ message: 'Account deleted' })
}
