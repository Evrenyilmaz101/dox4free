import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 shadow-lg z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 font-['Montserrat',_sans-serif]">Dox4Free</span>
              <span className="ml-2 text-xs font-bold bg-purple-500 px-2 py-0.5 rounded-md text-white">Beta</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link 
              to="/unit-converters" 
              className="text-purple-100 hover:text-white transition duration-200 text-lg font-['Poppins',_sans-serif] tracking-wide hover:underline decoration-2 underline-offset-8 decoration-purple-400"
            >
              Unit Converters
            </Link>
            <Link 
              to="/document-conversion" 
              className="text-purple-100 hover:text-white transition duration-200 text-lg font-['Poppins',_sans-serif] tracking-wide hover:underline decoration-2 underline-offset-8 decoration-purple-400"
            >
              Document Tools
            </Link>
            <Link 
              to="/calculators" 
              className="text-purple-100 hover:text-white transition duration-200 text-lg font-['Poppins',_sans-serif] tracking-wide hover:underline decoration-2 underline-offset-8 decoration-purple-400"
            >
              Calculators
            </Link>
            <Link 
              to="/engineering-specs" 
              className="text-purple-100 hover:text-white transition duration-200 text-lg font-['Poppins',_sans-serif] tracking-wide hover:underline decoration-2 underline-offset-8 decoration-purple-400"
            >
              Engineering
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              className="bg-purple-700 p-2 rounded-md text-white hover:bg-purple-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 rounded-lg bg-purple-900 bg-opacity-95">
              <Link 
                to="/unit-converters" 
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Unit Converters
              </Link>
              <Link 
                to="/document-conversion" 
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Document Tools
              </Link>
              <Link 
                to="/calculators" 
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculators
              </Link>
              <Link 
                to="/engineering-specs" 
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Engineering
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 