
const Skills = () => {
    return (
        <section id="skills" className="p-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Frontend</h3>
              <ul className="mt-4">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Backend</h3>
              <ul className="mt-4">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Tools</h3>
              <ul className="mt-4">
                <li>Git</li>
                <li>Docker</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Skills;