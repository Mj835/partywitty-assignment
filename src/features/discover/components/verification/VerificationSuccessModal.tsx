import verifyOverlayImage from '@/assets/VerifyOverlayImage.png'
import { VerificationPanelShell } from './VerificationPanelShell'
import { Icon } from '@/shared/ui/Icon'

type VerificationSuccessModalProps = {
  onClose: () => void
  onComplete: () => void
}

export function VerificationSuccessModal({ onClose, onComplete }: VerificationSuccessModalProps) {
  return (
    <VerificationPanelShell
      titleId="verification-success-title"
      closeLabel="Close verification success"
      onClose={onClose}
      className="border border-white/80 bg-[#8e8e8e]"
      contentClassName="relative h-full"
      closeClassName="top-[-10px] size-[32px] cursor-pointer"
      closeIconClassName="size-[22px]"
    >
      <img
        className="absolute inset-0 size-full object-cover object-center"
        src={verifyOverlayImage}
        alt=""
      />
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgba(255,255,255,0)_0,rgba(255,255,255,0)_32%,rgba(0,0,0,0.22)_57%,rgba(0,0,0,0.34)_100%)]" />

      <div className="absolute left-1/2 top-[45%] flex h-[clamp(220px,50svh,358px)] w-[clamp(160px,36svh,263px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[48%] border-[3px] border-white/45 sm:top-[48%]">
        <span className="absolute top-[-7px] h-[8px] w-[30px] rounded-full bg-white" />
        <span className="absolute bottom-[-7px] h-[8px] w-[30px] rounded-full bg-white" />
        <span className="rounded-full bg-white/35 px-[28px] py-[13px] text-[16px] font-semibold leading-[24px] text-white backdrop-blur-md">
          Look straight
        </span>
      </div>

      <div className="absolute inset-x-6 bottom-[clamp(118px,21svh,154px)] text-center text-white">
        <h2 id="verification-success-title" className="text-[17px] font-semibold leading-[26px]">
          Keep your face within the frame
        </h2>
        <p className="mt-[4px] text-[13px] font-medium leading-[20px]">
          Center your face and wait for the scan to start
        </p>
      </div>

      <div className="absolute bottom-[clamp(76px,14svh,96px)] left-1/2 flex -translate-x-1/2 items-center gap-[6px] whitespace-nowrap rounded-full bg-black/35 px-[18px] py-[10px] text-[12px] font-medium text-white backdrop-blur-[10px]">
        <Icon name="shield-check" className="size-[14px]" />
        Used only for verification
      </div>

      <div className="absolute bottom-[clamp(20px,5.4svh,39px)] left-1/2 flex -translate-x-1/2 items-center gap-[clamp(14px,4svw,24px)] text-white">
        <button
          type="button"
          aria-label="Retake photo"
          className="grid size-[50px] cursor-pointer place-items-center rounded-full border border-white/28 bg-black/12 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Icon name="switch-camera" className="size-[21px]" />
        </button>
        <button
          type="button"
          aria-label="Start verification scan"
          onClick={onComplete}
          className="grid size-[64px] cursor-pointer place-items-center rounded-full border-4 border-white bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="size-[34px] rounded-full border-2 border-[#6c8b21] bg-white" />
        </button>
        <button
          type="button"
          aria-label="Adjust brightness"
          className="grid size-[50px] cursor-pointer place-items-center rounded-full border border-white/28 bg-black/12 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Icon name="sun" className="size-[23px]" />
        </button>
      </div>
    </VerificationPanelShell>
  )
}
