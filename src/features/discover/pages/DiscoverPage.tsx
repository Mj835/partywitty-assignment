import { useNavigate } from 'react-router-dom'
import { DiscoveryCard } from '@/features/discover/components/DiscoveryCard'
import { VerificationPanel } from '@/features/discover/components/VerificationPanel'
import { GradientButton } from '@/shared/ui/GradientButton'
import { discoverProfiles } from '@/features/discover/data/discover.mock'

export function DiscoverPage() {
  const navigate = useNavigate()

  return (
    <section className="grid flex-1 items-start gap-8 px-[22px] py-[23px] md:px-10 lg:grid-cols-[minmax(330px,462px)_400px] lg:items-start lg:justify-center lg:gap-12 lg:px-6 lg:py-[30px] xl:grid-cols-[462px_400px] xl:gap-[132px] xl:px-0">
      <div className="flex w-full flex-col items-center gap-[18px] sm:gap-5">
        <GradientButton
          onClick={() => navigate('/party-packages')}
          className="h-[44px] w-full max-w-[195px] rounded-full bg-brand-gradient px-8 text-[13px] font-semibold uppercase tracking-wide shadow-[0_12px_30px_rgba(48,32,223,0.22)]"
        >
          Explore Feed
        </GradientButton>
        <DiscoveryCard profiles={discoverProfiles} />
      </div>
      <VerificationPanel />
    </section>
  )
}
