import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The team delivered exceptional quality. They exceeded all expectations and truly understand the client's needs.",
    name: "John Doe",
    role: "CEO, Tech Innovators",
    company: "Tech Innovators",
    rating: 5,
  },
  {
    text: "Amazing experience working with this team. The final product was flawless, and their support is unmatched.",
    name: "Jane Smith",
    role: "CTO, Design Studio",
    company: "Design Studio",
    rating: 4,
  },
  {
    text: "Their dedication and attention to detail were outstanding. I would recommend them to anyone looking for reliable partners.",
    name: "Emily Johnson",
    role: "Manager, Business Solutions",
    company: "Business Solutions",
    rating: 4.5,
  },
  {
    text: "Quick turnaround time, innovative solutions, and professional behavior. Fantastic team to work with!",
    name: "Michael Brown",
    role: "Head of Operations, Market Leaders",
    company: "Market Leaders",
    rating: 5,
  },
  {
    text: "They understand the pulse of the industry and deliver tailored solutions. Brilliant work from start to finish!",
    name: "Olivia Davis",
    role: "Director, Growth & Strategy",
    company: "Growth Solutions",
    rating: 4.8,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center mt-2">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="fas fa-star text-yellow-400"></i>
        ))}
        {halfStar && <i className="fas fa-star-half-alt text-yellow-400"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={i} className="far fa-star text-gray-300"></i>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="bg-green-900 font-[Poppins] py-12 px-6" data-scroll-section>
      {/* Heading and Paragraph */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Trusted by Clients, Proven by Results
        </h3>
        <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto">
          Our commitment to excellence and customer satisfaction has established
          us as a trusted partner in the industry. We take pride in our ability
          to deliver tailor-made solutions that drive success for our clients.
          See why businesses around the world trust us with their most critical
          projects.
        </p>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`w-full sm:w-[200px] md:w-[200px] lg:w-[200px] bg-white rounded-lg shadow-lg p-6 transition-transform duration-100 ${
              index === activeIndex
                ? "scale-105 md:scale-110"
                : "scale-100 md:scale-100"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-gray-800 text-lg mb-4">{testimonial.text}</p>
            <p className="font-bold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.role}, {testimonial.company}
            </p>
            {renderStars(testimonial.rating)}
          </motion.div>
        ))}
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
              index === activeIndex ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
