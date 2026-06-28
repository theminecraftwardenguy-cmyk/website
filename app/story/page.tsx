import SiteShell from '@/components/SiteShell'

export default function StoryPage() {
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
          max-width: 26ch;
          margin-bottom: 1rem;
        }
        .page-intro {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 60ch;
        }
        .divider { border: none; border-top: 1px solid var(--border); margin: clamp(2rem, 5vw, 3.5rem) 0; }
        .story-section { margin-bottom: clamp(2.5rem, 6vw, 4rem); }
        .story-section h2 {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 800;
          color: var(--text);
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .story-section p {
          font-size: 0.97rem;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 65ch;
          margin-bottom: 0.9rem;
        }
        .pull-quote {
          border-left: 3px solid var(--accent);
          padding: 0.75rem 1.25rem;
          margin: 1.5rem 0;
          font-size: 1.05rem;
          font-style: italic;
          color: var(--text);
          background: var(--accent-faint);
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
          max-width: 60ch;
        }
        .craft-steps {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin: 1.25rem 0;
        }
        .craft-steps li {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 0.4rem 0.9rem;
          font-size: 0.83rem;
          color: var(--text-muted);
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
          margin-top: 1.5rem;
        }
        @media (max-width: 700px) { .two-col { grid-template-columns: 1fr; } }
        .mini-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
        }
        .mini-card h3 { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .mini-card p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.65; }
      `}</style>

      <div className="page-header">
        <div className="page-kicker">History</div>
        <h1 className="page-title">Fifty years of craft, family, and endurance in Western District.</h1>
        <p className="page-intro">
          The story of Yue Woh Hop Kee begins in 1973, when a Dongguan-born craftsperson brought traditional preserved-meat skills to Hong Kong.
          What followed is a family history built through constant work, seasonal discipline, and a refusal to let the craft disappear.
        </p>
      </div>

      <hr className="divider" />

      <div className="story-section">
        <h2>Founded by Fang Yam Fan in 1973</h2>
        <p>
          The shop was established more than fifty years ago on Des Voeux Road West, Sai Ying Pun — then the centre of Hong Kong's dried seafood
          and cured goods trade. Fang Yam Fan, originally from Dongguan in Guangdong province, arrived with preserved-meat skills developed over years.
          She chose Western District because the neighbourhood was filled with shops handling dried goods, cured meats, and seafood — an environment
          where her craft could take root.
        </p>
        <p>
          The shop's name, Yue Woh Hop Kee (裕和合記), reflects the Cantonese tradition of embedding character and continuity into a business identity.
          In the decades that followed, the shop became a recognised name among residents and cooks in the area.
        </p>
      </div>

      <div className="story-section">
        <h2>The craft: no shortcut that works</h2>
        <p>
          Preserved-meat making at Yue Woh Hop Kee follows a seasonal rhythm. Production begins around the eighth lunar month, when cooler weather
          creates the right conditions for curing and drying. The shop operates its own workshop in Tsuen Wan, separate from the retail space.
        </p>
        <p>Each year, workers at the workshop begin before dawn. The full process involves:</p>
        <ul className="craft-steps">
          <li>Cutting and grinding the meat</li>
          <li>Mixing in seasoning and rose wine</li>
          <li>Stuffing the casings by hand</li>
          <li>Piercing the casing with precise force</li>
          <li>Tying with water reeds and coloured string</li>
          <li>Washing and hanging on bamboo poles</li>
          <li>Oven-drying for three to four days</li>
        </ul>
        <p>
          The piercing step alone takes years to master. Press too hard, and the hole is too large, letting the filling leak out. Press too lightly,
          and moisture remains inside, causing the sausage to spoil. These differences cannot be measured by a machine — they are felt through
          experience built over a decade of practice.
        </p>
        <div className="pull-quote">
          &ldquo;This kind of feel, you can&rsquo;t learn it in a year or two. It takes ten years, maybe more.
          The cold, the early mornings, the short season — this is what the trade demands.&rdquo;
        </div>
      </div>

      <div className="story-section">
        <h2>The family behind the counter</h2>
        <p>
          The shop's stewardship passed to Fu Chau Wing, who spent decades working inside the preserved-meat trade. Accounts of his work
          describe a life with almost no days off — opening the shop even on the morning of his son's wedding. The business was not just a livelihood;
          it was the structure around which family life was organised.
        </p>
        <p>
          His son, who studied and worked in banking in Australia before returning, came back not to inherit a comfortable business, but to help
          a father whose schedule left no room to slow down. His words were direct: &ldquo;He&rsquo;s getting older. The shop never closes.
          I was worried his body couldn&rsquo;t take it.&rdquo;
        </p>
      </div>

      <div className="story-section">
        <h2>Staying relevant in a changed city</h2>
        <p>
          Today, Yue Woh Hop Kee faces conditions that would have been unrecognisable to its founder. Climate change has shortened the window of
          cold weather that preserved-meat production depends on. Supply chain disruptions, rising ingredient costs, and changing eating habits have
          closed many traditional shops on the street where Yue Woh Hop Kee still operates.
        </p>
        <p>
          Rather than simply holding on, the younger generation has pushed toward new ideas. The shop introduced low-sugar sausage varieties to
          reach health-conscious customers. It has shared ingredient knowledge and recipes online to reconnect younger generations with traditional
          Hong Kong pantry culture. And it collaborated with a popular dessert shop to create preserved-meat ice cream — pairing lap cheong with
          peanut butter, and goose liver sausage with dark chocolate and a hint of rose wine.
        </p>
        <div className="two-col">
          <div className="mini-card">
            <h3>The ice cream collaboration</h3>
            <p>
              The lap cheong and peanut butter flavour worked because both ingredients share a deep, oily richness.
              The goose liver and dark chocolate version surprised people: the salty, fatty sausage softened the bitterness of the chocolate,
              and rose wine lifted the whole flavour.
            </p>
          </div>
          <div className="mini-card">
            <h3>The street then and now</h3>
            <p>
              When Yue Woh Hop Kee opened, Des Voeux Road West was lined with dried seafood, grocery, and cured goods shops.
              Most have since closed or transformed into cafés. The shop remains one of the few original tenants still in operation.
            </p>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem' }}>
          As the owner once said: &ldquo;If there comes a day when Hong Kong no longer has locally made sausages, that would be a real loss.&rdquo;
          That sense of responsibility — quiet, undemonstrative, consistent — runs through everything the shop does.
        </p>
      </div>
    </SiteShell>
  )
}
