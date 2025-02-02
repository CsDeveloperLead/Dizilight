import React from "react";
import { FaStar, FaDatabase, FaRocket, FaFileAlt } from "react-icons/fa";
import img2 from "../assets/why.webp";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaStar className="text-orange-500 text-4xl" />,
      title: "EXPERIENCE",
      description: "18+ Years of industry expertise at your disposal.",
    },
    {
      icon: <FaDatabase className="text-gray-500 text-4xl" />,
      title: "RESULTS DRIVEN",
      description: "We measure success by your growth.",
    },
    {
      icon: <FaRocket className="text-gray-500 text-4xl" />,
      title: "PERSONALIZED APPROACH",
      description: "Tailored strategies that fit your unique needs.",
    },
    {
      icon: <FaFileAlt className="text-gray-500 text-4xl" />,
      title: "TRANSPARENT REPORTING",
      description: "Clear insights into your campaigns’ performance.",
    },
  ];

  return (
    <div className="flex flex-col h-auto md:h-screen lg:flex-row items-center justify-center p-10 gap-10 bg-black">
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text ">WHY CHOOSE US</h2>
        <p className="text-white max-w-sm">
          Why embark on this journey with Olivecloud? Here’s what sets us apart:
        </p>
        <div className="flex flex-col gap-6 mt-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white text-base md:text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center"  style={{
              boxShadow: "0 4px 20px rgba(0, 123, 255, 0.7)", // Blue shadow
              borderRadius: "20px",
            }}>
        <div className="">
          <img
            src={img2}
            alt="Handshake"
            className=" w-full h-full rounded-3xl   "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
