import React from "react";

const homeContainertwo = () => {
  return (
    <div className="flex justify-center items-center mt-10  h-[700px] w-full ">
      <div className="">
        <div className="flex justify-evenly h-[200px] items-center flex-col">
          <h1 className="text-7xl font-extrabold text-black text-center ">
            Our Locations
          </h1>
          <h1 className="text-black text-center w-60">
            Already know which service you want? Select a location, find your
            service and book!{" "}
          </h1>
        </div>
        <div className=" flex justify-evenly w-[1600px] p-20 ">
          <div
            className="shadow-xl flex flex-col justify-center items-center bg-black bg-opacity-45 bg-blend-darken h-[400px] w-[400px]  bg-cover bg-center "
            style={{ backgroundImage: "url(/2ndimage.jpg)" }}>
            <h3 className="text-lg text-white uppercase">
              Dzorwulu, Ebony Jucntion
            </h3>
            <h3 className="text-md text-white ">Accra, Ghana</h3>
            <button className="bg-white text-black text-xl  px-8 py-4 mt-4  w-[260px]">
              Book Now
            </button>
          </div>
          <div
            className=" shadow-xl flex flex-col justify-center items-center bg-black bg-opacity-45 bg-blend-darken h-[400px] w-[400px] bg-cover bg-center "
            style={{ backgroundImage: "url(/2ndimage.jpg)" }}>
            <h3 className="text-lg text-white uppercase">
              Dzorwulu, Ebony Jucntion
            </h3>
            <h3 className="text-md text-white ">Accra, Ghana</h3>
            <button className="bg-white text-black text-xl  px-8 py-4 mt-4  w-[260px]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeContainertwo;
