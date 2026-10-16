"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import InputSearch from "./InputSearch";
import localFont from "next/font/local";
import socialLinks from "../data/socialLinks";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const routes = [
  ["/", "Home"],
  ["/works", "Services"],
  ["/packages", "Packages"],
  ["/about", "About"],
  ["/location", "Location"],
];

function SocialIcons({ compact = false }) {
  const configuredSocialLinks = socialLinks.filter((social) => social.href);
  if (configuredSocialLinks.length === 0) return null;

  return (
    <div className={`flex items-center ${compact ? "gap-4" : "gap-3"}`}>
      {configuredSocialLinks.map((social) => {
        const icon = <Image src={social.headerIcon} alt="" width={18} height={18} aria-hidden="true" />;
        return (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="rounded-sm bg-[#321d32] p-1.5 text-white transition hover:bg-[#6d146f] hover:text-[#ffec9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffec9e]">{icon}</a>
        );
      })}
    </div>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar border-b border-[#e9dfea] bg-[#fffdf8]/95 shadow-[0_8px_24px_rgba(43,24,44,0.08)] backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-10">
        <div className="flex h-[74px] items-center justify-between gap-3">
          <Link href="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3" aria-label="Premiere Sparkles Salon home">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bd9a47] text-lg text-[#7a267d]" aria-hidden="true">✦</span>
            <span className={`${displayFont.className} flex min-w-0 flex-col leading-none text-[#321d32]`}>
              <span className="truncate text-[17px] font-semibold sm:text-xl">Premiere Sparkles</span>
              <span className="mt-1 text-[9px] font-sans font-medium uppercase tracking-[0.3em] text-[#8e6d33]">Salon</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {routes.map(([href, label]) => (
              <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`salon-nav-link relative py-2 text-[13px] font-medium uppercase tracking-[0.09em] ${pathname === href ? "text-[#84168a]" : "text-[#453744] hover:text-[#84168a]"}`}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 xl:flex">
            <div className="w-[180px]"><InputSearch /></div>
            <SocialIcons />
            <Link href="/bookAppointment" className="salon-button inline-flex h-11 items-center justify-center bg-[#8e1a91] px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-sm hover:bg-[#6d146f]">
              Book now <span className="ml-2 text-base" aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Link href="/bookAppointment" className="salon-button inline-flex h-10 items-center justify-center bg-[#8e1a91] px-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-white sm:px-4 sm:text-xs">Book now</Link>
            <button type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className="flex h-10 w-10 items-center justify-center text-[#321d32] hover:bg-[#f5edf5]">
              {isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" strokeWidth="1.7" strokeLinecap="round" /></svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.7" strokeLinecap="round" /></svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="salon-menu border-t border-[#e9dfea] pb-5 pt-3 xl:hidden">
            <div className="mb-4"><InputSearch /></div>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
              {routes.map(([href, label]) => (
                <Link key={href} href={href} onClick={closeMenu} aria-current={pathname === href ? "page" : undefined} className={`rounded px-3 py-3 text-sm font-medium ${pathname === href ? "bg-[#f5edf5] text-[#84168a]" : "text-[#453744] hover:bg-[#f5edf5] hover:text-[#84168a]"}`}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-4 border-t border-[#e9dfea] pt-4"><SocialIcons compact /></div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
