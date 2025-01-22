"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BackButton from "../components/backButton";

const Page = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Initialize EmailJS
  emailjs.init("L3Slz3aF4ASXpSdtQ");

  const validateForm = (formData) => {
    const errors = [];

    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.push("Invalid email format");
    if (!formData.phoneNumber.trim()) errors.push("Phone number is required");
    if (!/^\d{10,}$/.test(formData.phoneNumber))
      errors.push("Invalid phone number");
    if (!formData.service.trim()) errors.push("Service is required");
    if (!formData.dateInput) errors.push("Date is required");
    if (!formData.time) errors.push("Time is required");
    if (!formData.choice) errors.push("Please select service type");

    // Validate business hours (9am-8pm)
    if (formData.time) {
      const [hours] = formData.time.split(":");
      if (hours < 9 || hours >= 20) {
        errors.push("Please select a time between 9 AM and 8 PM");
      }
    }

    // Validate date is not in the past
    if (formData.dateInput) {
      const selectedDate = new Date(formData.dateInput);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        errors.push("Please select a future date");
      }
    }

    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Collect form data
    const formData = {
      name: form.current.from_name.value,
      email: form.current.from_email.value,
      phoneNumber: form.current.contact_info.value,
      service: form.current.service_name.value,
      dateInput: document.getElementById("appointmentDate").value,
      time: form.current.time.value,
      choice: form.current.choice.value,
    };

    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
      setStatus({
        type: "error",
        message: errors.join("\n"),
      });
      setLoading(false);
      return;
    }

    try {
      // Format date
      const dateObj = new Date(formData.dateInput);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // Add formatted date to form
      const formattedDateInput = document.createElement("input");
      formattedDateInput.type = "hidden";
      formattedDateInput.name = "formatted_date";
      formattedDateInput.value = formattedDate;
      form.current.appendChild(formattedDateInput);

      // Send email
      const result = await emailjs.sendForm(
        "service_3lr3l6n",
        "template_bziospm",
        form.current,
        "L3Slz3aF4ASXpSdtQ"
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message:
            "Booking successful! We will contact you shortly to confirm your appointment.",
        });
        form.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send booking request. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full min-h-screen bg-[url('/nailtech2.jpg')] bg-cover object-bottom flex flex-col justify-center items-center p-4">
        <BackButton />
        <form
          ref={form}
          className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto w-full"
          onSubmit={sendEmail}>
          <h1 className="text-center text-3xl font-extrabold text-black mb-6">
            Enter Booking Details
          </h1>

          {status.message && (
            <div
              className={`mb-4 p-4 rounded ${
                status.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}>
              {status.message.split("\n").map((msg, i) => (
                <div key={i}>{msg}</div>
              ))}
            </div>
          )}

          <div className="w-full flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-4">
            <div className="flex flex-col space-y-6 w-full sm:w-1/2">
              <label className="text-lg font-medium text-black">Name *</label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Your full name"
                className="border border-gray-200 rounded outline-none bg-white p-4 w-full h-[40px] shadow-sm focus:border-purple-500"
              />

              <label className="text-lg font-medium text-black">Email *</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                name="from_email"
                className="border border-gray-200 rounded outline-none bg-white p-4 w-full h-[40px] shadow-sm focus:border-purple-500"
              />

              <label className="text-lg font-medium text-black">
                Phone Number *
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Your phone number"
                name="contact_info"
                className="border border-gray-200 rounded outline-none bg-white p-4 w-full h-[40px] shadow-sm focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col space-y-6 w-full sm:w-1/2">
              <label className="text-lg font-medium text-black">
                Service *
              </label>
              <input
                id="service"
                type="text"
                placeholder="Service you're booking"
                name="service_name"
                className="border border-gray-200 rounded outline-none bg-white p-4 w-full h-[40px] shadow-sm focus:border-purple-500"
              />

              <label className="text-lg font-medium text-black">Date *</label>
              <input
                type="date"
                name="date"
                id="appointmentDate"
                min={new Date().toISOString().split("T")[0]}
                className="border border-gray-200 rounded outline-none bg-white p-4 w-full h-[40px] shadow-sm focus:border-purple-500"
              />

              <label className="text-lg font-medium text-black">
                Time * (9 AM - 8 PM)
              </label>
              <input
                type="time"
                name="time"
                id="time"
                min="09:00"
                max="20:00"
                className="border border-gray-200 rounded outline-none bg-white p-4 w-full h-[40px] shadow-sm focus:border-purple-500"
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
            disabled={loading}
            className={`w-full sm:w-[300px] h-[50px] mx-auto mt-6 flex items-center justify-center text-white rounded transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-mypurple hover:bg-white hover:text-mypurple hover:border-2 hover:border-mypurple"
            }`}>
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Book Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
