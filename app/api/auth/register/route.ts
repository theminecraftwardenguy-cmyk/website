import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    if (!username || !email || !password)
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    if (password.length < 6)
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });

    await dbConnect;
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists)
      return NextResponse.json({ error: 'Username or email already taken' }, { status: 409 });

    const passwordHash = await bcrypt.hash(String(password), 12);
    const user = await User.create({ username: username.trim(), email: email.trim().toLowerCase(), passwordHash });

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
    console.error('[REGISTER ERROR]', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
