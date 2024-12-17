import React from "react";
import BackButton from "../components/backButton";
import Map from "../components/maps";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <BackButton />
      <div className="w-full h-[100px] flex justify-center items-center">
        <h1 className="text-[28px] md:text-[40px] xl:text-[60px] text-center font-bold">
          Our Locations
        </h1>
      </div>

      <div className="flex justify-center items-center w-full p-6 md:p-10">
        <div className="bg-mylightpurple flex flex-col w-full max-w-[300px] md:max-w-[600px] xl:max-w-[1100px] xl:grid xl:grid-cols-5">
          {/* 1st Column */}
          <div className="col-span-3 p-4 md:p-6 xl:p-8 space-y-4 xl:space-y-6">
            <div className="h-auto w-full flex items-center text-md md:text-lg xl:text-2xl font-medium">
              <h1>North Legon, Deer Street</h1>
            </div>

            <div className="space-y-4">
              {/* Business Hours */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/alarm.svg"
                  alt="opening-hours"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                  width={30}
                  height={30}
                />
                <p className="text-sm md:text-base xl:text-lg">
                  Mondays to Saturdays 9am-8pm
                </p>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/map.svg"
                  alt="map-icon"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                  width={30}
                  height={30}
                />
                <p className="text-sm md:text-base xl:text-lg">
                  Deer Street 7, North Legon
                </p>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/phone.svg"
                  alt="phone-icon"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                  width={30}
                  height={30}
                />
                <p className="text-sm md:text-base xl:text-lg">
                  +233 547873650 || +233 503192450
                </p>
              </div>

              {/* Book a Service Button */}
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/bookAppointment"
                  className="bg-mypurple text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base xl:text-lg ">
                  Book a Service
                </Link>
              </div>
            </div>
          </div>

          {/* 2nd Column */}
          <div className="col-span-2 ">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
