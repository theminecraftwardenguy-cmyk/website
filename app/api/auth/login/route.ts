import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

declare global { var __users: Map<string, {id:string;name:string;email:string;hash:string}> }
if (!global.__users) global.__users = new Map()

export async function POST(req: Request) {
  const { email, password } = await req.json()
  if (!email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const user = global.__users.get(email.toLowerCase())
  if (!user) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

  const ok = await bcrypt.compare(password, user.hash)
  if (!ok) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

  return NextResponse.json({ user: { name: user.name, email: user.email } })
}
