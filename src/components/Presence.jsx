import React from "react";
import { motion } from "framer-motion";

const Presence = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 font-[Poppins] to-gray-100 py-12" data-scroll-section>
      <div className="container mx-auto text-blue-900 text-center">
        {/* Title */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Supercharge Your Online Presence with Tecorbitron
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-blue-700 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Leverage cutting-edge technology and expertise to create a strong, impactful online presence.
        </motion.p>

        {/* Icons Grid - Technology Groups */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Frontend Frameworks, Backend & Libraries, Version Control */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Frontend & Backend</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-10 w-10" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png" alt="Vue.js" className="h-10 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="Vue.js" className="h-10 w-12" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://www.svgrepo.com/show/303205/html-5-logo.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/120px-CSS3_logo.svg.png" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="Vue.js" className="h-12 w-12" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">Frontend frameworks, backend libraries, and version control systems.</p>
          </div>

          {/* Programming Languages, DevOps & Automation, Desktop App Framework */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Programming & DevOps</h3>
            <div className="flex flex-wrap justify-center gap-4">
            <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-10 w-10" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png" alt="Vue.js" className="h-10 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="Vue.js" className="h-10 w-12" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://www.svgrepo.com/show/303205/html-5-logo.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/120px-CSS3_logo.svg.png" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
              <motion.div
                className="p-2 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Vue.js" className="h-12 w-auto" />

              </motion.div>
                
              
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">Programming languages, DevOps, automation tools, and desktop app frameworks.</p>
          </div>

          {/* Design, Prototyping & Graphic Tools */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Design & Graphics</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                🎨
              </motion.div>
              <motion.div
                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                🖌️
              </motion.div>
              <motion.div
                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                🖥️
              </motion.div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">Design, prototyping, and graphic tools for creating impactful visuals.</p>
          </div>

          {/* Databases & Cross-Platform Mobile App Development */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Databases & Mobile Apps</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                📊
              </motion.div>
              <motion.div
                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                ☁
              </motion.div>
              <motion.div
                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center text-3xl hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                📱
              </motion.div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">SQL databases, data warehousing, and mobile app backend development.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Presence;
