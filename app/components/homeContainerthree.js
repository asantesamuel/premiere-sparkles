import React from "react";
import Link from "next/link";

const homeContainerthree = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center h-[1000px] items-center w-full ">
        <div>
          <h1 className="text-[32px] text-center font-bold m-10 md:text-6xl">
            Discover Our Special Packages
          </h1>
        </div>
        <div className="flex flex-col justify-end items-center pb-8 bg-black bg-opacity-5 bg-blend-darken h-[400px] w-[300px] lg:w-[1000px]  bg-cover md:w-[500px] object-center  bg-[url('/photoshootthree.PNG')]">
          <Link
            href="/packagess"
            className="bg-white text-black text-[12px] text-center px-8 py-4 mt-4  w-[200px] md:w-[350px] md:text-xl  hover:bg-purple-100">
            Check out our packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default homeContainerthree;
