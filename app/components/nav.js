"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const togglenNav = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <nav className=" bg-mypurple ">
        {" "}
        <div className="hidden xl:block w-full h-[70px]">
          <div className=" grid w-full grid-cols-12   text-white font-family:inter gap-8 p-2  xl:text-[14px]">
            <div className="col-span-4 flex-shrink-0">
              {" "}
              <div className="text-2xl font-extrabold mt-1.5">
                Premiere Sparkle Saloon
              </div>
            </div>

            <div className="flex justify-between col-span-4 mt-3 ">
              {" "}
              <div>
                <Link href="/" className="hover:text-mygold">
                  Home
                </Link>
              </div>{" "}
              <div>
                <Link href="/works" className="hover:text-mygold">
                  Our Services
                </Link>
              </div>{" "}
              <div>
                <Link href="/" className="hover:text-mygold">
                  Packages
                </Link>
              </div>{" "}
              <div>
                <Link href="/" className="hover:text-mygold">
                  About Us
                </Link>
              </div>{" "}
              <div>
                <Link href="/" className="hover:text-mygold">
                  Our Location
                </Link>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <div className=" flex   justify-center  items-center border-2 border-white p-2 h-[50px]">
                <span className="fill-white stroke-current text-white  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6">
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="search"
                  aria-label="search"
                  className="w-[250px] bg-transparent rounded-none p-2 h-[70px]border-none  outline-none  "
                />
              </div>
            </div>
            <div className="col-span-1 flex justify-center  items-center">
              <div className="m-0.5">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </div>{" "}
              <div className="m-0.5">
                <Image src="/x.svg" alt="twitter" width={20} height={20} />
              </div>{" "}
              <div className=" m-0.5">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[70px] flex justify-end items-center w-full  xl:hidden ">
            <button onClick={togglenNav} className=" ">
              <div className="mr-8">
                {isClicked ? (
                  <span className="stroke-curent text-white">
                    {" "}
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="stroke-curent text-white">
                    {" "}
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
        {isClicked && (
          <div className="  xl:hidden">
            <div className="  h-[350px] space-y-5 bg-mypurple text-white font-family:inter p-2 text-[12px]  xl:text-[14px] ">
              <div className=" block">
                {" "}
                <div className="text-xl  font-extrabold :xl:text-[12px]">
                  Premiere Sparkle Saloon
                </div>
              </div>
              <div className=" block">
                <div className=" w-[200px] border-2 border-white p-2 h-[40px] flex justify-start items-center">
                  <span className="fill-white stroke-current text-white  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6">
                      <path
                        fill-rule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="search"
                    aria-label="search"
                    className="w-[100px] bg-transparent rounded-none p-2 h-[40px] border-none  outline-none  "
                  />
                </div>
              </div>
              <div className=" space-y-2">
                {" "}
                <div>
                  <Link href="/" className="hover:text-mygold">
                    Home
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/works" className="hover:text-mygold">
                    Our Services
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/" className="hover:text-mygold">
                    Packages
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/" className="hover:text-mygold">
                    About Us
                  </Link>
                </div>{" "}
                <div>
                  <Link href="/" className="hover:text-mygold">
                    Our Location
                  </Link>
                </div>
              </div>

              <div className=" flex justify-start ">
                <div className="block">
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </div>{" "}
                <div className="m-0.5">
                  <Image src="/x.svg" alt="twitter" width={20} height={20} />
                </div>{" "}
                <div className=" m-0.5">
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default nav;
