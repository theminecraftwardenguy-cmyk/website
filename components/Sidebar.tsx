'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          background: var(--surface);
          border-right: 1px solid var(--border);
          padding: 2rem 1.25rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          text-decoration: none;
          transition: opacity 160ms cubic-bezier(0.16,1,0.3,1);
        }
        .brand:hover { opacity: 0.8; }
        .brand-logo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 1.05rem;
          flex-shrink: 0;
        }
        .brand-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.25;
        }
        .brand-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 400;
        }
        .nav { display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .nav-link {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xl);
          color: var(--text-muted);
          transition: background var(--transition), color var(--transition), transform var(--transition);
          font-size: 0.95rem;
          text-decoration: none;
        }
        .nav-link:hover {
          background: var(--accent-faint);
          color: var(--text);
          transform: translateX(3px);
        }
        .nav-link.active {
          background: var(--accent-faint);
          color: var(--text);
          font-weight: 600;
        }
        .nav-link.store-link {
          margin-top: auto;
          border: 1px dashed var(--border);
          color: var(--text-faint);
          font-size: 0.88rem;
        }
        .nav-link.store-link:hover {
          background: var(--accent-faint);
          color: var(--text-muted);
          border-color: var(--accent);
          transform: translateX(3px);
        }
        .nav-spacer { flex: 1; }
        .hamburger {
          display: none;
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 100;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0.5rem;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.2s;
        }
        .overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 98;
        }
        @media (max-width: 900px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            z-index: 99;
            transform: translateX(-100%);
            transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
          }
          .sidebar.open { transform: translateX(0); }
          .hamburger { display: flex; }
          .overlay { display: block; }
        }
      `}</style>

      <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(o => !o)}>
        <span /><span /><span />
      </button>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <aside className={`sidebar${open ? ' open' : ''}`}>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-logo">裕</div>
          <div>
            <div className="brand-title">Yue Woh Hop Kee</div>
            <div className="brand-sub">裕和合記臘味</div>
          </div>
        </Link>

        <nav className="nav">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="nav-spacer" />
          <Link
            href="/shopping"
            className={`nav-link store-link${pathname === '/shopping' ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            🛒 E-Store
          </Link>
        </nav>
      </aside>
    </>
  )
}
