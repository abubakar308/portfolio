import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png" },
      { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png" },
      { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png" },
      { name: "ReactJS", icon: "https://img.icons8.com/?size=100&id=123603&format=png" },
      { name: "NextJS", icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node JS", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png" },
      { name: "Express JS", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
      { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=74402&format=png" },
      { name: "Firebase", icon: "https://img.icons8.com/?size=100&id=62452&format=png" },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <motion.section id="skills" className="py-16 bg-black text-white px-6 md:px-16">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-500 mb-8"
        >
          Skills
        </motion.h2>

        {/* Skill Categories */}
        {skills.map((skillSet, index) => (
          <div key={index} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-2xl font-semibold mb-6"
            >
              {skillSet.category}
            </motion.h3>

            {/* Skill Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {skillSet.items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-xl shadow-xl flex flex-col items-center bg-gray-800 hover:bg-blue-500/80 transition-all transform hover:scale-105 cursor-pointer"
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                  <p className="text-lg font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
