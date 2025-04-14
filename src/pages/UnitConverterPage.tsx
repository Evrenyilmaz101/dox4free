import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Unit Converter Components
import LengthConverter from '../components/unit-converters/LengthConverter';

// Placeholder components for now
const WeightConverter = () => <div className="p-6 bg-gray-800 rounded-lg">Weight Converter Coming Soon</div>;
const TemperatureConverter = () => <div className="p-6 bg-gray-800 rounded-lg">Temperature Converter Coming Soon</div>;
const TimeConverter = () => <div className="p-6 bg-gray-800 rounded-lg">Time Converter Coming Soon</div>;
const AreaConverter = () => <div className="p-6 bg-gray-800 rounded-lg">Area Converter Coming Soon</div>;
const VolumeConverter = () => <div className="p-6 bg-gray-800 rounded-lg">Volume Converter Coming Soon</div>;

const UnitConverterPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/unit-converters';

  // Common Measurements
  const commonConverters = [
    { 
      name: 'Length & Distance', 
      path: '/unit-converters/length',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      description: 'Convert between meters, inches, feet, miles, kilometers and more with precision scaling' 
    },
    { 
      name: 'Weight & Mass', 
      path: '/unit-converters/weight',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: 'Convert between grams, pounds, ounces, kilograms, ounces, and specialty weight measures' 
    },
    { 
      name: 'Temperature', 
      path: '/unit-converters/temperature',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Convert between Celsius, Fahrenheit, Kelvin, and Rankine' 
    },
    { 
      name: 'Time', 
      path: '/unit-converters/time',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Convert between seconds, minutes, hours, days, years, and astronomical time units' 
    }
  ];

  // Area & Volume
  const spatialConverters = [
    { 
      name: 'Area', 
      path: '/unit-converters/area',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      description: 'Convert between square meters, acres, square feet, hectares and more with interactive visualizations' 
    },
    { 
      name: 'Volume & Capacity', 
      path: '/unit-converters/volume',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: 'Convert between liters, gallons, cubic feet, milliliters with cooking and industrial measures' 
    }
  ];

  // Physics & Engineering
  const physicsConverters = [
    { 
      name: 'Energy & Power', 
      path: '/unit-converters/energy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Convert between joules, calories, BTU, kilowatt-hours with energy cost calculations' 
    },
    { 
      name: 'Speed & Velocity', 
      path: '/unit-converters/speed',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      ),
      description: 'Convert between mph, km/h, knots, and scientific velocity units with vehicle comparisons' 
    },
    { 
      name: 'Pressure', 
      path: '/unit-converters/pressure',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: 'Convert between pascal, bar, PSI, atmospheres with altitude and depth pressure variations' 
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
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {isRootPath ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Unit Converters</h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Precise unit conversions for engineering, science, and everyday calculations.
                Our comprehensive suite of converters helps you transform units with
                accuracy and ease.
              </p>
            </div>

            {/* Common Measurements Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Common Measurements
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-600"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Everyday units for basic measurements</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commonConverters.map((converter, index) => (
                  <Link
                    key={index}
                    to={converter.path}
                    className="flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-700 transition duration-300"
                  >
                    <div className="p-6">
                      <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mb-4">
                        {converter.icon}
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-white">{converter.name}</h2>
                      <p className="text-gray-300 text-sm">{converter.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Area & Volume Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Area & Volume
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-600"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Spatial and capacity measurements</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {spatialConverters.map((converter, index) => (
                  <Link
                    key={index}
                    to={converter.path}
                    className="flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-700 transition duration-300"
                  >
                    <div className="p-6">
                      <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mb-4">
                        {converter.icon}
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-white">{converter.name}</h2>
                      <p className="text-gray-300 text-sm">{converter.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Physics & Engineering Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Physics & Engineering
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-600"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Technical and scientific measurements</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {physicsConverters.map((converter, index) => (
                  <Link
                    key={index}
                    to={converter.path}
                    className="flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-700 transition duration-300"
                  >
                    <div className="p-6">
                      <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mb-4">
                        {converter.icon}
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-white">{converter.name}</h2>
                      <p className="text-gray-300 text-sm">{converter.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/length" element={<LengthConverter />} />
            <Route path="/weight" element={<WeightConverter />} />
            <Route path="/temperature" element={<TemperatureConverter />} />
            <Route path="/time" element={<TimeConverter />} />
            <Route path="/area" element={<AreaConverter />} />
            <Route path="/volume" element={<VolumeConverter />} />
            <Route path="/energy" element={<div className="p-6 bg-gray-800 rounded-lg">Energy Converter Coming Soon</div>} />
            <Route path="/speed" element={<div className="p-6 bg-gray-800 rounded-lg">Speed Converter Coming Soon</div>} />
            <Route path="/pressure" element={<div className="p-6 bg-gray-800 rounded-lg">Pressure Converter Coming Soon</div>} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default UnitConverterPage; 