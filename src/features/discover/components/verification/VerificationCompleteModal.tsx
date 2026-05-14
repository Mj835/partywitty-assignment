import { Icon } from '@/shared/ui/Icon'
import { GradientButton } from '@/shared/ui/GradientButton'
import { VerificationPanelShell } from './VerificationPanelShell'

type VerificationCompleteModalProps = {
  onClose: () => void
  onDashboard: () => void
}

export function VerificationCompleteModal({ onClose, onDashboard }: VerificationCompleteModalProps) {
  return (
    <VerificationPanelShell
      titleId="verification-complete-title"
      closeLabel="Close verification complete"
      onClose={onClose}
      contentClassName="flex h-full flex-col items-center px-5 pb-[clamp(18px,5svh,40px)] pt-[clamp(30px,8svh,58px)] text-center"
      closeClassName="cursor-pointer"
    >
      <div className="relative mt-[5px] grid size-[clamp(168px,34svh,244px)] place-items-center rounded-full bg-[#eef4e8] shadow-[0_14px_45px_rgba(74,76,82,0.16)]">
        <div className="absolute inset-[25px] rounded-full border border-[#d2d2d2]" />
        <div className="absolute inset-[38px] rounded-full border border-[#d2d2d2]" />
        <div className="relative size-[64%] overflow-hidden rounded-full border-[3px] border-[#928aa0] bg-[#37a8af]">
          <img className="absolute inset-0 size-full object-cover" src="/assets/drink-thumbnail.png" alt="Verified profile" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(50,180,190,0.6),rgba(20,20,30,0.58))]" />
          <span className="absolute left-1/2 top-[52%] -translate-x-1/2 rounded-sm bg-black px-[7px] py-[2px] text-[6px] font-bold uppercase text-white">
            Verified
          </span>
          <span className="absolute bottom-[18px] left-1/2 flex -translate-x-1/2 items-center gap-[5px] rounded-[7px] bg-[#08a417] px-[12px] py-[6px] text-[12px] font-bold uppercase text-white">
            <Icon name="check" className="size-[13px]" />
            Verified
          </span>
        </div>
        <span className="absolute right-[22px] top-[34px] grid size-[36px] place-items-center rounded-full bg-[#9f94f8] text-white">
          <Icon name="sparkles" className="size-[22px]" />
        </span>
        <span className="absolute bottom-[49px] left-[24px] grid size-[29px] place-items-center rounded-full bg-[#9f94f8] text-brand-purple">
          <Icon name="heart" className="size-[17px] fill-current" />
        </span>
      </div>

      <h2 id="verification-complete-title" className="mt-[clamp(10px,2.8svh,20px)] text-[clamp(30px,5.4svh,43px)] font-semibold leading-[1.3] text-brand-muted">
        You're verified
      </h2>
      <p className="mt-[5px] text-[clamp(15px,2.5svh,18px)] font-semibold leading-normal text-brand-muted">
        No fake vibes here. You're almost in
      </p>

      <div className="mt-[clamp(12px,2.8svh,20px)] h-[7px] w-full max-w-[267px] overflow-hidden rounded-full bg-[#aaaeb9]">
        <div className="h-full w-[98.4%] rounded-full bg-brand-sidebar" />
      </div>
      <p className="mt-[7px] text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-muted">
        Identity Match 98.4%
      </p>

      <GradientButton className="mt-[clamp(12px,2.6svh,18px)] h-[clamp(46px,7svh,57px)] w-full max-w-[381px] rounded-full bg-none bg-brand-purple text-[18px] font-medium" onClick={onDashboard}>
        Go to Dashboard
      </GradientButton>
      <p className="mt-[clamp(10px,2.6svh,18px)] text-[12px] font-semibold leading-[18px] text-brand-muted">
        No fake vibes here. You're almost in
      </p>
    </VerificationPanelShell>
  )
}
