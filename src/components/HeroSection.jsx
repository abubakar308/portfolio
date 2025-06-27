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
        className="flex flex-col bg-black text-white lg:flex-row items-center  py-20 md:pt-6 justify-center px-6 lg:px-16"
      >
        {/* Left Content */}
        <div className="text-center container lg:text-left md:pt-16 max-w-lg">
          <motion.h1
            className="text-4xl lg:text-5xl font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-blue-500 font-bold mt-2">Md Abu Bakar Siddique</span>
          </motion.h1>
          <h2 className="text-blue-400 text-xl mt-2">Junior Full Stack Web Developer | MERN Stack</h2>

  
          <motion.p
            className="mt-4 text-lg lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A passionate web developer primarily using the MERN stack to build scalable websites.
          </motion.p>
  
         {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 mt-6 justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1909-oKKJPFXLi7hQQftmyn06D6pWJmc3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
          >
            Hire Me
          </a>
        </motion.div>
  
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
              className="text-white bg-blue-500 p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaGithub size={32} className="text-2xl" />
            </a>
  
            <a
              href="https://www.linkedin.com/in/abubakar308"
              target="_blank"
              className="text-white bg-blue-500 p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaLinkedin size={32} className="text-2xl" />
            </a>
  
            <a
              href="https://www.facebook.com/mdabubakar308"
              target="_blank"
              className="text-white bg-blue-500 p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaFacebook size={32} className="text-2xl" />
            </a>
          </motion.div>
        </div>
  
        {/* Right Image */}
        <motion.div
          className="w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
         <img src={profile} alt="Abubakar" className="w-64 lg:w-80 rounded-xl shadow-lg border-4 border-blue-500 mt-10 bg-gray-200 bg-transparent" />

        </motion.div>
      </section>
    );
};

export default HeroSection;