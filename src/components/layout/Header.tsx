import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Dox4Free</span>
              <span className="ml-2 text-sm bg-secondary px-2 py-1 rounded-md">Beta</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/unit-converters" className="text-white hover:text-gray-200">Unit Converters</Link>
            <Link to="/document-conversion" className="text-white hover:text-gray-200">Document Tools</Link>
            <Link to="/calculators" className="text-white hover:text-gray-200">Calculators</Link>
            <Link to="/engineering-specs" className="text-white hover:text-gray-200">Engineering</Link>
          </nav>
          <div className="flex items-center">
            <button 
              className="bg-secondary p-2 rounded-full text-white hover:bg-secondary-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 