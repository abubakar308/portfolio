import { useRef } from "react";
import profile from "../assets/profile.png"
import { useInView, motion } from "framer-motion";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const HeroSection = () => {
    const ref = useRef(null);
const isInView = useInView(ref, { triggerOnce: true });
    return (
        <section id="home" className=" bg-gray-900 text-white flex flex-col lg:flex-row items-center pt-20 md:pt-6 justify-center px-6 lg:px-16">
  {/* Left Content */}
  <div className="text-center lg:text-left max-w-lg">
    <h1 className="text-4xl lg:text-5xl font-semibold">Hi, I'm <span className="text-blue-500 font-bold">Md Abu Bakar Siddique</span></h1>
    <p className="mt-4 text-lg lg:text-2xl">A passionate web developer primarily use MERN stack technology for building websites.</p>
    <a href="#">
        {/* https://drive.google.com/uc?export=download&id=1XKv-1WI9IB1vXo45RIj_GCZfdYkfY6AG */}
  <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-md hover:bg-blue-700 transition">
    Download Resume
  </button>
</a>

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1 }}
  className="text-lg text-white mb-6 max-w-xl"
>
        <div className="flex justify-left space-x-4 py-4">
      <a
        href="https://github.com/abubakar308"
        target="_blank"
        className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300"
      >
        <FaGithub size={32} className="text-2xl" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abubakar308"
        target="_blank"
        className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition duration-300"
      >
        <FaLinkedin size={32} className="text-2xl" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/mdabubakar308"
        target="_blank"
        className="text-white bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        <FaFacebook size={32} className="text-2xl" />
      </a>
    </div>
        </motion.div>
  </div>

  {/* Right Image */}
  <div className="mt-8 lg:mt-0 lg:ml-12">
    <img 
      src={profile}
      alt="Abubakar" 
      className="w-64 lg:w-80 shadow-lg"
    />
  </div>
</section>
    );
};

export default HeroSection;