import SiteShell from '@/components/SiteShell'

export default function ContactPage() {
  return (
    <SiteShell>
      <style>{`
        .page-header { padding: clamp(3rem, 7vw, 5rem) 0 2rem; }
        .page-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .page-title {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--text);
          max-width: 24ch;
          margin-bottom: 1rem;
        }
        .page-intro {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 55ch;
        }
        .divider { border: none; border-top: 1px solid var(--border); margin: clamp(2rem, 5vw, 3.5rem) 0; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr; } }
        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
        }
        .contact-card .label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .contact-card .value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          line-height: 1.5;
        }
        .contact-card .note {
          font-size: 0.83rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
          line-height: 1.5;
        }
        .notice-block {
          background: var(--accent-faint);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.25rem 1.5rem;
          font-size: 0.93rem;
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 60ch;
        }
        .notice-block strong { color: var(--text); }
      `}</style>

      <div className="page-header">
        <div className="page-kicker">Contact</div>
        <h1 className="page-title">Visit the shop or get in touch.</h1>
        <p className="page-intro">
          Yue Woh Hop Kee is open year-round in Sai Ying Pun. Whether you are planning a visit, making a bulk enquiry,
          or just want to find out what is in stock this season, the details below will help you reach the right person.
        </p>
      </div>

      <hr className="divider" />

      <div className="contact-grid">
        <div className="contact-card">
          <div className="label">Address</div>
          <div className="value">Des Voeux Road West<br />Sai Ying Pun, Hong Kong</div>
          <div className="note">Western District, Hong Kong Island. Near Sai Ying Pun MTR Station.</div>
        </div>
        <div className="contact-card">
          <div className="label">Opening hours</div>
          <div className="value">Open year-round</div>
          <div className="note">The shop keeps consistent daily hours. Closed only on major public holidays.</div>
        </div>
        <div className="contact-card">
          <div className="label">Seasonal note</div>
          <div className="value">Lap mei season</div>
          <div className="note">Fresh-made preserved meats are available from around the eighth lunar month each year. Some products are only in stock during cooler months.</div>
        </div>
        <div className="contact-card">
          <div className="label">Production workshop</div>
          <div className="value">Tsuen Wan, New Territories</div>
          <div className="note">All sausages and cured meats are made at the shop&rsquo;s own workshop in Tsuen Wan, not off-site or outsourced.</div>
        </div>
      </div>

      <div className="notice-block">
        <strong>Note for bulk orders and trade enquiries:</strong> Please visit the shop in person or call ahead during opening hours.
        The family runs the shop without a dedicated sales team, so direct contact is the most reliable way to arrange a larger order
        or ask about specific product availability this season.
      </div>
    </SiteShell>
  )
}
