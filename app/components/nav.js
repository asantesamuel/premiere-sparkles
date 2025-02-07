"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false); // Added to handle client-side only logic

  useEffect(() => {
    // Set the component as mounted to prevent rendering on the server
    setMounted(true);
  }, []);

  const togglenNav = () => {
    setIsClicked(!isClicked);
  };

  const router = useRouter();
  const pathname = usePathname();

  if (!mounted) return null; // Prevents rendering before the component is mounted on the client-side

  return (
    <div className="navbar">
      <nav className="bg-mypurple">
        {/* Desktop Navbar */}
        <div className="hidden xl:block w-full h-[70px]">
          <div className="grid grid-cols-12 text-white gap-8 p-2 xl:text-[14px]">
            {/* Logo */}
            <div className="col-span-4 flex-shrink-0">
              <div className="text-2xl font-extrabold mt-1.5">
                <Link href="/" className={myFont.className}>
                  Premiere Sparkle Saloon
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between col-span-4 mt-3">
              {["/", "/works", "/packages", "/about", "/location"].map(
                (link, index) => (
                  <div key={index}>
                    <Link
                      href={link}
                      className={`link ${
                        pathname === link ? "text-mygold" : ""
                      } hover:text-mygold capitalize`}>
                      {link === "/"
                        ? "Home"
                        : link.replace("/", "").replace(/s$/, "")}
                    </Link>
                  </div>
                )
              )}
            </div>

            {/* Search Input */}
            <div className="col-span-3 flex justify-center items-center">
              <InputSearch />
            </div>

            {/* Social Icons */}
            <div className="col-span-1 flex justify-center items-center space-x-2">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
              <Link target="_blank" href="https://www.instagram.com/ys.asante/">
                <Image src="/x.svg" alt="twitter" width={20} height={20} />
              </Link>
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden h-[70px] flex justify-between items-center w-full p-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold mt-1.5 text-white">
            <Link href="/" className={myFont.className}>
              Premiere Sparkle Saloon
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button onClick={togglenNav}>
            {isClicked ? (
              <span className="stroke-current text-white">
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
              <span className="stroke-current text-white">
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
          </button>
        </div>

        {/* Mobile Menu */}
        {isClicked && (
          <div className="xl:hidden">
            <div className="h-[350px] bg-mypurple text-white font-family:inter p-4 space-y-5 text-[12px]">
              {/* Logo (Mobile version, Black-colored) */}

              {/* Search Input */}
              <div className="w-[200px] h-[40px] flex items-center space-x-2">
                <InputSearch />
              </div>

              {/* Mobile Links */}
              {["/", "/works", "/packagess", "/about", "/location"].map(
                (link, index) => (
                  <div key={index}>
                    <Link
                      href={link}
                      className={`hover:text-mygold ${
                        router.pathname === link ? "text-mygold" : ""
                      } capitalize`}>
                      {link === "/"
                        ? "Home"
                        : link.replace("/", "").replace(/s$/, "")}
                    </Link>
                  </div>
                )
              )}

              {/* Social Icons */}
              <div className="flex justify-start space-x-2">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Link
                  target="_blank"
                  href="https://www.instagram.com/ys.asante/">
                  <Image src="/x.svg" alt="twitter" width={20} height={20} />
                </Link>
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
