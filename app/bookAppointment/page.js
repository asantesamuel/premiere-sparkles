"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BackButton from "../components/backButton";
import localFont from "next/font/local";

const displayFont = localFont({
  src: "../static-fonts/PlayfairDisplay-VariableFont_wght.ttf",
  display: "swap",
});

const normalizePhoneNumber = (value) => {
  const trimmed = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return null;

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return null;

  return `${trimmed.startsWith("+") ? "+" : ""}${digits}`;
};

const isWithinBusinessHours = (value) => {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return false;

  const [hours, minutes] = value.split(":").map(Number);
  return hours >= 9 && (hours < 20 || (hours === 20 && minutes === 0));
};

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
    else if (!normalizePhoneNumber(formData.phoneNumber))
      errors.push("Invalid phone number");
    if (!formData.service.trim()) errors.push("Service is required");
    if (!formData.dateInput) errors.push("Date is required");
    if (!formData.time) errors.push("Time is required");
    if (!formData.choice) errors.push("Please select service type");

    // Validate business hours (9am-8pm)
    if (formData.time && !isWithinBusinessHours(formData.time)) {
      errors.push("Please select a time between 9 AM and 8 PM");
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

    formData.phoneNumber = normalizePhoneNumber(formData.phoneNumber);
    form.current.contact_info.value = formData.phoneNumber;

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
        "service_c8qe6xm",
        "template_tsyhhw6",
        form.current,
        "TGKYRWwVPKiN6MS2L"
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
    <div className="relative isolate min-h-[calc(100vh-114px)] overflow-hidden bg-[#241824] px-4 py-10 sm:px-8 sm:py-14">
      <div className="absolute inset-0 -z-20 bg-[url('/nailtech2.jpg')] bg-cover bg-[center_35%] opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#241824]/85 via-[#241824]/65 to-[#241824]/90" />
      <div className="mx-auto w-full max-w-[980px]">
        <BackButton light />
        <form
          ref={form}
          className="mx-auto w-full max-w-4xl border-t-4 border-[#bd9a47] bg-[#fffdf9] p-5 shadow-[0_28px_80px_rgba(15,8,18,0.38)] sm:p-8 lg:p-10"
          onSubmit={sendEmail}>
          <p className="salon-eyebrow text-center">Premiere Sparkles Salon</p>
          <h1 className={`${displayFont.className} mb-3 mt-2 text-center text-4xl text-[#321d32] sm:text-5xl`}>
            Book an appointment
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-6 text-[#665d66] sm:text-base">Enter your preferred service and appointment time. We will contact you to confirm your booking.</p>

          {status.message && (
            <div
              role={status.type === "error" ? "alert" : "status"}
              aria-live={status.type === "error" ? "assertive" : "polite"}
              className={`salon-feedback mb-5 rounded-sm border p-4 ${
                status.type === "error"
                  ? "border-red-200 bg-red-50 text-red-800"
                  : "border-green-200 bg-green-50 text-green-800"
              }`}>
              {status.message.split("\n").map((msg, i) => (
                <div key={i}>{msg}</div>
              ))}
            </div>
          )}

          <div className="grid w-full gap-x-8 gap-y-5 sm:grid-cols-2">
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-[#3c303d]">Name *</label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Your full name"
                autoComplete="name"
                required
                className="h-12 w-full rounded-sm border border-[#d9ced9] bg-white px-4 text-base text-[#302631] shadow-sm outline-none transition focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15"
              />

              <label htmlFor="email" className="text-sm font-semibold text-[#3c303d]">Email *</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                name="from_email"
                autoComplete="email"
                required
                className="h-12 w-full rounded-sm border border-[#d9ced9] bg-white px-4 text-base text-[#302631] shadow-sm outline-none transition focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15"
              />

              <label htmlFor="phoneNumber" className="text-sm font-semibold text-[#3c303d]">
                Phone Number *
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Your phone number"
                name="contact_info"
                autoComplete="tel"
                inputMode="tel"
                required
                className="h-12 w-full rounded-sm border border-[#d9ced9] bg-white px-4 text-base text-[#302631] shadow-sm outline-none transition focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="service" className="text-sm font-semibold text-[#3c303d]">
                Service *
              </label>
              <input
                id="service"
                type="text"
                placeholder="Service you're booking"
                name="service_name"
                required
                className="h-12 w-full rounded-sm border border-[#d9ced9] bg-white px-4 text-base text-[#302631] shadow-sm outline-none transition focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15"
              />

              <label htmlFor="appointmentDate" className="text-sm font-semibold text-[#3c303d]">Date *</label>
              <input
                type="date"
                name="date"
                id="appointmentDate"
                min={new Date().toISOString().split("T")[0]}
                required
                className="h-12 w-full rounded-sm border border-[#d9ced9] bg-white px-4 text-base text-[#302631] shadow-sm outline-none transition focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15"
              />

              <label htmlFor="time" className="text-sm font-semibold text-[#3c303d]">
                Time * (9 AM - 8 PM)
              </label>
              <input
                type="time"
                name="time"
                id="time"
                min="09:00"
                max="20:00"
                required
                className="h-12 w-full rounded-sm border border-[#d9ced9] bg-white px-4 text-base text-[#302631] shadow-sm outline-none transition focus:border-[#8e1a91] focus:ring-2 focus:ring-[#8e1a91]/15"
              />
            </div>
          </div>

          <fieldset className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[#eee7ed] pt-6">
            <legend className="sr-only">Service type</legend>
            <div className="flex items-center gap-2">
              <input
                id="walk-in-service"
                type="radio"
                value="Walk-in Service"
                name="choice"
                required
                className="h-5 w-5 accent-[#8e1a91]"
              />
              <label htmlFor="walk-in-service" className="text-sm font-medium text-[#3c303d]">Walk-In Service</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="home-service"
                type="radio"
                name="choice"
                value="Home service"
                className="h-5 w-5 accent-[#8e1a91]"
              />
              <label htmlFor="home-service" className="text-sm font-medium text-[#3c303d]">House Service</label>
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className={`salon-button mx-auto mt-8 flex h-14 w-full max-w-[340px] items-center justify-center rounded-sm font-semibold tracking-[0.08em] text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#8e1a91] hover:bg-[#6d146f]"
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
