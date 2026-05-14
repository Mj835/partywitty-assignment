import type { ButtonHTMLAttributes, ReactNode } from 'react'

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function GradientButton({ children, className = '', type = 'button', ...props }: GradientButtonProps) {
  return (
    <button
      className={`cursor-pointer bg-linear-to-r from-[#c229c0] to-brand-pink text-white transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c229c0] focus-visible:ring-offset-2 ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
