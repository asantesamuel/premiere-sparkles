"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          form.current.reset(); // clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <div className="rounded-sm shadow-md p-4 flex justify-center">
          <div className="flex flex-col md:space-y-2">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <h1 className="text-black font-bold text-[10px] md:text-xl">
                  Contact Us
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  className="w-[100px] text-[10px] h-[8px] border-2 p-2 border-slate-200 outline-none md:text-lg md:w-[200px] md:h-[50px] md:p-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="w-[100px] text-[10px] h-[8px] border-2 p-2 border-slate-200 outline-none md:text-lg md:w-[200px] md:h-[50px] md:p-4"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message..."
                  className="w-[100px] h-[70px] border-2 p-2 border-slate-200 outline-none text-[10px] md:text-lg md:w-[200px] md:h-[100px] md:p-4"
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="w-[100px] h-[35px] bg-mypurple text-white md:w-[200px] md:h-[40px] hover:bg-opacity-80"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
