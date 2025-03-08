import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-primary text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">HandsOn</div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="hover:text-gray-400">
                        Home
                    </a>
                    <a href="#about" className="hover:text-gray-400">
                        About
                    </a>
                    <a href="#services" className="hover:text-gray-400">
                        Services
                    </a>
                    <a href="#contact" className="hover:text-gray-400">
                        Contact
                    </a>
                </nav>

                {/* Button */}
                <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Get Started
                </button>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
                    <a href="#home" className="block hover:text-gray-400">
                        Home
                    </a>
                    <a href="#about" className="block hover:text-gray-400">
                        About
                    </a>
                    <a href="#services" className="block hover:text-gray-400">
                        Services
                    </a>
                    <a href="#contact" className="block hover:text-gray-400">
                        Contact
                    </a>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Get Started
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
