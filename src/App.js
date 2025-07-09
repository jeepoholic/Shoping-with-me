/* eslint-disable react/jsx-no-undef */
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import WorkExperience from "./components/WorkExperiences";
import MyProjects from "./components/MyProjects";
import Certification from "./components/Certification";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import CustomCursorTrail from "./components/CustomCursorTrail";

const App = () => {
  return (
    <div className="cursor-none">
      <CustomCursorTrail />
      {
        <div className="text-purple-100">
          <Navbar />
          <HeroSection />
          <WorkExperience />
          <MyProjects />
          {/* <Certification/>
          <Testimonial /> */}
          <Footer />
        </div>
      }
    </div>
  );
};

export default App;
