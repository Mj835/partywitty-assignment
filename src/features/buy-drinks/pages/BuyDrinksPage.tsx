import { useNavigate } from 'react-router-dom'
import { GradientButton } from '@/shared/ui/GradientButton'
import { Icon } from '@/shared/ui/Icon'
import { drinkItems, promptItems } from '@/features/buy-drinks/data/drinks.mock'
import type { DrinkItem, PromptItem } from '@/features/buy-drinks/types'
import DrinkThumbnail from '@/assets/drink-thumbnail.png'
import RooftopImage from '@/assets/figma-nocturne-rooftop.png'
import ZoeAvatar from '@/assets/mini-avatar-zoya.png'

export function BuyDrinksPage() {
  return (
    <section className="relative flex min-h-svh flex-col px-5 pb-[112px] pt-6 md:px-10 lg:px-16 lg:pt-[30px]">
      <div className="grid flex-1 gap-2 xl:grid-cols-[238px_minmax(0,1fr)] xl:gap-5">
        <ProfileColumn />
        <MovePanel />
      </div>
      <StickyAction />
    </section>
  )
}

function ProfileColumn() {
  const navigate = useNavigate()

  return (
    <aside className="mx-auto w-full max-w-[238px] xl:mx-0">
      <nav className="text-[10px] leading-[15px] text-brand-text" aria-label="Breadcrumb">
        <button
          type="button"
          onClick={() => navigate('/discover')}
          className="cursor-pointer rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          Home
        </button>
        <span className="px-1" aria-hidden="true">
          /
        </span>
        <button
          type="button"
          onClick={() => navigate('/party-packages')}
          className="cursor-pointer rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          Party Package
        </button>
        <span className="px-1" aria-hidden="true">
          /
        </span>
        <strong className="font-medium">Selected item</strong>
      </nav>

      <div className="mt-[18px] flex items-center gap-[7px]">
        <img
          className="size-[46px] rounded-full border-[3px] border-brand-purple object-cover"
          src={DrinkThumbnail}
          alt="Alen Markram"
        />
        <div>
          <p className="text-[16px] font-medium leading-[24px] text-brand-muted">Alen Markram</p>
          <GradientButton className="h-[24px] rounded-full px-[14px] text-[12px] font-medium leading-[18px]">
            Get Verified
          </GradientButton>
        </div>
      </div>

      <article className="mt-[41px] overflow-hidden rounded-[12px] bg-white/35">
        <div className="relative h-[198px]">
          <img
            className="absolute inset-0 size-full object-cover"
            src={RooftopImage}
            alt="Nocturne Rooftop"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-[9px] bg-[rgba(18,18,24,0.47)] px-[14px] py-[12px] text-white">
            <img
              className="size-[42px] rounded-full object-cover"
              src={ZoeAvatar}
              alt="Zoe Miller"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-[7px]">
                <h2 className="truncate text-[17px] font-semibold leading-[25px]">Zoe Miller, 22</h2>
                <span className="grid size-[24px] shrink-0 place-items-center rounded-full bg-white/20 text-white">
                  <Icon name="circle-check" className="size-[16px]" />
                </span>
              </div>
              <p className="truncate text-[11px] font-semibold leading-[16px]">Nocturne Rooftop</p>
            </div>
          </div>
        </div>
        <div className="space-y-[14px] px-[13px] py-[14px] text-brand-muted">
          <ProfileMeta icon="map-pin" text="Sector 38, Noida at ILLUSION" />
          <ProfileMeta icon="clock" text="Tonight, 10:30 PM -" />
        </div>
      </article>
    </aside>
  )
}

function ProfileMeta({ icon, text }: { icon: 'map-pin' | 'clock'; text: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <Icon name={icon} className="size-[17px] shrink-0" />
      <p className="truncate text-[13px] font-normal leading-[20px]">{text}</p>
    </div>
  )
}

function MovePanel() {
  return (
    <main className="rounded-[20px] bg-white/30 px-3 pb-[22px] pt-[18px] sm:px-[20px] xl:mt-[36px]">
      <header>
        <h1 className="text-[16px] font-medium leading-[24px] text-brand-text">
          One Step Before Your First Move
        </h1>
        <p className="mt-px text-[11px] font-normal leading-[17px] text-brand-text">
          Verify your profile to send invites and offer drinks.
        </p>
      </header>

      <div className="mt-[12px] grid gap-[10px] md:grid-cols-2">
        {drinkItems.map((drink) => (
          <DrinkCard drink={drink} key={drink.id} />
        ))}
      </div>

      <div className="mt-[15px] grid gap-[10px] sm:grid-cols-3">
        {promptItems.map((item) => (
          <PromptCard item={item} key={item.id} />
        ))}
      </div>

      <section className="mt-[13px]">
        <p className="text-[12px] font-medium leading-[18px] text-brand-muted">A Little About Me</p>
        <div className="mt-[9px] flex min-h-[50px] items-center gap-[8px] rounded-[20px] bg-white/30 p-[16px]">
          <p className="min-w-0 flex-1 text-[14px] font-medium leading-[21px] text-brand-muted">
            Hey, I'm Aman , into good music and chill nights
          </p>
          <Icon name="edit" className="size-[19px] shrink-0 text-brand-muted" />
        </div>
      </section>
    </main>
  )
}

function DrinkCard({ drink }: { drink: DrinkItem }) {
  return (
    <button
      type="button"
      className={`relative flex min-h-[116px] w-full cursor-pointer overflow-hidden rounded-[20px] bg-white/30 text-left transition hover:bg-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${drink.highlighted ? 'border-[3px] border-[#c229c0]' : ''
        }`}
    >
      <div className="h-[116px] w-[94px] shrink-0 overflow-hidden sm:w-[107px]">
        <img className="size-full object-cover" src={drink.image} alt={drink.name} />
      </div>
      <div className="relative flex min-w-0 flex-1 flex-col items-start justify-between p-[14px]">
        <div className="min-w-0 pr-[58px] sm:pr-[72px]">
          <h2 className="truncate text-[17px] font-medium leading-[25px] text-[#21182b] sm:text-[19px] sm:leading-[29px]">{drink.name}</h2>
          <p className="truncate text-[13px] font-normal leading-[19px] text-brand-muted sm:text-[14px] sm:leading-[21px]">{drink.ingredients}</p>
        </div>
        <span
          className={`max-w-full rounded-[10px] px-[9px] py-[7px] text-[9px] font-normal leading-[14px] sm:px-[11px] sm:text-[10px] sm:leading-[15px] ${drink.badgeTone === 'pink'
            ? 'bg-[rgba(201,5,147,0.1)] text-[#c90593]'
            : 'bg-brand-success-light text-brand-success'
            }`}
        >
          {drink.badge}
        </span>
        <span className="absolute right-0 top-0 rounded-bl-[23px] rounded-br-[11px] rounded-tr-[10px] bg-linear-to-r from-[#c229c0] to-brand-pink px-[12px] py-[7px] text-[13px] font-medium leading-[20px] text-white sm:px-[16px] sm:text-[14px]">
          {drink.price}
        </span>
      </div>
    </button>
  )
}

function PromptCard({ item }: { item: PromptItem }) {
  return (
    <button
      type="button"
      className="flex min-h-[76px] cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[20px] bg-white/30 px-[15px] py-[10px] text-brand-muted transition hover:bg-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
    >
      <Icon name={item.icon} className="size-[24px] text-[#e72c8e]" />
      <span className="text-center text-[14px] font-normal leading-[21px]">{item.label}</span>
      <span className="text-[12px] font-medium leading-[18px]">{item.price}</span>
    </button>
  )
}


function StickyAction() {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-[14px] left-0 right-0 z-30 px-3 transition-all duration-500 ease-sidebar-slide lg:left-(--sidebar-width)">
      <div className="mx-auto flex w-full max-w-[319px] items-center gap-[9px] rounded-[60px] bg-white/90 p-[10px]">
        <button
          type="button"
          onClick={() => navigate('/order-summary')}
          className="h-[44px] min-w-0 flex-1 cursor-pointer rounded-full bg-brand-purple px-[16px] py-[10px] text-center text-[15px] font-medium leading-[24px] text-white shadow-[0_1.737px_6.947px_rgba(124,58,237,0.2)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple sm:px-[20px] sm:text-[16px]"
        >
          Make The Move Now
        </button>
      </div>
    </div>
  )
}

