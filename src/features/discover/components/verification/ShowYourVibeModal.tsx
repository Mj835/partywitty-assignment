import circleAvatarImage from '@/assets/circle-avatar.png'
import discoverZoeImage from '@/assets/discover-zoe.png'
import orderZoeAvatarImage from '@/assets/figma-order-zoe-avatar.png'
import { VerificationPanelShell } from './VerificationPanelShell'
import { VibeTile } from './VibeTile'
import { Icon } from '@/shared/ui/Icon'

type ShowYourVibeModalProps = {
  onClose: () => void
}

export function ShowYourVibeModal({ onClose }: ShowYourVibeModalProps) {
  const photos = [
    { id: 'add', kind: 'add' },
    { id: 'portrait-1', image: discoverZoeImage },
    { id: 'portrait-2', image: orderZoeAvatarImage },
    { id: 'portrait-3', image: circleAvatarImage },
    { id: 'hint-friends', kind: 'hint', icon: 'friends', label: 'With friends' },
    { id: 'hint-candid', kind: 'hint', icon: 'candid', label: 'Candid > posed' },
  ] as const

  return (
    <VerificationPanelShell
      titleId="show-vibe-title"
      closeLabel="Close show your vibe"
      onClose={onClose}
      className="text-brand-muted"
      contentClassName="mx-auto flex h-full max-w-[633px] flex-col px-5 pb-[clamp(16px,4svh,30px)] pt-[clamp(24px,5svh,33px)] sm:px-[70px]"
      closeClassName="top-[-17px] size-[32px] cursor-pointer"
      closeIconClassName="size-[23px]"
    >
      <h2 id="show-vibe-title" className="text-[clamp(28px,5.8svh,40px)] font-semibold leading-[1.3]">
        Show your vibe
      </h2>
      <p className="mt-[4px] text-[clamp(12px,2.2svh,15px)] font-semibold leading-normal">
        Add up to 6 photos people will actually vibe with
      </p>

      <div className="mt-[clamp(14px,3.8svh,26px)] flex items-center gap-[17px]">
        <span className="shrink-0 text-[12px] font-bold uppercase tracking-[0.18em] text-[#333333]">3/6 Added</span>
        <div className="h-[5px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#9b9b9b]">
          <div className="h-full w-1/2 rounded-full bg-brand-muted" />
        </div>
      </div>

      <div className="mt-[clamp(10px,2.5svh,15px)] flex min-h-[44px] items-center gap-[14px] rounded-full bg-[#c4c4c4] px-[9px] py-[6px]">
        <span className="grid size-[34px] place-items-center rounded-full bg-[#aaa] text-brand-muted">
          <Icon name="sparkles" className="size-[22px]" />
        </span>
        <p className="text-[13px] font-bold leading-[20px]">Profiles with 4+ photos get 3x more invites</p>
      </div>

      <div className="mt-[clamp(10px,2.5svh,16px)] grid min-h-0 flex-1 grid-cols-3 gap-[clamp(8px,1.8svh,12px)]">
        {photos.map((photo) => (
          <VibeTile key={photo.id} photo={photo} />
        ))}
      </div>
    </VerificationPanelShell>
  )
}
