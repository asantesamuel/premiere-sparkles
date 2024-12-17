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
      <div className="w-full sm:h-[1000px] object-center z-0 h-[700px]  bg-cover bg-[url('/photoshootthree.PNG')] sticky  bg-black bg-opacity-30 bg-blend-darken flex justify-center items-center">
        <div className={myFont.className}>
          <h1 className="text-[50px] text-white">Our Packages</h1>
        </div>
      </div>

      <BackButton />
      <div className="flex justify-center items-center ">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Makeup */}
          <div className="flex justify-center  items-start">
            <div className="flex flex-col justify-start sm:items-start items-center p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4 flex flex-col items-center">
                <h1 className={myFont.className}>MAKEUP</h1>
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                {packages.makeup &&
                  packages.makeup.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center sm:justify-start items-center w-full space-x-4 text-purple-900">
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
          <div className="flex justify-center items-start">
            <div className="flex flex-col justify-start sm:items-start items-center p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4 flex flex-col items-center">
                <h1 className={myFont.className}>NAILS</h1>
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                {packages.nails &&
                  packages.nails.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center sm:justify-start items-center w-full space-x-4 text-purple-900">
                        <h1>{item.type}</h1>
                        <div className="h-[1px] bg-slate-800 w-[150px]"></div>
                        <h1>GHC {` ` + item.price}</h1>
                      </div>
                    );
                  })}
              </div>
              <p className="text-sm font-light text-center text-slate-500">
                Extra design comes with extra cost
              </p>
            </div>
          </div>
          {/* LASHES */}
          <div className="flex justify-center items-start">
            <div className="flex flex-col justify-start sm:items-start items-center p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4 flex flex-col items-center">
                <h1 className={myFont.className}>LASHES</h1>
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                {packages.lashes &&
                  packages.lashes.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center sm:justify-start items-center w-full space-x-4 text-purple-900">
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

          <div className="flex justify-center items-start">
            <div className="flex flex-col justify-start sm:items-start items-center p-10">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4 flex flex-col items-center">
                <h1 className={myFont.className}>WIGS</h1>
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                {packages.wigs &&
                  packages.wigs.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center sm:justify-start items-center w-full space-x-4 text-purple-900">
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

          <div className="flex justify-center items-start">
            <div className="flex flex-col justify-start sm:items-start items-center p-10 ">
              <div className="text-[40px] text-left text-mypurple font-bold pb-4 flex flex-col items-center">
                <h1 className={myFont.className}>PEDICURE</h1>
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                {packages.pedicure &&
                  packages.pedicure.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center sm:justify-start items-center w-full space-x-4 text-purple-900">
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
