import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
      { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
      { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
      { name: "ReactJS", icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
      { name: "NextJS", icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node JS", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
      { name: "Express JS", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
      { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
      { name: "Firebase", icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000" },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 bg-black text-white px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center">
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
                  className="p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-blue-600 transition-all transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 text-white h-16 mb-4"
                  />
                  <p className="text-lg font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;