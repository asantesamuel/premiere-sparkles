import React from "react";
import Products from "../components/products";
import BackButton from "../components/backButton";

const page = () => {
  return (
    <div>
      <BackButton />

      <div className="flex justify-center text-center  text-sm md:w-full  pb-20 border-b-2 border-gray-500">
        <div className=" text-center md:flex md:flex-col justify-center md:w-full w-[200px] ">
          <div className="flex flex-col justify-center items-center sm:h-[100px] ">
            <h1 className="md:text-[70px] sm:h-[60px] text-[32px] font-bold  ">
              Products
            </h1>
            <p className="text-[8px] text-center text-balance font-regular  w-[350px]  md:text-[18px]  ">
              Quality products - The choice of professionals available to you
            </p>
          </div>
          <div className="flex justify-center w-full items-center md:mt-8">
            <p className="text-[12px] sm:mt-8 text-center  text-balance font-regular   lg:w-[1000px] md:w-[700px]  md:text-[18px]  sm:w-[600px]">
              vehicula orci. Duis mattis pellentesque risus, quis viverra turpis
              Praesent vitae auctor felis. Integer iaculis felis ut tellus
              finibus tristique. Fusce tempor felis ac nulla faucibus, ut
              interdum dui faucibus. Ut nec semper augue. Morbi scelerisque sed
              tortor id lacinia. Nam ac tempus nisl, ut feugiat dolor.
              Suspendisse fringilla finibus nisi, sit amet tristique orci
              aliquam bibendum. Morbi id congue risus. Praesent vel sodales
              lorem. Ut iaculis facilisis mauris. Quisque egestas erat sit amet
              dui sodales consectetur. Fusce neque mauris, ultricies vitae
              euismod at, condimentum sed mauris. Fusce consectetur diam nec
              lectus imperdiet, et luctus ligula laoreet. Etiam sit amet semper
              libero. Mauris aliquet condimentum tortor sit amet euismod.
              Aliquam viverra rutrum eros, non sodales nulla gravida vel. Morbi
              augue quam, sollicitudin quis elit ut, commodo euismod neque.
              Pellentesque hendrerit commodo porttitor.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default page;
