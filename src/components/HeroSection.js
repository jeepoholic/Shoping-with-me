import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import Resume from "../assets/Resume.pdf";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg-mt-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
        Hi, I'm Nabila Khan
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          {" "}
          UI UX Designer | Frontend Developer
        </span>
      </h1>

      <p className="m-10  text-md text-center text-neutral-500 max-w-4xl">
        {" "}
        I’m a UI/UX designer with 4 years of experience, including 2 years in
        Dubai. I focus on creating user-friendly and easy-to-use designs by
        building wireframes, responsive prototypes, and improving them based on
        user feedback.
        <br></br>
         Besides design, I also build the front end using React,
        Next.js, and Tailwind CSS. I work with hooks like useState, use
        conditional rendering, apply dynamic Tailwind classes for flexible
        designs, and connect to APIs to create complete and interactive web
        experiences.
      </p>
      <div className="">
        <a
          href={Resume}
          download="Nabila Khan Frontend Dev"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md "
        >
          {" "}
          Download Resume
        </a>
        <a
          href="https://www.behance.net/nabilakhan0125"
          className="py-3 px-4 border rounded-md"
        >
          See Portfolio
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
