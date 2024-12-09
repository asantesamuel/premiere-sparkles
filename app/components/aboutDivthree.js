import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const aboutDivthree = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center w-full lg:h-[700px] p-10">
      <div className="flex flex-col justify-center lg:items-center items-center">
        <h1 className="lg:text-8xl text-4xl w-[1000px] text-center font-bold mb-[40px] flex justify-items-center">
          <div className={myFont.className}>
            Iconic Partnerships in Entertainment
          </div>
        </h1>
        <p className="text-md font-regular text-center lg:text-center w-[600px] mb-4">
          We are proud to have contributed to Ghana’s entertainment and fashion
          industry, working with stars like
          <span className="font-bold text-red-500"> Kelvyn Boy, Black Sherif, Quamina MP, and Kwesi Arthur</span>.
          Our expertise has graced music videos like “Down Flat” and “Gold
          Digga,” showcasing our creative and cutting-edge beauty solutions for
          high-profile projects.
        </p>
      </div>
    </div>
  );
};

export default aboutDivthree;
