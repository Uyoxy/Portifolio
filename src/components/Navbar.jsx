import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-purple-900 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo or brand name */}
        <a href="#home" className="text-xl font-bold">Brand</a>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Navbar links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 absolute lg:static bg-purple-900 w-full lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? 'top-16' : '-top-full'
          }`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-purple-700 cursor-pointer"
                onClick={handleLinkClick} // Close menu on click
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
