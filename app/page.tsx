import PageShell from '@/components/PageShell'
import Link from 'next/link'

export const metadata = { title: 'Website Hero' }

export default function Home() {
  return (
    <PageShell>
      <style>{`
        .hero { max-width: 860px; text-align: center; }
        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          margin-bottom: 1.5rem;
          background: rgba(96,165,250,0.12);
          color: #93c5fd;
          border-radius: 9999px;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          border: 1px solid rgba(96,165,250,0.2);
        }
        .hero-title {
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 1.25rem;
          letter-spacing: -0.02em;
        }
        .hero-title span {
          background: linear-gradient(135deg, #93c5fd, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-copy {
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 580px;
          margin: 0 auto 2.5rem;
          color: #94a3b8;
        }
        .hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.8rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease;
          text-decoration: none;
        }
        .btn-primary {
          background: var(--accent);
          color: #fff;
          box-shadow: 0 4px 14px rgba(59,130,246,0.35);
        }
        .btn-primary:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(59,130,246,0.4); }
        .btn-secondary {
          background: rgba(255,255,255,0.06);
          color: var(--text);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 3.5rem;
          width: 100%;
        }
        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          text-align: left;
        }
        .feature-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .feature-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.3rem; }
        .feature-desc { font-size: 0.85rem; color: #64748b; line-height: 1.5; }
      `}</style>
      <div className="hero">
        <span className="badge">Launch faster</span>
        <h1 className="hero-title">
          Build modern websites<br /><span>with confidence</span>
        </h1>
        <p className="hero-copy">
          Create a polished online presence with a clean hero section designed to
          convert visitors into customers. Fast, responsive, and easy to customize.
        </p>
        <div className="hero-actions">
          <Link href="/get-started" className="btn btn-primary">Get Started →</Link>
          <Link href="/learn-more" className="btn btn-secondary">Learn More</Link>
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Blazing Fast</div>
            <div className="feature-desc">Built on Next.js with edge-optimized delivery via Vercel.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <div className="feature-title">Fully Responsive</div>
            <div className="feature-desc">Looks great on every screen from mobile to widescreen.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <div className="feature-title">Auth Built-In</div>
            <div className="feature-desc">Register, log in, and manage your account with ease.</div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
