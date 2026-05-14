import { Icon } from '@/shared/ui/Icon'
import { GradientButton } from '@/shared/ui/GradientButton'
import { VerificationPanelShell } from './VerificationPanelShell'

type VerificationIntroModalProps = {
  onClose: () => void
  onVerify: () => void
}

export function VerificationIntroModal({ onClose, onVerify }: VerificationIntroModalProps) {
  const benefits = ['Builds trust instantly', 'Better chances she accepts', 'Unlocks special invites']

  return (
    <VerificationPanelShell
      titleId="verification-intro-title"
      closeLabel="Close verification intro"
      onClose={onClose}
      contentClassName="flex h-full flex-col items-center justify-center px-5 py-[clamp(18px,5svh,40px)] text-center sm:px-10"
      closeClassName="right-[-8px] top-[-12px] size-[26px] cursor-pointer text-brand-purple focus-visible:ring-brand-purple"
      closeIconClassName="size-[19px]"
    >
      <div className="relative grid h-[clamp(132px,32svh,215px)] w-full max-w-[clamp(190px,42svh,280px)] place-items-center rounded-[34px] border border-dashed border-[#bfbfbf]">
        <div className="grid h-[92%] w-[55%] place-items-center rounded-full border-[3px] border-[#5a5a5a] text-[#5a5a5a]">
          <Icon name="scan-face" className="size-[60px]" />
        </div>
        <span className="absolute right-[-5px] top-[-11px] grid size-[22px] place-items-center rounded-full bg-[#96909b] text-white">
          <Icon name="badge-check" className="size-[12px]" />
        </span>
      </div>

      <h2 id="verification-intro-title" className="mt-[clamp(12px,2.6svh,18px)] text-[18px] font-semibold leading-[27px] text-brand-muted">
        You're one step away
      </h2>
      <p className="mt-[5px] max-w-[390px] text-[13px] font-medium leading-[17px] text-brand-muted">
        Verify your profile to send this invite and connect with people around you.
      </p>

      <ul className="mt-[clamp(16px,4svh,32px)] flex flex-wrap items-center justify-center gap-x-[18px] gap-y-2 text-[11px] font-medium text-brand-muted">
        {benefits.map((benefit) => (
          <li className="flex items-center gap-[6px]" key={benefit}>
            <span className="grid size-[24px] place-items-center rounded-full bg-[#d9ffe2] text-[#33cc61]">
              <Icon name="circle-check" className="size-[16px]" />
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      <GradientButton className="mt-[clamp(14px,3svh,18px)] h-[39px] w-full max-w-[240px] rounded-full text-[13px] font-medium" onClick={onVerify}>
        Verify & Send Invite
      </GradientButton>
      <p className="mt-[13px] text-[8px] font-medium uppercase tracking-[0.02em] text-brand-muted">
        Takes less than 30 seconds
      </p>
    </VerificationPanelShell>
  )
}
