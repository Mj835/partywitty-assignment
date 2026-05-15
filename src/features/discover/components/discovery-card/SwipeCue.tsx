export function SwipeCue({
  label,
  className,
  opacity,
}: {
  label: string;
  className: string;
  opacity: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-20 rounded-2xl border-3 px-4 py-2 text-[28px] font-semibold uppercase tracking-wide shadow-[0_10px_25px_rgba(0,0,0,0.18)] ${className}`}
      style={{ opacity }}
    >
      {label}
    </div>
  );
}
