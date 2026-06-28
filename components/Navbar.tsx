'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
  { href: '/shopping', label: '🛒 E-Store' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{
      background: '#3d1a00', padding: '0 1.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 56, position: 'sticky', top: 0, zIndex: 100,
      boxShadow: '0 2px 8px rgba(61,26,0,0.25)',
    }}>
      <Link href="/" style={{ fontFamily: 'Noto Serif HK, serif', color: '#f5c842', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
        裕和合記
      </Link>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            color: pathname === l.href ? '#f5c842' : '#f5e6c8',
            textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: 6,
            fontSize: '0.875rem', fontWeight: pathname === l.href ? 700 : 400,
            background: pathname === l.href ? 'rgba(245,200,66,0.15)' : 'transparent',
            borderBottom: l.href === '/shopping' ? '1px dashed rgba(245,200,66,0.4)' : 'none',
          }}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
