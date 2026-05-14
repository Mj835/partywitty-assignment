import type { AppRoute } from '@/shared/types/routing'
import type { IconName } from '@/shared/ui/Icon'

export type NavItem = {
  icon: IconName
  label: string
  route?: AppRoute
}
