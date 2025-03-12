import profile from "../assets/profile.png"
const HeroSection = () => {
    return (
        <section id="home" className=" bg-gray-900 text-white flex flex-col lg:flex-row items-center pt-20 md:pt-6 justify-center px-6 lg:px-16">
  {/* Left Content */}
  <div className="text-center lg:text-left max-w-lg">
    <h1 className="text-4xl lg:text-5xl font-semibold">Hi, I'm <span className="text-blue-500 font-bold">Md Abu Bakar Siddique</span></h1>
    <p className="mt-4 text-lg lg:text-2xl">A passionate web developer primarily use MERN stack technology for building websites.</p>
    <a href="#">
        {/* https://drive.google.com/uc?export=download&id=1XKv-1WI9IB1vXo45RIj_GCZfdYkfY6AG */}
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