import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { Icon } from '@/shared/ui/Icon'

export type VerificationPanelShellProps = {
  titleId: string
  closeLabel: string
  onClose: () => void
  children: ReactNode
  className?: string
  contentClassName?: string
  closeClassName?: string
  closeIconClassName?: string
}

export function VerificationPanelShell({
  titleId,
  closeLabel,
  onClose,
  children,
  className = '',
  contentClassName = '',
  closeClassName = '',
  closeIconClassName = 'size-[26px]',
}: VerificationPanelShellProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/45 px-7 py-8" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="relative h-[min(719px,calc(100svh-64px))] w-[min(800px,calc(100vw-56px))]">
        <div className={`absolute inset-0 overflow-hidden bg-[#eeeeee] shadow-[0_24px_70px_rgba(0,0,0,0.24)] ${className}`}>
          <div className={contentClassName}>{children}</div>
        </div>
        <button
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className={`absolute right-[-10px] top-[-18px] z-20 grid size-[39px] cursor-pointer place-items-center rounded-full bg-[#efefff] text-brand-purple shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${closeClassName}`}
        >
          <Icon name="close" className={closeIconClassName} />
        </button>
      </div>
    </div>
  )
}
