import Sidebar from './Sidebar'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  )
}
