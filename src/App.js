import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
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
          <Feature />
          <Workflow />
          <Pricing />
          <Testimonial />
          <Footer />
        </div>
      }
    </div>
  );
};

export default App;
