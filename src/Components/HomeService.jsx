import React from 'react'
import { servicesData } from "../../data.js";
import ServiceCard from "../Components/ServiceCard.jsx";

const HomeService = () => {
  return (
    <div className='bg-black w-full h-full pt-16 pb-20'>
       <p className="text-4xl md:text-6xl pb-20 font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text text-center flex justify-center px-6">
          Some of Our Services
        </p>
        <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
          {servicesData.slice(7,19).map((service) => (
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
  )
}

export default HomeService
