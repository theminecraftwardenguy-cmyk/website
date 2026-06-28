import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/lib/models/Post';
import { getSession } from '@/lib/auth';
import { containsProfanity } from '@/lib/filter';

// GET /api/posts?category=general&page=1
export async function GET(req: NextRequest) {
  try {
    await dbConnect;
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || '';
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = 20;

    const query = category && category !== 'all' ? { category } : {};
    const [posts, total] = await Promise.all([
      Post.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Post.countDocuments(query),
    ]);

    return NextResponse.json({ posts, total, page, pages: Math.ceil(total / limit) });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// POST /api/posts
export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Please sign in to post' }, { status: 401 });

    const { content, category } = await req.json();
    if (!content || content.trim().length === 0)
      return NextResponse.json({ error: 'Post cannot be empty' }, { status: 400 });
    if (content.length > 2000)
      return NextResponse.json({ error: 'Post too long (max 2000 chars)' }, { status: 400 });
    if (containsProfanity(content))
      return NextResponse.json({ error: 'Your post contains inappropriate language. Please keep it respectful!' }, { status: 400 });

    await dbConnect;
    const post = await Post.create({
      authorId: session.userId,
      authorName: session.username,
      content: content.trim(),
      category: category || 'general',
    });

    return NextResponse.json({ ok: true, post });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
