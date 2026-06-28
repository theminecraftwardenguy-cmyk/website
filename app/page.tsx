import Link from 'next/link'
import Image from 'next/image'
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
          max-width: 24ch;
          margin-bottom: 1.25rem;
        }
        .hero-lead {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          color: var(--text-muted);
          max-width: 54ch;
          line-height: 1.75;
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
          line-height: 1.8;
          max-width: 64ch;
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
        .district-banner {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.75rem 2rem;
          margin-top: 2.5rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (max-width: 700px) { .district-banner { grid-template-columns: 1fr; } }
        .district-banner-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.4rem;
        }
        .district-banner-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text);
          line-height: 1.3;
        }
        .district-banner-body {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ── Cat Manager ── */
        .cat-manager-card {
          margin-top: 2.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.75rem;
          max-width: 520px;
        }
        @media (max-width: 520px) {
          .cat-manager-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
        .cat-manager-photo {
          flex-shrink: 0;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--border);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          position: relative;
        }
        .cat-manager-text {}
        .cat-manager-badge {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-faint);
          border-radius: 99px;
          padding: 0.2rem 0.6rem;
          margin-bottom: 0.4rem;
        }
        .cat-manager-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text);
          margin-bottom: 0.3rem;
        }
        .cat-manager-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>

      <section className="hero">
        <div className="hero-eyebrow">Sheung Wan · Dried Goods &amp; Preserved Meats · Since 1973</div>
        <h1 className="hero-title">
          A family shop keeping the flavours of Hong Kong&apos;s waterfront streets alive.
        </h1>
        <p className="hero-lead">
          Yue Woh Hop Kee is a long-standing dried seafood and provisions shop in Sheung Wan —
          a neighbourhood that once defined Hong Kong&apos;s trading-port identity. The shop&apos;s unchanged
          storefront, handmade lap mei, and deep roots in Cantonese cooking make it one of the last
          quiet anchors of a merchant heritage that has nearly disappeared from the street.
        </p>
        <div className="hero-actions">
          <Link href="/story" className="btn btn-primary">Read the story</Link>
          <Link href="/contact" className="btn btn-secondary">Visit or enquire</Link>
        </div>
        <div className="stat-row">
          <div className="stat"><strong>1973</strong><span>Year founded</span></div>
          <div className="stat"><strong>50+</strong><span>Years in operation</span></div>
          <div className="stat"><strong>Sheung Wan</strong><span>Historic waterfront district</span></div>
          <div className="stat"><strong>Tsuen Wan</strong><span>Own production workshop</span></div>
        </div>

        {/* Cat Manager card */}
        <div className="cat-manager-card">
          <div className="cat-manager-photo">
            <Image
              src="/cat-manager.png"
              alt="The shop cat, our esteemed Cat Manager"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="96px"
            />
          </div>
          <div className="cat-manager-text">
            <span className="cat-manager-badge">Meet the team</span>
            <div className="cat-manager-name">Cat Manager</div>
            <p className="cat-manager-desc">
              Oversees daily operations, quality control, and nap scheduling.
              Has been with us since the beginning — or at least acts like it.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section data-reveal>
        <div className="section-label">The neighbourhood</div>
        <h2 className="section-title">A shop that carries the memory of an entire district.</h2>
        <p className="section-body">
          Sheung Wan grew as Hong Kong&apos;s commercial and trading heart — its streets lined with shops
          dealing in dried seafood, preserved goods, herbs, and provisions that supplied both
          households and the port. Most of those shops are gone. Yue Woh Hop Kee remains, its
          shelves and storefront unchanged, still operating on the same commercial rhythms that
          defined the neighbourhood a century ago.
        </p>
        <p className="section-body" style={{ marginTop: '0.9rem' }}>
          To walk into the shop is to encounter a sensory record of what this part of the city
          once smelled, felt, and traded in — rose wine, cured pork, dried seasoning, the weight
          of a real ingredient culture. These are not preserved as nostalgia. They are kept alive
          because the food they produce still matters.
        </p>
        <div className="district-banner" data-reveal>
          <div>
            <div className="district-banner-label">Cultural anchor</div>
            <div className="district-banner-title">Preserving the habits and flavours of Hong Kong&apos;s merchant streets</div>
          </div>
          <p className="district-banner-body">
            As Sheung Wan&apos;s old trading character has given way to redevelopment, cafés, and
            galleries, Yue Woh Hop Kee has continued supplying the Cantonese cooking staples —
            lap cheong, waxed duck, liver sausage — that connect households to a food culture
            decades in the making. The shop is not a museum. It simply refuses to stop.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div data-reveal>
          <div className="section-label">About the store</div>
          <h2 className="section-title">A shop that leaves an impression before you even buy anything.</h2>
          <p className="section-body">
            Walk through the door and the first thing you notice is the height of the space — and
            the sausages filling every inch of it. Rows of lap cheong, liver links, and cured meats
            hang from racks near the ceiling, red and glistening, forming what regulars describe as
            a wall of preserved meat. The air carries rose wine, marinated pork, and dried seasoning,
            a scent that sets Yue Woh Hop Kee apart from the moment you arrive.
          </p>
          <div className="highlight-block">
            &ldquo;The first time customers walk in, they are almost always stopped by the sight.
            Row after row of sausages, almost reaching the ceiling, gleaming and densely packed —
            it&rsquo;s unlike anything else on the street.&rdquo;
          </div>
        </div>

        <div className="two-col" data-reveal-stagger>
          <div className="info-card">
            <h3>Sausages sorted by lean-to-fat ratio</h3>
            <p>
              The shop marks its lap cheong with coloured ties so customers can choose the richness
              they want: 70%, 80%, 90% lean, right through to entirely lean pork. A simple system
              that shows how seriously the shop takes product consistency.
            </p>
          </div>
          <div className="info-card">
            <h3>Duck and goose liver sausages</h3>
            <p>
              The shop offers both duck and goose liver versions. Goose liver is richer and
              particularly prized for claypot rice. Combined with rose wine, the result has a
              layered aroma that regular customers return for specifically.
            </p>
          </div>
          <div className="info-card">
            <h3>Hand production every season</h3>
            <p>
              Production begins around the eighth lunar month in the Tsuen Wan workshop. Workers
              arrive at five in the morning to cut, mix, season, stuff, pierce, tie, wash, and
              oven-dry by hand. The sausages take three to four days to finish.
            </p>
          </div>
          <div className="info-card">
            <h3>New ideas alongside tradition</h3>
            <p>
              The next generation has introduced low-sugar sausages, shared recipes online, and
              collaborated with a dessert shop on preserved-meat ice cream — lap cheong with
              peanut butter, goose liver with dark chocolate.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
