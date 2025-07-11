import logo from "../assets/logo.svg";
import { useState } from "react";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b text-purple-100">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-start">
            <div className="flex item-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tighter mt-2">My Portfolio!</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 mt-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}> {item.label}</a>
                </li>
              ))}
            </ul>

       

            <div className="hidden lg:flex justify-start space-x-6 items-center mt-2">
              <a
                href={Resume}
                download="Nabila Khan Frontend Dev"
                className="py-2 px-2 bg-gradient-to-r from-purple-500 to-purple-800 rounded-md"
              >
                {" "}
                Download Resume
              </a>
              <a
                href="https://www.behance.net/nabilakhan0125"
                className="py-2 px-2 border rounded-md"
              >
                See Portfolio
              </a>
            </div>

            <div className="lg:hidden md-flex flex-col justify-end ">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="p-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
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
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
