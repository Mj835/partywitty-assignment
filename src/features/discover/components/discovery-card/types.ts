import type { CSSProperties, PointerEventHandler } from "react";

export type SwipeDirection = "left" | "right" | "top";

export type DragState = {
  x: number;
  y: number;
  active: boolean;
};

export type SwipeState = {
  cardStyle: CSSProperties;
  leftOpacity: number;
  rightOpacity: number;
  topOpacity: number;
};

export type SwipePointerHandlers = {
  onPointerCancel: () => void;
  onPointerDown: PointerEventHandler<HTMLElement>;
  onPointerMove: PointerEventHandler<HTMLElement>;
  onPointerUp: PointerEventHandler<HTMLElement>;
};
