import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import clothsImg from "../assets/cloths.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6">
        My Project- From
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          Code to Creative.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-4 w-96 pt-12">
          <img src={clothsImg} alt="cloths" />
        </div>
        <div className="pt-12 w-full lg:w-1/2 ">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-500 mx-6 bg-neutral-800 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-md">{item.title}</h5>
                <p className="text-xs text-neutral-500">{item.description}</p>
                <a
                  href={`${item.url}`}
                  title="_blank"
                  rel="noopener noreferrer"
                   className="inline-flex items-center text-purple-600 hover:underline group"
                >
                  See My Project

                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

{
  /* <div className="pt-10 w-full lg:w-1/2">
{checklistItems.map((item, index) => (
  <div key={index} className="flex mb-12">
    <div className="text-green-400 mx-5 bg-purple-950 h-10 w-10 p-2 justify-center items-center rounded-full">
      <CheckCircle2 />
    </div>
  </div>
))}
</div> */
}
