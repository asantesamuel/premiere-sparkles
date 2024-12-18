import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});
const aboutDivone = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full lg:h-[700px] p-10">
      <div className="flex justify-center items-center p-8">
        <Image src={"/about.JPG"} width={400} height={400} alt="About Image" />
      </div>
      <div className="flex flex-col justify-center lg:items-start items-center ">
        <h1 className=" text-center w-auto md:text-left lg:text-8xl text-4xl font-bold mb-[40px]">
          <div className={myFont.className}> Embracing Individuality</div>
        </h1>
        <h1 className="text-md font-regular text-center lg:text-left lg:w-[500px] mb-4">
          At Premier Sparkle, we celebrate individuality, self-expression, and
          empowerment. True beauty comes from within, and we provide a safe,
          inclusive, and supportive space for self-discovery. Whether it’s for a
          special occasion, a music video shoot, or a personal refresh, we help
          you embrace your unique features and feel your absolute best.
        </h1>
      </div>
    </div>
  );
};

export default aboutDivone;
