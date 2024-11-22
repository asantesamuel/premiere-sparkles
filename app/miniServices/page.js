import Image from "next/image";

import React from "react";
import packages from "../data/packages.json";

const page = () => {
  return (
    <div className="grid grid-cols-5  ">
      {packages.makeup &&
        packages.makeup.map((item, index) => {
          return (
            <div
              key={index}
              className="p-24 flex flex-wrap items-center justify-center ">
              <div className="flex-shrink-0 m-6 relative overflow-hidden w-96 bg-[url('/2ndimage.jpg')] bg-cover h-80 bg-mypurple rounded-lg max-w-xs shadow-lg hover:bg-opacity-50 bg-opacity-10  bg-blend-darken hover:shadow-xl ">
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Makeup</span>
                  <div className="flex justify-between w-full">
                    <span className="block font-semibold text-xl">
                      {item.type}
                    </span>
                    <span className="bg-white rounded-full text-slate-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      GHC {` ` + item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default page;
