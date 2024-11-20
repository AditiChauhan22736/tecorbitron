import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern websites with the latest technologies.",
      icon: "🌐",
    },
    {
      title: "App Development",
      description: "Creating user-friendly mobile apps for both Android and iOS platforms.",
      icon: "📱",
    },
    {
      title: "AI & Machine Learning",
      description: "Providing intelligent solutions powered by AI and ML algorithms.",
      icon: "🤖",
    },
    {
      title: "Digital Marketing",
      description: "Helping businesses grow with data-driven marketing strategies.",
      icon: "📈",
    },
    {
      title: "Cloud Solutions",
      description: "Optimizing workflows with secure and scalable cloud services.",
      icon: "☁",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging interfaces for web and mobile.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-10 font-[Poppins] bg-gray-100" data-scroll-section>
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-3xl lg:text-4xl text-green-600 font-bold text-center mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-blue-950 font-bold text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Can Help With You!
        </motion.h2>
        <motion.p
          className="text-xl md:text-xl lg:text-xl tracking-tight text-green-700  text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From e-Commerce to Cloud Computing, Retail to Education, Tecorbitron tailors cutting-edge software solutions to meet each industry’s unique challenges and objectives.
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f0f8ff", // Light blue effect
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.8)", // Enhance shadow
              }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="ml-4 text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Add "View All" Button */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="/services" // Link to detailed services page
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View All
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
