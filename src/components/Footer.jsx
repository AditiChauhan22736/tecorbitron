import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-blue-950 text-white font-[Poppins] py-10 px-4" data-scroll-section >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Tecbitron Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInVariant}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Tecbitron</h3>
          <p className="text-sm">
            Tecbitron is dedicated to empowering businesses with next-gen
            technology and innovative solutions for a better tomorrow.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          variants={fadeInVariant}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </motion.div>

        {/* Important Links Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          variants={fadeInVariant}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold">Important Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeInVariant}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-8 w-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://image.shutterstock.com/image-photo/image-260nw-2384321321.jpg"
                alt="Twitter"
                className="h-8 w-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/922/linkedin.svg"
                alt="LinkedIn"
                className="h-8 w-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="h-8 w-8 object-contain"
              />
            </a>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9 }}
          variants={fadeInVariant}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@tecbitron.com</li>
            <li>Phone: +1-800-123-456</li>
            <li>Address: 123 Tecbitron Ave, City</li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={fadeInVariant}
        className="mt-8 text-center text-sm text-gray-400"
      >
        &copy; {new Date().getFullYear()} Tecbitron. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
