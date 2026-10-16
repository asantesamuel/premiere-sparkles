import React from "react";
import Link from "next/link";
import Image from "next/image";
import SendEmail from "./SendEmail";
import socialLinks from "../data/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-[#fffdf8] text-[#302631]">
      {/* Payment Info Section */}
      <div className="border-t border-[#bd9a47]/40 bg-[#241a24] px-5 py-7 text-white sm:py-8">
        <div className="text-center space-y-2">
          <h2 className="text-sm font-semibold text-[#ffec9e] md:text-xl">
            We accept all major credit/debit cards, bank transfers, and mobile
            money.
          </h2>
          <p className="text-xs text-white/75 md:text-sm">
            More information available upon request.
          </p>
        </div>
      </div>

      {/* Subscription and Links Section */}
      <div className="bg-[#f5edf5] px-5 py-12 sm:py-14 flex flex-col items-center salon-reveal">
        <h2 className="text-2xl font-bold text-[#321d32] text-center mb-2 md:text-3xl">
          Let&apos;s Connect
        </h2>
        <div className="mb-6 h-px w-12 bg-[#bd9a47]" aria-hidden="true" />
        <div className="w-[90%] max-w-2xl border border-[#eadfea] bg-[#fffdf8] p-5 shadow-[0_12px_36px_rgba(52,29,52,0.07)] sm:p-7">
          <p className="mb-4 text-sm text-[#665d66] md:text-base">
            Receive our news and special offers
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-12 w-full border border-[#d9ced9] bg-white px-4 text-sm outline-none focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15 md:w-2/3"
            />
            <button className="salon-button h-12 w-full bg-[#8e1a91] px-4 text-sm font-semibold text-white hover:bg-[#6d146f] md:w-1/3">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact and Links Section */}
      <div className="px-6 py-12 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-4">
          {/* Contact Info */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-semibold text-[#321d32] text-lg">
              Book an appointment with us
            </h2>
            <p className="text-[#665d66] text-sm md:text-base">
              North Legon Deer Street
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-semibold text-[#321d32] text-lg">Quick Links</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="w-fit text-[#665d66] hover:text-mypurple">
                Home
              </Link>
              <Link href="/works" className="w-fit text-[#665d66] hover:text-mypurple">
                Our Services
              </Link>
              <Link href="/packages" className="w-fit text-[#665d66] hover:text-mypurple">
                Packages
              </Link>
              <Link href="/about" className="w-fit text-[#665d66] hover:text-mypurple">
                About Us
              </Link>
              <Link href="/location" className="w-fit text-[#665d66] hover:text-mypurple">
                Our Location
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-semibold text-[#321d32] text-lg">Let&apos;s Connect</h2>
            <button type="button" className="salon-button bg-[#8e1a91] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6d146f]">
              Email Us
            </button>
            {socialLinks.some((social) => social.href) && (
              <>
            <h3 className="font-semibold text-[#321d32] text-base">Follow Us</h3>
            <div className="flex space-x-3 justify-center lg:justify-start">
              {socialLinks.filter((social) => social.href).map((social) => {
                const icon = (
                  <Image
                    src={social.footerIcon}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                );

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="salon-interactive rounded-sm bg-[#321d32] p-2 text-white hover:bg-[#6d146f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mypurple">
                    {icon}
                  </a>
                );
              })}
            </div>
              </>
            )}
          </div>

          {/* Contact Us */}
          <div className="flex justify-center lg:flex lgjustify-start items-center">
            <div className="w-full max-w-[500px]">
              <SendEmail />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
