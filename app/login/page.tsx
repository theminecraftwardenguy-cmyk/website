'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const d = await r.json();
    setLoading(false);
    if (!r.ok) { setError(d.error); return; }
    router.push('/blog');
    router.refresh();
  }

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Sign In</h1>
        <p style={{ color: '#7a5c3e', textAlign: 'center', marginBottom: '1.5rem' }}>Welcome back to the Yue Woh Hop Kee community</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={labelStyle}>
            Email
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={inputStyle} placeholder="you@example.com" />
          </label>
          <label style={labelStyle}>
            Password
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={inputStyle} placeholder="••••••••" />
          </label>
          {error && <p style={{ color: '#c0392b', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ ...submitBtn, opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.875rem', color: '#7a5c3e' }}>
          No account? <Link href="/register" style={{ color: '#9b3a0e', fontWeight: 600 }}>Sign up</Link>
        </p>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', background: '#fdf6ee' };
const cardStyle: React.CSSProperties = { background: '#fff', border: '1px solid #e8d5c0', borderRadius: 14, padding: '2.5rem', width: '100%', maxWidth: 420, boxShadow: '0 4px 24px rgba(61,26,0,0.08)' };
const titleStyle: React.CSSProperties = { fontFamily: 'Noto Serif HK, serif', color: '#3d1a00', textAlign: 'center', marginBottom: '0.25rem', fontSize: '1.75rem' };
const labelStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.3rem', fontWeight: 600, color: '#3d1a00', fontSize: '0.9rem' };
const inputStyle: React.CSSProperties = { padding: '0.65rem 0.9rem', border: '1px solid #d4b896', borderRadius: 8, fontSize: '1rem', fontFamily: 'inherit', outline: 'none' };
const submitBtn: React.CSSProperties = { padding: '0.75rem', background: '#9b3a0e', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', marginTop: '0.25rem' };
