import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
    return (
        <section
        ref={ref}
        id="about"
        className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-12 text-center"
      >
        <motion.h1
          className="text-4xl text-blue-500 font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
  
        <motion.p
          className="text-lg max-w-3xl leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-400 font-semibold">Md Abu Bakar Siddique</span>, a passionate
          <span className="text-blue-400 font-semibold"> Full Stack Web Developer</span> with a deep enthusiasm for crafting
          efficient, scalable, and user-friendly applications. I thrive on tackling complex problems and continuously learning new technologies.
        </motion.p>
  
        <motion.h2
          className="text-2xl font-semibold mt-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          🚀 My Passion
        </motion.h2>
  
        <motion.p
          className="text-lg max-w-3xl leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I love building **real-world projects** that make a difference, from **e-commerce platforms** to **online learning tools**
          and **career counseling websites**. My goal is to create applications that are **not just functional but also visually
          appealing and accessible to all users**.
        </motion.p>
  
        <motion.h2
          className="text-2xl font-semibold mt-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          📌 Beyond Coding
        </motion.h2>
  
        <motion.p
          className="text-lg max-w-3xl leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          When I'm not coding, you'll find me **watching cricket matches** and keeping up with the latest games.
          I'm a huge cricket enthusiast and love discussing match strategies and player performances.
        </motion.p>
      </section>
    );
};

export default AboutMe;