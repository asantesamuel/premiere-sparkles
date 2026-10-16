import Link from "next/link";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const Hero = () => (
  <section className="salon-hero relative isolate flex min-h-[620px] items-end overflow-hidden bg-[#21151f] sm:min-h-[700px] lg:min-h-[760px]">
    <div
      className="absolute inset-0 -z-20 bg-cover bg-[center_38%] transition-transform duration-700 motion-safe:hover:scale-[1.015]"
      style={{ backgroundImage: "url('/photoshootfive.PNG')" }}
      role="img"
      aria-label="Premiere Sparkles Salon beauty portrait"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21121f]/90 via-[#21121f]/55 to-[#21121f]/10" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#21121f]/60 via-transparent to-[#21121f]/10" />

    <div className="mx-auto grid w-full max-w-[1440px] items-end gap-10 px-6 pb-16 pt-20 sm:px-10 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-16 lg:pb-24">
      <div className="max-w-3xl text-white salon-reveal">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#ffec9e] sm:text-sm">
          Premiere Sparkles Salon
        </p>
        <h1 className={`${displayFont.className} text-5xl leading-[1.04] sm:text-6xl lg:text-7xl xl:text-[84px]`}>
          Welcome to <span className="text-[#ffec9e]">Premiere Sparkles Salon.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
          A place of confidence where you feel satisfied with your elegant look
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/bookAppointment" className="salon-button inline-flex min-h-14 items-center justify-center bg-[#ffec9e] px-8 text-sm font-semibold uppercase tracking-[0.12em] text-[#281627] hover:bg-white">
            Book an appointment <span className="ml-3 text-lg" aria-hidden="true">↗</span>
          </Link>
          <Link href="/works" className="salon-button inline-flex min-h-14 items-center justify-center border border-white/65 px-8 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:border-[#ffec9e] hover:text-[#ffec9e]">
            Explore services
          </Link>
        </div>
      </div>

      <div className="hidden border-l border-white/30 pl-6 text-white/90 lg:block">
        <p className="text-xs uppercase tracking-[0.24em] text-[#ffec9e]">Find us</p>
        <p className={`${displayFont.className} mt-3 text-2xl`}>North Legon</p>
        <p className="mt-1 text-sm">Deer Street 7, Accra</p>
        <Link href="/location" className="mt-4 inline-flex items-center text-sm font-medium text-white underline decoration-[#ffec9e] underline-offset-4 hover:text-[#ffec9e]">
          View location <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffec9e]/80 to-transparent" />
  </section>
);

export default Hero;
