"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import BackButton from "../components/backButton";

const Page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Collect form data
    const dateInput = document.getElementById("appointmentDate").value;
    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const phoneNumber = form.current.contact_info.value;
    const service = form.current.service_name.value;
    const time = form.current.time.value;
    const choice = form.current.choice.value;

    // Validate fields
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !service ||
      !dateInput ||
      !time ||
      !choice
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // Format the date into a human-readable format
    const dateObj = new Date(dateInput);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    // Update the hidden input value for formatted date
    form.current.formatted_date.value = formattedDate;

    // Send the form data
    emailjs
      .sendForm(
        "service_3lr3l6n",
        "template_bziospm",
        form.current,
        "L3Slz3aF4ASXpSdtQ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Booking Successful");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="w-full h-[1300px] bg-[url('/nailtech2.jpg')] bg-cover object-bottom flex flex-col justify-center items-center">
        <BackButton />
        <form
          ref={form}
          className="bg-white p-6 flex flex-col justify-center items-center  shadow-lg max-w-4xl mx-auto"
          onSubmit={sendEmail}>
          <h1 className="text-center text-3xl font-extrabold text-black mb-6">
            Enter Booking Details
          </h1>
          <div className="w-full flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-4">
            <div className="flex flex-col space-y-6 w-full sm:w-1/2">
              <label className="text-lg font-medium text-black">Name</label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Name"
                className="border-none outline-none bg-white p-4 w-full h-[40px]  shadow-sm"
              />
              <label className="text-lg font-medium text-black">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="from_email"
                className="border-none outline-none bg-white p-4 w-full h-[40px]  shadow-sm"
              />
              <label className="text-lg font-medium text-black">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="number"
                placeholder="Phone Number"
                name="contact_info"
                className="border-none outline-none bg-white p-4 w-full h-[40px]  shadow-sm"
              />
            </div>

            <div className="flex flex-col space-y-6 w-full sm:w-1/2">
              <label className="text-lg font-medium text-black">Service</label>
              <input
                id="service"
                type="text"
                placeholder="Service"
                name="service_name"
                className="border-none outline-none bg-white p-4 w-full h-[40px]  shadow-sm"
              />
              <label className="text-lg font-medium text-black">Date</label>
              <input
                type="date"
                placeholder="Date"
                name="date"
                id="appointmentDate"
                className="border-none outline-none bg-white p-4 w-full h-[40px]  shadow-sm"
              />
              <label className="text-lg font-medium text-black">Time</label>
              <input
                type="time"
                placeholder="Mondays to Saturdays 9am-8pm"
                name="time"
                id="time"
                className="border-none outline-none bg-white p-4 w-full h-[40px]  shadow-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-[120px] space-x-6 mt-6 w-full">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="Walk-in Service"
                name="choice"
                className="h-[20px] w-[20px] border-none outline-none"
              />
              <label className="text-lg font-medium">Walk-In Service</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="choice"
                value="Home service"
                className="h-[20px] w-[20px] border-none outline-none"
              />
              <label className="text-lg font-medium">House Service</label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-mypurple text-white p-3 w-auto sm:w-[300px] h-[50px]  shadow-md hover:bg-white hover:text-mypurple hover:border-2 hover:border-mypurple ">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
