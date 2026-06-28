import PageShell from '@/components/PageShell'
import Link from 'next/link'

export const metadata = { title: 'Website Hero — Build modern websites' }

export default function Home() {
  return (
    <PageShell>
      <style>{`
        .hero {
          max-width: 820px;
          text-align: center;
          padding: 1rem 0;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          margin-bottom: 2rem;
          background: var(--accent-faint);
          color: var(--accent);
          border: 1px solid rgba(79,142,247,0.2);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .hero-title {
          font-size: var(--text-hero);
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 1.25rem;
          letter-spacing: -0.03em;
          color: var(--text);
        }
        .hero-title .gradient {
          background: linear-gradient(135deg, #a5c8ff 0%, #4f8ef7 40%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-copy {
          font-size: var(--text-base);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 2.5rem;
          color: var(--text-muted);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.8rem 1.6rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: var(--text-sm);
          transition: transform var(--transition), background-color var(--transition), box-shadow var(--transition);
          text-decoration: none;
        }
        .btn-primary {
          background: var(--accent);
          color: #fff;
          box-shadow: 0 4px 18px var(--accent-glow);
        }
        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-glow);
        }
        .btn-ghost {
          background: rgba(255,255,255,0.05);
          color: var(--text);
          border: 1px solid var(--border);
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.09);
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          width: 100%;
        }
        .feature-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          text-align: left;
          transition: border-color var(--transition), background var(--transition);
        }
        .feature-card:hover {
          border-color: var(--border-hover);
          background: rgba(255,255,255,0.04);
        }
        .feature-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--accent-faint);
          display: grid;
          place-items: center;
          margin-bottom: 0.85rem;
          font-size: 1.1rem;
        }
        .feature-title {
          font-weight: 600;
          font-size: var(--text-sm);
          margin-bottom: 0.35rem;
          color: var(--text);
        }
        .feature-desc {
          font-size: var(--text-xs);
          color: var(--text-muted);
          line-height: 1.55;
        }
      `}</style>
      <div className="hero">
        <span className="badge">✦ Next.js + Vercel</span>
        <h1 className="hero-title">
          Build modern websites<br />
          <span className="gradient">with confidence</span>
        </h1>
        <p className="hero-copy">
          A production-ready starter with authentication, edge deployment,
          and a clean dark UI — all open source.
        </p>
        <div className="hero-actions">
          <Link href="/get-started" className="btn btn-primary">Get Started →</Link>
          <Link href="/learn-more" className="btn btn-ghost">Learn More</Link>
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Edge-Deployed</div>
            <div className="feature-desc">Next.js App Router with Vercel's global CDN for sub-100ms load times.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <div className="feature-title">Auth Built-In</div>
            <div className="feature-desc">Register, login, and manage accounts. Passwords hashed with bcrypt.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <div className="feature-title">Mobile-First</div>
            <div className="feature-desc">Fully responsive sidebar nav with a hamburger menu on small screens.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔓</div>
            <div className="feature-title">Open Source</div>
            <div className="feature-desc">MIT licensed. Fork it, hack it, deploy your own version in minutes.</div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
