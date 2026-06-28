import PageShell from '@/components/PageShell'
import Link from 'next/link'

export const metadata = { title: 'Learn More – Website Hero' }

export default function LearnMore() {
  return (
    <PageShell>
      <style>{`
        .content { max-width: 640px; }
        .page-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.1; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .page-copy { font-size: 1.05rem; line-height: 1.8; color: #94a3b8; margin-bottom: 2rem; }
        .features { display: flex; flex-direction: column; gap: 1.25rem; margin: 1.5rem 0 2rem; }
        .feat { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 0.75rem; padding: 1.25rem 1.5rem; }
        .feat-title { font-weight: 600; margin-bottom: 0.4rem; color: #f8fafc; font-size: 1rem; }
        .feat-desc { color: #64748b; font-size: 0.9rem; line-height: 1.6; }
        .btn { display: inline-flex; align-items: center; padding: 0.85rem 1.8rem; border-radius: 9999px; font-weight: 600; font-size: 0.95rem; transition: all 0.18s ease; text-decoration: none; background: rgba(255,255,255,0.06); color: var(--text); border: 1px solid rgba(255,255,255,0.12); }
        .btn:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
      `}</style>
      <div className="content">
        <h1 className="page-title">Learn More</h1>
        <p className="page-copy">Website Hero is a modern, full-stack web platform built on Next.js and deployed on Vercel's global edge network.</p>
        <div className="features">
          <div className="feat"><div className="feat-title">🚀 Edge-Deployed</div><div className="feat-desc">Every page is served from Vercel's global CDN, ensuring sub-100ms load times for users anywhere in the world.</div></div>
          <div className="feat"><div className="feat-title">🔐 Secure Auth</div><div className="feat-desc">Passwords are hashed server-side with bcrypt. No sensitive data is ever stored in the browser.</div></div>
          <div className="feat"><div className="feat-title">📱 Mobile-First</div><div className="feat-desc">Fully responsive design that adapts seamlessly from a 375px phone to a 2560px desktop.</div></div>
          <div className="feat"><div className="feat-title">⚙️ Open Source</div><div className="feat-desc">The entire codebase is open source on GitHub. Clone it, fork it, make it yours.</div></div>
        </div>
        <Link href="/register" className="btn">Create Free Account →</Link>
      </div>
    </PageShell>
  )
}
