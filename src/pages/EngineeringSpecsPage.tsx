import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Engineering Specs Components (placeholders for now)
const MaterialProperties = () => <div className="p-6 bg-gray-800 rounded-lg">Material Properties Database Coming Soon</div>;
const PressureTemperature = () => <div className="p-6 bg-gray-800 rounded-lg">Pressure-Temperature Ratings Coming Soon</div>;
const IndustrialComponents = () => <div className="p-6 bg-gray-800 rounded-lg">Industrial Components Reference Coming Soon</div>;

const EngineeringSpecsPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/engineering-specs';

  const specs = [
    {
      name: 'Material Properties',
      path: '/engineering-specs/materials',
      description: 'Comprehensive database of material properties for metals, plastics, composites, and more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      )
    },
    {
      name: 'Pressure-Temperature Ratings',
      path: '/engineering-specs/pressure-temperature',
      description: 'Reference charts for pressure-temperature ratings of various materials and components.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Industrial Components',
      path: '/engineering-specs/components',
      description: 'Specifications for valves, flanges, fittings, and other industrial components.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Engineering Specifications</h1>
      <p className="text-gray-300 mb-8">
        Access comprehensive engineering data, material properties, and component specifications for your technical needs.
      </p>

      {isRootPath ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <Link
              key={index}
              to={spec.path}
              className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {spec.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{spec.name}</h2>
              <p className="text-gray-400 text-center">{spec.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Routes>
          <Route path="/materials" element={<MaterialProperties />} />
          <Route path="/pressure-temperature" element={<PressureTemperature />} />
          <Route path="/components" element={<IndustrialComponents />} />
        </Routes>
      )}

      <div className="mt-12 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Engineering Resources</h2>
        <p className="text-gray-300 mb-4">
          Our engineering specifications and data are provided for reference purposes. 
          Always consult official manufacturer specifications or engineering standards for critical applications.
        </p>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong>Disclaimer:</strong> The information provided in these engineering resources is for general informational purposes only. 
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, 
            express or implied, about the completeness, accuracy, reliability, suitability or availability of the information contained herein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngineeringSpecsPage; 