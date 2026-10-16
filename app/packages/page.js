import Link from "next/link";
import localFont from "next/font/local";
import BackButton from "../components/backButton";
import packages from "../data/packages.json";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const categoryLabels = {
  makeup: "Makeup",
  nails: "Nails",
  lashes: "Lashes",
  wigs: "Wigs",
  pedicure: "Pedicure",
};

const PackageCard = ({ name, items }) => (
  <article className="salon-card flex h-full flex-col border border-[#eadfea] bg-white p-6 sm:p-8">
    <div className="mb-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-[#bd9a47]" aria-hidden="true" />
      <h2 className={`${displayFont.className} text-3xl text-[#7b217c] sm:text-4xl`}>{name}</h2>
      <span className="h-px flex-1 bg-[#bd9a47]" aria-hidden="true" />
    </div>
    <ul className="flex-1 divide-y divide-[#eee7ed]">
      {items.map((item, index) => (
        <li key={`${item.type}-${index}`} className="flex min-h-14 items-center justify-between gap-3 py-3 text-sm sm:text-base">
          <span className="min-w-0 pr-2 font-medium text-[#3e3340]">{item.type.trim()}</span>
          <span className="shrink-0 text-right font-semibold tabular-nums text-[#4a244b]">
            {item.price == null || item.price === "" ? "Price available on request" : `GHC ${item.price}`}
          </span>
        </li>
      ))}
    </ul>
    {name === "Nails" && <p className="mt-4 text-xs text-[#756c75]">Extra design comes with extra cost</p>}
  </article>
);

const Page = () => {
  const categories = Object.entries(categoryLabels).filter(([key]) => Array.isArray(packages[key]));

  return (
    <div className="bg-[#fbf8ef]">
      <section className="relative isolate flex min-h-[350px] items-center overflow-hidden bg-[#291c29] sm:min-h-[420px]">
        <div className="absolute inset-0 -z-20 bg-cover bg-[center_38%]" style={{ backgroundImage: "url('/photoshootthree.PNG')" }} role="img" aria-label="Premiere Sparkles Salon packages" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241524]/90 via-[#241524]/55 to-[#241524]/15" />
        <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16">
          <BackButton light />
          <div className="max-w-2xl salon-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffec9e]">The Premiere Sparkles edit</p>
            <h1 className={`${displayFont.className} text-5xl text-white sm:text-6xl lg:text-7xl`}>Our Packages</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              Explore our makeup, nails, lashes, wigs, and pedicure offerings.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="salon-eyebrow">Explore the menu</p>
              <h2 className={`${displayFont.className} mt-3 text-3xl text-[#321d32] sm:text-4xl`}>Services & pricing</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#665d66] sm:text-base">
              Bridal makeup pricing is available on request. Contact us for a personalised quote.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map(([key, label], index) => (
              <div key={key} className="salon-reveal" style={{ animationDelay: `${Math.min(index * 60, 240)}ms` }}>
                <PackageCard name={label} items={packages[key]} />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 bg-[#321d32] px-6 py-7 text-center text-white sm:flex-row sm:px-9 sm:text-left">
            <div>
              <h2 className={`${displayFont.className} text-2xl sm:text-3xl`}>Ready to book your visit?</h2>
              <p className="mt-2 text-sm text-white/75">Choose your service and preferred appointment time.</p>
            </div>
            <Link href="/bookAppointment" className="salon-button inline-flex min-h-12 shrink-0 items-center justify-center bg-[#ffec9e] px-7 text-sm font-semibold uppercase tracking-[0.1em] text-[#281627] hover:bg-white">Book appointment <span className="ml-2" aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
