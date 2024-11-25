import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center md:mt-0 ">
      <div className=" bg-black bg-opacity-10 w-full h-[1000px] justify-center flex flex-col md:justify-end md:pb-48 item-center  md:w-full md:pl-8 item-start lg:w-full  bg-cover bg-blend-darken bg-center object-top bg-[url('/photoshootfive.PNG')]">
        <h1 className="text-white text-[32px] font-black text-center md:text-left md:text-[50px] md:w-[800px]">
          Welcome to Premiere Sparkles Spa and Saloon
        </h1>
        <h6 className="text-white pt-6 text-xl text-center md:text-left">
          A place of confidence where you feel satisfied with your elegant look
        </h6>
        <div className="flex flex-col justify-center items-center   md:flex md:flex-row md:space-x-8 md:justify-start">
          {" "}
          <Link
            href="/works"
            className="bg-mypurple text-white text-lg  px-8 py-4 mt-4  w-[260px] hover:bg-opacity-80 ">
            See our Services
          </Link>
          <Link
            href="/bookAppointment"
            className="bg-white text-black text-lg  px-8 py-4 mt-4 w-[260px] hover:bg-purple-100">
            Book an appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
