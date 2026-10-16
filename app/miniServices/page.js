import Image from "next/image";
import React from "react";
import miniservices from "../data/miniservices.json";
import BackButton from "../components/backButton";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const Page = () => {
  return (
    <div className="bg-[#fbf8ef]">
      <section className="bg-[#321d32] px-5 py-9 text-white sm:px-10 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <BackButton light />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffec9e]">Premiere Sparkles Salon</p>
          <h1 className={`${displayFont.className} mt-3 text-5xl sm:text-6xl`}>Mini Services</h1>
        </div>
      </section>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-1 px-3 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
      {miniservices &&
        miniservices.map((service) => (
          <div
            key={service.id}
            className="p-10 flex flex-wrap items-center justify-center salon-reveal">
            <div
              className="salon-card group relative m-6 flex h-80 w-96 max-w-xs flex-shrink-0 flex-col justify-end overflow-hidden bg-mypurple shadow-lg">
              <Image
                src={service.image.startsWith("/") ? service.image : `/${service.image}`}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="salon-card-image object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 px-6 pb-6 pt-16 text-white">
                <span className="block opacity-75 -mb-1">{service.title}</span>
                <div className="flex justify-between w-full">
                  <span className="block font-semibold text-xl">
                    {service.description}
                  </span>
                  <span className=" text-white text-2xl font-bold px-3 py-2 leading-none flex items-center">
                    {service.id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
