
import behanceIcon from "../assets/behance.svg";
import linkedinIcon from "../assets/linkedin.svg";
import  instagramIcon  from "../assets/instagram.svg";


const Footer = () => {
  return (
<footer className="border-t py-4 border-neutral-700 xs:py-10 bg-gradient-to-r from-purple-900 to-purple-1000">
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="flex items-center justify-center">
    <a href="https://www.behance.net/nabilakhan0125" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <img className="h-10 w-6 mr-2" src={behanceIcon} alt="logo" />
      <span className="text-md font-semibold text-white">My Behance</span>
    </a>
  </div>
  <div className="flex items-center justify-center">
    <a href="https://www.linkedin.com/in/nabila-khan-b68ba0175/" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <img className="h-10 w-6 mr-2" src={linkedinIcon} alt="logo" />
      <span className="text-md font-semibold text-white">My Linkedin</span>
    </a>
  </div>
  <div className="flex items-center justify-center">
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <img className="h-10 w-6 mr-2" src={instagramIcon} alt="logo" />
      <span className="text-md font-semibold text-white">My Instagram</span>
    </a>
  </div>
</div>





      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4 text-purple-800">Resources </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((links, index) => (
              <li key={index}>
                <a className="text-white hover:text-purple-800" href={links.href}>{links.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-purple-800 ">Platform </h3>
          <ul className="space-y-2">
            {platformLinks.map((links, index) => (
              <li key={index}>
                <a className="text-white hover:text-purple-800" href={links.href}>{links.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-purple-800">Community </h3>
          <ul className="space-y-2">
            {communityLinks.map((links, index) => (
              <li key={index}>
                <a className="text-white hover:text-purple-800" href={links.href}>{links.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
