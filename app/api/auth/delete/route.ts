import { NextResponse } from 'next/server'
import { deleteUser, findUser } from '@/lib/users'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 })

    const user = findUser(email)
    if (!user) return NextResponse.json({ error: 'Account not found' }, { status: 404 })

    deleteUser(email)
    return NextResponse.json({ message: 'Account deleted' })
  } catch {
    return NextResponse.json({ error: 'Server error — please try again' }, { status: 500 })
  }
}
