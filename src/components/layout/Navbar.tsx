import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Kavinmathi
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary/80 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/achievements">Achievements</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink to="/experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink to="/achievements" onClick={toggleMenu}>Achievements</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
  >
    {children}
  </Link>
);

export default Navbar; 