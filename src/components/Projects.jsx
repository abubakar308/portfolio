import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const[projects,setProjects]=useState([""]);

    useEffect(()=>{
        fetch('projects.json').
        then(res=>res.json()).
        then((data)=>setProjects(data))
    },[])

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
    
    return (
        <section id="projects" ref={ref} className="py-14 bg-black text-white px-6 md:px-14">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-400 mb-6"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects&&projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
             className="p-6 rounded-xl shadow-lg transition-all duration-300 transform will-change-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-400"
            >
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-blue-400">{project.name}</h3>
              <p className="text-sm my-2">{project.description}</p>
              <Link
                to={`/project/${index}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block mt-2 hover:bg-blue-600 transition-all"
              >
                View More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Projects;