import "./globals.css";
import Top from "./components/top";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Premiere Sparkles Salon",
  description: " Get your sparkles on! Premiere Sparkles Salon is your go-to destination for all things sparkly and glamorous. From dazzling make ups to shimmering manicures, we have everything you need to add a touch of sparkle to your life.",
  keywords: "sparkles, Salon, Pedicure, glamour, shine, make up, manicure, beauty, nails, hair, cosmetics, shimmer, glitter, sparkle salon, beauty salon, nail salon, makeup salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fbf8ef] text-[#302631]`}>
        <div className="fixed inset-x-0 top-0 z-50">
          <Top />
          <Nav />
        </div>
        <main className="z-0 pt-[134px] sm:pt-[114px]">{children}</main>
        <div className="z-998">
          {" "}
          <Footer />
        </div>
      </body>
    </html>
  );
}
