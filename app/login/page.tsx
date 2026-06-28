'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageShell from '@/components/PageShell'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    setLoading(false)
    if (res.ok) {
      localStorage.setItem('wh_user', JSON.stringify(data.user))
      router.push('/profile')
      router.refresh()
    } else {
      setError(data.error || 'Login failed')
    }
  }

  return (
    <PageShell>
      <style>{`
        .auth-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.25rem; padding: 2.5rem; width: 100%; max-width: 400px; }
        .auth-title { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
        .auth-sub { color: #64748b; font-size: 0.9rem; margin-bottom: 1.75rem; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.4rem; font-size: 0.875rem; color: #cbd5e1; font-weight: 500; }
        input[type=email], input[type=password], input[type=text] {
          width: 100%; padding: 0.7rem 0.9rem;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem;
          background: rgba(255,255,255,0.06); color: #f8fafc;
          font-size: 0.95rem; transition: border-color 0.18s;
        }
        input:focus { outline: none; border-color: var(--accent); }
        input::placeholder { color: #475569; }
        .btn { display: block; width: 100%; padding: 0.85rem; border-radius: 9999px; font-weight: 600; font-size: 0.95rem; background: var(--accent); color: #fff; border: none; cursor: pointer; margin-top: 1.25rem; transition: all 0.18s ease; box-shadow: 0 4px 14px rgba(59,130,246,0.3); }
        .btn:hover:not(:disabled) { background: var(--accent-hover); transform: translateY(-1px); }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .error-msg { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); border-radius: 0.5rem; padding: 0.7rem 0.9rem; color: #fca5a5; font-size: 0.875rem; margin-bottom: 1rem; }
        .auth-footer { text-align: center; margin-top: 1.25rem; font-size: 0.875rem; color: #64748b; }
        .auth-footer a { color: #93c5fd; }
        .auth-footer a:hover { text-decoration: underline; }
      `}</style>
      <div className="auth-card">
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-sub">Sign in to your account</p>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn" disabled={loading}>{loading ? 'Signing in…' : 'Sign In'}</button>
        </form>
        <div className="auth-footer">
          Don&apos;t have an account? <Link href="/register">Register</Link>
        </div>
      </div>
    </PageShell>
  )
}
