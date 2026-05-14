import { useState, useCallback } from 'react'

export function useSidebar(initialCollapsed = true) {
  const [collapsed, setCollapsed] = useState(initialCollapsed)

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev)
  }, [])

  const setSidebarCollapsed = useCallback((value: boolean) => {
    setCollapsed(value)
  }, [])

  return {
    collapsed,
    toggle,
    setSidebarCollapsed,
  }
}
