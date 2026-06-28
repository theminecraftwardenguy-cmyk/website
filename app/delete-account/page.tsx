'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DeleteAccountPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    if (!confirm) return;
    setError('');
    setLoading(true);
    const r = await fetch('/api/auth/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const d = await r.json();
    setLoading(false);
    if (!r.ok) { setError(d.error); return; }
    router.push('/');
    router.refresh();
  }

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Delete Account</h1>
        <p style={{ color: '#7a5c3e', textAlign: 'center', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          This will permanently delete your account and all your posts. This cannot be undone.
        </p>
        <form onSubmit={handleDelete} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={labelStyle}>
            Confirm your password
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={inputStyle} placeholder="••••••••" />
          </label>
          <label style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', cursor: 'pointer', fontSize: '0.875rem', color: '#3d1a00' }}>
            <input type="checkbox" checked={confirm} onChange={e => setConfirm(e.target.checked)} />
            I understand this action is irreversible
          </label>
          {error && <p style={{ color: '#c0392b', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
          <button type="submit" disabled={loading || !confirm || !password}
            style={{ ...submitBtn, opacity: loading || !confirm || !password ? 0.5 : 1 }}>
            {loading ? 'Deleting...' : 'Delete My Account'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.875rem' }}>
          <Link href="/blog" style={{ color: '#9b3a0e' }}>← Back to blog</Link>
        </p>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem', background: '#fdf6ee' };
const cardStyle: React.CSSProperties = { background: '#fff', border: '1px solid #e8c0c0', borderRadius: 14, padding: '2.5rem', width: '100%', maxWidth: 420, boxShadow: '0 4px 24px rgba(100,0,0,0.08)' };
const titleStyle: React.CSSProperties = { fontFamily: 'Noto Serif HK, serif', color: '#6b1a1a', textAlign: 'center', marginBottom: '0.25rem', fontSize: '1.75rem' };
const labelStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.3rem', fontWeight: 600, color: '#3d1a00', fontSize: '0.9rem' };
const inputStyle: React.CSSProperties = { padding: '0.65rem 0.9rem', border: '1px solid #d4b896', borderRadius: 8, fontSize: '1rem', fontFamily: 'inherit', outline: 'none' };
const submitBtn: React.CSSProperties = { padding: '0.75rem', background: '#6b1a1a', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', marginTop: '0.25rem' };
