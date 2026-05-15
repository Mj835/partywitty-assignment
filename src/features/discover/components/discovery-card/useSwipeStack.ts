import { useMemo, useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { PartyProfile } from "@/features/discover/types";
import type { DragState, SwipeDirection, SwipePointerHandlers, SwipeState } from "./types";

const SWIPE_DISTANCE = 96;
const SWIPE_EXIT_DISTANCE = 620;

export function useSwipeStack(profiles: readonly PartyProfile[]) {
  const [profileIndex, setProfileIndex] = useState(0);
  const [drag, setDrag] = useState<DragState>({ x: 0, y: 0, active: false });
  const [exitDirection, setExitDirection] = useState<SwipeDirection | null>(null);
  const startPoint = useRef({ x: 0, y: 0 });

  const activeProfile = profiles[profileIndex % profiles.length];
  const stackProfiles = useMemo(
    () => [1, 2].map((offset) => profiles[(profileIndex + offset) % profiles.length]),
    [profileIndex, profiles],
  );

  const completeSwipe = (direction: SwipeDirection) => {
    if (exitDirection) return;

    setExitDirection(direction);
    setDrag({
      x: direction === "left" ? -SWIPE_EXIT_DISTANCE : direction === "right" ? SWIPE_EXIT_DISTANCE : 0,
      y: direction === "top" ? -SWIPE_EXIT_DISTANCE : -36,
      active: false,
    });

    window.setTimeout(() => {
      setProfileIndex((current) => (current + 1) % profiles.length);
      setDrag({ x: 0, y: 0, active: false });
      setExitDirection(null);
    }, 320);
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (exitDirection) return;
    if ((event.target as HTMLElement).closest("button")) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    startPoint.current = { x: event.clientX - drag.x, y: event.clientY - drag.y };
    setDrag((current) => ({ ...current, active: true }));
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!drag.active || exitDirection) return;

    setDrag({
      x: event.clientX - startPoint.current.x,
      y: Math.min(44, event.clientY - startPoint.current.y),
      active: true,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!drag.active || exitDirection) return;

    event.currentTarget.releasePointerCapture(event.pointerId);

    if (drag.y < -SWIPE_DISTANCE) {
      completeSwipe("top");
      return;
    }

    if (Math.abs(drag.x) > SWIPE_DISTANCE) {
      completeSwipe(drag.x > 0 ? "right" : "left");
      return;
    }

    setDrag({ x: 0, y: 0, active: false });
  };

  const handlePointerCancel = () => {
    if (!exitDirection) {
      setDrag({ x: 0, y: 0, active: false });
    }
  };

  const rotation = Math.max(-16, Math.min(16, drag.x / 18));
  const swipeState = {
    cardStyle: {
      transform: `translate3d(${drag.x}px, ${drag.y}px, 0) rotate(${rotation}deg)`,
      transition: drag.active ? "none" : "transform 320ms cubic-bezier(.2,.8,.2,1)",
      touchAction: "none",
    },
    leftOpacity: Math.max(0, Math.min(1, -drag.x / SWIPE_DISTANCE)),
    rightOpacity: Math.max(0, Math.min(1, drag.x / SWIPE_DISTANCE)),
    topOpacity: Math.max(0, Math.min(1, -drag.y / SWIPE_DISTANCE)),
  } satisfies SwipeState;

  const pointerHandlers = {
    onPointerCancel: handlePointerCancel,
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
  } satisfies SwipePointerHandlers;

  return {
    activeProfile,
    completeSwipe,
    pointerHandlers,
    stackProfiles,
    swipeState,
  };
}
