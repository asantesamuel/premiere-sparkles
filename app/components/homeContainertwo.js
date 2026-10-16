import React from "react";
import Link from "next/link";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const HomeContainerTwo = () => (
  <section className="bg-white px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
        <div>
          <p className="salon-eyebrow">Visit the salon</p>
          <h2 className={`${displayFont.className} mt-3 text-4xl text-[#321d32] sm:text-5xl`}>Our location</h2>
        </div>
        <p className="max-w-md text-base leading-7 text-[#625862]">
          Already know which service you want? Select a location, find your service, and book!
        </p>
      </div>

      <div className="salon-card group relative isolate flex min-h-[360px] items-end overflow-hidden bg-[#261827] sm:min-h-[440px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"
          style={{ backgroundImage: "url('/accraGhana.jpg')" }}
          role="img"
          aria-label="Accra, Ghana"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21121f]/90 via-[#21121f]/50 to-transparent" />
        <div className="max-w-xl p-7 text-white sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffec9e]">Accra, Ghana</p>
          <h3 className={`${displayFont.className} mt-3 text-4xl sm:text-5xl`}>North Legon</h3>
          <p className="mt-2 text-lg text-white/85">Deer Street 7</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/bookAppointment" className="salon-button inline-flex min-h-12 items-center justify-center bg-[#ffec9e] px-6 font-semibold text-[#281627] hover:bg-white">Book a visit</Link>
            <Link href="/location" className="salon-button inline-flex min-h-12 items-center justify-center border border-white/60 px-6 font-medium text-white hover:border-[#ffec9e] hover:text-[#ffec9e]">View location details</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeContainerTwo;
