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
    const month = dateObj.toLocaleString("default", { month: "long" }); // e.g., "December"
    const year = dateObj.getFullYear();
    const formattedDate = `${day} ${month} ${year}`; // e.g., "12 December 2024"

    // Update the hidden input value for formatted date
    form.current.formatted_date.value = formattedDate;

    // Send the form data
    emailjs
      .sendForm(
        "service_3lr3l6n", // Service ID
        "template_bziospm", // Template ID
        form.current,
        "L3Slz3aF4ASXpSdtQ" // Public Key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Booking Successful");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="w-full h-[1000px] bg-[url('/nailtech2.jpg')] bg-cover object-bottom flex flex-col justify-center items-center">
        <BackButton />
        <form
          ref={form}
          className="bg-mylightpurple p-4 flex flex-col justify-center items-center"
          onSubmit={sendEmail}>
          <h1 className="text-center text-[32px] font-bold h-[60px]">
            Enter Booking Details
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-start sm:space-x-4 p-2">
            <div className="flex flex-col justify-center items-left text-black space-y-4">
              <label>Name</label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Name"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
              <label>Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="from_email"
                className="border-none outline-none bg-white p-2 w-[300px] h-[40px]"
              />
              <label>Phone Number</label>
              <input
                id="phoneNumber"
                type="number"
                placeholder="Phone Number"
                name="contact_info"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
            </div>
            <div className="flex flex-col justify-center items-left text-black space-y-4">
              <label>Service</label>
              <input
                id="service"
                type="text"
                placeholder="Service"
                name="service_name"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
              <label>Date</label>
              <input
                type="date"
                placeholder="Date"
                name="date"
                id="appointmentDate"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
              <label>Time</label>
              <input
                type="time"
                placeholder="Mondays to Saturdays 9am-8pm"
                name="time"
                id="time"
                className="border-none outline-none bg-white p-4 w-[300px] h-[40px]"
              />
            </div>
          </div>
          {/* Hidden input for the formatted date */}
          <input type="hidden" id="formattedDate" name="formatted_date" />
          <div className="flex items-center justify-center h-[120px] space-x-4">
            <label>
              <input
                type="radio"
                value="Walk-in Service"
                name="choice"
                className="border-none outline-none bg-white p-4 w-[20px] h-[15px]"
              />
              Walk In Service
            </label>
            <label>
              <input
                type="radio"
                name="choice"
                value="Home service"
                className="border-none outline-none bg-white p-4 w-[20px] h-[15px]"
              />
              House Service
            </label>
          </div>
          <button
            type="submit"
            className="bg-mypurple text-white p-2 w-[300px] h-[40px] mt-4 hover:bg-white hover:text-mypurple hover:border-2 hover:border-mypurple">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
