import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@/shared/ui/Icon'
import { AvatarStack } from '@/shared/ui/AvatarStack'
import { Pill } from '@/shared/ui/Pill'
import type { PartyPackageEvent } from '@/features/party-packages/types'

type EventCardProps = {
  event: PartyPackageEvent
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  const navigate = useNavigate()

  return (
    <article
      className="overflow-hidden rounded-[24px] bg-white/30 shadow-[0_18px_45px_rgba(22,17,34,0.08)]"
    >
      <button
        type="button"
        onClick={() => navigate('/buy-drinks')}
        className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        aria-label={`Buy drinks for ${event.title}`}
      >
        <EventHero event={event} />
        <EventDetails event={event} />
      </button>
    </article>
  )
})

function EventHero({ event }: EventCardProps) {
  return (
    <div className="relative h-[300px] overflow-hidden sm:h-[350px] xl:h-[375px]">
      <img className="absolute inset-0 size-full object-cover" src={event.image} alt={`${event.title} party event`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,10,0.08),rgba(5,5,10,0.12)_42%,rgba(5,5,10,0.72))]" />
      <Pill className="absolute left-5 top-3 bg-brand-success/20 text-brand-success">{event.status}</Pill>
      <Pill className="absolute right-3 top-3 bg-white/40 text-white">{event.matchLabel}</Pill>
      <div className="absolute inset-x-5 bottom-8 flex items-end justify-between gap-3 text-white">
        <div className="min-w-0">
          <p className="text-[12px] uppercase leading-[18px] tracking-widest">{event.clubType}</p>
          <div className="mt-1 flex items-center gap-3">
            <h3 className="truncate text-[24px] font-bold leading-tight">{event.title}</h3>
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[12px] font-bold">
              <Icon name="star" className="size-3 text-[#ffcf4a]" />
              {event.rating}
            </span>
          </div>
        </div>
        <p className="shrink-0 text-right text-[14px] leading-tight">
          {event.day}
          <br />
          {event.time}
        </p>
      </div>
    </div>
  )
}

function EventDetails({ event }: EventCardProps) {
  return (
    <div className="relative px-5 pb-5 pt-8">
      <SocialProof event={event} />
      <VenueInfo event={event} />
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <AvatarStack avatars={event.circleAvatars} countLabel={event.circleCount} />
          <span className="truncate text-[12px] text-brand-muted">Your Circle</span>
        </div>
        <p className="shrink-0 text-[18px] text-brand-success">{event.discount}</p>
      </div>
    </div>
  )
}

function SocialProof({ event }: EventCardProps) {
  return (
    <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-accent-gradient py-1.5 pl-2 pr-3 text-[12px] text-white shadow-lg">
      <img className="size-[19px] rounded-full object-cover" src={event.socialProofAvatar} alt="" />
      <span>{event.socialProof}</span>
    </div>
  )
}

function VenueInfo({ event }: EventCardProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon name="map-pin" className="size-[22px] shrink-0 text-brand-muted" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold text-[#131b2e]">{event.venue}</p>
        <p className="mt-1 truncate text-[12px] text-brand-muted">
          {event.location} - {event.distance}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="grid size-8 shrink-0 place-items-center rounded-full bg-white/20 text-brand-muted"
      >
        <Icon name="chevron-down" className="size-4" />
      </span>
    </div>
  )
}
