import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import Post from '@/lib/models/Post';
import { getSession } from '@/lib/auth';

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Not logged in' }, { status: 401 });

    const { password } = await req.json();
    if (!password) return NextResponse.json({ error: 'Password required to delete account' }, { status: 400 });

    await dbConnect;
    const user = await User.findById(session.userId);
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return NextResponse.json({ error: 'Wrong password' }, { status: 401 });

    await Post.deleteMany({ authorId: user._id });
    await User.findByIdAndDelete(user._id);

    const res = NextResponse.json({ ok: true });
    res.cookies.set('auth_token', '', { maxAge: 0, path: '/' });
    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
