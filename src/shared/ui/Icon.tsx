import {
  Bell,
  Bookmark,
  Calendar,
  Candy,
  MessageSquare,
  Check,
  ChevronDown,
  Clock,
  X,
  Pencil,
  Eye,
  Flame,
  Gavel,
  Hand,
  Heart,
  MapPin,
  Mic,
  Plus,
  RefreshCw,
  Flower2,
  Search,
  BadgeCheck,
  ScanFace,
  ShieldCheck,
  SwitchCamera,
  Sun,
  Sparkles,
  Users,
  Layers,
  Trash2,
  CircleCheck,
  Wallet,
  Star,
  ArrowUpRight
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'

export type IconName =
  | 'bell'
  | 'bookmark'
  | 'calendar'
  | 'chat-room'
  | 'check'
  | 'circle-check'
  | 'badge-check'
  | 'scan-face'
  | 'shield-check'
  | 'switch-camera'
  | 'sun'
  | 'sparkles'
  | 'users'
  | 'layers'
  | 'trash'
  | 'arrow-up-right'
  | 'chevron-down'
  | 'clock'
  | 'close'
  | 'edit'
  | 'eye'
  | 'flame'
  | 'gavel'
  | 'hand'
  | 'heart'
  | 'map-pin'
  | 'mic'
  | 'plus'
  | 'refresh'
  | 'rose'
  | 'search'
  | 'star'
  | 'wallet'
  | 'candy'

const iconMap = {
  bell: Bell,
  bookmark: Bookmark,
  calendar: Calendar,
  'chat-room': MessageSquare,
  check: Check,
  'circle-check': CircleCheck,
  'badge-check': BadgeCheck,
  'scan-face': ScanFace,
  'shield-check': ShieldCheck,
  'switch-camera': SwitchCamera,
  sun: Sun,
  sparkles: Sparkles,
  users: Users,
  layers: Layers,
  trash: Trash2,
  'arrow-up-right': ArrowUpRight,
  'chevron-down': ChevronDown,
  clock: Clock,
  close: X,
  edit: Pencil,
  eye: Eye,
  flame: Flame,
  gavel: Gavel,
  hand: Hand,
  heart: Heart,
  'map-pin': MapPin,
  mic: Mic,
  plus: Plus,
  refresh: RefreshCw,
  rose: Flower2,
  search: Search,
  star: Star,
  wallet: Wallet,
  candy: Candy,
}

export function Icon({
  name,
  className = 'size-5',
  strokeWidth = 1.9,
  ...props
}: LucideProps & { name: IconName }) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent
      className={className}
      strokeWidth={strokeWidth}
      {...props}
    />
  )
}
