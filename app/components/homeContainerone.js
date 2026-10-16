import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const HomeContainerOne = () => (
  <section className="bg-[#fbf8ef] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
    <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
      <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
        <div className="absolute -left-4 -top-4 h-full w-full border border-[#b79136]/55 sm:-left-6 sm:-top-6" aria-hidden="true" />
        <div className="relative aspect-[4/5] overflow-hidden bg-[#eadfe9]">
          <Image
            src="/TIFA2.JPG"
            alt="Premiere Sparkles Salon founder"
            fill
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="salon-card-image object-cover object-center"
            priority={false}
          />
        </div>
        <div className="absolute -bottom-5 right-3 bg-[#321d32] px-5 py-4 text-[#ffec9e] sm:right-8 sm:px-7 sm:py-5">
          <p className={`${displayFont.className} text-xl sm:text-2xl`}>The art of transformation</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <p className="salon-eyebrow">A little about us</p>
        <h2 className={`${displayFont.className} mt-4 text-4xl leading-tight text-[#321d32] sm:text-5xl lg:text-[56px]`}>
          Beauty that lets you feel like <span className="text-[#9c049e]">yourself.</span>
        </h2>
        <div className="mt-7 h-px w-20 bg-[#b79136]" />
        <p className="mt-7 text-base leading-8 text-[#514750] sm:text-lg">
          At Premiere Sparkles Salon, beauty is more than skin-deep. It&apos;s about
          embracing your individuality and celebrating what makes you unique.
          Our goal is to create a safe, supportive space where you can explore
          your beauty, build confidence, and feel empowered. With years of
          expertise, we&apos;ve established a proven track record of delivering
          exceptional services. We&apos;ve been behind the scenes of some of
          Ghana&apos;s most iconic videos: <strong className="font-semibold text-[#321d32]">KELVYN BOY&apos;S</strong> &apos;Down Flat&apos;,
          <strong className="font-semibold text-[#321d32]"> BLACK SHERIFF&apos;S</strong> &apos;Gold Digga&apos;, and show-stopping collaborations with
          <strong className="font-semibold text-[#321d32]"> QUAMINA MP</strong> and <strong className="font-semibold text-[#321d32]">KWESI ARTHUR</strong>, among others. Let’s journey together and experience the art of transformation with us.
        </p>
        <Link href="/about" className="salon-text-link mt-8 inline-flex items-center font-semibold text-[#69116b]">
          Get to know us <span className="ml-3 text-xl" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default HomeContainerOne;
