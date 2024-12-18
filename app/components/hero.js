import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full md:mt-0">
      <div
        className="bg-black bg-opacity-10 w-full h-[600px] md:h-[900px] flex flex-col justify-center items-center md:justify-end md:items-start md:pb-16 md:pl-8 lg:pb-24 bg-cover bg-blend-darken bg-center"
        style={{ backgroundImage: "url('/photoshootfive.PNG')" }}>
        {/* Heading */}
        <h1 className="text-white text-[28px] font-bold text-center md:text-left md:text-[40px] lg:text-[50px] md:max-w-[600px] lg:max-w-[800px]">
          Welcome to Premiere Sparkles Spa and Saloon
        </h1>

        {/* Subheading */}
        <h6 className="text-white pt-4 text-lg text-center md:text-left md:text-xl lg:text-2xl md:max-w-[500px] lg:max-w-[700px]">
          A place of confidence where you feel satisfied with your elegant look
        </h6>

        {/* Buttons */}
        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:justify-start">
          <Link
            href="/works"
            className="bg-mypurple text-white text-base md:text-lg px-6 py-3  w-auto md:w-[300px] text-center hover:bg-opacity-80">
            See our Services
          </Link>
          <Link
            href="/bookAppointment"
            className="bg-white text-black text-base md:text-lg px-6 py-3  w-auto md:w-[300px] text-center hover:bg-purple-100">
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
