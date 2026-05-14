import type { IconName } from '@/shared/ui/Icon'

export type DrinkItem = {
  id: string
  name: string
  image: string
  ingredients: string
  badge: string
  badgeTone: 'green' | 'pink'
  price: string
  highlighted?: boolean
}

export type PromptItem = {
  id: string
  icon: IconName | 'candy'
  label: string
  price: string
}
