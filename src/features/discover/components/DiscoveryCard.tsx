import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon, type IconName } from '@/shared/ui/Icon'
import { GradientButton } from '@/shared/ui/GradientButton'
import type { PartyProfile } from '@/features/discover/types'

export function DiscoveryCard({ person }: { person: PartyProfile }) {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <article className="relative w-full max-w-[462px] rounded-[30px] bg-white/30 pb-5 pt-[24px] shadow-[0_35px_80px_rgba(25,22,45,0.10)] backdrop-blur-2xl">
        <div className="absolute inset-x-[50px] top-0 h-[76px] overflow-hidden rounded-t-[28px] opacity-75">
          <img className="size-full object-cover object-top" src={person.image} alt="" />
          <div className="absolute inset-0 bg-white/10" />
        </div>
        <div className="absolute inset-x-[28px] top-[10px] h-[82px] overflow-hidden rounded-t-[29px] opacity-85">
          <img className="size-full object-cover object-top" src={person.image} alt="" />
          <div className="absolute inset-0 bg-white/5" />
        </div>
        <div className="relative z-10 h-[min(648px,calc(100svh-220px))] min-h-[500px] overflow-hidden rounded-[30px] max-[430px]:min-h-[460px]">
          <img className="absolute inset-0 size-full object-cover" src={person.image} alt={`${person.name} profile`} />
          <div className="absolute inset-0 bg-[linear-gradient(190deg,rgba(75,22,76,0.2)_16%,rgba(75,22,76,0.01)_25%),linear-gradient(181deg,rgba(75,22,76,0)_56%,rgba(75,22,76,0.5)_68%,rgb(13,3,11)_88%)]" />
          <ProgressBars />
          <div className="absolute left-5 top-8 flex h-[24px] items-center gap-1 rounded-full bg-white/20 px-2 text-[9px] capitalize text-white">
            <Icon name="flame" className="size-3 text-[#d9ff83]" />
            <span>{person.badge}</span>
          </div>
          <div className="absolute inset-x-5 bottom-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="truncate text-[24px] font-medium capitalize leading-tight text-white">
                    {person.name}, {person.age}
                  </h1>
                  <span className="grid size-[24px] shrink-0 place-items-center rounded-full bg-white/20 text-white">
                    <Icon name="circle-check" className="size-[16px]" />
                  </span>
                </div>
                <p className="mt-1 text-[14px] text-white/60">{person.mutuals}</p>
              </div>
              <GradientButton className="flex h-9 items-center gap-1 rounded-full px-[18px] text-[14px] font-medium focus-visible:ring-white">
                <Icon name="plus" className="size-4" />
                Mate
              </GradientButton>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {person.tags.map((tag) => (
                <li className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[12px] text-white" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-3 flex h-[48px] items-center justify-center gap-5">
          <ActionButton label="Dismiss profile" icon="close" variant="muted" />
          <GradientButton
            className="flex h-12 items-center gap-2 rounded-full px-6 text-[18px] font-medium"
            onClick={() => setShowInviteModal(true)}
          >
            <Icon name="flame" className="size-5" />
            Go Tonight
          </GradientButton>
          <ActionButton label="Like profile" icon="heart" variant="primary" />
        </div>
      </article>
      {showInviteModal && (
        <GoTonightModal
          person={person}
          onClose={() => setShowInviteModal(false)}
          onMakeMove={() => navigate('/party-packages')}
        />
      )}
    </>
  )
}

function GoTonightModal({
  person,
  onClose,
  onMakeMove,
}: {
  person: PartyProfile
  onClose: () => void
  onMakeMove: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-3 py-8 backdrop-blur-[1px]" role="dialog" aria-modal="true" aria-labelledby="go-tonight-title">
      <div className="relative w-full max-w-[371px] rounded-[12px] bg-[#efefef] px-5 pb-5 pt-[22px] shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:max-w-[420px]">
        <button
          type="button"
          aria-label="Close invite modal"
          onClick={onClose}
          className="absolute right-[-13px] top-[-10px] grid size-[26px] cursor-pointer place-items-center rounded-full bg-[#efefff] text-brand-purple shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          <Icon name="close" className="size-[19px]" />
        </button>
        <h2 id="go-tonight-title" className="text-[24px] font-semibold leading-[30px] text-brand-muted">
          You chose her
        </h2>
        <p className="mt-1 text-[12px] leading-[18px] text-brand-muted">
          You're about to send her a <span className="text-brand-secondary">special invite</span>
        </p>

        <div className="relative mt-[14px] h-[350px] overflow-hidden rounded-[18px] sm:h-[382px]">
          <img className="absolute inset-0 size-full object-cover" src={person.image} alt={`${person.name} invite preview`} />
          <div className="absolute inset-0 bg-[linear-gradient(190deg,rgba(75,22,76,0.08)_10%,rgba(75,22,76,0)_34%),linear-gradient(181deg,rgba(75,22,76,0)_50%,rgba(75,22,76,0.48)_70%,rgb(13,3,11)_92%)]" />
          <div className="absolute left-[14px] top-[13px] flex h-[22px] items-center gap-1 rounded-full bg-white/20 px-2 text-[9px] capitalize text-white backdrop-blur">
            <Icon name="flame" className="size-3 text-white" />
            <span>Casual Fun</span>
          </div>
          <div className="absolute inset-x-[14px] bottom-[20px] space-y-[12px]">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[18px] font-medium leading-[24px] text-white">
                  {person.name}, {person.age}
                </h3>
                <span className="grid size-[24px] place-items-center rounded-full bg-white/20 text-white">
                  <Icon name="circle-check" className="size-[16px]" />
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-[18px] text-white/65">{person.mutuals}</p>
            </div>
            <ul className="flex flex-wrap gap-[8px]">
              {person.tags.map((tag) => (
                <li className="rounded-full border border-white/10 bg-white/5 px-[10px] py-[6px] text-[10px] text-white backdrop-blur-md" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GradientButton
          className="mt-[14px] h-[34px] w-full rounded-full text-[13px] font-medium sm:h-[38px] sm:text-[14px]"
          onClick={onMakeMove}
        >
          Make Your Move
        </GradientButton>
        <p className="mt-[14px] text-center text-[14px] leading-[20px] text-brand-muted">
          Add a drink to introduce yourself
        </p>
      </div>
    </div>
  )
}

function ProgressBars() {
  return (
    <div className="absolute left-1/2 top-3 flex w-[78%] -translate-x-1/2 gap-2" aria-hidden="true">
      {Array.from({ length: 6 }, (_, index) => (
        <span
          className={`h-1 flex-1 rounded-full ${index === 0 ? 'bg-white/80' : 'bg-white/25'}`}
          key={index}
        />
      ))}
    </div>
  )
}

function ActionButton({ label, icon, variant }: { label: string; icon: IconName; variant: 'muted' | 'primary' }) {
  return (
    <button
      aria-label={label}
      className={`grid size-12 cursor-pointer place-items-center rounded-full transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c229c0] ${variant === 'primary'
        ? 'border border-[#c229c0] bg-linear-to-r from-[#c229c0]/15 to-brand-pink/15 text-[#fc3b79]'
        : 'border border-brand-muted/10 bg-brand-muted/5 text-brand-muted'
        }`}
      type="button"
    >
      <Icon name={icon} className="size-6" />
    </button>
  )
}
