import Top from "./components/top";
import Nav from "./components/nav";
import Home1 from "@/app/home/home";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <div className="fixed w-full ">
        <Top />
        <Nav />
      </div>
      <div className="pt-[140px]">
        <Home1 />
      </div>
      <Footer />
    </div>
  );
}
