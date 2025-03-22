import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-12 text-center"
    >
      <div ref={ref} className="max-w-3xl">
        {/* Title */}
        <motion.h1
          className="text-4xl text-blue-500 font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-400 font-semibold">Md Abu Bakar Siddique</span>, a passionate
          <span className="text-blue-400 font-semibold"> Full Stack Web Developer</span>.  
          I thrive on tackling complex problems and continuously learning new technologies to build scalable, user-friendly applications.
        </motion.p>

        {/* My Passion */}
        <motion.h2
          className="text-2xl font-semibold mt-6 mb-4 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          🚀 My Passion
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I love building <strong>real-world projects</strong> that make an impact—from
          <strong> e-commerce platforms</strong> to <strong>online learning tools</strong> and <strong>career counseling websites</strong>.
          My goal is to create applications that are not just functional but also **visually appealing** and **accessible to all users**.
        </motion.p>

        {/* Beyond Coding */}
        <motion.h2
          className="text-2xl font-semibold mt-6 mb-4 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          📌 Beyond Coding
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          When I'm not coding, you'll find me <strong>watching cricket matches</strong> and keeping up with the latest games.
          I'm a huge cricket enthusiast and love discussing match strategies and player performances.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
