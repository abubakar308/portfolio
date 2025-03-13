import { NavLink, useParams } from "react-router-dom";

const projects = [
    {
        name: "MediVendor",
        stack: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
        description: "A modern medical equipment e-commerce platform.",
        Detailed_description: "MediVendor is an advanced e-commerce platform designed for buying and selling medical equipment. It offers a seamless shopping experience with secure authentication, product management, and a streamlined checkout process.",
        liveLink: "https://medivendor-2b953.web.app/",
        github: "https://github.com/abubakar308/medivendor-client",
        challenges: "Implementing secure transactions and managing inventory efficiently.",
        futurePlans: "Enhance search functionality, add a recommendation system, and improve accessibility for a better user experience."
      },
    {
  name: "Learn Together",
  stack: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS", "Firebase"],
  description: "An online tutor booking platform connecting students with expert tutors.",
  Detailed_description: "Learn Together is designed to simplify tutor hiring and promote accessible learning globally. Users can browse tutors by category, book sessions, and manage their learning journey effectively.",
  liveLink: "https://online-tutor-booking-pla-5a98e.web.app",
  github: "https://github.com/abubakar308/learn-together-client",
  challenges: "Building a seamless booking system and ensuring real-time updates.",
  futurePlans: "Implement AI-driven tutor recommendations and integrate a video calling feature."
},
{
    name: "AllStar Equipment Online Store",
    stack: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    description: "An online store for sports and fitness equipment.",
    Detailed_description:
      "AllStar Equipment Online Store provides an extensive selection of sports gear and fitness equipment. It features secure authentication, an intuitive shopping experience, and a seamless checkout process.",
    liveLink: "https://sport-equipment-online-store.web.app",
    github: "https://github.com/abubakar308/AllStar-Equipment-client",
    challenges: "Managing real-time inventory updates and optimizing performance for a large product catalog.",
    futurePlans:
      "Introduce AI-based product recommendations and implement AR (Augmented Reality) for virtual try-outs of equipment.",
  }
  ];

const Details = () => {
    const { id } = useParams();
  
  const project = projects[id];

  if (!project) return <p className="text-white">Project not found.</p>;

    return (
        <section className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">{project.name}</h1>
        <p className="text-gray-300 mb-6">{project.Detailed_description}</p>
        <h2 className="text-xl font-semibold text-blue-300">Main Technology Stack</h2>
        <p className="text-gray-400 mb-4">{project.stack.join(", ")}</p>
        <h2 className="text-xl font-semibold text-blue-300">Challenges Faced</h2>
        <p className="text-gray-400 mb-4">{project.challenges}</p>
        <h2 className="text-xl font-semibold text-blue-300">Potential Improvements & Future Plans</h2>
        <p className="text-gray-400 mb-4">{project.futurePlans}</p>
        <div className="flex gap-4">
          <a href={project.liveLink} target="blank"  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">Live Project</a>
          <a href={project.github} target="blank" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">GitHub Repo</a>
          <NavLink to="/" className="bg-gray-700 hidden md:flex text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all">Go Back</NavLink>
        </div>
        <div className=" md:hidden mt-6">
        <NavLink to="/" className="bg-gray-700 text-white px-4 py-2  rounded-lg hover:bg-gray-800 transition-all">Go Back</NavLink>
        </div>
      </div>
     
    </section>
    );
};

export default Details;