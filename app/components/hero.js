const Hero = () => {
  return (
    <div className="flex justify-center md:mt-0 ">
      <div
        className=" bg-black bg-opacity-10 w-full h-[500px] flex flex-col justify-center item-center md:w-full md:pl-8 item-start lg:w-full  bg-cover bg-blend-darken bg-center"
        style={{ backgroundImage: "url(/hero.jpg)" }} 
      >
      
        <h1 className="text-white text-[32px] font-black text-center md:text-left md:text-[50px] md:w-[600px]">
          Welcome to Premiere Sparkles Spa and Saloon
        </h1>
        <h6 className="text-white pt-6 text-xl text-center md:text-left">
          Where aging is optional
        </h6>
        <div className="flex flex-col justify-center items-center   md:flex md:flex-row md:space-x-8 md:justify-start">
          {" "}
          <button className="bg-mypurple text-white text-xl  px-8 py-4 mt-4  w-[260px] hover:bg-opacity-80 ">
            See our Services
          </button>
          <button className="bg-white text-black text-xl  px-8 py-4 mt-4 w-[260px] hover:bg-purple-100">
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
