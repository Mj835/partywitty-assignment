import { useLocation, useNavigate } from 'react-router-dom'
import { BrandMark } from '@/shared/components/BrandMark'
import { Icon } from '@/shared/ui/Icon'
import { navItems } from '@/features/navigation/data/navigation.mock'
import MenuIcon from '@/assets/Menu.png'
import MoreIcon from '@/assets/More.png'
import CrownIcon from '@/assets/Crown.png'
import UserAvatar from '@/assets/drink-thumbnail.png'

type SidebarProps = {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside
      className={`z-40 flex shrink-0 flex-col justify-between bg-[#f8f8f8]/95 transition-[width,padding,height] duration-500 ease-sidebar-slide shadow-xs lg:bg-[rgba(241,241,241,0.28)]  ${collapsed
        ? 'relative h-[70px] w-full lg:h-screen lg:w-[105px] lg:pt-[30px]'
        : 'fixed inset-0 h-screen w-full pt-[30px] lg:relative lg:inset-auto lg:w-[310px]'
        }`}
    >
      <div className={`flex min-h-0 flex-col px-4 lg:px-5 ${collapsed ? 'h-full gap-5 lg:h-auto' : 'gap-5'}`}>
        <div className={`relative flex items-center transition-all duration-500 ease-sidebar-slide ${collapsed ? 'h-[70px] justify-start lg:h-[38px]' : 'justify-between'}`}>
          <BrandMark collapsed={collapsed} onNavigateHome={() => navigate('/discover')} />
          {!collapsed && <SidebarToggleButton collapsed={collapsed} onToggle={onToggle} />}
        </div>
        <nav className={`min-h-0 overflow-y-auto overflow-x-hidden ${collapsed ? 'hidden lg:block' : 'block'}`} aria-label="Primary navigation">
          <ul className={`grid ${collapsed ? 'grid-cols-1 gap-2' : 'gap-2 sm:grid-cols-2 lg:grid-cols-1'}`}>
            {navItems.map((item) => {
              const routePath = item.route ? `/${item.route}` : '#'
              const isCurrent = pathname === routePath
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    title={collapsed ? item.label : undefined}
                    aria-label={collapsed ? item.label : undefined}
                    aria-current={isCurrent ? 'page' : undefined}
                    onClick={() => item.route && navigate(`/${item.route}`)}
                    className={`flex h-[50px] cursor-pointer items-center rounded-full text-[18px] font-normal leading-normal text-brand-text transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${collapsed ? 'w-full px-[15px] lg:w-[65px] lg:justify-center lg:px-[15px]' : 'w-full gap-[15px] px-[15px] py-[10px]'
                      } ${isCurrent ? 'bg-white/35' : ''}`}
                  >
                    <Icon name={item.icon} className="size-[30px] shrink-0 text-brand-text" />
                    <span
                      className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ease-out ${collapsed ? 'lg:max-w-0 lg:opacity-0' : 'max-w-[185px] opacity-100'
                        }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <MembershipStrip collapsed={collapsed} onToggle={onToggle} />
      {collapsed && <SidebarToggleButton collapsed={collapsed} onToggle={onToggle} />}
    </aside>
  )
}

function SidebarToggleButton({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <button
      className={`grid size-[34px] cursor-pointer shrink-0 place-items-center rounded-full bg-brand-sidebar-muted p-[5px] text-brand-sidebar shadow-md transition duration-300 ease-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sidebar ${collapsed
        ? 'absolute right-4 top-[18px] lg:left-full lg:right-auto lg:top-[7%] lg:z-100 lg:-translate-x-1/2'
        : 'absolute right-4 top-2 lg:relative lg:inset-auto lg:z-50'
        }`}
      type="button"
      aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
      aria-expanded={!collapsed}
      onClick={onToggle}
      title={collapsed ? 'Expand navigation' : 'Collapse navigation'}
    >
      <img
        src={MenuIcon}
        alt=""
        className="size-[24px] transition-transform duration-500 ease-sidebar-slide"
      />
    </button>
  )
}

function MembershipStrip({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  if (collapsed) {
    return (
      <section className="hidden w-full flex-col items-center gap-[13px] bg-linear-to-r from-[rgba(116,100,228,0.1)] to-[rgba(181,167,139,0.1)] p-[10px] lg:flex" aria-label="Membership status">
        <button
          type="button"
          className="grid size-[24px] cursor-pointer place-items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          aria-label="More options"
          onClick={onToggle}
        >
          <img src={MoreIcon} className="size-[24px]" alt="More" />
        </button>
        <div className="relative">
          <img className="size-[44px] rounded-full object-cover" src={UserAvatar} alt="Zeeshan Ahmad" />
          <div className="absolute -left-1 -top-1 grid size-5 place-items-center rounded-full bg-[#111111] shadow-sm">
            <img src={CrownIcon} className="size-3.5 object-contain" alt="" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-linear-to-r from-[rgba(116,100,228,0.1)] to-[rgba(181,167,139,0.1)] p-[10px]" aria-label="Membership status">
      <button
        type="button"
        className="flex h-[26px] w-full cursor-pointer items-center gap-[21px] rounded-full text-left text-[18px] font-normal leading-normal text-brand-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        onClick={onToggle}
      >
        <img src={MoreIcon} className="size-[24px]" alt="More" />
        <span>More</span>
      </button>
      <div className="mt-[5px] flex h-[43px] w-full items-center gap-[3px] rounded-[2px] bg-membership-card px-[9px] py-[5px] text-white">
        <img src={CrownIcon} className="size-[36px] object-contain" alt="" aria-hidden="true" />
        <div className="whitespace-nowrap">
          <p className="text-[11px] font-normal leading-[14px] text-white">Corporate Employee Offer</p>
          <p className="bg-linear-to-r from-[#f8e2b9] to-[#9d7827] bg-clip-text text-[12px] font-semibold capitalize leading-normal text-transparent">1 Month For ₹1</p>
        </div>
      </div>
      <div className="mt-[5px] flex h-[37px] w-full items-center justify-between rounded-full">
        <div className="flex items-center gap-[5px]">
          <img className="size-[36px] rounded-full object-cover" src={UserAvatar} alt="Zeeshan Ahmad" />
          <div className="min-w-0">
            <p className="truncate text-[14px] font-normal leading-normal tracking-[-0.28px] text-brand-text">Zeeshan Ahmad</p>
            <p className="truncate py-[3px] text-[10px] font-normal capitalize leading-normal text-brand-muted">Indus Global Pvt Ltd Admin</p>
          </div>
        </div>
        <Icon name="arrow-up-right" className="size-[16px] text-brand-text" />
      </div>
    </section>
  )
}
