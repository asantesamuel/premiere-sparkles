import React from "react";
import BackButton from "../components/backButton";
import Map from "../components/maps";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <BackButton />
      <div className="w-full h-[100px] ">
        <h1 className=" text-[32px] text-center font-bold md:text-[60px] ">
          Our Locations
        </h1>
      </div>

      <div className="flex justify-center items-center w-full p-10 ">
        <div className="bg-mylightpurple flex flex-col w-[300px] md:flex md:flex-col md:w-[600px] xl:h-[450px] xl:grid xl:grid-cols-5 xl:w-[1100px] ">
          {/* <!-- 1st col --> */}
          <div className="col-span-3 p-2  w-[350px] md:p-8 space-y-2 md:space-y-8 lg:w-[640px] md:h-[450px]">
            <div className=" h-[40px] w-[350px] text-md md:h-[80px] md:w-full flex  justify-start items-center md:text-[32px] font-medium">
              <h1>North Legon, Deer Street</h1>
            </div>
            <div className=" flex flex-col justify-start w-[350px] space-y-4 h-full ">
              <div className="w-[350px] h-[50px]  flex justify-start items-center space-x-4">
                <div>
                  <Image
                    src="/alarm.svg"
                    alt="x-black"
                    width={30}
                    height={30}
                  />
                </div>
                <div className=" w-2/3">
                  <h1 className="text-[8px] w-[250px] md:text-xl md:w-[400px]">
                    Mondays to Saturdays 9am-8pm
                  </h1>
                </div>
              </div>
              <div className="w-[350px] h-[50px]  flex justify-start items-center space-x-4">
                <div>
                  <Image
                    src="/map.svg"
                    alt="map-black"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="w-2/3">
                  <h1 className="text-[8px] w-[250px] md:text-xl md:w-[400px]">
                    Deer street 7,North Legon
                  </h1>
                </div>
              </div>{" "}
              <div className="w-[350px] h-[50px]  flex justify-start items-center space-x-4">
                <div>
                  <Image
                    src="/phone.svg"
                    alt="phone-black"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="">
                  <h1 className="text-[8px] w-[250px] md:text-xl md:w-[300px]">
                    +233 547873650 || +233 503192450
                  </h1>
                </div>
              </div>
              <div className=" flex justify-center items-center w-[300px] md:w-[440px] h-[50px]  md:flex md:justify-start md:items-center space-x-4">
                <Link
                  href="/bookAppointment"
                  className="bg-mypurple md:w-[483px] lg:w-[full] text-white px-4 py-2">
                  Book a service
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- 2nd col --> */}
          <div className="col-span-2 ">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
