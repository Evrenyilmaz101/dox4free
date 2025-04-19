import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Engineering Specs Components (placeholders for now)
const MaterialProperties = () => <div className="p-6 bg-gray-800 rounded-lg">Material Properties Database Coming Soon</div>;
const PressureTemperature = () => <div className="p-6 bg-gray-800 rounded-lg">Pressure-Temperature Ratings Coming Soon</div>;
const IndustrialComponents = () => <div className="p-6 bg-gray-800 rounded-lg">Industrial Components Reference Coming Soon</div>;

const EngineeringSpecsPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/engineering-specs';

  // Materials & Properties
  const materialSpecs = [
    {
      name: 'Material Properties',
      path: '/engineering-specs/materials',
      description: 'Comprehensive database of material properties for metals, plastics, composites, and more with interactive comparison tools.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      )
    },
    {
      name: 'Pressure-Temperature Ratings',
      path: '/engineering-specs/pressure-temperature',
      description: 'Reference charts and calculators for pressure-temperature ratings of various materials and components with safety factors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Industrial Components',
      path: '/engineering-specs/components',
      description: 'Detailed specifications and 3D models for valves, flanges, fittings, and other industrial components with selection guides.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  // Electrical & Standards
  const electricalSpecs = [
    {
      name: 'Electrical Standards',
      path: '/engineering-specs/electrical',
      description: 'Comprehensive reference data for electrical standards, wire gauges, component ratings, and international compliance requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Mechanical Data',
      path: '/engineering-specs/mechanical',
      description: 'Detailed mechanical engineering data including fasteners, bearings, gears, and structural components with selection tools.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Engineering Standards',
      path: '/engineering-specs/standards',
      description: 'Searchable database of industry standards like ASME, ASTM, ISO, and more with summary information and compliance guidelines.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      )
    }
  ];
  
  // Design & Analysis
  const designSpecs = [
    {
      name: 'Structural Analysis',
      path: '/engineering-specs/structural',
      description: 'Reference data and calculators for structural analysis including beam calculations, stress analysis, and load ratings.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Fluid Dynamics',
      path: '/engineering-specs/fluid',
      description: 'Data and calculators for fluid flow, pressure drop, and heat transfer calculations with pipe sizing guides.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Tolerancing Guide',
      path: '/engineering-specs/tolerancing',
      description: 'Interactive guide to GD&T and dimensional tolerancing with calculators for fits and stackup analysis.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
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
                Engineering Specifications
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Access comprehensive engineering data, material properties, and 
                component specifications for all your technical and design needs. Our database is 
                constantly updated with the latest industry standards.
              </p>
            </div>
            
            {/* Materials & Properties */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Materials & Properties
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Detailed reference data for material selection and component design</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {materialSpecs.map((spec, index) => (
                  <Link
                    key={index}
                    to={spec.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{spec.name}</h2>
                      <p className="text-gray-300 text-sm">{spec.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Electrical & Standards */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Electrical & Standards
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Comprehensive standards and reference data for electrical and mechanical engineering</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {electricalSpecs.map((spec, index) => (
                  <Link
                    key={index}
                    to={spec.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{spec.name}</h2>
                      <p className="text-gray-300 text-sm">{spec.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Design & Analysis */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Design & Analysis
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Tools and references for engineering analysis and design optimization</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {designSpecs.map((spec, index) => (
                  <Link
                    key={index}
                    to={spec.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{spec.name}</h2>
                      <p className="text-gray-300 text-sm">{spec.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 pb-2 relative inline-block">
                    Engineering Resources
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Our engineering specifications and data are provided for reference purposes. 
                    Always consult official manufacturer specifications or engineering standards for critical applications.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-sm text-gray-300">
                      <strong>Disclaimer:</strong> The information provided in these engineering resources is for general informational purposes only. 
                      While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, 
                      express or implied, about the completeness, accuracy, reliability, suitability or availability of the information contained herein.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/materials" element={<MaterialProperties />} />
            <Route path="/pressure-temperature" element={<PressureTemperature />} />
            <Route path="/components" element={<IndustrialComponents />} />
            <Route path="/electrical" element={<div className="p-6 bg-gray-800 rounded-lg">Electrical Standards Coming Soon</div>} />
            <Route path="/mechanical" element={<div className="p-6 bg-gray-800 rounded-lg">Mechanical Data Coming Soon</div>} />
            <Route path="/standards" element={<div className="p-6 bg-gray-800 rounded-lg">Engineering Standards Coming Soon</div>} />
            <Route path="/structural" element={<div className="p-6 bg-gray-800 rounded-lg">Structural Analysis Coming Soon</div>} />
            <Route path="/fluid" element={<div className="p-6 bg-gray-800 rounded-lg">Fluid Dynamics Coming Soon</div>} />
            <Route path="/tolerancing" element={<div className="p-6 bg-gray-800 rounded-lg">Tolerancing Guide Coming Soon</div>} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default EngineeringSpecsPage; 