import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">My Portfolio</div>
  
          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
  
          {/* Navigation Links */}
          <ul className={`flex space-x-6 lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <li>
              <HashLink to="#home" className="hover:text-blue-500">Home</HashLink>
            </li>
            <li>
              <HashLink to="#about" className="hover:text-blue-500">About</HashLink>
            </li>
            <li>
              <HashLink to="#skills" className="hover:text-blue-500">Skills</HashLink>
            </li>
            <li>
              <HashLink to="#projects" className="hover:text-blue-500">Projects</HashLink>
            </li>
            <li>
              <HashLink to="#contact" className="hover:text-blue-500">Contact</HashLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;