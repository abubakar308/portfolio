import profile from "../assets/profile.png"
const HeroSection = () => {
    return (
        <section id="home" className="h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16">
  {/* Left Content */}
  <div className="text-center lg:text-left max-w-lg">
    <h1 className="text-4xl lg:text-5xl font-semibold">Hi, I'm [Md Abu Bakar Siddique]</h1>
    <p className="mt-4 text-lg lg:text-2xl">A passionate web developer primarily use MERN stack technology for building websites.</p>
    <a href="path-to-resume.pdf" download>
      <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-md hover:bg-blue-700 transition">
        Download Resume
      </button>
    </a>
  </div>

  {/* Right Image */}
  <div className="mt-8 lg:mt-0 lg:ml-12">
    <img 
      src={profile}
      alt="Abubakar" 
      className="w-64 lg:w-80 shadow-lg"
    />
  </div>
</section>
    );
};

export default HeroSection;