import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Dox4Free</h3>
            <p className="text-gray-300 text-sm">
              A 100% free online platform for unit conversions, document conversions, and calculators.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/unit-converters" className="text-gray-300 hover:text-white">Unit Converters</Link></li>
              <li><Link to="/document-conversion" className="text-gray-300 hover:text-white">Document Tools</Link></li>
              <li><Link to="/calculators" className="text-gray-300 hover:text-white">Calculators</Link></li>
              <li><Link to="/engineering-specs" className="text-gray-300 hover:text-white">Engineering Specs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/unit-converters/length" className="text-gray-300 hover:text-white">Length Converter</Link></li>
              <li><Link to="/document-conversion/pdf-to-word" className="text-gray-300 hover:text-white">PDF to Word</Link></li>
              <li><Link to="/calculators/bmi" className="text-gray-300 hover:text-white">BMI Calculator</Link></li>
              <li><Link to="/engineering-specs/materials" className="text-gray-300 hover:text-white">Material Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dox4Free. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 