
const Projects = () => {
    return (
        <section id="projects" className="p-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 shadow-md rounded-md">
              <img src="project-image.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Project Name</h3>
              <a href="/project-details" className="text-blue-500 mt-2">View More</a>
            </div>
            {/* Repeat for more projects */}
          </div>
        </div>
      </section>
    );
};

export default Projects;