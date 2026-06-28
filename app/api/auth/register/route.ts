import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/mongodb'
import User from '@/lib/models/User'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name?.trim() || !email?.trim() || !password)
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })

    if (password.length < 8)
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })

    await connectDB()

    const existing = await User.findOne({ email: email.trim().toLowerCase() })
    if (existing)
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 })

    const hash = await bcrypt.hash(password, 12)
    await User.create({ name: name.trim(), email: email.trim().toLowerCase(), hash })

    return NextResponse.json({ message: 'Account created successfully' }, { status: 201 })
  } catch (err) {
    console.error('[register]', err)
    return NextResponse.json({ error: 'Server error — please try again' }, { status: 500 })
  }
}
