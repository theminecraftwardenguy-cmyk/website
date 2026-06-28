'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PageShell from '@/components/PageShell'
import Link from 'next/link'

export default function Profile() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const u = localStorage.getItem('wh_user')
    if (!u) router.push('/login')
    else setUser(JSON.parse(u))
  }, [router])

  if (!user) return null

  const initials = user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0,2)

  return (
    <PageShell>
      <style>{`
        .profile-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.25rem; padding: 2.5rem; width: 100%; max-width: 480px; text-align: center; }
        .avatar { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #1d4ed8); display: grid; place-items: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 1.25rem; color: #fff; }
        .profile-name { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem; }
        .profile-email { color: #64748b; font-size: 0.9rem; margin-bottom: 2rem; }
        .profile-info { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 0.75rem; padding: 1rem 1.25rem; text-align: left; margin-bottom: 1.5rem; }
        .info-row { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; }
        .info-row:last-child { border-bottom: none; }
        .info-label { color: #64748b; }
        .info-value { color: #f8fafc; font-weight: 500; }
        .danger-link { color: #f87171; font-size: 0.875rem; }
        .danger-link:hover { text-decoration: underline; }
      `}</style>
      <div className="profile-card">
        <div className="avatar">{initials}</div>
        <div className="profile-name">{user.name}</div>
        <div className="profile-email">{user.email}</div>
        <div className="profile-info">
          <div className="info-row"><span className="info-label">Name</span><span className="info-value">{user.name}</span></div>
          <div className="info-row"><span className="info-label">Email</span><span className="info-value">{user.email}</span></div>
          <div className="info-row"><span className="info-label">Status</span><span className="info-value" style={{color:'#4ade80'}}>● Active</span></div>
        </div>
        <Link href="/delete-account" className="danger-link">Delete account</Link>
      </div>
    </PageShell>
  )
}
