import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-4 py-16 w-full">
        <h2 className="text-4xl text-[#247ba0] pb-2">Contact Me!</h2>
        <p className=" tracking-wide">
          Please sumbit the form below or email me - chris.sarm15@gmail.com
        </p>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
          <form>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3"
                  type="text"
                  placeholder="Name"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3"
                type="text"
                placeholder="Email"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3"
                type="text"
                placeholder="Message"
                rows={10}
              />
            </div>

            <div className="flex flex-col items-center">
              <button className="w-[200px] md:w-[400px] p-4 mt-4 bg-gradient-to-r from-[#0a2463] to-[#247ba0] text-white rounded-xl shadow-xl shadow-gray-400 ">
                Sumbit!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
