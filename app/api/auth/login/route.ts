import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });

    await dbConnect;

    // Explicitly select passwordHash so it is never undefined
    const user = await User.findOne({ email }).select('+passwordHash +username +email');
    if (!user)
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    if (!user.passwordHash)
      return NextResponse.json({ error: 'Account data corrupted — please register again' }, { status: 500 });

    const ok = await bcrypt.compare(String(password), String(user.passwordHash));
    if (!ok)
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const token = await signToken({ userId: user._id.toString(), username: user.username });
    const res = NextResponse.json({ ok: true, username: user.username });
    res.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    return res;
  } catch (e: any) {
    console.error('[LOGIN ERROR]', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
