import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/lib/models/Post';
import { getSession } from '@/lib/auth';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Not logged in' }, { status: 401 });

    await dbConnect;
    const post = await Post.findById(params.id);
    if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    if (post.authorId.toString() !== session.userId)
      return NextResponse.json({ error: 'Not your post' }, { status: 403 });

    await post.deleteOne();
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
