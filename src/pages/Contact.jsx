import  { useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaWebAwesome } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import NavBar from "../Components/Navbar";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_brbijtk", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="bg-[#0e0811] w-full flex flex-col items-center">
      <div className="w-full pt-6 relative z-50 px-4 md:px-10">
        <NavBar />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center pt-4 md:pt-10 pb-10 md:pb-20 gap-10 bg-[#0e0811]">
        {/* Contact Information Section (Mobile View) */}
        <div className="bg-[#0e0811] w-[90%] rounded-xl flex md:hidden shadow-2xl text-white flex-col gap-4 justify-center px-8 h-[250px] relative z-20">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="flex items-center text-sm">
            <span className="mr-2">
              <MdLocationOn size={16} />
            </span>
            DiziLight Technologies, 123 Main Street, City, Country
          </p>
          <p className="flex items-center text-sm">
            <span className="mr-2">
              <IoMdMail size={16} />
            </span>{" "}
            DiziLight@gmail.com
          </p>
          <p className="flex items-center text-sm">
            <span className="mr-2">
              <FaWebAwesome size={16} />
            </span>{" "}
            www.dizilight.com
          </p>
          <p className="flex items-center text-sm">
            <span className="mr-2">
              <FaPhone size={16} />
            </span>{" "}
            +91 987654321, +91 1234567890
          </p>
        </div>

        {/* Contact Us Form */}
        <div
          className="bg-white w-[95%] md:w-[60%] flex flex-col md:flex-row items-center relative min-h-[500px] md:min-h-[600px] -top-1"
          style={{
            boxShadow: "0 4px 20px rgba(0, 123, 255, 0.7)", // Blue shadow
            borderRadius: "20px",
          }}
        >
          {/* Contact Information Section (Desktop View) */}
          <div
            className="bg-[#0e0811] hidden md:flex shadow-2xl text-white flex-col gap-8 justify-center px-8 h-[500px] absolute left-[-120px]"
            style={{
              boxShadow: "0 4px 20px rgba(0, 123, 255, 0.7)", // Blue shadow
              borderRadius: "20px",
            }}
          >
            <h2 className="text-4xl font-semibold my-4">Contact Us</h2>
            <p className="flex items-center">
              <span className="mr-2">
                <MdLocationOn size={20} />
              </span>
              DiziLight Technologies, 123 Main Street, <br/> City, Country
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <IoMdMail size={20} />
              </span>{" "}
              DiziLight@gmail.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <FaWebAwesome size={20} />
              </span>{" "}
              www.dizilight.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <FaPhone size={20} />
              </span>
              +91 987654321, +91 1234567890
            </p>
          </div>

          {/* Form Section */}
          <div className="w-1/3 hidden md:block"></div>
          <div className="w-[90%] md:w-2/3">
            <div className="bg-white md:pr-10">
              <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold text-gray-800 my-2 md:my-6">
                Get in Touch
              </h2>
              <p className="text-center md:text-start text-base md:text-xl mb-4">
                Feel free to drop us a line below!
              </p>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a2c5d]"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a2c5d]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a2c5d] h-32"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-3 bg-[#0e0811] text-[#82b0ef] rounded-full transition duration-300 shadow-lg w-full cursor-pointer"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 123, 255, 0.7)", // Blue shadow
                    borderRadius: "20px",
                  }}
                >
                  SEND
                </button>
              </form>
              {statusMessage && (
                <p className="text-center mt-4 text-sm text-gray-700">
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
