import PageShell from '@/components/PageShell'
import Link from 'next/link'

export const metadata = { title: 'Get Started – Website Hero' }

export default function GetStarted() {
  return (
    <PageShell>
      <style>{`
        .content { max-width: 560px; text-align: center; }
        .page-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.1; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .page-copy { font-size: 1.05rem; line-height: 1.8; color: #94a3b8; margin-bottom: 2rem; }
        .steps { text-align: left; margin: 1.5rem 0; display: flex; flex-direction: column; gap: 1rem; }
        .step { display: flex; gap: 1rem; align-items: flex-start; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 0.75rem; padding: 1rem 1.25rem; }
        .step-num { background: var(--accent); color: #fff; border-radius: 50%; width: 28px; height: 28px; display: grid; place-items: center; font-size: 0.85rem; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
        .step-text { font-size: 0.95rem; color: #cbd5e1; line-height: 1.6; }
        .step-text strong { color: #f8fafc; }
        .btn { display: inline-flex; align-items: center; padding: 0.85rem 1.8rem; border-radius: 9999px; font-weight: 600; font-size: 0.95rem; transition: all 0.18s ease; text-decoration: none; background: var(--accent); color: #fff; box-shadow: 0 4px 14px rgba(59,130,246,0.35); }
        .btn:hover { background: var(--accent-hover); transform: translateY(-2px); }
      `}</style>
      <div className="content">
        <h1 className="page-title">Get Started</h1>
        <p className="page-copy">Follow these simple steps to set up your account and start building.</p>
        <div className="steps">
          <div className="step"><div className="step-num">1</div><div className="step-text"><strong>Create an account</strong> — Register with your name, email, and a secure password.</div></div>
          <div className="step"><div className="step-num">2</div><div className="step-text"><strong>Log in</strong> — Sign in to access your personal dashboard and profile.</div></div>
          <div className="step"><div className="step-num">3</div><div className="step-text"><strong>Explore features</strong> — Learn what Website Hero can do for you and customize your experience.</div></div>
        </div>
        <Link href="/register" className="btn">Create Account →</Link>
      </div>
    </PageShell>
  )
}
