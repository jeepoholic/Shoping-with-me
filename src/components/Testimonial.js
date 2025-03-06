import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className="mt-2 tracking-wide">
      <h2 className="text-center my-10 lg:my-20 text-3xl sm:text-3xl lg:text-4xl">
        What people are <span>saying!</span> 
      </h2>
      <div className="flex flex-wrap justify-center lg:px-[8rem]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-purple-900 font-thin">
              <p> {testimonial.text} </p>
              <div className="flex flex-wrap">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-l-purple-900 "
                  src={testimonial.image}
                  alt={testimonial.user}
                ></img>
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
