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

      {/* About Section */}
      <div className="w-full h-[700px] sm:h-[1000px] bg-cover object-center text-white bg-[url('/TIFA2.JPG')] sticky bg-black bg-opacity-30 bg-blend-darken flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-4 px-6">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center hover:text-transparent hover:bg-transparent transition-all duration-300">
            Miss Tifa Quaye
          </h1>
          <h2 className="text-[18px] sm:text-[20px] md:text-[24px] text-center font-light">
            Founder and CEO
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
