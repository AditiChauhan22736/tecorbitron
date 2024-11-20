import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { number: "5.3M", label: "Active Users" },
    { number: "82+", label: "Countries Served" },
    { number: "30+", label: "Projects Delivered" },
  ];

  return (
    <section className="bg-blue-950 font-[Poppins] py-12" data-scroll-section>
      <div className="max-w-6xl bg-blue-950 mx-auto text-center">
        <h2 className="text-2xl text-white font-bold mb-6">Our Impact</h2>
        <div className="flex justify-center space-x-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl text-white font-bold">{stat.number}</h3>
              <p className="text-gray-400 ">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;