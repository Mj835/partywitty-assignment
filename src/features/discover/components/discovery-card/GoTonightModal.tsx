import { Icon } from "@/shared/ui/Icon";
import { GradientButton } from "@/shared/ui/GradientButton";
import type { PartyProfile } from "@/features/discover/types";

export function GoTonightModal({
  person,
  onClose,
  onMakeMove,
}: {
  person: PartyProfile;
  onClose: () => void;
  onMakeMove: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-3 py-8 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="go-tonight-title"
    >
      <div className="relative w-full max-w-92.75 rounded-xl bg-[#efefef] px-5 pb-5 pt-5.5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:max-w-105">
        <button
          type="button"
          aria-label="Close invite modal"
          onClick={onClose}
          className="absolute -right-3.25 -top-2.5 grid size-6.5 cursor-pointer place-items-center rounded-full bg-[#efefff] text-brand-purple shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          <Icon name="close" className="size-4.75" />
        </button>
        <h2
          id="go-tonight-title"
          className="text-[24px] font-semibold leading-7.5 text-brand-muted"
        >
          You chose her
        </h2>
        <p className="mt-1 text-[12px] leading-4.5 text-brand-muted">
          You're about to send her a{" "}
          <span className="text-brand-secondary">special invite</span>
        </p>

        <div className="relative mt-3.5 h-87.5 overflow-hidden rounded-[18px] sm:h-95.5">
          <img
            className="absolute inset-0 size-full object-cover"
            src={person.image}
            alt={`${person.name} invite preview`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(190deg,rgba(75,22,76,0.08)_10%,rgba(75,22,76,0)_34%),linear-gradient(181deg,rgba(75,22,76,0)_50%,rgba(75,22,76,0.48)_70%,rgb(13,3,11)_92%)]" />
          <div className="absolute left-3.5 top-3.25 flex h-5.5 items-center gap-1 rounded-full bg-white/20 px-2 text-[9px] capitalize text-white backdrop-blur">
            <Icon name="flame" className="size-3 text-white" />
            <span>Casual Fun</span>
          </div>
          <div className="absolute inset-x-3.5 bottom-5 space-y-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[18px] font-medium leading-6 text-white">
                  {person.name}, {person.age}
                </h3>
                <span className="grid size-6 place-items-center rounded-full bg-white/20 text-white">
                  <Icon name="circle-check" className="size-4" />
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-4.5 text-white/65">
                {person.mutuals}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {person.tags.map((tag) => (
                <li
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white backdrop-blur-md"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GradientButton
          className="mt-3.5 h-8.5 w-full rounded-full text-[13px] font-medium sm:h-9.5 sm:text-[14px]"
          onClick={onMakeMove}
        >
          Make Your Move
        </GradientButton>
        <p className="mt-3.5 text-center text-[14px] leading-5 text-brand-muted">
          Add a drink to introduce yourself
        </p>
      </div>
    </div>
  );
}
