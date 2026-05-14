import type { DrinkItem, PromptItem } from '@/features/buy-drinks/types'
import DryMartini from '@/assets/figma-dry-martini.png'
import Cosmopolitan from '@/assets/figma-cosmopolitan.png'
import MaiTai from '@/assets/figma-mai-tai.png'
import WineGlass from '@/assets/figma-wine-glass.png'

export const drinkItems = [
  {
    id: 'dry-martini-1',
    name: 'Dry Martini',
    image: DryMartini,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'MOST LIKELY TO GET ACCEPTED',
    badgeTone: 'green',
    price: '₹999',
    highlighted: true,
  },
  {
    id: 'cosmopolitan-1',
    name: 'Cosmopolitan',
    image: Cosmopolitan,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'Essy Choose',
    badgeTone: 'pink',
    price: '₹199',
  },
  {
    id: 'mai-tai-1',
    name: 'Mai Tai',
    image: MaiTai,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'Most Popular',
    badgeTone: 'green',
    price: '₹899',
  },
  {
    id: 'wine-glass-1',
    name: 'Wine Glass',
    image: WineGlass,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'Make An Impression',
    badgeTone: 'green',
    price: '₹2199',
  },
  {
    id: 'dry-martini-2',
    name: 'Dry Martini',
    image: DryMartini,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'MOST LIKELY TO GET ACCEPTED',
    badgeTone: 'green',
    price: '₹999',
    highlighted: true,
  },
  {
    id: 'cosmopolitan-2',
    name: 'Cosmopolitan',
    image: Cosmopolitan,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'Essy Choose',
    badgeTone: 'pink',
    price: '₹199',
  },
  {
    id: 'mai-tai-2',
    name: 'Mai Tai',
    image: MaiTai,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'Most Popular',
    badgeTone: 'green',
    price: '₹899',
  },
  {
    id: 'wine-glass-2',
    name: 'Wine Glass',
    image: WineGlass,
    ingredients: 'Mint, Lime, Electric Glow',
    badge: 'Make An Impression',
    badgeTone: 'green',
    price: '₹2199',
  },
] satisfies DrinkItem[]

export const promptItems = [
  {
    id: 'wave',
    icon: 'hand',
    label: 'Wave',
    price: 'FREE',
  },
  {
    id: 'rose',
    icon: 'rose',
    label: 'Send a Rose',
    price: '₹10',
  },
  {
    id: 'chocolate',
    icon: 'candy',
    label: 'Chocolate',
    price: '₹25',
  },
] satisfies PromptItem[]
