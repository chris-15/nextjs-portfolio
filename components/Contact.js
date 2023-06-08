import React, { useState } from "react";

const Contact = () => {
  function validateEmail(email) {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
  }

  const [formState, setFormState] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // destructuring form state
  const { name, phoneNumber, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  /* function handleSubmit(e) {
    setFormState({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  } */


  return (
    <div id="contact" className="w-full lg:h-screen pt-24 pb-10">
      <div className="max-w-[1240px] m-auto px-4 w-full">
        <h2 className="text-4xl text-[#247ba0] pb-2">Contact Me!</h2>
        {/* <p className=" tracking-wide">
          Please sumbit the form below or email me - chris.sarm15@gmail.com
        </p> */}

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
          <form
          /* onSubmit={handleSubmit} */
            method="POST"
            action="https://getform.io/f/1c0b62ce-3b87-4b95-9b8b-388347876616"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onBlur={handleChange}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3"
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onBlur={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3"
                type="text"
                name="email"
                placeholder="Email"
                onBlur={handleChange}
              />
            </div>
            {/* required by getformio so no spam  */}
            <input type="hidden" name="_gotcha" className="!hidden "></input>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3"
                type="text"
                name="message"
                placeholder="Message"
                rows={10}
                onBlur={handleChange}
              />
            </div>

            <div className="flex flex-col items-center">
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
