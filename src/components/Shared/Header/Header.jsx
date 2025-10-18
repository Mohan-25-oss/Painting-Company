import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white shadow-xl fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-95">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <span className="text-blue-900 font-bold text-xl">P</span>
                    </div>
                    <span className="text-2xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
                        ProPainters
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Hero', 'Services', 'Portfolio', 'Reviews', 'Contact'].map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.toLowerCase()}`}
                            className="relative font-semibold text-gray-200 hover:text-yellow-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-yellow-400 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 px-6 pb-6 animate-fadeInDown">
                    <div className="flex flex-col space-y-4 mt-4">
                        {['Home', 'About', 'Hero', 'Services', 'Portfolio', 'Reviews', 'Contact'].map((item, index) => (
                            <Link
                                key={index}
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-200 hover:text-yellow-400 font-medium transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
