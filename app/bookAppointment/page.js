import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full h-[1000px] bg-[url('/nailtech2.jpg')] bg-cover object-bottom flex justify-center items-center">
        <div className=" border-2 w-[400px] h-[450px] bg-slate-50 p-10 rounded-md flex flex-col space-y-4 bg-transparent blur-[2px]">
          <h1>Enter your details</h1>
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Phone Number</label>
          <input type="number" placeholder="Phone Number" />
          <label>Service</label>
          <input type="text" placeholder="Service" />

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default page;
