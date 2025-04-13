import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent z-50 relative shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Dox4Free</span>
              <span className="ml-2 text-sm bg-primary px-2 py-1 rounded-md">Beta</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/unit-converters" className="text-white hover:text-gray-200">Unit Converters</Link>
            <Link to="/document-conversion" className="text-white hover:text-gray-200">Document Tools</Link>
            <Link to="/calculators" className="text-white hover:text-gray-200">Calculators</Link>
            <Link to="/engineering-specs" className="text-white hover:text-gray-200">Engineering</Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              className="bg-gray-800 p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/unit-converters" 
                className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Unit Converters
              </Link>
              <Link 
                to="/document-conversion" 
                className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Document Tools
              </Link>
              <Link 
                to="/calculators" 
                className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculators
              </Link>
              <Link 
                to="/engineering-specs" 
                className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
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