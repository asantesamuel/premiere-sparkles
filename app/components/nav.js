"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import InputSearch from "./InputSearch";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const togglenNav = () => {
    setIsClicked(!isClicked);
  };

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <nav className=" bg-mypurple w-full  ">
        <div className="hidden xl:block w-full h-[70px]">
          <div className=" grid w-full grid-cols-12   text-white font-family:inter gap-8 p-2  xl:text-[14px]">
            <div className="col-span-4 flex-shrink-0">
              <div className="text-2xl font-extrabold mt-1.5 ">
                <Link href="/" className={myFont.className}>
                  Premiere Sparkle Saloon
                </Link>
              </div>
            </div>

            <div className="flex justify-between col-span-4 mt-3 ">
              <div>
                <div>
                  <Link
                    className={`link ${pathname === "/" ? "text-mygold" : ""} hover:text-mygold`}
                    href="/">
                    Home
                  </Link>
                </div>
              </div>
              <div>
                <Link
                  className={`link ${pathname === "/works" ? "text-mygold" : ""} hover:text-mygold`}
                  href="/works">
                  Our Services
                </Link>
              </div>
              <div>
                <Link
                  href="/packagess"
                  className={`link ${pathname === "/packagess" ? "text-mygold" : ""} hover:text-mygold`}>
                  Packages
                </Link>
              </div>
              {/* <div>
                <Link href="/product" className="hover:text-mygold">
                  Products
                </Link>
              </div> */}
              <div>
                <Link
                  href="/about"
                  className={`link ${pathname === "/about" ? "text-mygold" : ""} hover:text-mygold`}>
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  href="/location"
                  className={`link ${pathname === "/location" ? "text-mygold" : ""} hover:text-mygold`}>
                  Our Location
                </Link>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              {/* search input */}
              <InputSearch />
            </div>
            <div className="col-span-1 flex justify-center  items-center">
              <div className="m-0.5">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </div>
              <div className="m-0.5">
                <Image src="/x.svg" alt="twitter" width={20} height={20} />
              </div>
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
                <div className="text-xl  font-extrabold :xl:text-[12px]">
                  Premiere Sparkle Saloon
                </div>
              </div>
              <div className=" block">
                <div className=" w-[200px] h-[40px] flex justify-start items-center">
                  <InputSearch />
                </div>
              </div>
              <div className=" space-y-2">
                <div>
                  <Link
                    className={router.pathname === "/" ? "active" : ""}
                    href="/"
                    // className="hover:text-mygold"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="/works" className="hover:text-mygold">
                    Our Services
                  </Link>
                </div>
                <div>
                  <Link href="/packagess" className="hover:text-mygold">
                    Packages
                  </Link>
                </div>
                {/* <div>
                  <Link href="/product" className="hover:text-mygold">
                    Products
                  </Link>
                </div> */}
                <div>
                  <Link href="/about" className="hover:text-mygold">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link href="/location" className="hover:text-mygold">
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
                </div>
                <div className="m-0.5">
                  <Image src="/x.svg" alt="twitter" width={20} height={20} />
                </div>
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

export default Nav;
