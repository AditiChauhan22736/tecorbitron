import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet specific business needs.",
    icon: "💻",
  },
  {
    title: "E-commerce Solutions",
    description: "Comprehensive e-commerce platforms for online businesses.",
    icon: "🛒",
  },
  {
    title: "Cloud Integration",
    description: "Streamlined workflows with secure and scalable cloud services.",
    icon: "☁",
  },
  {
    title: "IT Consulting",
    description: "Expert guidance to optimize your IT strategies and operations.",
    icon: "📊",
  },
  {
    title: "Cybersecurity Services",
    description: "Robust protection to secure your digital assets and data.",
    icon: "🔒",
  },
  {
    title: "Automation Solutions",
    description: "Enhance efficiency with custom automation tools.",
    icon: "🤖",
  },
  {
    title: "HR Software",
    description: "Efficient software solutions to manage human resources.",
    icon: "🧑‍💼",
  },
  {
    title: "Learning Platform",
    description: "Interactive online platforms for training and development.",
    icon: "🎓",
  },
  {
    title: "Digital Marketing",
    description: "Boost your business with targeted digital marketing strategies.",
    icon: "📈",
  },
  {
    title: "Data Visualization",
    description: "Transform data into actionable insights with visual reports.",
    icon: "📊",
  },
  {
    title: "Dashboard Solutions",
    description: "Centralize your key metrics with custom dashboards.",
    icon: "📋",
  },
  {
    title: "Financial Management",
    description: "Software tools to streamline financial tracking and reporting.",
    icon: "💰",
  },
  {
    title: "UI/UX Strategy",
    description: "Optimized user interface and experience designs for greater engagement.",
    icon: "🎨",
  },
  {
    title: "Business Intelligence",
    description: "Data-driven strategies to improve decision-making and business outcomes.",
    icon: "📊",
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics tools to extract valuable insights from your data.",
    icon: "📉",
  },
  {
    title: "Asset Management",
    description: "Efficient solutions to track and manage business assets.",
    icon: "🏢",
  },
  {
    title: "Trading Terminal",
    description: "Comprehensive trading platforms with advanced charting and analytics.",
    icon: "📈",
  },
  {
    title: "Cloud Migration",
    description: "Seamless migration of your systems to the cloud for better scalability.",
    icon: "☁️",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 font-[Poppins] bg-gray-50" data-scroll-section>
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Solutions
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`p-3 shadow-sm rounded-lg hover:bg-green-100 transition duration-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl">{solution.icon}</span>
                <h3 className="ml-3 text-md font-semibold">{solution.title}</h3>
              </div>
              <p className="text-gray-600 text-xs">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
