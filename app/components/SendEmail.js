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
          <div className="flex flex-col justify-center md:items-start items-center md:space-y-2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex justify-center md:items-start  items-center flex-col">
              <div>
                <h1 className="text-black font-extrabold text-[28px] md:text-xl">
                  Contact Us
                </h1>
              </div>
              <div className="space-y-4 flex flex-col justify-center items-center">
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="w-[300px] h-[50px] text-[14px] border-2 p-2 border-slate-200 outline-none md:text-lg md:w-[200px] md:h-[50px] md:p-4"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className="w-[300px] h-[50px] text-[14px]  border-2 p-2 border-slate-200 outline-none md:text-lg md:w-[200px] md:h-[50px] md:p-4"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    className="w-[300px] h-[100px] border-2 p-2 border-slate-200 outline-none text-[14px] md:text-lg md:w-[200px] md:h-[100px] md:p-4"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    className="w-[100px] h-[35px] bg-mypurple text-white md:w-[200px] md:h-[40px] hover:bg-opacity-80"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
