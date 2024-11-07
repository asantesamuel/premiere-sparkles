import React from "react";
import BackButton from "../components/backButton";

const page = () => {
  return (
    <div>
      <BackButton />
      <div className="w-full h-[100px] ">
        <h1 className=" text-[32px] text-center font-bold md:text-[60px] ">Our Services</h1>
      </div>
      <div className="flex justify-center items-center w-full p-10 ">
        <div className="bg-mylightpurple p-10 w-[1200px] md:h-[400px] md:grid md:grid-cols-5 gap-4">
          <div className=" block col-span-3">
            <div className="h-[80px] w-full flex justify-start items-center text-[32px] font-medium">
              <h1>Hair Dressing - Twist</h1>
            </div>
            <div className=" flex justify-between items-center ">
              <div className="w-1/2 h-[50px] border-2 border-black flex justify-evenly items-center">
                <h1 className="text-[20px] text-black">Cost</h1>
                <h1 className="text-[20px] text-black">GHS200</h1>
              </div>
              <div className="w-1/2 h-[50px] text-red-600">
                <button className=" text-lg text-left  px-8 py-4   ">
                  {" "}
                  Book Now
                </button>
              </div>
            </div>

            <div className=" flex flex-col text-left justify-center items-center space-y-4 h-[200px]">
              <div>
                <h1 className="text-[20px] text-black">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et lorem nec odio ultricies pharetra.{" "}
                </h1>
              </div>
              <div>
                <h1 className="text-[20px] text-red-600">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et lorem nec odio ultricies pharetra.{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* <!-- 2nd col --> */}
          <div className="col-span-2 p-8 flex relative flex-col justify-center  items-center">
            <div className=" w-[240px] -mb-8 z-10   h-[60px] bg-white flex flex-col justify-center items-center space-y-4">
              <h1 className="text-md text-mypurple font-medium ">
                Our Services
              </h1>
            </div>
            <div className="   w-[300px] h-[240px] bg-mypurple flex-col  flex justify-center items-center">
              <h1 className="text-sm text-white text-left font-regular w-[200px] ">
                Available At this location
              </h1>
              <h1 className="text-md text-white text-left font-medium w-[200px]">
                North Legon Opposite Papa’s Pizza Dzorwulu Ebony Junction
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
