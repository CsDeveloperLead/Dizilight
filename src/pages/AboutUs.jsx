import React from "react";
import Navbar from "../Components/Navbar";
import about from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white px-10">
         <div className="relative z-50 py-4">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in2">
        <p className="text-6xl font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text text-center flex justify-center px-6">
          About Us
        </p>
          <p className="mt-4 text-lg text-gray-300">
            About Dizilight And It's Innovative IT Solutions
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="animate-fade-in-left">
            <img
              src={about} // Replace with your image URL
              alt="About Dizilight"
              className="rounded-lg shadow-2xl w-[650px] h-[400px]"
            />
          </div>

          {/* Right Side: Text */}
          <div className="animate-fade-in-right">
            <p className="text-lg text-gray-300 leading-relaxed">
              At Dizilight, our passion lies in illuminating the digital world
              with cutting-edge solutions and innovative strategies. We are
              committed to helping businesses and individuals harness the power
              of technology to create a brighter, more connected future. Our team
              of experts is dedicated to providing exceptional service and
              unparalleled expertise, ensuring that our clients can confidently
              navigate the ever-evolving digital landscape. Whether you’re
              looking to enhance your online presence, streamline your
              operations, or explore new digital horizons, Dizilight is your
              trusted partner in this journey.
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-white font-bold font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;