import localFont from "next/font/local";
import "./globals.css";
import Top from "./components/top";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Inter } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Premiere Sparkles",
  description: " Get your sparkles on! Premiere Sparkles is your go-to destination for all things sparkly and glamorous. From dazzling make ups to shimmering manicures, we have everything you need to add a touch of sparkle to your life.",
  keywords: "sparkles, Salon, Pedicure, glamour, shine, make up, manicure, beauty, nails, hair, cosmetics, shimmer, glitter, sparkle salon, beauty salon, nail salon, makeup salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed w-full z-50 ">
          <Top />
          <Nav />
        </div>
        <div className="pt-[140px] z-0 ">{children}</div>
        <div className="z-998">
          {" "}
          <Footer />
        </div>
      </body>
    </html>
  );
}
