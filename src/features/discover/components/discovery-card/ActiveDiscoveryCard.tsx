import { Icon } from "@/shared/ui/Icon";
import { GradientButton } from "@/shared/ui/GradientButton";
import type { PartyProfile } from "@/features/discover/types";
import type { SwipePointerHandlers, SwipeState } from "./types";
import { ActionButton } from "./ActionButton";
import { ProgressBars } from "./ProgressBars";
import { SwipeCue } from "./SwipeCue";

type ActiveDiscoveryCardProps = {
  onDismiss: () => void;
  onGoTonight: () => void;
  onLike: () => void;
  onMate: () => void;
  person: PartyProfile;
  pointerHandlers: SwipePointerHandlers;
  swipeState: SwipeState;
};

export function ActiveDiscoveryCard({
  onDismiss,
  onGoTonight,
  onLike,
  onMate,
  person,
  pointerHandlers,
  swipeState,
}: ActiveDiscoveryCardProps) {
  return (
    <div
      className="relative z-10 cursor-grab overflow-hidden rounded-[30px] bg-white shadow-[0_35px_80px_rgba(25,22,45,0.16)] active:cursor-grabbing"
      {...pointerHandlers}
      style={swipeState.cardStyle}
    >
      <div className="relative h-[min(648px,calc(100svh-220px))] min-h-125 overflow-hidden rounded-t-[30px] max-[430px]:min-h-115">
        <img
          className="absolute inset-0 size-full object-cover"
          src={person.image}
          alt={`${person.name} profile`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(190deg,rgba(75,22,76,0.2)_16%,rgba(75,22,76,0.01)_25%),linear-gradient(181deg,rgba(75,22,76,0)_56%,rgba(75,22,76,0.5)_68%,rgb(13,3,11)_88%)]" />
        <SwipeCue
          label="NOPE"
          className="left-5 top-22 -rotate-12 border-[#ff4f69] text-[#ff4f69]"
          opacity={swipeState.leftOpacity}
        />
        <SwipeCue
          label="LIKE"
          className="right-5 top-22 rotate-12 border-[#58ffb2] text-[#58ffb2]"
          opacity={swipeState.rightOpacity}
        />
        <SwipeCue
          label="MATE"
          className="left-1/2 top-18 -translate-x-1/2 border-white text-white"
          opacity={swipeState.topOpacity}
        />
        <ProgressBars />
        <ProfileBadge badge={person.badge} />
        <ProfileDetails person={person} onMate={onMate} />
      </div>
      <CardActions onDismiss={onDismiss} onGoTonight={onGoTonight} onLike={onLike} />
    </div>
  );
}

function ProfileBadge({ badge }: { badge: string }) {
  return (
    <div className="absolute left-5 top-8 flex h-6 items-center gap-1 rounded-full bg-white/20 px-2 text-[9px] capitalize text-white">
      <Icon name="flame" className="size-3 text-[#d9ff83]" />
      <span>{badge}</span>
    </div>
  );
}

function ProfileDetails({ person, onMate }: { person: PartyProfile; onMate: () => void }) {
  return (
    <div className="absolute inset-x-5 bottom-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-[24px] font-medium capitalize leading-tight text-white">
              {person.name}, {person.age}
            </h1>
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/20 text-white">
              <Icon name="circle-check" className="size-4" />
            </span>
          </div>
          <p className="mt-1 text-[14px] text-white/60">{person.mutuals}</p>
        </div>
        <GradientButton
          className="flex h-9 items-center gap-1 rounded-full px-4.5 text-[14px] font-medium focus-visible:ring-white"
          onClick={onMate}
        >
          <Icon name="plus" className="size-4" />
          Mate
        </GradientButton>
      </div>
      <ul className="flex flex-wrap gap-2.5">
        {person.tags.map((tag) => (
          <li
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[12px] text-white"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardActions({
  onDismiss,
  onGoTonight,
  onLike,
}: {
  onDismiss: () => void;
  onGoTonight: () => void;
  onLike: () => void;
}) {
  return (
    <div className="flex h-25 items-center justify-center gap-5 rounded-b-[30px] bg-white px-4">
      <ActionButton label="Dismiss profile" icon="close" variant="muted" onClick={onDismiss} />
      <GradientButton
        className="flex h-12 items-center gap-2 rounded-full px-6 text-[18px] font-medium"
        onClick={onGoTonight}
      >
        <Icon name="flame" className="size-5" />
        Go Tonight
      </GradientButton>
      <ActionButton label="Like profile" icon="heart" variant="primary" onClick={onLike} />
    </div>
  );
}
