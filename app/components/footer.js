import React from "react";
import Link from "next/link";
import Image from "next/image";
import SendEmail from "./SendEmail";
const footer = () => {
  return (
    <div className="">
      <div className="w-full h-[500px] ">
        <div className="bg-black h-1/5 flex justify-center items-center flex-col">
          <h1 className="text-white text-[14px] font-bold text-center md:text-3xl">
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
              Let&apos;s Connect
            </h1>
          </div>
          <div>
            <div className="w-[300px] h-[200px] bg-white flex flex-col space-y-2 justify-center items-center md:w-[800px]">
              <div className="flex justify-center flex-col  sm:items-start w-[200] md:w-[610px]">
                <label className="text-[12px]  text-slate-700 md:text-[20px]">
                  Receive our news and special offers
                </label>

                <div>
                  <div className="flex flex-col  md:flex-row md:space-y-4  justify-between w-[250px] md:w-[610px] ">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-[200px] h-[30px] mt-4 border-2 p-4 border-slate-200 outline-none md:w-[400px] md:h-[40px]"
                    />
                    <button className="w-[100px] h-[35px] bg-mypurple text-white md:w-[200px] md:h-[40px] hover:bg-opacity-80">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-10 mb-[300px]">
        <div className=" w-full md:w-[1500px] flex justify-evenly items-center">
          <div className=" flex flex-col space-y-10 justify-center items-center md:items-start md:grid md:grid-cols-4 md:space-y-0">
            <div className=" flex justify-center">
              {" "}
              <div className="flex flex-col text-center md:text-left text-[14px] md:text-xl md:space-y-2">
                <h1 className=" text-black font-bold">
                  Book an appointment with with us
                </h1>
                <h1 className=" text-black  w-[200px]">
                  Dzorwulu Ebony Junction North Legon Opposite Papa’s Pizza
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center text-center md:text-left text-[14px]   md:text-xl md:space-y-2">
              {" "}
              <div className="flex flex-col justify-center space-y-4 items-center md:items-start  text-center md:text-left text-[14px]   md:text-xl md:space-y-2">
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
            <div className="flex justify-center  md:text-xl">
              <div className="flex-col space-y-2 text-lg flex justify-center items-center md:items-start md:space-y-2">
                <div>
                  <h1 className=" text-black text-center md:text-left text-[20px] md:flex md:justify-center md:items-center font-bold text-md">
                    Let&apos;s Connect
                  </h1>
                </div>
                <div>
                  <div className=" flex justify-center items-center w-[80px10] px-6 h-[40px] bg-mypurple text-white ">
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

            {/* 
            contact us details */}
            <SendEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
