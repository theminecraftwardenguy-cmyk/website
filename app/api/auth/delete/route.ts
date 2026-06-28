import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import User from '@/lib/models/User'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email)
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })

    await connectDB()

    const result = await User.deleteOne({ email: email.trim().toLowerCase() })
    if (result.deletedCount === 0)
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })

    return NextResponse.json({ message: 'Account deleted' })
  } catch (err) {
    console.error('[delete]', err)
    return NextResponse.json({ error: 'Server error — please try again' }, { status: 500 })
  }
}
