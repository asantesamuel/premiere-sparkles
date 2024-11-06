import React from "react";

const homeContainertwo = () => {
  return (
    <div className="flex justify-center items-center w-full p-10 ">
      <div className="grid grid-row-2 justify-center items-center ">
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="text-2xl text-center  font-extrabold text-black sm:text-5xl md:w-[600px]">
            Our Locations
          </h1>
          <h1 className="text-black text-center w-60">
            Already know which service you want? Select a location, find your
            service and book!{" "}
          </h1>
        </div>
        <div className=" flex flex-col p-10 items-center space-y-10 xl:space-y-0 xl:space-x-10 lg:space-y-0 lg:space-x-10 md:space-y-10 justify-evenly   lg:flex-row">
          <div
            className="shadow-xl h-[200px] w-[200px] flex flex-col justify-center items-center bg-black bg-opacity-45 bg-blend-darken   bg-cover bg-center md:h-[400px] md:w-[400px]"
            style={{ backgroundImage: "url(/2ndimage.jpg)" }}>
            <h3 className="text-[12px] text-white uppercase md:text-md ">
              Dzorwulu, Ebony Jucntion
            </h3>
            <h3 className="text-[12px] text-white md:text-md">Accra, Ghana</h3>
            <button className="bg-white text-black text-[14px]  px-8 py-4 mt-4  w-[150px] md:w-[200px] md:text-lg  hover:bg-purple-100">
              Book Now
            </button>
          </div>
          <div
            className="shadow-xl h-[200px] w-[200px] flex flex-col justify-center items-center bg-black bg-opacity-45 bg-blend-darken   bg-cover bg-center md:h-[400px] md:w-[400px]"
            style={{ backgroundImage: "url(/2ndimage.jpg)" }}>
            <h3 className="text-[12px] text-white uppercase md:text-md ">
              Dzorwulu, Ebony Jucntion
            </h3>
            <h3 className="text-[12px] text-white md:text-md">Accra, Ghana</h3>
            <button className="bg-white text-black text-[14px]  px-8 py-4 mt-4  w-[150px] md:w-[200px] md:text-lg  hover:bg-purple-100">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeContainertwo;
