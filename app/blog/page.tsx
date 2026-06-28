'use client';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

type Post = {
  _id: string;
  authorName: string;
  content: string;
  category: string;
  createdAt: string;
};

type User = { userId: string; username: string } | null;

const CATEGORIES = ['all', 'general', 'recipe', 'review', 'news'];

export default function BlogPage() {
  const [user, setUser] = useState<User>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('all');
  const [content, setContent] = useState('');
  const [postCategory, setPostCategory] = useState('general');
  const [loading, setLoading] = useState(false);
  const [postError, setPostError] = useState('');
  const [postSuccess, setPostSuccess] = useState('');

  const fetchMe = useCallback(async () => {
    const r = await fetch('/api/auth/me');
    const d = await r.json();
    setUser(d.user);
  }, []);

  const fetchPosts = useCallback(async () => {
    const r = await fetch(`/api/posts?category=${category}&page=${page}`);
    const d = await r.json();
    setPosts(d.posts || []);
    setTotal(d.total || 0);
    setPages(d.pages || 1);
  }, [category, page]);

  useEffect(() => { fetchMe(); }, [fetchMe]);
  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  async function handlePost(e: React.FormEvent) {
    e.preventDefault();
    setPostError('');
    setPostSuccess('');
    setLoading(true);
    const r = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, category: postCategory }),
    });
    const d = await r.json();
    setLoading(false);
    if (!r.ok) { setPostError(d.error); return; }
    setContent('');
    setPostSuccess('Posted!');
    setTimeout(() => setPostSuccess(''), 3000);
    fetchPosts();
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  }

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h1 style={{ fontFamily: 'Noto Serif HK, serif', color: '#3d1a00', margin: 0 }}>Community Blog</h1>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {user ? (
            <>
              <span style={{ fontSize: '0.875rem', color: '#7a5c3e' }}>Signed in as <strong>{user.username}</strong></span>
              <button onClick={async () => { await fetch('/api/auth/logout', { method: 'POST' }); setUser(null); }}
                style={btnStyle('#9b3a0e')}>
                Sign Out
              </button>
              <Link href="/delete-account">
                <button style={btnStyle('#6b1a1a')}>Delete Account</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login"><button style={btnStyle('#9b3a0e')}>Sign In</button></Link>
              <Link href="/register"><button style={btnStyle('#4a7c3f')}>Sign Up</button></Link>
            </>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => { setCategory(c); setPage(1); }}
            style={{
              padding: '0.3rem 0.9rem', borderRadius: 20, border: '1.5px solid #9b3a0e',
              background: category === c ? '#9b3a0e' : 'transparent',
              color: category === c ? '#fff' : '#9b3a0e',
              cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem', textTransform: 'capitalize',
            }}>
            {c}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '0.875rem', color: '#7a5c3e', alignSelf: 'center' }}>
          {total} post{total !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Post form */}
      {user && (
        <form onSubmit={handlePost} style={{ background: '#fff8f0', border: '1px solid #e8d5c0', borderRadius: 10, padding: '1.25rem', marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#3d1a00' }}>
            Share your thoughts
          </label>
          <textarea
            value={content} onChange={e => setContent(e.target.value)}
            maxLength={2000} rows={4} placeholder="What's on your mind? Share a recipe, review, or story..."
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #d4b896', borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <select value={postCategory} onChange={e => setPostCategory(e.target.value)}
              style={{ padding: '0.4rem 0.75rem', border: '1px solid #d4b896', borderRadius: 6, fontFamily: 'inherit', background: '#fff' }}>
              {CATEGORIES.filter(c => c !== 'all').map(c => (
                <option key={c} value={c} style={{ textTransform: 'capitalize' }}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: content.length > 1800 ? '#c0392b' : '#7a5c3e' }}>{content.length}/2000</span>
              <button type="submit" disabled={loading || !content.trim()}
                style={{ ...btnStyle('#9b3a0e'), opacity: loading || !content.trim() ? 0.6 : 1 }}>
                {loading ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
          {postError && <p style={{ color: '#c0392b', marginTop: '0.5rem', fontSize: '0.875rem' }}>{postError}</p>}
          {postSuccess && <p style={{ color: '#27ae60', marginTop: '0.5rem', fontSize: '0.875rem' }}>{postSuccess}</p>}
        </form>
      )}

      {!user && (
        <div style={{ background: '#fff8f0', border: '1px dashed #d4b896', borderRadius: 10, padding: '1.25rem', marginBottom: '2rem', textAlign: 'center', color: '#7a5c3e' }}>
          <Link href="/login" style={{ color: '#9b3a0e', fontWeight: 600 }}>Sign in</Link> or{' '}
          <Link href="/register" style={{ color: '#4a7c3f', fontWeight: 600 }}>create an account</Link> to join the conversation.
        </div>
      )}

      {/* Posts list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#7a5c3e' }}>
            No posts yet. Be the first to share!
          </div>
        )}
        {posts.map(p => (
          <article key={p._id} style={{ background: '#fff', border: '1px solid #e8d5c0', borderRadius: 10, padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div>
                <strong style={{ color: '#3d1a00' }}>{p.authorName}</strong>
                <span style={{ margin: '0 0.5rem', color: '#d4b896' }}>·</span>
                <span style={{ fontSize: '0.8rem', background: '#f5e6d0', color: '#9b3a0e', padding: '0.15rem 0.5rem', borderRadius: 12, textTransform: 'capitalize' }}>{p.category}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#7a5c3e' }}>
                  {new Date(p.createdAt).toLocaleDateString('en-HK', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                {user && user.userId === (p as any).authorId && (
                  <button onClick={() => handleDelete(p._id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0392b', fontSize: '0.8rem', padding: '0.1rem 0.3rem' }}
                    title="Delete post">
                    ✕
                  </button>
                )}
              </div>
            </div>
            <p style={{ color: '#3d1a00', lineHeight: 1.65, whiteSpace: 'pre-wrap', margin: 0 }}>{p.content}</p>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {pages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {Array.from({ length: pages }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => setPage(n)}
              style={{ ...btnStyle(page === n ? '#9b3a0e' : '#d4b896'), minWidth: 36 }}>
              {n}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}

function btnStyle(bg: string): React.CSSProperties {
  return {
    padding: '0.4rem 1rem', background: bg, color: '#fff',
    border: 'none', borderRadius: 6, cursor: 'pointer',
    fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 600,
  };
}
