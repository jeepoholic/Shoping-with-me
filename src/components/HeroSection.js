import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg-mt-20">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide">
        All Day Shopping,
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          {" "}
          Anytime, Anywhere!
        </span>
      </h1>

      <p className="m-10  text-md text-center text-neutral-500 max-w-4xl">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md "
        >
          {" "}
          start for free
        </a>
        <a href="#" className="py-3 px-4 border rounded-md">
          Documentation
        </a>
        
      </div>
      <div className="flex m-10 justify-center w-5xl">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border-purple-500 shadow-purple-100 mx-2 my-4"
          >
            {" "}
            <source src={video1} type="Video/mp4" />
            Your Browser Does not video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border-purple-500 shadow-purple-100 mx-2 my-4"
          >
            {" "}
            <source src={video2} type="Video/mp4" />
            Your Browser Does not video tag
          </video>
        </div>
    </div>
  );
};

export default HeroSection;
