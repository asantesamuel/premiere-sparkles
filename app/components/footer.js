import React from "react";
import Link from "next/link";
import Image from "next/image";
import SendEmail from "./SendEmail";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Payment Info Section */}
      <div className="bg-black text-white py-8">
        <div className="text-center space-y-2">
          <h1 className="text-sm font-bold md:text-2xl">
            We accept all major credit/debit cards, bank transfers, and mobile
            money.
          </h1>
          <p className="text-sm md:text-base">
            More information available upon request.
          </p>
        </div>
      </div>

      {/* Subscription and Links Section */}
      <div className="bg-mylightpurple py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-black text-center mb-6 md:text-3xl">
          Let&apos;s Connect
        </h1>
        <div className="bg-white p-6 shadow-md w-[90%] max-w-2xl">
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Receive our news and special offers
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 p-2 w-full md:w-2/3"
            />
            <button className="bg-mypurple text-white py-2 px-4 hover:bg-opacity-80 w-full md:w-1/3">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact and Links Section */}
      <div className="py-10 px-6 md:px-10 ">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-4">
          {/* Contact Info */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold text-black text-lg">
              Book an appointment with us
            </h1>
            <p className="text-gray-700 text-sm md:text-base">
              North Legon Deer Street
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold text-black text-lg">Quick Links</h1>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-mypurple">
                Home
              </Link>
              <Link href="/works" className="hover:text-mypurple">
                Our Services
              </Link>
              <Link href="/packages" className="hover:text-mypurple">
                Packages
              </Link>
              <Link href="/about" className="hover:text-mypurple">
                About Us
              </Link>
              <Link href="/location" className="hover:text-mypurple">
                Our Location
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold text-black text-lg">Let&apos;s Connect</h1>
            <button className="bg-mypurple text-white py-2 px-4 hover:bg-opacity-80">
              Email Us
            </button>
            <h2 className="font-bold text-black text-lg">Follow Us</h2>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Image
                src="/facebook-black.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80"
              />
              <Image
                src="/x-black.svg"
                alt="X"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80"
              />
              <Image
                src="/instagram-black.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80"
              />
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex justify-center lg:flex lgjustify-start items-center">
            <div className="w-full max-w-[500px]">
              <SendEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
