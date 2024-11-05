import React from "react";

const homeContainerthree = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center   h-[800px] w-full ">
        <h1 className="text-6xl text-center font-bold m-10">
          Discover Our Spa and Saloon Packages
        </h1>
        <div
          className="flex flex-col justify-end items-center pb-8 bg-black bg-opacity-5 bg-blend-darken h-[400px] w-[1500px]  bg-cover bg-center "
          style={{ backgroundImage: "url(/package.jpg)" }}>
          <button className="bg-white text-black text-xl  px-8 py-4 mt-4  w-[350px]">
            Check out our packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default homeContainerthree;
