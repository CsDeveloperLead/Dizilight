import React from "react";
import { servicesData } from "../../data.js";
import ServiceCard from "../Components/ServiceCard.jsx";
import NavBar from "../Components/Navbar.jsx";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full relative z-50">
        <NavBar />
      </div>
      <p className="text-5xl font-bold text-center bg-gradient-to-r from-[#3f639d] via-[#4db9b9] to-[#2e85ff] bg-clip-text text-transparent mb-10 pt-10">
        Our Services
      </p>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
