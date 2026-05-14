import { Icon } from "@/shared/ui/Icon";

export type VibePhoto =
  | { readonly id: string; readonly image: string }
  | { readonly id: string; readonly kind: 'add' }
  | { readonly id: string; readonly kind: 'hint'; readonly icon: 'friends' | 'candid'; readonly label: string }

export function VibeTile({ photo }: { photo: VibePhoto }) {
  if ('kind' in photo && photo.kind === 'add') {
    return (
      <button type="button" className="grid aspect-156/208 cursor-pointer place-items-center rounded-[9px] bg-[#aaa] text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
        <div className="flex flex-col items-center gap-[12px]">
          <span className="grid size-[39px] place-items-center rounded-full bg-brand-muted text-white">
            <Icon name="plus" className="size-[22px]" />
          </span>
          <span className="text-[12px] font-semibold">+ Add Photo</span>
        </div>
      </button>
    )
  }

  if ('kind' in photo && photo.kind === 'hint') {
    return (
      <div className="grid aspect-156/208 place-items-center rounded-[9px] bg-[#aaa] text-brand-muted">
        <div className="flex flex-col items-center">
          <span className="grid size-[39px] place-items-center rounded-full bg-brand-muted text-white">
            {photo.icon === 'friends' ? <Icon name="users" className="size-[22px]" /> : <Icon name="layers" className="size-[22px]" />}
          </span>
          <span className="mt-[18px] text-[10px] font-bold uppercase tracking-[0.22em]">Hint</span>
          <span className="mt-[5px] text-[8px] font-semibold">{photo.label}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-156/208 overflow-hidden rounded-[9px] bg-[#aaa]">
      <img className="size-full object-cover" src={photo.image} alt="" />
      <button
        type="button"
        aria-label="Remove photo"
        className="absolute bottom-[10px] left-[10px] grid size-[27px] cursor-pointer place-items-center rounded-full bg-[#c55b55] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <Icon name="trash" className="size-[15px]" />
      </button>
    </div>
  )
}
