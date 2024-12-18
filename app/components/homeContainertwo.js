import React from "react";
import Link from "next/link";

const HomeContainerTwo = () => {
  return (
    <div className="flex justify-center items-center w-full p-4 h-auto">
      <div className="grid grid-rows-2 gap-8 justify-center items-center w-full max-w-screen-xl">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-xl font-black text-black sm:text-4xl lg:text-5xl md:w-[600px]">
            Our Locations
          </h1>
          <h2 className="text-black text-base sm:text-lg lg:text-xl w-full md:w-3/4">
            Already know which service you want? Select a location, find your
            service, and book!
          </h2>
        </div>

        {/* Locations Section */}
        <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 justify-center">
          {/* Location Card */}
          <div
            className="shadow-xl h-[250px] w-[250px] md:h-[350px] md:w-[600px] lg:h-[400px] lg:w-[800px] flex flex-col justify-center items-center bg-black bg-opacity-50 bg-blend-darken bg-cover bg-center"
            style={{ backgroundImage: "url('/accraGhana.jpg')" }}>
            <h3 className="text-[12px] sm:text-[16px] md:text-xl font-bold text-white uppercase">
              North Legon, Deer Street 7
            </h3>
            <h3 className="text-[12px] sm:text-[16px] md:text-lg text-white">
              Accra, Ghana
            </h3>
            <Link
              href="/bookAppointment"
              className="bg-white text-black text-sm sm:text-base md:text-lg flex justify-center items-center px-6 py-3 mt-4 hover:bg-purple-100">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainerTwo;
