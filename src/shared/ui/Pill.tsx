import type { ReactNode } from 'react'

type PillProps = {
  children: ReactNode
  className?: string
}

export function Pill({ children, className = '' }: PillProps) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] capitalize tracking-[0.03em] ${className}`}>
      {children}
    </span>
  )
}
