import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectedProfile } from '@/features/discover/data/discover.mock'
import { partyPackageEvents } from '@/features/party-packages/data/partyPackages.mock'
import { EventCard } from '@/features/party-packages/components/EventCard'
import { EventCardSkeleton } from '@/features/party-packages/components/EventCardSkeleton'
import { Icon } from '@/shared/ui/Icon'
import { GradientButton } from '@/shared/ui/GradientButton'
import ZoeAvatar from '@/assets/mini-avatar-zoya.png'
import DrinkThumbnail from '@/assets/drink-thumbnail.png'

export function PartyPackagesPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="flex-1 px-5 py-6 md:px-10 lg:px-16 lg:py-7">
      <header className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <PackageBreadcrumb />
          <SelectedPlanSummary />
        </div>
        <AccountSummary />
      </header>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[22px] font-semibold leading-tight text-brand-text">Tonight near you</h1>
        <EventSearch />
      </div>
      <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <EventCardSkeleton key={i} />)
          : partyPackageEvents.map((event) => <EventCard event={event} key={event.id} />)}
      </div>
    </section>
  )
}

function PackageBreadcrumb() {
  const navigate = useNavigate()
  return (
    <nav className="text-[12px] text-brand-muted" aria-label="Breadcrumb">
      <button
        type="button"
        onClick={() => navigate('/discover')}
        className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
      >
        Home
      </button>
      <span className="px-1" aria-hidden="true">
        /
      </span>
      <span>Party Package</span>
      <span className="px-1" aria-hidden="true">
        /
      </span>
      <strong className="font-semibold text-brand-text">Selected item</strong>
    </nav>
  )
}

function SelectedPlanSummary() {
  return (
    <div className="mt-5 flex max-w-[970px] items-center justify-between gap-4 rounded-[20px] bg-white/35 px-5 py-4">
      <div>
        <p className="text-[14px] font-semibold">Pick a plan you'd both enjoy</p>
        <div className="mt-3 flex items-center gap-2">
          <img className="size-9 rounded-full object-cover" src={ZoeAvatar} alt={`${selectedProfile.name} avatar`} />
          <span className="text-[14px] font-semibold">
            {selectedProfile.name}, {selectedProfile.age}
          </span>
          <span className="grid size-[24px] place-items-center rounded-full bg-brand-purple/10 text-brand-purple">
            <Icon name="circle-check" className="size-[16px]" />
          </span>
        </div>
      </div>
    </div>
  )
}

function EventSearch() {
  return (
    <label
      className="flex h-12 w-full max-w-[290px] items-center gap-3 rounded-full bg-white px-5 text-[13px] text-brand-text focus-within:ring-2 focus-within:ring-brand-purple"
      htmlFor="event-search"
    >
      <Icon name="search" className="size-5 shrink-0" />
      <span className="sr-only">Search events</span>
      <input
        id="event-search"
        className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-brand-text"
        placeholder="Search..."
        type="search"
      />
      <Icon name="mic" className="size-5 shrink-0" />
    </label>
  )
}

function AccountSummary() {
  return (
    <aside className="flex items-center gap-3 lg:pt-10" aria-label="Current user">
      <img className="size-[62px] rounded-full border-4 border-brand-sidebar object-cover" src={DrinkThumbnail} alt="Alen Markkram" />
      <div>
        <p className="text-[18px] font-medium text-brand-muted">Alen Markkram</p>
        <GradientButton className="mt-2 rounded-full px-5 py-2 text-[12px] font-semibold">
          Get Verified
        </GradientButton>
      </div>
    </aside>
  )
}
