import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

declare global { var __users: Map<string, {id:string;name:string;email:string;hash:string}> }
if (!global.__users) global.__users = new Map()

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  if (!name || !email || !password) return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  if (password.length < 8) return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })

  const key = email.toLowerCase()
  if (global.__users.has(key)) return NextResponse.json({ error: 'Email already registered' }, { status: 409 })

  const hash = await bcrypt.hash(password, 10)
  const id = crypto.randomUUID()
  global.__users.set(key, { id, name, email: key, hash })

  return NextResponse.json({ message: 'Registered successfully' }, { status: 201 })
}
