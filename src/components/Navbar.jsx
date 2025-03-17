import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { IoMenu } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

//     const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

// useEffect(() => {
//   if (theme === 'dark') {
//     document.body.classList.add('dark-mode');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.body.classList.remove('dark-mode');
//     localStorage.setItem('theme', 'light');
//   }
// }, [theme]);

// const toggleTheme = () => {
//   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// };

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    return (
        <nav className="p-4 fixed w-full text-white bg-blue-950 backdrop-blur-lg top-0 left-0 z-10  shadow-lg">
      <div className="px-4 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Md Abu Bakar Siddique</div>
{/* 
        <button onClick={toggleTheme}>
  {theme === <BsMoon /> ? 'Dark' : <BsSun />}
</button> */}

        {/* Hamburger Menu (Only on Mobile) */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} >
            {isMenuOpen ? (
            ""
            ) : (
              <IoMenu size={32} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          <li><HashLink to="#home" className="hover:text-blue-500">Home</HashLink></li>
          <li><HashLink to="#about" className="hover:text-blue-500">About</HashLink></li>
          <li><HashLink to="#skills" className="hover:text-blue-500">Skills</HashLink></li>
          <li><HashLink to="#projects" className="hover:text-blue-500">Projects</HashLink></li>
          <li><HashLink to="#contact" className="hover:text-blue-500">Contact</HashLink></li>
        </ul>
      </div>

      {/* Mobile Navigation (Full-Screen Overlay) */}
      {isMenuOpen && (
        <div className="fixed bg-gray-800 top-[20px] left-0 right-0 bg-opacity-60 backdrop-blur-md flex flex-col justify-center items-center text-center space-y-5 pb-4 text-xl font-semibold transition-all duration-300">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-6 right-6">
             <RxCross1 size={32} />
          </button>
          <div className="flex flex-col mt-10 space-y-5">  {/* Added a wrapper div for better control */}
    <HashLink to="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Home</HashLink>
    <HashLink to="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">About</HashLink>
    <HashLink to="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Skills</HashLink>
    <HashLink to="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Projects</HashLink>
    <HashLink to="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Contact</HashLink>
  </div>
        </div>
      )}
    </nav>
    );
};

export default Navbar;