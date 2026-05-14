import { useNavigate } from 'react-router-dom'
import { Icon } from '@/shared/ui/Icon'
import PageBg from '@/assets/PageBg.png'
import PartyWittyLogo from '@/assets/figma-partywitty-logo.svg'
import ZoeAvatar from '@/assets/figma-order-zoe-avatar.png'
import WineGlass from '@/assets/figma-order-wine-glass.png'

export function OrderSummaryPage() {
  const navigate = useNavigate()

  return (
    <main
      className="relative min-h-svh overflow-x-hidden bg-[#e4e4e4] bg-cover bg-center px-5 pb-[106px] pt-6 sm:pt-[32px]"
      style={{ backgroundImage: `url(${PageBg})` }}
    >
      <section className="mx-auto flex w-full max-w-[817px] flex-col gap-[25px]">
        <header className="flex items-start justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/buy-drinks')}
            className="flex cursor-pointer items-center gap-[10px] rounded-full text-[22px] font-medium text-brand-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple sm:text-[24px]"
          >
            <span className="grid size-[36px] place-items-center rounded-full bg-[#eaeaea]">
              <ArrowBackIcon />
            </span>
            Back
          </button>
          <img
            className="mt-px h-[30.382px] w-[160px] object-contain sm:w-[194.057px]"
            src={PartyWittyLogo}
            alt="partywitty"
          />
        </header>

        <div className="flex flex-col gap-[20px]">
          <article className="relative overflow-hidden rounded-[12px] bg-white/50 px-4 py-5 sm:px-[30px] sm:py-[31px]">
            <div className="absolute right-[-96px] top-[-88px] size-[256px] rounded-full bg-[rgba(184,132,255,0.1)] blur-[50px]" />
            <VenueSummary />
            <TicketPrice />
            <DrinkSummary />
            <BillDetails />
          </article>
          <TermsAgreement />
        </div>
      </section>
      <StickyPaymentAction />
    </main>
  )
}

function VenueSummary() {
  return (
    <section className="relative flex flex-col gap-4 rounded-[20px] bg-white/30 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-[20px]">
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-wrap items-center gap-x-[12px] gap-y-2">
            <h1 className="text-[22px] font-medium leading-normal text-[#111827]">Illusion</h1>
            <div className="flex items-center gap-[6px] text-brand-text">
              <Icon name="star" className="size-[20px] text-[#ffcf4a]" />
              <span className="text-[16px] font-medium">4.1</span>
            </div>
            <p className="text-[16px] font-medium text-brand-text">
              <span className="underline">Review</span> (03)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[7px]">
          <img
            className="size-[96px] shrink-0 rounded-full object-cover sm:size-[110px]"
            src={ZoeAvatar}
            alt="Zoe Miller"
          />
          <div className="flex min-w-0 flex-col gap-[10px] sm:gap-[13px]">
            <div className="flex items-center gap-[10px]">
              <h2 className="text-[20px] font-medium leading-normal text-brand-text sm:text-[21px]">Zoe Miller, 22</h2>
              <span className="grid size-[24px] place-items-center rounded-full bg-brand-purple/10 text-brand-purple">
                <Icon name="circle-check" className="size-[16px]" />
              </span>
            </div>
            <p className="text-[16px] font-medium leading-normal text-brand-muted">Nocturne Rooftop</p>
            <div className="flex items-center gap-[4px] text-brand-muted">
              <Icon name="map-pin" className="size-[24px] shrink-0" />
              <p className="text-[13px] font-normal leading-normal sm:text-[14px]">
                Sector 38, Entertainment City <span className="px-[6px]">•</span> 13 km
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-4 min-w-[40px] rounded-[12px] bg-black/4 p-[12px] text-center text-brand-muted sm:static">
        <p className="text-[14px] font-medium uppercase leading-[15px] tracking-[0.6px]">OCT</p>
        <p className="text-[22px] font-bold leading-normal">24</p>
      </div>
    </section>
  )
}

function TicketPrice() {
  return (
    <section className="mt-[20px] flex items-center justify-between text-brand-text">
      <h2 className="text-[18px] font-medium leading-[28px]">Tickets Price</h2>
      <p className="text-[18px] font-medium leading-[28px]">₹59.00</p>
    </section>
  )
}

function DrinkSummary() {
  return (
    <section className="mt-[20px] flex flex-col gap-4 rounded-[20px] bg-white/30 px-4 py-[16px] sm:flex-row sm:items-center sm:px-[20px]">
      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-[20px]">
        <img
          className="size-[112px] shrink-0 rounded-full border border-[rgba(79,79,79,0.3)] object-cover sm:size-[120px]"
          src={WineGlass}
          alt="Wine Glass"
        />
        <div className="flex min-h-0 flex-col justify-between gap-4 sm:min-h-[120px]">
          <div className="space-y-[12px]">
            <h2 className="text-[22px] font-medium leading-normal text-brand-text sm:text-[24px]">Wine Glass</h2>
            <p className="text-[16px] font-medium leading-normal text-brand-muted">Mint, Lime, Electric Glow</p>
          </div>
          <p className="w-fit rounded-[4px] bg-[rgba(60,189,83,0.2)] px-[16px] py-[9px] text-[13px] font-normal leading-normal text-brand-success sm:text-[14px]">
            You only pay for the drink if they accept your invite
          </p>
        </div>
      </div>
      <p className="shrink-0 text-[18px] font-medium leading-[28px] text-brand-text sm:text-right">₹2199</p>
    </section>
  )
}

function BillDetails() {
  return (
    <section className="flex flex-col gap-[12px] text-brand-text">
      <h2 className="text-[18px] font-medium leading-[24px]">Bill Details</h2>
      <BillRow label="Tickets Amount" value="₹59" />
      <BillRow label="Platform & Other Charges" value="₹5.90" link />
      <BillRow label="Grand Total" value="₹64.90" />
    </section>
  )
}

function BillRow({ label, value, link = false }: { label: string; value: string; link?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-4 ${link ? 'text-[14px] text-brand-purple' : ''}`}>
      <p className={`${link ? 'underline' : 'text-[16px]'} font-normal leading-normal`}>{label}</p>
      <p className={`${link ? 'text-[14px] text-brand-purple' : 'text-[18px] text-brand-text'} font-medium leading-normal text-right`}>
        {value}
      </p>
    </div>
  )
}

function TermsAgreement() {
  return (
    <label className="flex w-fit items-start gap-[10px] text-[13px] font-normal leading-normal text-brand-text sm:items-center sm:text-[14px]">
      <span className="grid size-[20px] place-items-center py-[4px]">
        <input className="size-[20px] appearance-none rounded-[4px] border border-brand-purple" type="checkbox" />
      </span>
      <span>
        I agree to the <span className="text-brand-purple">Terms of Service </span>
        and<span className="text-brand-purple"> Privacy Policy.</span>
      </span>
    </label>
  )
}

function StickyPaymentAction() {
  return (
    <div className="fixed bottom-[10px] left-1/2 z-20 flex w-[calc(100%-24px)] max-w-[422px] -translate-x-1/2 items-center rounded-[60px] bg-white/90 p-[10px]">
      <div className="flex w-full items-center gap-[9px]">
        <span className="grid size-[41px] place-items-center text-brand-purple">
          <ShieldIcon />
        </span>
        <button
          type="button"
          aria-label="Save order"
          className="grid size-[44px] place-items-center rounded-full bg-brand-purple text-white shadow-[0_1.737px_6.947px_rgba(124,58,237,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          <HeartIcon />
        </button>
        <button
          type="button"
          className="h-[44px] min-w-0 flex-1 rounded-full bg-brand-purple px-[16px] py-[10px] text-center text-[15px] font-medium leading-[24px] text-white shadow-[0_1.737px_6.947px_rgba(124,58,237,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple sm:w-[299px] sm:flex-none sm:px-[20px] sm:text-[16px]"
        >
          Make The Move Now
        </button>
      </div>
    </div>
  )
}

function ArrowBackIcon() {
  return (
    <svg className="size-[24px]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 6 9 12l6 6M9 12h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="size-[41px]" viewBox="0 0 41 41" aria-hidden="true">
      <path d="M20.5 5.5 32 9.7v8.8c0 8.2-5.1 14.3-11.5 17-6.4-2.7-11.5-8.8-11.5-17V9.7L20.5 5.5Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="m15.2 20.9 3.4 3.4 7.2-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="size-[24px]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.8a5.2 5.2 0 0 0-7.4 0L12 6.2l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z" fill="currentColor" />
    </svg>
  )
}
