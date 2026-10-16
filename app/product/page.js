import Products from "../components/products";
import BackButton from "../components/backButton";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const Page = () => (
  <div className="bg-[#fbf8ef]">
    <section className="bg-[#321d32] px-5 py-10 text-white sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <BackButton light />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffec9e]">Premiere Sparkles Salon</p>
        <h1 className={`${displayFont.className} mt-3 text-5xl sm:text-6xl`}>Products</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Quality products - The choice of professionals available to you</p>
      </div>
    </section>
    <Products />
  </div>
);

export default Page;
