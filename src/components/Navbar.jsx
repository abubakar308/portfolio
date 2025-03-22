import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-4 fixed w-full text-white ${
                isScrolled ? "bg-blue-900 shadow-lg" : "bg-transparent"
            } backdrop-blur-lg top-0 left-0 z-10 transition-all duration-300`}
        >
            <div className="px-4 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">Md Abu Bakar Siddique</div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-6">
                    {["home", "about", "skills", "projects", "contact"].map((item) => (
                        <motion.li 
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <HashLink to={`#${item}`} className="relative hover:text-blue-500">
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                <motion.span 
                                    className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-500"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                            </HashLink>
                        </motion.li>
                    ))}

                    {/* ✅ View Resume Button */}
                    <motion.li
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a 
                            href="https://drive.google.com/file/d/10G4G9L7bnbsUlwVRU6EECTW7MALf_fV-/view" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            View Resume
                        </a>
                    </motion.li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <motion.button 
                        whileTap={{ scale: 0.8, rotate: 90 }}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <IoMenu size={32} />
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-screen w-[80%] bg-gray-900 bg-opacity-95 backdrop-blur-md flex flex-col items-center text-center space-y-6 pt-10 text-xl font-semibold z-50 shadow-lg"
                    >
                        {/* Close Icon */}
                        <div className="absolute top-5 right-5">
                            <motion.button 
                                whileTap={{ scale: 0.8, rotate: 90 }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <RxCross1 size={32} className="text-white" />
                            </motion.button>
                        </div>

                        {/* Mobile Menu Links */}
                        {["home", "about", "skills", "projects", "contact"].map((item) => (
                            <motion.div 
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <HashLink 
                                    to={`#${item}`} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-blue-500"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </HashLink>
                            </motion.div>
                        ))}

                        {/* ✅ View Resume Button (Mobile) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <a 
                                href="https://drive.google.com/file/d/10G4G9L7bnbsUlwVRU6EECTW7MALf_fV-/view" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                View Resume
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
