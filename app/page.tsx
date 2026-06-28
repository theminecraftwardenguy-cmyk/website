import Link from 'next/link'
import SiteShell from '@/components/SiteShell'

export default function Home() {
  return (
    <SiteShell>
      <style>{`
        .hero {
          padding: clamp(3rem, 8vw, 6rem) 0 clamp(2rem, 5vw, 4rem);
        }
        .hero-eyebrow {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.25rem;
        }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--text);
          max-width: 22ch;
          margin-bottom: 1.25rem;
        }
        .hero-lead {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          color: var(--text-muted);
          max-width: 52ch;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .hero-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .divider { border: none; border-top: 1px solid var(--border); margin: clamp(2rem, 5vw, 4rem) 0; }
        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .section-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 1rem;
        }
        .section-body {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 62ch;
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
        }
        @media (max-width: 700px) { .two-col { grid-template-columns: 1fr; } }
        .info-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
        }
        .info-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 0.6rem; }
        .info-card p { font-size: 0.93rem; color: var(--text-muted); line-height: 1.65; }
        .highlight-block {
          background: var(--accent-faint);
          border-left: 3px solid var(--accent);
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
          padding: 1rem 1.25rem;
          margin-top: 1.25rem;
          font-size: 0.93rem;
          color: var(--text-muted);
          font-style: italic;
        }
        .stat-row {
          display: flex;
          gap: 2rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }
        .stat strong { display: block; font-size: 1.75rem; font-weight: 800; color: var(--text); }
        .stat span { font-size: 0.85rem; color: var(--text-muted); }
        .feature-list { list-style: none; padding: 0; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .feature-list li {
          padding-left: 1.25rem;
          position: relative;
          font-size: 0.93rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .feature-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
        }
      `}</style>

      <section className="hero">
        <div className="hero-eyebrow">Hong Kong Preserved Meats · Since 1973</div>
        <h1 className="hero-title">
          Over fifty years of handmade lap mei in the heart of Sai Ying Pun.
        </h1>
        <p className="hero-lead">
          Yue Woh Hop Kee is a family-run preserved-meat shop on Des Voeux Road West, known for its ceiling-high rows of hanging sausages,
          skilled seasonal craft, and a presence that has outlasted almost every neighbour on the old dried seafood street.
        </p>
        <div className="hero-actions">
          <Link href="/story" className="btn btn-primary">Read the story</Link>
          <Link href="/contact" className="btn btn-secondary">Visit or enquire</Link>
        </div>

        <div className="stat-row">
          <div className="stat"><strong>1973</strong><span>Year founded</span></div>
          <div className="stat"><strong>50+</strong><span>Years in operation</span></div>
          <div className="stat"><strong>Tsuen Wan</strong><span>Own production workshop</span></div>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="section-label">About the store</div>
        <h2 className="section-title">A shop that leaves an impression before you even buy anything.</h2>
        <p className="section-body">
          Walk through the door and the first thing you notice is the height of the space — and the sausages filling every inch of it.
          Rows of lap cheong, liver links, and cured meats hang from racks near the ceiling, red and glistening, forming what regulars describe
          as a wall of preserved meat. The air carries rose wine, marinated pork, and dried seasoning, a scent that sets Yue Woh Hop Kee apart
          from the moment you arrive.
        </p>
        <div className="highlight-block">
          &ldquo;The first time customers walk in, they are almost always stopped by the sight. Row after row of sausages, almost reaching the ceiling,
          gleaming and densely packed — it&rsquo;s unlike anything else on the street.&rdquo;
        </div>

        <div className="two-col">
          <div className="info-card">
            <h3>Sausages sorted by lean-to-fat ratio</h3>
            <p>
              The shop marks its lap cheong with coloured ties so customers can choose the richness they want:
              70%, 80%, 90% lean, right through to entirely lean pork. It is a simple system that shows how seriously the shop takes product consistency.
            </p>
          </div>
          <div className="info-card">
            <h3>Duck and goose liver sausages</h3>
            <p>
              The shop offers both duck and goose liver versions. Goose liver is richer, more delicate, and particularly prized for claypot rice.
              Combined with rose wine, the result has a layered aroma that regular customers come back for specifically.
            </p>
          </div>
          <div className="info-card">
            <h3>Hand production every season</h3>
            <p>
              Production begins around the eighth lunar month in the shop&rsquo;s own workshop in Tsuen Wan. Workers arrive at five in the morning to
              cut, mix, season, stuff, pierce, tie, wash, and oven-dry by hand. The sausages take three to four days to finish.
            </p>
          </div>
          <div className="info-card">
            <h3>New ideas alongside tradition</h3>
            <p>
              Under the next generation, the shop has introduced low-sugar sausages, shared recipes and knowledge online, and even collaborated
              with a dessert shop to create preserved-meat ice cream flavours — lap cheong with peanut butter, goose liver with dark chocolate.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="section-label">What this website covers</div>
        <h2 className="section-title">Introduction, history, and contact — with the e-store coming soon.</h2>
        <p className="section-body">
          This website covers the three core sections required by the project brief: an introduction to the store,
          its history and family story, and a contact page for enquiries and visits.
          The E-Store link in the navigation is reserved as a placeholder for future MShop integration.
        </p>
        <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
          <li><strong>Introduction</strong> — who Yue Woh Hop Kee is, what makes it special, and why it matters to Hong Kong food culture.</li>
          <li><strong>Our Story</strong> — the full family history, the craft process, and how the shop has adapted over five decades.</li>
          <li><strong>Contact</strong> — address, opening details, and enquiry information for visitors.</li>
          <li><strong>E-Store (reserved)</strong> — the MShop team will build the full product catalogue and shopping experience at this link.</li>
        </ul>
      </section>
    </SiteShell>
  )
}
