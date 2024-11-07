import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div className="flex justify-center sm:flex sm:flex-col  sm:justify-center sm:items-center items-center w-full p-10 ">
        <div className=" sm:flex sm:flex-col sm:items-center lg:h-[450px] lg:grid lg:grid-cols-5 xl:w-[1100px] md:w-[500x]">
          {/* <!-- 1st col --> */}
          <div className="col-span-2 w-[200px] md:w-full md:h-full p-10">
            {" "}
            <Image
              src="/product.jpg"
              alt="product"
              objectFit="contain"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          {/* <!-- 2nd col --> */}
          <div className="col-span-3 flex  flex-col justify-center items-center text-center lg:text-left p-2 w-[200px] md:p-8 space-y-2 md:space-y-8 lg:w-[640px] md:h-[450px] ">
            <h1>A Brief Summary Of The Product</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur. Et lacinia at penatibus
              pulvinar pretium scelerisque egestas. Cursus urna nisl turpis
              adipiscing nibh. Nunc quisque ipsum cras vitae cursus lacus.
              Sapien donec ac pellentesque sit sagittis morbi. Diam a dolor nec
              eu sapien donec curabitur sit aliquet. Mattis aliquam id in
              porttitor euismod aliquam nibh vel. Viverra pellentesque
              vestibulum fames in quis proin gravida viverra ultrices. Quam
              sagittis in risus pretium cras donec ut etiam. Fringilla
              scelerisque porttitor cursus porta ultrices interdum. Tincidunt
              sit m interdum. Sit lorem laoreet fusce dignissim lectus mi
              bibendum. Vel at eget lectus duis arcu aliquam. 1
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
