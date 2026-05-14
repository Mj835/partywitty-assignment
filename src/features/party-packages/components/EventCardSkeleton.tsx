export function EventCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-[24px] bg-white/30 shadow-[0_18px_45px_rgba(22,17,34,0.08)]">
      <div className="relative animate-shimmer h-[330px] bg-gray-200/50 sm:h-[375px]" />
      <div className="px-5 pb-5 pt-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="size-[22px] animate-shimmer rounded-full bg-gray-200/50" />
          <div className="flex-1 space-y-2">
            <div className="h-4 animate-shimmer w-3/4 rounded bg-gray-200/50" />
            <div className="h-3 animate-shimmer w-1/2 rounded bg-gray-200/50" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="size-6 animate-shimmer rounded-full bg-gray-200/50 border-2 border-white/30" />
              ))}
            </div>
            <div className="h-3 animate-shimmer w-16 rounded bg-gray-200/50" />
          </div>
          <div className="h-6 animate-shimmer w-12 rounded bg-gray-200/50" />
        </div>
      </div>
    </article>
  )
}
