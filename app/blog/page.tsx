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
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h1 style={{ fontFamily: 'Noto Serif HK, serif', color: 'var(--text)', margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Community Blog</h1>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {user ? (
            <>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Signed in as <strong>{user.username}</strong></span>
              <button onClick={async () => { await fetch('/api/auth/logout', { method: 'POST' }); setUser(null); }}
                style={btnStyle('var(--accent)')}>
                Sign Out
              </button>
              <Link href="/delete-account">
                <button style={btnStyle('#6b1a1a')}>Delete Account</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login"><button style={btnStyle('var(--accent)')}>Sign In</button></Link>
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
              padding: '0.3rem 0.9rem', borderRadius: 20, border: '1.5px solid var(--accent)',
              background: category === c ? 'var(--accent)' : 'transparent',
              color: category === c ? '#fff' : 'var(--accent)',
              cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem', textTransform: 'capitalize',
              transition: 'all 0.18s cubic-bezier(0.16,1,0.3,1)',
            }}>
            {c}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '0.875rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
          {total} post{total !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Post form */}
      {user && (
        <form onSubmit={handlePost} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem', marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text)' }}>
            Share your thoughts
          </label>
          <textarea
            value={content} onChange={e => setContent(e.target.value)}
            maxLength={2000} rows={4} placeholder="What\'s on your mind? Share a recipe, review, or story..."
            style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box', background: 'var(--bg)', color: 'var(--text)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <select value={postCategory} onChange={e => setPostCategory(e.target.value)}
              style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border)', borderRadius: 6, fontFamily: 'inherit', background: 'var(--surface)', color: 'var(--text)' }}>
              {CATEGORIES.filter(c => c !== 'all').map(c => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: content.length > 1800 ? '#c0392b' : 'var(--text-muted)' }}>{content.length}/2000</span>
              <button type="submit" disabled={loading || !content.trim()}
                style={{ ...btnStyle('var(--accent)'), opacity: loading || !content.trim() ? 0.6 : 1 }}>
                {loading ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
          {postError && <p style={{ color: '#c0392b', marginTop: '0.5rem', fontSize: '0.875rem' }}>{postError}</p>}
          {postSuccess && <p style={{ color: '#27ae60', marginTop: '0.5rem', fontSize: '0.875rem' }}>{postSuccess}</p>}
        </form>
      )}

      {!user && (
        <div style={{ background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: 10, padding: '1.25rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <Link href="/login" style={{ color: 'var(--accent)', fontWeight: 600 }}>Sign in</Link> or{' '}
          <Link href="/register" style={{ color: '#4a7c3f', fontWeight: 600 }}>create an account</Link> to join the conversation.
        </div>
      )}

      {/* Posts list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No posts yet. Be the first to share!
          </div>
        )}
        {posts.map(p => (
          <article key={p._id} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.25rem', transition: 'box-shadow 0.18s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div>
                <strong style={{ color: 'var(--text)' }}>{p.authorName}</strong>
                <span style={{ margin: '0 0.5rem', color: 'var(--border)' }}>·</span>
                <span style={{ fontSize: '0.8rem', background: 'var(--accent-faint)', color: 'var(--accent)', padding: '0.15rem 0.5rem', borderRadius: 12, textTransform: 'capitalize' }}>{p.category}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
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
            <p style={{ color: 'var(--text)', lineHeight: 1.65, whiteSpace: 'pre-wrap', margin: 0 }}>{p.content}</p>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {pages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {Array.from({ length: pages }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => setPage(n)}
              style={{ ...btnStyle(page === n ? 'var(--accent)' : 'var(--border)'), minWidth: 36 }}>
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function btnStyle(bg: string): React.CSSProperties {
  return {
    padding: '0.4rem 1rem', background: bg, color: '#fff',
    border: 'none', borderRadius: 6, cursor: 'pointer',
    fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 600,
    transition: 'opacity 0.18s, transform 0.18s',
  };
}
