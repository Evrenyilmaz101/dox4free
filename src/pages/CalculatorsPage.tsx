import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Calculator Components
import BmiCalculator from '../components/calculators/BmiCalculator';

// Placeholder components for now
const CalorieCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Calorie Calculator Coming Soon</div>;
const LoanCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Loan Calculator Coming Soon</div>;
const PercentageCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Percentage Calculator Coming Soon</div>;
const ScientificCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Scientific Calculator Coming Soon</div>;
const GeometryCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Geometry Calculator Coming Soon</div>;

const CalculatorsPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/calculators';

  // Health Calculators
  const healthCalculators = [
    {
      name: 'BMI Calculator',
      path: '/calculators/bmi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: 'Calculate your Body Mass Index to assess if you are at a healthy weight for your height.'
    },
    {
      name: 'Calorie Calculator',
      path: '/calculators/calorie',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Determine your daily caloric needs based on your age, weight, height, and activity level.'
    },
    {
      name: 'Macro Calculator',
      path: '/calculators/macro',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: 'Calculate the ideal ratio of proteins, carbohydrates, and fats based on your fitness goals.'
    }
  ];

  // Finance Calculators
  const financeCalculators = [
    {
      name: 'Loan Calculator',
      path: '/calculators/loan',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Calculate monthly payments, total interest, and total cost for various types of loans.'
    },
    {
      name: 'Compound Interest',
      path: '/calculators/compound-interest',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: 'Calculate how your investments will grow over time with compound interest and different contribution scenarios.'
    },
    {
      name: 'Currency Converter',
      path: '/calculators/currency',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      description: 'Convert between different currencies with up-to-date exchange rates from around the world.'
    }
  ];

  // Math Calculators
  const mathCalculators = [
    {
      name: 'Percentage Calculator',
      path: '/calculators/percentage',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
      description: 'Easily calculate percentages, percent changes, and percent differences for any values.'
    },
    {
      name: 'Scientific Calculator',
      path: '/calculators/scientific',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Perform advanced mathematical calculations with this comprehensive scientific calculator including trigonometric functions.'
    },
    {
      name: 'Geometry Calculator',
      path: '/calculators/geometry',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      description: 'Calculate area, perimeter, volume and more for various geometric shapes like circles, triangles, and rectangles.'
    }
  ];

  // Unit Converters
  const unitConverters = [
    {
      name: 'Length Converter',
      path: '/unit-converters/length',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      description: 'Convert between different units of length like meters, feet, inches, and miles.'
    },
    {
      name: 'Mass Converter',
      path: '/unit-converters/mass',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: 'Convert between different units of mass like kilograms, pounds, and ounces.'
    },
    {
      name: 'Temperature Converter',
      path: '/unit-converters/temperature',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Convert between different temperature scales like Celsius, Fahrenheit, and Kelvin.'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(#999999 1px, transparent 1px), linear-gradient(90deg, #999999 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.15
        }} 
      />
      
      {/* Glow Overlay */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none z-0 opacity-30" 
        style={{ 
          background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.3), rgba(0, 0, 0, 0) 70%)'
        }} 
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {isRootPath ? (
          <>
            <div className="text-center mb-12 pt-12">
              <h1 className="text-5xl font-bold mb-8 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
                Calculators
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Make complex calculations simple with our powerful online calculators.
                From health metrics to financial planning, we have the tools you need.
              </p>
            </div>
            
            {/* Health Calculators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Health Calculators
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Tools to monitor and improve your health and fitness</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {healthCalculators.map((calculator, index) => (
                  <Link
                    key={index}
                    to={calculator.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{calculator.name}</h2>
                      <p className="text-gray-300 text-sm">{calculator.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Finance Calculators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Finance Calculators
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Plan your finances and make informed money decisions</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {financeCalculators.map((calculator, index) => (
                  <Link
                    key={index}
                    to={calculator.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{calculator.name}</h2>
                      <p className="text-gray-300 text-sm">{calculator.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Math Calculators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Math Calculators
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Advanced tools for solving mathematical problems</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mathCalculators.map((calculator, index) => (
                  <Link
                    key={index}
                    to={calculator.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{calculator.name}</h2>
                      <p className="text-gray-300 text-sm">{calculator.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Unit Converters */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Unit Converters
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Precise tools for converting between different units of measurement</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {unitConverters.map((converter, index) => (
                  <Link
                    key={index}
                    to={converter.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{converter.name}</h2>
                      <p className="text-gray-300 text-sm">{converter.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/bmi" element={<BmiCalculator />} />
            <Route path="/calorie" element={<CalorieCalculator />} />
            <Route path="/macro" element={<div className="p-6 bg-gray-800 rounded-lg">Macro Calculator Coming Soon</div>} />
            <Route path="/loan" element={<LoanCalculator />} />
            <Route path="/compound-interest" element={<div className="p-6 bg-gray-800 rounded-lg">Compound Interest Calculator Coming Soon</div>} />
            <Route path="/currency" element={<div className="p-6 bg-gray-800 rounded-lg">Currency Converter Coming Soon</div>} />
            <Route path="/percentage" element={<PercentageCalculator />} />
            <Route path="/scientific" element={<ScientificCalculator />} />
            <Route path="/geometry" element={<GeometryCalculator />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default CalculatorsPage; 