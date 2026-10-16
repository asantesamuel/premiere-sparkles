import React from "react";
import Link from "next/link";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const HomeContainerThree = () => (
  <section className="bg-[#f5edf5] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="salon-eyebrow">Find your look</p>
          <h2 className={`${displayFont.className} mt-3 max-w-2xl text-4xl leading-tight text-[#321d32] sm:text-5xl`}>
            Discover our special packages
          </h2>
        </div>
        <Link href="/packages" className="salon-text-link inline-flex items-center font-semibold text-[#69116b]">
          Browse packages <span className="ml-3 text-xl" aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="salon-card group relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#281b29] sm:min-h-[480px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-[center_42%] transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"
          style={{ backgroundImage: "url('/photoshootthree.PNG')" }}
          role="img"
          aria-label="Premiere Sparkles Salon package look"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21121f]/85 via-[#21121f]/35 to-transparent" />
        <div className="max-w-xl p-7 text-white sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffec9e]">Makeup · Nails · Lashes · Wigs</p>
          <h3 className={`${displayFont.className} mt-4 text-4xl leading-tight sm:text-5xl`}>Your next favourite look is waiting.</h3>
          <Link href="/packages" className="salon-button mt-8 inline-flex min-h-14 items-center justify-center bg-[#ffec9e] px-8 text-sm font-semibold uppercase tracking-[0.12em] text-[#281627] hover:bg-white">
            Check out our packages <span className="ml-3 text-lg" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeContainerThree;
