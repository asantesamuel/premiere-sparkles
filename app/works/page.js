import React from "react";
import BackButton from "../components/backButton";
import services from "../data/services.json";

const page = () => {
  return (
    <div>
      <BackButton />

      <div className="w-full h-[100px] ">
        <h1 className=" text-[32px] text-center font-bold md:text-[60px] ">
          Our Services
        </h1>
      </div>
      {services &&
        services.map((service, index) => {
          return (
            <div key={service.id}>
              <div className="flex justify-center items-center w-full p-10 ">
                <div className="bg-mylightpurple p-10 w-[1200px]  md:h-[400px] md:grid md:grid-cols-5 gap-4">
                  <div className=" block col-span-3">
                    <div className="h-[80px] w-full flex justify-start items-center text-[32px] font-medium">
                      <h1>{service.title}</h1>
                    </div>
                    <div className=" flex justify-between items-center ">
                      <div className="w-3/4 h-[50px] flex justify-start items-center">
                        <h1 className="text-[20px] text-black">
                          Call/Text 0503192450 or 0547873650 for costs
                        </h1>
                      </div>
                      <div className="w-1/4 h-[50px] text-red-600">
                        <div className=" text-lg text-left  px-8 py-4   ">
                          {" "}
                          Book Now
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col text-left justify-center items-start space-y-4 h-[200px]">
                      <div>
                        <h1 className="text-[20px] text-left text-black">
                          {service.description}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-[12px] text-red-600">
                          {" "}
                          We accept Mobile Money for advance payment or where a
                          deposit is required using Please use the name of the
                          recipient as the reference or send a message via
                          WhatsApp on : 0503192450 with the booking details.{" "}
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* <!-- 2nd col --> */}
                  <div className="col-span-2 p-8 flex relative flex-col justify-center  items-center">
                    <div className=" w-[240px] -mb-8 z-10   h-[60px] bg-white flex flex-col justify-center items-center space-y-4">
                      <h1 className="text-md text-mypurple font-medium ">
                        Our Location
                      </h1>
                    </div>
                    <div className="   w-[300px] h-[240px] bg-mypurple flex-col   flex justify-center items-center">
                      <h1 className="text-sm text-white text-left font-regular w-[200px] ">
                        Available At this location
                      </h1>
                      <h1 className="text-md text-white text-left font-medium w-[200px]">
                        North Legon, Deer Street 7.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default page;
