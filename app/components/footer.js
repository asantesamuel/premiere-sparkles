import React from "react";
import Link from "next/link";
import Image from "next/image";
const footer = () => {
  return (
    <div className="h-[1200px]">
      <div className="w-full h-[500px] ">
        <div className="bg-black h-1/5 flex justify-center items-center flex-col">
          <h1 className="text-white text-3xl font-bold text-center">
            We accept all major credit/debit cards, banks Transfer and Mobile
            money
          </h1>
          <h1 className="text-white text-md font-regular text-center">
            More information available upon request
          </h1>
        </div>
        <div className=" flex flex-col justify-evenly items-center bg-mylightpurple h-4/5">
          <div>
            <h1 className=" text-[32px] text-center font-bold text-black ">
              {" "}
              Let's Connect
            </h1>
          </div>
          <div>
            <div className="w-[800px] h-[200px] bg-white flex flex-col space-y-2 justify-center items-center ">
              <div className="flex items-start w-[610px]">
                <label className="text-[20px]  text-slate-700 ">
                  Receive our news and special offers
                </label>
              </div>
              <div>
                <div className="flex justify-between w-[610px] ">
                  {" "}
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-[400px] h-[40px] border-2 p-4 border-slate-200 outline-none "
                  />
                  <button className="w-[200px] h-[40px] bg-mypurple text-white ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[500px] ">
        <div className=" w-[1500px]">
          <div className="grid w-full grid-cols-4 ">
            <div className=" flex justify-center">
              {" "}
              <div className="flex flex-col space-y-4">
                <h1 className=" text-black font-bold text-md">
                  Book an appointment with with us
                </h1>
                <h1 className=" text-black w-[200px]">
                  Dzorwulu Ebony Junction North Legon Opposite Papa’s Pizza
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              <div className="flex flex-col space-y-4">
                {" "}
                <div>
                  <Link href="/" className="hover:text-mypurple">
                    Home
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/works" className="hover:text-mypurple">
                    Our Services
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/" className="hover:text-mypurple">
                    Packages
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/" className="hover:text-mypurple">
                    About Us
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/" className="hover:text-mypurple">
                    Our Location
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col space-y-4">
                <div>
                  <h1 className=" text-black font-bold text-md">
                    Let's stay Connected
                  </h1>
                </div>
                <div>
                  <div className=" flex justify-center items-center w-[200px] h-[40px] bg-mypurple text-white ">
                    Email Us
                  </div>
                </div>
                <div>
                  <h1 className=" text-black  text-md">Follow Us</h1>
                </div>
                <div>
                  <div className="col-span-1 flex justify-start items-center">
                    <button className="m-0.5">
                      <Image
                        src="/facebook-black.svg"
                        alt="facebook-black"
                        width={20}
                        height={20}
                      />
                    </button>{" "}
                    <button className="m-0.5">
                      <Image
                        src="/x-black.svg"
                        alt="x-black"
                        width={20}
                        height={20}
                      />
                    </button>{" "}
                    <button className=" m-0.5">
                      <span className="fill-curent text-black">
                        <Image
                          src="/instagram-black.svg"
                          alt="instagram-black"
                          width={20}
                          height={20}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" rounded-sm shadow-md p-8 flex justify-center">
              <div className="flex flex-col space-y-4">
                <div>
                  <h1 className=" text-black font-bold text-md">Contact Us</h1>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="  w-[300px] h-[40px] border-2 p-4 border-slate-200 outline-none "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-[300px] h-[40px] border-2 p-4 border-slate-200 outline-none "
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Message..."
                    className="w-[300px] h-[200px] border-2 p-4 border-slate-200 outline-none "
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
