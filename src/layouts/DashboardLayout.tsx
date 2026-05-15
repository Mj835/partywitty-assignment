import type { CSSProperties } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/features/navigation/components/Sidebar'
import PageBg from '@/assets/PageBg.png'

type DashboardLayoutProps = {
  sidebarCollapsed: boolean
  onToggleSidebar: () => void
}

export function DashboardLayout({
  sidebarCollapsed,
  onToggleSidebar,
}: DashboardLayoutProps) {
  const layoutStyle: CSSProperties & { [key: string]: string | number } = {
    backgroundImage: `url(${PageBg})`,
    '--sidebar-width': sidebarCollapsed ? '105px' : '310px'
  }

  return (
    <main
      className="min-h-svh overflow-x-hidden bg-white bg-cover bg-center bg-no-repeat"
      style={layoutStyle}
    >
      <div className="flex min-h-svh flex-col lg:flex-row">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={onToggleSidebar}
        />
        <div className="min-w-0 flex-1 lg:pl-(--sidebar-width) transition-[padding] duration-500 ease-sidebar-slide">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
