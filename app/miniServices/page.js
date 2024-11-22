import Image from "next/image";

import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-24 flex flex-wrap items-center justify-center ">
        <div className="flex-shrink-0 m-6 relative overflow-hidden w-96 bg-[url('/2ndimage.jpg')] bg-cover h-80 bg-mypurple rounded-lg max-w-xs shadow-lg hover:bg-opacity-50 bg-opacity-10  bg-blend-darken hover:shadow-xl">
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between w-full">
              <span className="block font-semibold text-xl">Peace Lily</span>
              <span className="bg-white rounded-full text-slate-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
                GHC 36.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
