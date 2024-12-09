import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const aboutDivfour = () => {
  return (
    <div className=" flex flex-col lg:grid  lg:grid-cols-2 justify-center items-center w-full lg:h-[700px] p-10">
      <div className="flex flex-col justify-center text-center lg:text-left lg:items-center items-center ">
        <div className="flex flex-col justify-center items-start">
          <p className="flex justify-start items-start text-4xl font-bold mb-[40px]">
            <div className={myFont.className}>
              Transformative Beauty Experiences
            </div>
          </p>
          <p className="text-md font-regular text-center lg:text-left lg:w-[500px] mb-4">
            At Premier Sparkle, beauty is personal. We listen to your needs and
            preferences, offering customized services that empower you to feel
            confident and valued. Our environment fosters relaxation,
            self-expression, and a renewed sense of self-assurance. We’re not
            just about beauty—we’re about transformation.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-8">
        <Image
          src={"/photoshootfour.PNG"}
          width={400}
          height={400}
          alt="About Image"
        />
      </div>
    </div>
  );
};

export default aboutDivfour;
