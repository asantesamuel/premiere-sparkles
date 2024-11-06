import React from "react";
import Link from "next/link";
import Image from "next/image";
const footer = () => {
  return (
    <div className="">
      <div className="w-full h-[800px] ">
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
              Let's Connect
            </h1>
          </div>
          <div>
            <div className="w-[400px] h-[200px] bg-white flex flex-col space-y-2 justify-center items-center md:w-[800px]">
              <div className="flex items-start w-[320px] md:w-[610px]">
                <label className="text-[12px]  text-slate-700 md:text-[20px]">
                  Receive our news and special offers
                </label>
              </div>
              <div>
                <div className="flex justify-between w-[320px] md:w-[610px] ">
                  {" "}
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-[200px] h-[30px] border-2 p-4 border-slate-200 outline-none md:w-[400px] md:h-[40px]"
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
      <div className="flex justify-center items-center w-full p-10 ">
        <div className=" w-full md:w-[1500px] flex justify-evenly itmes bg-center ">
          <div className=" flex flex-col space-y-10 items-start md:grid md:grid-cols-4 md:space-y-0">
            <div className=" flex justify-center">
              {" "}
              <div className="flex flex-col text-[10px] md:text-xl md:space-y-2">
                <h1 className=" text-black font-bold">
                  Book an appointment with with us
                </h1>
                <h1 className=" text-black  w-[200px]">
                  Dzorwulu Ebony Junction North Legon Opposite Papa’s Pizza
                </h1>
              </div>
            </div>
            <div className="flex justify-center text-[10px]  md:text-xl md:space-y-2">
              {" "}
              <div className="flex flex-col text-[10px]  md:text-xl md:space-y-2">
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
            <div className="flex justify-center text-[10px] md:text-xl">
              <div className="flex flex-col  md:space-y-2">
                <div>
                  <h1 className=" text-black font-bold text-md">
                    Let's stay Connected
                  </h1>
                </div>
                <div>
                  <div className=" flex justify-center items-center w-[80px10] h-[40px] bg-mypurple text-white ">
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
                        width={10}
                        height={10}
                      />
                    </button>{" "}
                    <button className="m-0.5">
                      <Image
                        src="/x-black.svg"
                        alt="x-black"
                        width={10}
                        height={10}
                      />
                    </button>{" "}
                    <button className=" m-0.5">
                      <span className="fill-curent text-black">
                        <Image
                          src="/instagram-black.svg"
                          alt="instagram-black"
                          width={10}
                          height={10}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" rounded-sm shadow-md p-4 flex justify-center ">
                <div className="flex flex-col  md:space-y-2">
                  <div>
                    <h1 className=" text-black font-bold text-[10px] md:text-xl">
                      Contact Us
                    </h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="  w-[100px] text-[10px] h-[8px] border-2 p-2 border-slate-200 outline-none md:text-lg md:w-[200px] md:h-[50px] md:p-4"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-[100px] text-[10px] h-[8px] border-2 p-2 border-slate-200 outline-none md:text-lg md:w-[200px] md:h-[50px] md:p-4"
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      placeholder="Message..."
                      className="w-[100px] h-[70px] border-2 p-2 border-slate-200 outline-none text-[10px] md:text-lg md:w-[200px] md:h-[100px] md:p-4"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
