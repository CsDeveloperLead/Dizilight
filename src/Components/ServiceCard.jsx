import React from "react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div
      className="book w-[350px] md:w-[400px] relative  bg-black rounded-lg shadow-lg transform preserve-3d perspective-2000 flex items-center justify-center p-6"
      style={{
        boxShadow: "0 4px 10px rgba(0, 123, 255, 0.7)", // Blue shadow
        borderRadius: "10px",
      }}
    >
      {/* Front Side (Title Only) */}
      <p className="text-base text-gray-600 text-center">{description}</p>

      {/* Back Side (Description) */}
      <div className="cover absolute top-0 left-0 w-full h-full bg-black rounded-lg shadow-lg transform-origin-left transition-transform duration-1000 flex flex-col items-center justify-center">
      <span>{Icon && <Icon className="text-6xl text-blue-500  mb-2" />}</span>
        <p className="text-3xl font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text text-center flex justify-center px-6">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
