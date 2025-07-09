import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";



const Certification = () => {
    return (
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center my-8 tracking-wider">
          Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2  lg:w-1/3 p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
                <p className="text-4xl mb-8">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className=" bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text text-sm ml-2">
                      (Most Popular)
                    </span>
                  )}
                </p>
                <p className="mb-8">
                  <span className="text-4xl mt-6 mr-2 "> {option.price}</span>
                  <span className="text-neutral-700 tracking-tight">/month</span>
                </p>
  
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2"> {feature} </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-md hover:bg-purple-800 border border-purple-800 rounded-lg transition duration-200"
                >
                  Subscribe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Certification

