import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { PartyProfile } from "@/features/discover/types";
import { ActiveDiscoveryCard } from "@/features/discover/components/discovery-card/ActiveDiscoveryCard";
import { DiscoveryStackPreview } from "@/features/discover/components/discovery-card/DiscoveryStackPreview";
import { GoTonightModal } from "@/features/discover/components/discovery-card/GoTonightModal";
import { useSwipeStack } from "@/features/discover/components/discovery-card/useSwipeStack";

export function DiscoveryCard({ profiles }: { profiles: readonly PartyProfile[] }) {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const navigate = useNavigate();
  const { activeProfile, stackProfiles, swipeState, completeSwipe, pointerHandlers } =
    useSwipeStack(profiles);

  return (
    <>
      <article className="relative w-full max-w-115.5 pt-8">
        <DiscoveryStackPreview profiles={stackProfiles} />
        <ActiveDiscoveryCard
          onDismiss={() => completeSwipe("left")}
          onGoTonight={() => setShowInviteModal(true)}
          onLike={() => completeSwipe("right")}
          onMate={() => completeSwipe("top")}
          person={activeProfile}
          pointerHandlers={pointerHandlers}
          swipeState={swipeState}
        />
      </article>
      {showInviteModal && (
        <GoTonightModal
          person={activeProfile}
          onClose={() => setShowInviteModal(false)}
          onMakeMove={() => navigate("/party-packages")}
        />
      )}
    </>
  );
}
