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
              <div className="relative flex items-center">
                {/* Document icon positioned behind the text */}
                <div className="absolute left-0 z-0 bg-indigo-600 rounded-lg p-2 shadow-lg opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                
                {/* Text overlaid on the icon with left padding */}
                <div className="flex flex-col z-10 pl-10">
                  <span className="text-3xl font-extrabold text-white leading-tight tracking-wide" style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.5)' }}>
                    Dox<span className="text-indigo-300">4</span>Free
                  </span>
                  <span className="ml-auto -mt-1 text-xs font-semibold bg-purple-500 px-2 py-0.5 rounded text-white shadow-sm">Beta</span>
                </div>
              </div>
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