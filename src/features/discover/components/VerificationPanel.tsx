import { useState } from 'react'
import { Icon } from '@/shared/ui/Icon'
import { GradientButton } from '@/shared/ui/GradientButton'
import { ShowYourVibeModal, VerificationCompleteModal, VerificationIntroModal, VerificationSuccessModal } from './verification'
import { verificationBenefits, verificationHowItWorksSteps } from '@/features/discover/data/discover.mock'
import DrinkThumbnail from '@/assets/drink-thumbnail.png'
import ProfileAvatar from '@/assets/profile-avatar.png'

export function VerificationPanel() {
  const [verificationStep, setVerificationStep] = useState<'intro' | 'scan' | 'complete' | 'vibe' | null>(null)

  return (
    <>
      <aside className="w-full rounded-[20px] bg-white/35 px-5 py-5 text-center shadow-md lg:w-[400px] lg:shrink-0">
        <img
          className="mx-auto size-[92px] rounded-full border-4 border-brand-purple object-cover"
          src={DrinkThumbnail}
          alt="Verified member profile"
        />
        <h2 className="mt-4 text-[18px] font-semibold leading-tight">Make Your First Move</h2>
        <p className="mx-auto mt-2 max-w-[236px] text-[14px] leading-tight text-brand-muted">
          Verify your profile to start sending invites and offering drinks.
        </p>
        <div className="my-5 h-px bg-brand-border" />
        <section className="text-left" aria-labelledby="how-it-works">
          <h3 id="how-it-works" className="text-[16px] font-semibold">
            How It Works
          </h3>
          <ol className="mt-4 space-y-4">
            {verificationHowItWorksSteps.map((step, index) => (
              <li className="grid grid-cols-[60px_1fr] gap-3" key={step.title}>
                <img className="row-span-2 size-[60px] rounded-[10px] object-cover" src={ProfileAvatar} alt="" />
                <div className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-brand-secondary text-[11px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <Icon name="eye" className="size-4 text-brand-muted" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[13px] font-semibold leading-tight">{step.title}</h4>
                  <p className="mt-1 text-[11px] leading-tight text-brand-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <div className="my-5 h-px bg-brand-border" />
        <ul className="mt-4 space-y-2">
          {verificationBenefits.map((benefit) => (
            <li className="flex items-center gap-3 text-[12px] text-brand-muted" key={benefit}>
              <span className="grid size-[24px] shrink-0 place-items-center rounded-full bg-brand-success-light text-brand-success">
                <Icon name="circle-check" className="size-[16px]" />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <GradientButton
          className="mt-8 h-12 w-full rounded-full text-[16px] font-medium"
          onClick={() => setVerificationStep('intro')}
        >
          Get Verified
        </GradientButton>
        <p className="mt-4 text-[12px] text-brand-muted">Takes less than 60 seconds</p>
        <button className="mt-3 cursor-pointer text-[12px] underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple" type="button">
          Maybe later
        </button>
      </aside>
      {verificationStep === 'intro' && (
        <VerificationIntroModal
          onClose={() => setVerificationStep(null)}
          onVerify={() => setVerificationStep('scan')}
        />
      )}
      {verificationStep === 'scan' && (
        <VerificationSuccessModal
          onClose={() => setVerificationStep(null)}
          onComplete={() => setVerificationStep('complete')}
        />
      )}
      {verificationStep === 'complete' && (
        <VerificationCompleteModal
          onClose={() => setVerificationStep(null)}
          onDashboard={() => setVerificationStep('vibe')}
        />
      )}
      {verificationStep === 'vibe' && (
        <ShowYourVibeModal onClose={() => setVerificationStep(null)} />
      )}
    </>
  )
}
