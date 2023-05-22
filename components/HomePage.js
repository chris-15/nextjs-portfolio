import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-screen text-center">
      <div
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center
        "
      >
        <div>
          <h1 className="text-6xl">Welcome!</h1>
          <h1 className="py-2 text-6xl">
            My name is{" "}
            <span className="text-[#247ba0] animate-pulse">Chris</span>.
          </h1>
          <p className="py-4 max-w-[70%] m-auto text-lg">
            I am a <span className="font-bold text-[#247ba0] ">full stack developer </span>that focuses on building robust and user-friendly web applications.
            Let's collaborate and build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
