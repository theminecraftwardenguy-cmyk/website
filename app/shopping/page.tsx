import SiteShell from '@/components/SiteShell'

export default function ShoppingPage() {
  return (
    <SiteShell>
      <style>{`
        .placeholder-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          padding: 4rem 0;
        }
        .placeholder-inner {
          max-width: 480px;
          text-align: center;
        }
        .placeholder-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          opacity: 0.5;
        }
        .placeholder-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .placeholder-title {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-weight: 800;
          color: var(--text);
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .placeholder-body {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .placeholder-badge {
          display: inline-block;
          background: var(--surface);
          border: 1px dashed var(--border);
          border-radius: var(--radius-full);
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          color: var(--text-faint);
        }
      `}</style>

      <div className="placeholder-wrap">
        <div className="placeholder-inner">
          <div className="placeholder-icon">🛒</div>
          <div className="placeholder-kicker">E-Store</div>
          <h1 className="placeholder-title">Coming soon via MShop.</h1>
          <p className="placeholder-body">
            This page is reserved for the MShop e-commerce platform. The full product catalogue,
            ordering, and payment experience will be built here by the MShop team using their own
            design and technology.
          </p>
          <span className="placeholder-badge">No products, pricing, or payment on this page</span>
        </div>
      </div>
    </SiteShell>
  )
}
