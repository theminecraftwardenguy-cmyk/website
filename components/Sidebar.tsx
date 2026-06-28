'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navBase: { href: string; label: string; auth?: 'guest' | 'user' }[] = [
  { href: '/', label: 'Home' },
  { href: '/get-started', label: 'Get Started' },
  { href: '/learn-more', label: 'Learn More' },
  { href: '/login', label: 'Log in', auth: 'guest' },
  { href: '/register', label: 'Register', auth: 'guest' },
  { href: '/profile', label: 'Profile', auth: 'user' },
  { href: '/delete-account', label: 'Delete Account', auth: 'user' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const u = localStorage.getItem('wh_user')
    if (u) setUser(JSON.parse(u))
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem('wh_user')
    setUser(null)
    window.location.href = '/'
  }

  const links = navBase.filter(l =>
    !l.auth || (l.auth === 'guest' && !user) || (l.auth === 'user' && user)
  )

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
        }
        .brand-logo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 1.15rem;
          flex-shrink: 0;
        }
        .brand-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
        }
        .nav { display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .nav-link {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xl);
          color: var(--text-muted);
          transition: background var(--transition), color var(--transition);
          font-size: 0.95rem;
        }
        .nav-link:hover, .nav-link.active {
          background: var(--accent-faint);
          color: var(--text);
        }
        .nav-link.danger { color: #f87171; }
        .nav-link.danger:hover { background: rgba(239,68,68,0.12); color: #fca5a5; }
        .logout-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xl);
          color: var(--text-muted);
          transition: background var(--transition), color var(--transition);
          font-size: 0.95rem;
          margin-top: auto;
        }
        .logout-btn:hover { background: rgba(239,68,68,0.12); color: #fca5a5; }
        .user-badge {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.04);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
        }
        .user-badge-name { font-weight: 600; font-size: 0.9rem; }
        .user-badge-email { font-size: 0.78rem; color: var(--text-faint); margin-top: 2px; }
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
          <div className="brand-logo">W</div>
          <span className="brand-title">Website Hero</span>
        </Link>

        <nav className="nav">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? ' active' : ''}${l.href === '/delete-account' ? ' danger' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {user && (
            <button className="logout-btn" onClick={() => { setOpen(false); handleLogout(); }}>
              Log out
            </button>
          )}
        </nav>

        {user && (
          <div className="user-badge">
            <div className="user-badge-name">{user.name}</div>
            <div className="user-badge-email">{user.email}</div>
          </div>
        )}
      </aside>
    </>
  )
}
