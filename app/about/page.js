import React from "react";
import AboutDivone from "../components/aboutDivone";
import AboutDivtwo from "../components/aboutDivtwo";
import AboutDivthree from "../components/aboutDivthree";
import AboutDivfour from "../components/aboutDivfour";

const page = () => {
  return (
    <div>
      <AboutDivone />
      <AboutDivtwo />
      <AboutDivthree />
      <AboutDivfour />
      <div className="w-full sm:w-full sm:h-[1000px]  z-0 h-[700px] bg-cover text-white  flex-col  bg-[url('/TIFA2.JPG')] sticky  bg-black bg-opacity-30 bg-blend-darken flex justify-center items-center">
        <div className="flex flex-col justify-center items-center hover:display-none delay-300">
          <h1 className="font-bold text-3xl hover:bg-transparent">
            Miss Tifa Quaye
          </h1>
          <h1>Founder and CEO</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
