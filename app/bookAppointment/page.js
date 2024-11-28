import "../globals.css";

const page = () => {
  return (
    <div>
      <div className="w-full h-[800px] bg-[url('/nailtech2.jpg')] bg-cover object-bottom flex justify-center items-center">
        <div className=" bg-mylightpurple p-4 flex flex-col justify-center items-center">
          <h1 className="text-center text-[32px] font-bold h-[60px]">Enter Booking details</h1>
          <form className="flex flex-col sm:flex-row justify-center items-start sm:space-x-4 p-2  ">
            <div className="flex flex-col justify-center items-left text-black  space-y-4">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border-none outline-none bg-white p-2 w-[300px] h-[40px]"
              />
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
            </div>
            <div className="flex flex-col justify-center items-left text-black  space-y-4">
              <label>Service</label>
              <input
                type="text"
                placeholder="Service"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
              <label>Date</label>
              <input
                type="date"
                placeholder="Date"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
              <div className="flex items-center justify-center h-[120px] space-x-4">
                <label>
                  <input
                    type="radio"
                    name="service"
                    value="walk-in"
                    className="border-none outline-none bg-white p-4 w-[20px] h-[15px]"
                  />
                  Walk In Service
                </label>
                <label>
                  <input
                    type="radio"
                    name="service"
                    value="house"
                    className="border-none outline-none bg-white p-4 w-[20px] h-[15px]"
                  />
                  House Service
                </label>
              </div>
            </div>
          </form>
          <button className="bg-mypurple text-white p-2 w-[300px] h-[40px] mt-4">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
