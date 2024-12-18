import React from "react";
import Link from "next/link";

const HomeContainerThree = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-8">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl text-center font-bold m-4 sm:text-4xl md:text-5xl lg:text-6xl">
          Discover Our Special Packages
        </h1>
      </div>

      {/* Content Section */}
      <div
        className="flex flex-col justify-center items-center bg-black bg-opacity-10 bg-blend-darken h-[300px] w-[300px] sm:h-[400px] sm:w-[500px] lg:h-[500px] lg:w-[900px] bg-cover bg-center "
        style={{ backgroundImage: "url('/photoshootthree.PNG')" }}>
        <Link
          href="/packagess"
          className="bg-white text-black text-sm sm:text-base md:text-lg lg:text-xl text-center px-6 py-3 mt-4 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] hover:bg-purple-100 transition-all">
          Check out our packages
        </Link>
      </div>
    </div>
  );
};

export default HomeContainerThree;
