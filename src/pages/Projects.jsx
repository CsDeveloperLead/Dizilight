// App.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";

const projects = [
  {
    name: "Jamuna Bakery",
    link: "https://jamunabakery.com/",
    description:
      "A visually stunning bakery website designed to showcase a wide range of delicious baked goods, from artisanal bread to decadent pastries. The website features an intuitive user interface, high-quality product images, and seamless navigation to enhance the user experience. It also includes an online ordering system, customer reviews, and a blog section for baking tips and recipes.",
    features: [
      "Responsive design for mobile and desktop",
      "Online ordering and payment integration",
      "Interactive product gallery with zoom functionality",
      "Customer review and rating system",
      "Blog section for baking tips and recipes",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Stripe API"],
    image: img1,
  },
  {
    name: "Hotel Mahadev Palace",
    link: "https://hotelmahadevpalaceballia.com/",
    description:
      "A luxurious hotel website designed to reflect the elegance and sophistication of Hotel Mahadev Palace. The website provides detailed information about room types, amenities, and services, along with high-resolution images and virtual tours. It includes a booking system, event planning services, and a contact form for inquiries. The design emphasizes user-friendly navigation and a premium feel.",
    features: [
      "Room booking and reservation system",
      "Virtual tours of rooms and facilities",
      "Event planning and banquet booking",
      "Responsive design with smooth animations",
      "Integration with Google Maps for location",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google Maps API"],
    image: img2,
  },
  {
    name: "Sumangal Banaras",
    link: "https://sumangalbanaras.com/?srslti:d=AfmBOorolfNwTC5Xshi4TB_6AYnoSmXc-vVFUJExA1_QWcuwaofbPW5",
    description:
      "A cultural and event management website dedicated to promoting the rich heritage of Banaras. The website showcases upcoming events, cultural programs, and workshops. It includes a gallery section with photos and videos, a blog for cultural insights, and a contact form for event inquiries. The design is vibrant and culturally inspired, with a focus on user engagement.",
    features: [
      "Event registration and ticketing system",
      "Photo and video gallery of past events",
      "Blog section for cultural articles and updates",
      "Responsive design with cultural-themed visuals",
      "Integration with social media platforms",
    ],
    technologies: ["React", "Styled Components", "GraphQL", "Contentful CMS"],
    image: img3,
  },
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative z-50 py-4 px-4 md:px-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-6 py-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h1>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between mb-24 h-auto md:h-[450px] p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl shadow-2xl overflow-hidden group`}
            style={{
                boxShadow: "0 4px 20px rgba(0, 123, 255, 0.7)", // Blue shadow
                borderRadius: "20px",
              }}
          >
            <motion.a
              className="w-full md:w-1/2 h-full overflow-hidden rounded-xl"
              variants={imageVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              style={{
                boxShadow: "0 2px 5px rgba(0, 123, 255, 0.7)", // Blue shadow
                borderRadius: "20px",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[250px] md:h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </motion.a>

            <div className="w-full flex flex-col md:w-1/2 p-2 md:p-8">
              <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                {project.name}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-2 hidden md:block">
                {project.description}
              </p>

              <span>
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-1">
                    <motion.div
                      className="w-2 h-2 mr-2 bg-cyan-500 rounded-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    ></motion.div>
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-gray-300 text-sm"
                    >
                      {feature}
                    </motion.p>
                  </div>
                ))}
              </span>
              <span className="hidden md:block">Technologies used: {project.technologies.join(", ")}</span>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-[180px] flex justify-center items-center mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Visit Project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
