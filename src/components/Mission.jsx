import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  const items = [
    {
      icon: "A",
      heading: "Research",
      description: "Conducting in-depth analysis to understand requirements.",
    },
    {
      icon: "B",
      heading: "Strategy",
      description: "Designing comprehensive plans for achieving objectives.",
    },
    {
      icon: "C",
      heading: "Deployment",
      description: "Efficiently implementing solutions to ensure success.",
    },
  ];

  return (
    <section
      id="mission"
      className="py-10 bg-blue-950 font-[Poppins] text-white"
      data-scroll-section
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-center text-center lg:text-left lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 bg-green-500 text-blue-950 flex flex-col items-center justify-center rounded-full text-6xl font-bold">
            <p>Mission</p>
            <p className="text-xl text-white mt-4">We aim for you</p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:text-left lg:items-start"
            >
              {/* Circular Icon */}
              <div className="w-28 h-28 border-4 border-white flex items-center justify-center rounded-full text-5xl font-bold">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="mt-4">
                <h3 className="text-xl font-bold text-green-400">{item.heading}</h3>
                <p className="text-gray-300 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
