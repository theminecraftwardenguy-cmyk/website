import Sidebar from './Sidebar'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        .page-shell {
          display: flex;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          background: linear-gradient(135deg, var(--surface2) 0%, #0f1623 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          min-height: 100vh;
        }
        @media (max-width: 900px) {
          .main-content {
            padding-top: 5rem;
          }
        }
      `}</style>
      <div className="page-shell">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </>
  )
}
