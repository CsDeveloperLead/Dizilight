import Navbar from "../Components/Navbar";
import hero from "../assets/hero.png";
import hero2 from "../assets/Home.png";
import { NavLink } from "react-router-dom";
import StatisticsSection from "../Components/StatisticsSection";
import TestimonialSlider from "../Components/Testimonials";
import HomeService from "../Components/HomeService";
import WhyChooseUs from "../Components/WhyUs";

export default function App() {
  return (
    <>
      <div
        className="w-full min-h-screen text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Navbar */}
        <div className="relative z-50 py-4 px-4 md:px-10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-40 flex flex-col items-center justify-center h-screen text-center px-4">
          {/* Main Heading */}
          <h1 className="text-xl md:text-3xl lg:text-3xl font-bold mb-4 animate-fade-in">
            Best IT Solutions
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#75eefb] via-[#35a0a0] to-[#2e85ff] text-transparent bg-clip-text font-bold mb-8 animate-fade-in-up">
            Your Growth Partner in Solving Complex <br/>
             Marketing Challenges.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl animate-fade-in-up">
            We provide cutting-edge IT solutions to help your business grow and
            thrive in the digital age.
          </p>

          {/* Get Started Button */}
          <NavLink to="/contact" className="animate-fade-in-up">
            <button className="px-10 py-2 bg-[#010916] hover:bg-[#020c1d] cursor-pointer border-2 border-[#edf1f2] rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </NavLink>
        </div>

        {/* Animated Background Elements (Optional) */}
        <div className="absolute inset-50 z-30  top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 ">
          <div className="absolute w-32 h-32 bg-white rounded-full opacity-10 animate-float-1"></div>
          <div className="absolute w-32 h-32 bg-white rounded-full opacity-10 animate-float-2"></div>
          <div className="absolute w-20 h-20 bg-white rounded-full opacity-10 animate-float-3"></div>
          <div className="absolute w-20 h-20 bg-white rounded-full opacity-10 animate-float-4"></div>
        </div>
      </div>

      <div>
        <StatisticsSection />
      </div>

   <div>
    <WhyChooseUs  />
   </div>
      <div>
        <HomeService />
      </div>
      <div>
        <TestimonialSlider />
      </div>
    </>
  );
}
