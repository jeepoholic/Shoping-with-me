import React from "react";
import { features } from "../constants";

const WorkExperience = () => {
  return (
    <div>
      <div className="relative mt-10   ">
        <div className="text-center">
          {/* <span className="text-purple-600 rounded-full h-6 text-md">
            Feature
          </span> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-10 lg-m-20 tracking-wide">
            Work Experience
            <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
              {" "}
              & Projects
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full lg:w-1/2 sm:w-1/2 lg:px-[5rem]">
            <div className="flex">
              <div className="flex mx-5 h-10 w-10 p-2 bg-purple-900 text-purple-300 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-md text-purple-500">
                  {feature.text}
                </h5>
                <p className="text-xs mb-20 p-2 ">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap mt-10 lg:mt-5">
        {features.map((feature, index) => {
          return (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex justify-center items-center mx-10 h-10 w-10 p-2 bg-neutral-900 text-purple-100">
                  {feature.icon}
                </div>
                <div className="">
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default WorkExperience;
