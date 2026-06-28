import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { findUser } from '@/lib/users'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password)
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })

    const user = findUser(email)
    if (!user)
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

    const ok = await bcrypt.compare(password, user.hash)
    if (!ok)
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

    return NextResponse.json({
      user: { name: user.name, email: user.email, createdAt: user.createdAt },
    })
  } catch {
    return NextResponse.json({ error: 'Server error — please try again' }, { status: 500 })
  }
}
