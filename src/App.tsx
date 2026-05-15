import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { DiscoverPage } from './features/discover/pages/DiscoverPage'
import { PartyPackagesPage } from './features/party-packages/pages/PartyPackagesPage'
import { BuyDrinksPage } from './features/buy-drinks/pages/BuyDrinksPage'
import { OrderSummaryPage } from './features/order-summary/pages/OrderSummaryPage'
import { DashboardLayout } from './layouts/DashboardLayout'
import { useSidebar } from './shared/hooks/useSidebar'

function RouterContent() {
  const { collapsed, toggle, setSidebarCollapsed } = useSidebar(true)
  const location = useLocation()
  const isDiscoverRoute = location.pathname === '/' || location.pathname === '/discover'
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const syncSidebarForViewport = () => {
      const isDesktop = window.matchMedia('(min-width: 1280px)').matches
      setSidebarCollapsed(!(isDiscoverRoute && isDesktop))
    }

    syncSidebarForViewport()
    window.addEventListener('resize', syncSidebarForViewport)
    return () => window.removeEventListener('resize', syncSidebarForViewport)
  }, [isDiscoverRoute, setSidebarCollapsed])

  return (
    <Routes>
      <Route element={<DashboardLayout sidebarCollapsed={collapsed} onToggleSidebar={toggle} />}>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/party-packages" element={<PartyPackagesPage />} />
        <Route path="/buy-drinks" element={<BuyDrinksPage />} />
      </Route>
      <Route path="/order-summary" element={<OrderSummaryPage />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  )
}

export default App
