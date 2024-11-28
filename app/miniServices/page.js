import Image from "next/image";
import React from "react";
import miniservices from "../data/miniservices.json";

const Page = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {/* First Column */}
      {miniservices &&
        miniservices.map((service, index) => (
          <div
            key={index}
            className="p-10 flex flex-wrap items-center justify-center">
            <div
              className="flex-shrink-0 m-6 relative overflow-hidden w-96 h-80 bg-cover bg-mypurple max-w-xs shadow-lg hover:bg-opacity-50 bg-opacity-10 bg-blend-darken hover:shadow-xl"
              style={{ backgroundImage: `url(${service.image})` }}>
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{service.title}</span>
                <div className="flex justify-between w-full">
                  <span className="block font-semibold text-xl">
                    {service.description}
                  </span>
                  <span className=" text-white text-2xl font-bold px-3 py-2 leading-none flex items-center">
                    {service.id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
