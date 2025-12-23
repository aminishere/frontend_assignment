import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"

export default function DashboardLayout({ children }) {
  return (
    <div className="relative flex h-screen">

      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <Sidebar />
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="h-16 bg-white">
          <Topbar />
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>

      {/* Horizontal divider*/}
      <div className="absolute top-16 left-0 w-full border-t border-gray-200" />

    </div>
  )
}
