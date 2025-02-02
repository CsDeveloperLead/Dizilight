import React, { useEffect, useState, useRef } from "react";

const StatisticsSection = () => {
  // State to hold the statistics values
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [successfulBusinesses, setSuccessfulBusinesses] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [starReviews, setStarReviews] = useState(0);

  // Target values for the statistics
  const targetHappyCustomers = 10000;
  const targetSuccessfulBusinesses = 5000;
  const targetTotalClients = 7500;
  const targetStarReviews = 4.9;

  // Animation duration in milliseconds
  const animationDuration = 2000;

  // Ref for the section element
  const sectionRef = useRef(null);

  // Function to animate the numbers
  const animateNumber = (targetValue, setValue) => {
    const increment = targetValue / (animationDuration / 16); // 16ms per frame for 60fps
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      setValue(Math.floor(currentValue));
    }, 16);
  };

  // Intersection Observer to trigger animations when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations when the section is in view
            animateNumber(targetHappyCustomers, setHappyCustomers);
            animateNumber(targetSuccessfulBusinesses, setSuccessfulBusinesses);
            animateNumber(targetTotalClients, setTotalClients);
            animateNumber(targetStarReviews * 10, (value) => setStarReviews(value / 10)); // For decimal animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Happy Customers */}
          <div className="text-center animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text">
              {happyCustomers}+
            </h3>
            <p className="mt-2 text-lg text-gray-300">Happy Customers</p>
          </div>

          {/* Successful Businesses */}
          <div className="text-center animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text">
              {successfulBusinesses}+
            </h3>
            <p className="mt-2 text-lg text-gray-300">Successful Businesses</p>
          </div>

          {/* Total Clients */}
          <div className="text-center animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text">
              {totalClients}+
            </h3>
            <p className="mt-2 text-lg text-gray-300">Total Clients</p>
          </div>

          {/* Star Reviews */}
          <div className="text-center animate-fade-in-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-[#124fff] via-[#4db9b9] to-[#2e85ff] text-transparent bg-clip-text">
              {starReviews.toFixed(1)}⭐
            </h3>
            <p className="mt-2 text-lg text-gray-300">Star Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;