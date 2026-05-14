import Logo from '@/assets/Logo.png'
import MobLogo from '@/assets/MobLogo.png'

type BrandMarkProps = {
  collapsed?: boolean
  onNavigateHome?: () => void
}

export function BrandMark({ collapsed = false, onNavigateHome }: BrandMarkProps) {
  return (
    <button
      type="button"
      onClick={onNavigateHome}
      className="flex items-center rounded-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
    >
      {/* Desktop View: Toggles between MobLogo and Logo */}
      <img
        src={collapsed ? MobLogo : Logo}
        alt="partywitty logo"
        className={`hidden transition-all duration-300 lg:block ${collapsed ? 'h-[37.5px] w-[64px]' : 'h-[30.382px] w-[224.057px]'} object-contain`}
      />
      {/* Mobile/Responsive View: Always show full Logo */}
      <img
        src={Logo}
        alt="partywitty logo"
        className="block h-[26px] w-auto object-contain lg:hidden"
      />
    </button>
  )
}
