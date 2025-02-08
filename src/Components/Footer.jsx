import React from "react";
import logo2 from "../assets/logo2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  return (
    <footer className="bg-[#0e0811] text-white py-8 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Side: Company Logo */}
        <div className="w-full md:w-[35%] mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <img
            src={logo2} // Replace with your logo path
            alt="Company Logo"
            className="w-[250px] h-auto"
          />
         
        </div>

        {/* Right Side: Links and Company Details */}
        <div className="w-2/3 flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-20">
          {/* Quick Links */}
          <div >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-start">Company Details</h3>
            <ul className="text-gray-400 space-y-2 flex flex-col items-center md:items-start">
              <li>D-349, Vibhuti Khand, gomti Nagar</li>
              <li>Lucknow, Uttar Pradesh (226010)</li>
              <li>Email: info@dizilight.com</li>
              <li>Phone: +91 7977600804</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-10">Follow Us</h3>
            <div className="flex space-x-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook fa-3x"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter fa-3x"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;