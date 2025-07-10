import React, { useState } from 'react';

const NavBar2 = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility

    return (
        <>
            <nav className="bg-gray-800 p-4 transition-all duration-300">
                <div className="mx-auto flex justify-between items-center transition-all duration-300">
                    {/* Logo/Brand Name */}
                    <div className="text-white text-xl font-bold">
                        MyLogo
                    </div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white">About</a>
                        <a href="#" className="text-gray-300 hover:text-white">Services</a>
                        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    </div>

                    {/* Hamburger Icon - Visible on mobile, hidden on desktop */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none focus:text-white">
                            {/* Hamburger lines or an icon */}
                            {isOpen ? (
                                // X icon when menu is open
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                // Hamburger icon when menu is closed
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Toggles visibility based on 'isOpen' state */}

                <div className={`fixed top-15 h-full right-0 bg-gray-700 w-3/4 z-2
        transform transition-all duration-300 ease-in-out md:hidden ${isOpen ?
                        "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}>
                    <a href="#" className="block text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="block text-gray-300 hover:text-white">About</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
                </div>

            </nav>
            <main>
                <h1>Hii This is me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates libero illum sit ea voluptas autem doloremque quidem atque esse?</p>
            </main>
        </>
    );
};

export default NavBar2;