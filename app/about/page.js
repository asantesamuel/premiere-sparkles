import React from "react";
import AboutDivone from "../components/aboutDivone";
import AboutDivtwo from "../components/aboutDivtwo";
import AboutDivthree from "../components/aboutDivthree";
import AboutDivfour from "../components/aboutDivfour";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const page = () => {
  return (
    <div className="salon-reveal">
      <AboutDivone />
      <AboutDivtwo />
      <AboutDivthree />
      <AboutDivfour />

      {/* About Section */}
      <section className="relative isolate flex min-h-[480px] items-center justify-center overflow-hidden bg-[#281b29] text-white sm:min-h-[620px]">
        <div className="absolute inset-0 -z-20 bg-[url('/TIFA2.JPG')] bg-cover bg-[center_35%]" role="img" aria-label="Miss Tifa Quaye" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#21121f]/85 via-[#21121f]/30 to-[#21121f]/20" />
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 h-px w-16 bg-[#ffec9e]" aria-hidden="true" />
          <h1 className={`${displayFont.className} text-4xl text-white sm:text-5xl md:text-6xl`}>
            Miss Tifa Quaye
          </h1>
          <h2 className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-[#ffec9e] sm:text-base">
            Founder and CEO
          </h2>
        </div>
      </section>
    </div>
  );
};

export default page;
