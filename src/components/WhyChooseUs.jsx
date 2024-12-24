import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Expertise",
    description: "Our team of experts provides unparalleled knowledge and experience to solve your most complex problems.",
    image: "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Customer Focus",
    description: "We prioritize customer satisfaction and always work to meet the unique needs of each client.",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Innovation",
    description: "We embrace the latest technologies and creative solutions to drive innovation in everything we do.",
    image: "https://images.unsplash.com/photo-1603202662706-62ead3176b8f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gray-600 font-[Poppins] py-12 px-6" data-scroll-section>
      <div className="mb-5">
        <h3 className="text-2xl text-center justify-center items-center font-semibold text-green-500">
          Why Choose Us
        </h3>
        <h4 className="text-4xl text-center tracking-tight justify-center items-center font-bold text-blue-950">
          The Role Of Tecorbitron in & as
        </h4>
        <h4 className="text-4xl tracking-tight text-center justify-center mt-4 items-center font-bold text-blue-950">
          Adaption and Growth
        </h4>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl text-gray-300 px-6">
            We provide expert solutions to help you achieve your business goals. With a focus on customer satisfaction and innovation, we deliver exceptional results every time.
          </p>
          <p className="text-xl text-gray-300 px-6 mt-4">
            From e-Commerce to Cloud Computing, Retail to Education, Tecorbitron tailors cutting-edge software solutions to meet each industry’s unique challenges and objectives.
          </p>
          <p className="text-xl text-gray-300 px-6 mt-4">
            We deliver exceptional results every time.
          </p>
        </motion.div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
