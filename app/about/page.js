import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-start text-sm w-full  pt-20 pb-20">
      <div className="md:flex md:flex-col md:justify-start w-[400px] lg:w-[1000px] md:w-[700px]   ">
        <h1 className="md:text-[70px]  text-[32px] font-bold h-[200px] flex justify-start items-center  md:w-[700px] lg:w-[1000px]   ">
          About Us
        </h1>
        <div>
          <Image
            src="/about.JPG"
            width={400}
            height={400}
            className="float-left mr-2"
          />
          <p className="text-[12px] leading-loose break-before-all text-balance font-regular text-left  w-[400px] lg:w-[1000px] md:w-[700px]  md:text-[18px]  ">
            At Premier Sparkle, beauty is more than just skin-deep; it’s a
            celebration of individuality, self-expression, and empowerment. We
            believe that true beauty comes from within, and our mission is to
            help you embrace your unique features while providing a safe,
            inclusive, and supportive space for self-discovery. Whether you’re
            preparing for a special occasion, a music video shoot, or simply
            want to refresh your personal look, we are here to help you feel
            your absolute best. Founded with a passion for artistry and a
            commitment to excellence, Premier Sparkle has become a trusted name
            in the beauty industry. With years of experience, we have developed
            a reputation for delivering high-quality, personalized beauty
            services that cater to each client’s needs, ensuring that you always
            leave feeling confident and radiant. We pride ourselves on being
            behind some of Ghana’s most iconic moments in the entertainment and
            fashion industry. From the electrifying visuals of Kelvyn Boy’s hit
            single “Down Flat” to Black Sherif’s “Gold Digga,” Premier Sparkle
            has been the go-to beauty partner for some of the biggest names in
            music. Our collaborations don’t stop there—we’ve also worked closely
            with stars like Quamina MP and Kwesi Arthur, playing an integral
            role in helping these artists shine in their high-profile music
            videos and live performances. These partnerships highlight our
            ability to provide creative, cutting-edge beauty solutions that
            resonate on both a personal and professional level. Our goal is to
            make each client feel empowered and confident, both inside and out.
            We understand that beauty is personal, and we take the time to
            listen to your needs and preferences, offering customized services
            that make you feel unique and valued. We strive to foster an
            environment where you can relax, express yourself freely, and leave
            with a renewed sense of self-assurance. At Premier Sparkle, we’re
            not just in the business of beauty—we’re in the business of
            transformation. Let us help you discover your most confident,
            empowered self as we embark on a journey of beauty together. Come
            experience the art of transformation with us and take the first step
            toward a more radiant you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
