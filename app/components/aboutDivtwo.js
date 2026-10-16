import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const aboutDivtwo = () => {
  return (
    <div className=" flex flex-col lg:grid  lg:grid-cols-2 justify-center items-center w-full lg:h-[700px] p-10 bg-mylightgold">
      <div className="flex flex-col justify-center  text-center lg:text-left lg:items-center items-center ">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className={myFont.className}>
            <div className="text-center text-4xl font-bold mb-[40px]">
              A Legacy of Excellence
            </div>
          </div>
          <div className="text-md font-regular text-center lg:text-left lg:w-[500px] mb-4">
            Founded with a passion for artistry and a commitment to excellence,
            Premiere Sparkles Salon has built a reputation as a trusted name in the
            beauty industry. With years of experience, we deliver personalized,
            high-quality beauty services that cater to your needs, ensuring you
            always leave feeling radiant and confident.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-8">
        <Image
          src={"/photoshoottwo.PNG"}
          width={400}
          height={400}
          alt="About Image"
        />
      </div>
    </div>
  );
};

export default aboutDivtwo;
