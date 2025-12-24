"use client";
import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"
import { SearchProvider } from "@/components/context/SearchContext";

export default function DashboardLayout({ children }) {
  return (
    <SearchProvider>
    <div className="relative flex h-screen">

      {/* Sidebar */}
      <aside className="w-64 border-r bg-gray-50">
        <Sidebar />
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="h-16 bg-white">
          <Topbar />
        </header>

        <main className="flex-1 overflow-y-auto p-0.1 bg-gray-100">
          {children}
        </main>
      </div>

      {/* Horizontal divider*/}
      <div className="absolute top-16 left-0 w-full border-t border-gray-200" />

    </div>
    </SearchProvider>
  )
}
