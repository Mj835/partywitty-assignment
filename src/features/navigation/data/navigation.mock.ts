import type { NavItem } from '@/features/navigation/types'

export const navItems = [
  { icon: 'calendar', label: 'My Plan', route: 'party-packages' },
  { icon: 'gavel', label: 'My Bids' },
  { icon: 'refresh', label: 'My Booking' },
  { icon: 'search', label: 'Search' },
  { icon: 'chat-room', label: 'Chat Room' },
  { icon: 'bell', label: 'Notifications' },
  { icon: 'bookmark', label: 'Save & Like' },
  { icon: 'wallet', label: 'Rewards' },
] satisfies NavItem[]
