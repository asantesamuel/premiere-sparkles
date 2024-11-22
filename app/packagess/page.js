import React from "react";
import BackButton from "../components/backButton";
import localFont from "next/font/local";
import packages from "../data/packages.json";

const myFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const page = () => {
  return (
    <div>
      <div className="w-full z-0 h-[1000px] object-center bg-cover bg-[url('/photoshootthree.PNG')] sticky  bg-black bg-opacity-30 bg-blend-darken flex justify-center items-center">
        <div className={myFont.className}>
          <h1 className="text-[50px] text-white">Our Packages</h1>
        </div>
      </div>
      <div className="z-50">
        <BackButton />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Makeup */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-start items-start p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4">
                <h1 className={myFont.className}>MAKEUP</h1>
                <p className="text-sm font-light text-left text-slate-500">
                  Call/Text 0503192450 or 0547873650 for costs
                </p>
              </div>
              <div className="space-y-8">
                {packages.makeup &&
                  packages.makeup.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center w-full space-x-4 text-purple-900">
                        <h1>{item.type}</h1>
                        <div className="h-[1px] bg-slate-800 w-[150px]"></div>
                        <h1>GHC {` ` + item.price}</h1>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Nails */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-start items-start p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4">
                <h1 className={myFont.className}>NAILS</h1>
                <p className="text-sm font-light text-left text-slate-500">
                  Call/Text 0503192450 or 0547873650 for costs
                </p>
              </div>
              <div className="space-y-8">
                {packages.nails &&
                  packages.nails.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center w-full space-x-4 text-purple-900">
                        <h1>{item.type}</h1>
                        <div className="h-[1px] bg-slate-800 w-[150px]"></div>
                        <h1>GHC {` ` + item.price}</h1>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Lashes */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-start items-start p-10">
              <div className={myFont.className}>
                <h1 className="text-[40px] text-left text-mypurple font-bold pb-4">
                  LASHES
                </h1>
              </div>
              <div className="space-y-8">
                {packages.lashes &&
                  packages.lashes.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center w-full space-x-4 text-purple-900">
                        <h1>{item.type}</h1>
                        <div className="h-[1px] bg-slate-800 w-[150px]"></div>
                        <h1>GHC {` ` + item.price}</h1>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Wigs */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-start items-start p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4">
                <h1 className={myFont.className}>WIGS</h1>
                <p className="text-sm font-light text-left text-slate-500">
                  Call/Text 0503192450 or 0547873650 for costs
                </p>
              </div>
              <div className="space-y-8">
                {packages.wigs &&
                  packages.wigs.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center w-full space-x-4 text-purple-900">
                        <h1>{item.type}</h1>
                        <div className="h-[1px] bg-slate-800 w-[150px]"></div>
                        <h1>GHC {` ` + item.price}</h1>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Pedicure */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-start items-start p-10">
              <div className={myFont.className}>
                <h1 className="text-[40px] text-left text-mypurple font-bold pb-4">
                  PEDICURE
                </h1>
              </div>
              <div className="space-y-8">
                {packages.pedicure &&
                  packages.pedicure.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center w-full space-x-4 text-purple-900">
                        <h1>{item.type}</h1>
                        <div className="h-[1px] bg-slate-800 w-[150px]"></div>
                        <h1>GHC {` ` + item.price}</h1>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
