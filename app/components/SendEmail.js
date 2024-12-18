"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SendEmail = () => {
  const form = useRef();
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("from_name").trim();
    const email = formData.get("from_email").trim();
    const message = formData.get("message").trim();

    // Validation: Check if all fields are filled
    if (!name || !email || !message) {
      setError("Please fill in all fields before sending.");
      return;
    }

    setError(""); // Clear any previous error messages

    emailjs
      .sendForm(
        "service_79or3y8",
        "template_0x6gp5o",
        form.current,
        "L3Slz3aF4ASXpSdtQ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center px-4 py-8 bg-white">
      <div className="w-full max-w-[600px] bg-gray-50  shadow-md p-6">
        <h1 className="text-xl font-extrabold text-black text-center md:text-2xl">
          Contact Us
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 mt-6">
          {/* Name Field */}
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            className="w-full h-12 px-4 border border-gray-300 outline-none text-sm md:text-base focus:ring-2 focus:ring-mypurple"
          />

          {/* Email Field */}
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className="w-full h-12 px-4 border border-gray-300 outline-none text-sm md:text-base focus:ring-2 focus:ring-mypurple"
          />

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Message..."
            className="w-full h-28 px-4 border border-gray-300 outline-none text-sm md:text-base focus:ring-2 focus:ring-mypurple resize-none"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm md:text-base">{error}</p>
          )}

          {/* Submit Button */}
          <input
            type="submit"
            value="Send"
            className="w-full h-12 bg-mypurple text-white font-bold cursor-pointer hover:bg-opacity-80 transition duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
