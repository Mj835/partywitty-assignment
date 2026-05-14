type AvatarStackProps = {
  avatars: readonly string[]
  countLabel: string
  label?: string
}

export function AvatarStack({ avatars, countLabel, label = 'People in your circle' }: AvatarStackProps) {
  return (
    <div className="flex shrink-0" aria-label={label}>
      {avatars.map((avatar, index) => (
        <img
          key={`${avatar}-${index}`}
          className="-mr-3 size-10 rounded-full border border-white object-cover"
          src={avatar}
          alt=""
        />
      ))}
      <span className="grid size-10 place-items-center rounded-full border border-[#9c9c9c] bg-[#f5f5f5] text-[15px] font-medium text-brand-muted">
        {countLabel}
      </span>
    </div>
  )
}
