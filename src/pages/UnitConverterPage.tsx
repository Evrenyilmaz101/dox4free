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

  const converters = [
    { name: 'Length', path: '/unit-converters/length', description: 'Convert between different units of length (meters, feet, inches, etc.)' },
    { name: 'Weight', path: '/unit-converters/weight', description: 'Convert between different units of weight and mass (kg, pounds, etc.)' },
    { name: 'Temperature', path: '/unit-converters/temperature', description: 'Convert between temperature scales (Celsius, Fahrenheit, Kelvin)' },
    { name: 'Time', path: '/unit-converters/time', description: 'Convert between different time units (seconds, minutes, hours, days)' },
    { name: 'Area', path: '/unit-converters/area', description: 'Convert between different units of area (square meters, acres, etc.)' },
    { name: 'Volume', path: '/unit-converters/volume', description: 'Convert between different volume measurements (liters, gallons, etc.)' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Unit Converters</h1>
      <p className="text-gray-300 mb-8">
        Convert between different units of measurement with our free and easy-to-use unit converters.
      </p>

      {isRootPath ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {converters.map((converter, index) => (
            <Link
              key={index}
              to={converter.path}
              className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{converter.name} Converter</h2>
              <p className="text-gray-400">{converter.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Routes>
          <Route path="/length" element={<LengthConverter />} />
          <Route path="/weight" element={<WeightConverter />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
          <Route path="/time" element={<TimeConverter />} />
          <Route path="/area" element={<AreaConverter />} />
          <Route path="/volume" element={<VolumeConverter />} />
        </Routes>
      )}
    </div>
  );
};

export default UnitConverterPage; 