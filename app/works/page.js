import Link from "next/link";
import localFont from "next/font/local";
import BackButton from "../components/backButton";
import services from "../data/services.json";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const Page = () => (
  <div className="bg-[#fbf8ef]">
    <section className="relative overflow-hidden bg-[#321d32] px-5 py-14 text-white sm:px-10 sm:py-20 lg:px-16">
      <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#ffec9e]/15" aria-hidden="true" />
      <div className="absolute -right-8 -top-20 h-72 w-72 rounded-full border border-[#ffec9e]/20" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px]">
        <BackButton light />
        <div className="max-w-3xl salon-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffec9e]">Premiere Sparkles Salon</p>
          <h1 className={`${displayFont.className} mt-4 text-5xl sm:text-6xl lg:text-7xl`}>Our Services</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Explore our salon services, listed with their current prices and locations.
          </p>
          <Link href="/bookAppointment" className="salon-button mt-7 inline-flex min-h-12 items-center justify-center bg-[#ffec9e] px-7 text-sm font-semibold uppercase tracking-[0.1em] text-[#281627] hover:bg-white">Book an appointment <span className="ml-2" aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto grid max-w-[1280px] gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.id} className="salon-card flex h-full flex-col border border-[#ebdfeb] bg-white p-6 shadow-[0_8px_28px_rgba(52,29,52,0.05)] sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#986f2d]">Service {String(index + 1).padStart(2, "0")}</p>
                <h2 className={`${displayFont.className} mt-2 text-2xl leading-tight text-[#321d32] sm:text-[28px]`}>{service.title}</h2>
              </div>
              <span aria-hidden="true" className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5edf5] text-[#8c378d]">✦</span>
            </div>
            <p className="mt-4 min-h-[56px] text-sm leading-6 text-[#665d66]">{service.description}</p>
            <div className="my-5 h-px bg-[#eee6ed]" />
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#fbf8ef] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#806874]">Price</p>
                <p className="mt-1 text-base font-semibold text-[#6f1972]">GHC {service.price}</p>
              </div>
              <div className="bg-[#fbf8ef] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#806874]">Service location</p>
                <p className="mt-1 break-words text-sm font-medium text-[#3e3340]">{service.location}</p>
              </div>
            </div>
            <div className="mt-auto pt-6">
              <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#665d66]">
                <span>Call / text to enquire:</span>
                <a href="tel:+233503192450" className="font-medium text-[#6f1972] hover:underline">+233 50 319 2450</a>
                <a href="tel:+233547873650" className="font-medium text-[#6f1972] hover:underline">+233 54 787 3650</a>
              </div>
              <Link href="/bookAppointment" className="salon-button flex min-h-12 items-center justify-center bg-[#8e1a91] px-5 text-sm font-semibold text-white hover:bg-[#6d146f]">Book an appointment <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-[1280px] border-l-2 border-[#bd9a47] bg-white px-5 py-4 text-sm leading-6 text-[#5f555f] sm:px-6">
        We accept Mobile Money for advance payment or where a deposit is required. Please use the recipient&apos;s name as the reference or send a message via WhatsApp on <a href="tel:+233503192450" className="font-semibold text-[#6f1972] hover:underline">+233 50 319 2450</a> with the booking details.
      </div>
    </section>
  </div>
);

export default Page;
