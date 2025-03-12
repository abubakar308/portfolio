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
  const isInView = useInView(ref, { triggerOnce: true });
    return (
        <section id="projects" ref={ref} className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-purple-400 mb-6"
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
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-purple-400">{project.name}</h3>
              <p className="text-gray-300 text-sm my-2">{project.description}</p>
              {/* <div className="text-gray-400 text-xs mb-4">Tech: {project.stack.join(", ")}</div> */}
              <Link
                to={`/project/${index}`}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg inline-block mt-2 hover:bg-purple-600 transition-all"
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