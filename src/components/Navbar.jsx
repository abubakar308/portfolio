import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Md Abu Bakar Siddique</div>

        {/* Hamburger Menu (Only on Mobile) */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white">
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
        <div className="fixed inset-0 bg-gray-700 bg-opacity-90 flex flex-col justify-center items-center text-center space-y-5 text-xl font-semibold transition-all duration-300">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-6 right-6 text-white">
             <RxCross1 size={32} />
          </button>
          <HashLink to="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Home</HashLink>
          <HashLink to="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">About</HashLink>
          <HashLink to="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Skills</HashLink>
          <HashLink to="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Projects</HashLink>
          <HashLink to="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">Contact</HashLink>
        </div>
      )}
    </nav>
    );
};

export default Navbar;