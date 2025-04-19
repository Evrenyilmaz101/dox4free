import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-6xl font-bold text-primary mb-6">404</div>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-400 max-w-md mb-8">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
        >
          Go to Homepage
        </Link>
        <Link
          to="/unit-converters"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition duration-300"
        >
          Explore Tools
        </Link>
      </div>
      
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">Popular Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/unit-converters/length" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">
            Length Converter
          </Link>
          <Link to="/document-conversion/pdf-to-word" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">
            PDF to Word
          </Link>
          <Link to="/calculators/bmi" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">
            BMI Calculator
          </Link>
          <Link to="/engineering-specs/materials" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">
            Material Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 