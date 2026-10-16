import BackButton from "../components/backButton";
import Map from "../components/maps";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const details = [
  { icon: "/alarm.svg", alt: "Opening hours", text: "Mondays to Saturdays 9am-8pm" },
  { icon: "/map.svg", alt: "Address", text: "Deer Street 7, North Legon" },
];

const Page = () => (
  <div className="bg-[#fbf8ef]">
    <section className="bg-[#321d32] px-5 py-10 text-white sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <BackButton light />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffec9e]">Visit Premiere Sparkles Salon</p>
        <h1 className={`${displayFont.className} mt-3 text-5xl sm:text-6xl`}>Our location</h1>
        <p className="mt-3 text-base text-white/75">North Legon, Accra, Ghana</p>
      </div>
    </section>

    <section className="px-5 py-10 sm:px-10 sm:py-14 lg:px-16">
      <div className="salon-card mx-auto grid max-w-[1280px] overflow-hidden border border-[#eadfea] bg-white shadow-[0_16px_44px_rgba(52,29,52,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <p className="salon-eyebrow">Come and see us</p>
          <h2 className={`${displayFont.className} mt-3 text-3xl text-[#321d32] sm:text-4xl`}>North Legon, Deer Street</h2>
          <div className="my-6 h-px w-16 bg-[#bd9a47]" />
          <div className="space-y-5">
            {details.map((detail) => (
              <div key={detail.text} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5edf5]">
                  <Image src={detail.icon} alt="" aria-hidden="true" width={24} height={24} />
                </span>
                <p className="text-sm leading-6 text-[#504551] sm:text-base">{detail.text}</p>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5edf5]">
                <Image src="/phone.svg" alt="" aria-hidden="true" width={24} height={24} />
              </span>
              <div className="flex flex-col gap-1 text-sm sm:text-base">
                <a href="tel:+233547873650" className="font-medium text-[#6f1972] hover:underline">+233 54 787 3650</a>
                <a href="tel:+233503192450" className="font-medium text-[#6f1972] hover:underline">+233 50 319 2450</a>
              </div>
            </div>
          </div>
          <Link href="/bookAppointment" className="salon-button mt-8 inline-flex min-h-12 w-full items-center justify-center bg-[#8e1a91] px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#6d146f] sm:w-fit">Book a service <span className="ml-2" aria-hidden="true">↗</span></Link>
        </div>
        <div className="min-h-[320px] bg-[#eee8ee] sm:min-h-[420px] lg:min-h-[520px]">
          <Map />
        </div>
      </div>
    </section>
  </div>
);

export default Page;
