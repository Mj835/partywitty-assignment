export function ProgressBars() {
  return (
    <div
      className="absolute left-1/2 top-3 flex w-[78%] -translate-x-1/2 gap-2"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <span
          className={`h-1 flex-1 rounded-full ${index === 0 ? "bg-white/80" : "bg-white/25"}`}
          key={index}
        />
      ))}
    </div>
  );
}
