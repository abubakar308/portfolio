
const HeroSection = () => {
    return (
        <section id="home" className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold">Hi, I'm [Your Name]</h1>
        <p className="mt-4 text-2xl">I'm a Full Stack Web Developer</p>
        <a href="path-to-resume.pdf" download>
          <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-md hover:bg-blue-700">Download Resume</button>
        </a>
      </section>
    );
};

export default HeroSection;