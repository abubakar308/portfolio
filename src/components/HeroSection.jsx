import { useRef } from "react";
import profile from "../assets/profile.png"
import { useInView, motion } from "framer-motion";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const HeroSection = () => {
    const ref = useRef(null);
const isInView = useInView(ref, { triggerOnce: true });
    return (
        <section
        id="home"
        ref={ref}
        className="bg-gray-900 text-white flex flex-col lg:flex-row items-center pt-20 md:pt-6 justify-center px-6 lg:px-16"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-lg">
          <motion.h1
            className="text-4xl lg:text-5xl font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-blue-500 font-bold">Md Abu Bakar Siddique</span>
          </motion.h1>
  
          <motion.p
            className="mt-4 text-lg lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A passionate web developer primarily using the MERN stack to build scalable websites.
          </motion.p>
  
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-md hover:bg-blue-700 transition">
              Download Resume
            </button>
          </motion.a>
  
          {/* Social Media Icons */}
          <motion.div
            className="flex justify-left space-x-4 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              href="https://github.com/abubakar308"
              target="_blank"
              className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaGithub size={32} className="text-2xl" />
            </a>
  
            <a
              href="https://www.linkedin.com/in/abubakar308"
              target="_blank"
              className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <FaLinkedin size={32} className="text-2xl" />
            </a>
  
            <a
              href="https://www.facebook.com/mdabubakar308"
              target="_blank"
              className="text-white bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaFacebook size={32} className="text-2xl" />
            </a>
          </motion.div>
        </div>
  
        {/* Right Image */}
        <motion.div
          className="mt-8 lg:mt-0 lg:ml-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src={profile} alt="Abubakar" className="w-64 lg:w-80 shadow-lg rounded-lg" />
        </motion.div>
      </section>
    );
};

export default HeroSection;