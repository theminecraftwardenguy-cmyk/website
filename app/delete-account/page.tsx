'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PageShell from '@/components/PageShell'

export default function DeleteAccount() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const u = localStorage.getItem('wh_user')
    if (!u) router.push('/login')
    else setUser(JSON.parse(u))
  }, [router])

  async function handleDelete(e: React.FormEvent) {
    e.preventDefault()
    if (confirm !== 'DELETE') return
    setLoading(true)
    await fetch('/api/auth/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user?.email }),
    })
    localStorage.removeItem('wh_user')
    router.push('/')
  }

  if (!user) return null

  return (
    <PageShell>
      <style>{`
        .delete-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(239,68,68,0.2); border-radius: 1.25rem; padding: 2.5rem; width: 100%; max-width: 420px; }
        .delete-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .delete-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: #f87171; }
        .delete-copy { color: #94a3b8; font-size: 0.9rem; line-height: 1.7; margin-bottom: 1.5rem; }
        .warning-box { background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2); border-radius: 0.625rem; padding: 0.9rem 1rem; font-size: 0.85rem; color: #fca5a5; margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.4rem; font-size: 0.875rem; color: #cbd5e1; font-weight: 500; }
        input[type=text] { width: 100%; padding: 0.7rem 0.9rem; border: 1px solid rgba(239,68,68,0.3); border-radius: 0.5rem; background: rgba(239,68,68,0.05); color: #f8fafc; font-size: 0.95rem; }
        input:focus { outline: none; border-color: #ef4444; }
        .btn-delete { display: block; width: 100%; padding: 0.85rem; border-radius: 9999px; font-weight: 600; font-size: 0.95rem; background: #ef4444; color: #fff; border: none; cursor: pointer; margin-top: 0.5rem; transition: all 0.18s; }
        .btn-delete:hover:not(:disabled) { background: #dc2626; transform: translateY(-1px); }
        .btn-delete:disabled { opacity: 0.4; cursor: not-allowed; }
        .cancel-link { display: block; text-align: center; margin-top: 1rem; font-size: 0.875rem; color: #64748b; cursor: pointer; }
        .cancel-link:hover { color: #94a3b8; }
      `}</style>
      <div className="delete-card">
        <div className="delete-icon">⚠️</div>
        <h1 className="delete-title">Delete Account</h1>
        <p className="delete-copy">This action is permanent and cannot be undone. All your data will be removed.</p>
        <div className="warning-box">You are about to delete the account for <strong>{user.email}</strong>.</div>
        <form onSubmit={handleDelete}>
          <div className="form-group">
            <label htmlFor="confirm">Type <strong style={{color:'#f87171'}}>DELETE</strong> to confirm</label>
            <input id="confirm" type="text" placeholder="DELETE" value={confirm} onChange={e => setConfirm(e.target.value)} />
          </div>
          <button type="submit" className="btn-delete" disabled={confirm !== 'DELETE' || loading}>
            {loading ? 'Deleting…' : 'Permanently Delete Account'}
          </button>
        </form>
        <span className="cancel-link" onClick={() => router.back()}>← Cancel</span>
      </div>
    </PageShell>
  )
}
