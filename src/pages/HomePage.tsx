import React from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/common/AdPlaceholder';

const HomePage: React.FC = () => {
  const featureCategories = [
    {
      title: 'Unit Converters',
      description: 'Convert between different units of measurement, from length and weight to more specialized conversions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      ),
      path: '/unit-converters',
    },
    {
      title: 'Document Tools',
      description: 'Convert, merge, split and manipulate PDFs and images with our powerful document conversion tools.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      path: '/document-conversion',
    },
    {
      title: 'Calculators',
      description: 'Make complex calculations easy with our wide range of calculators for health, finance, science, and more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
        </svg>
      ),
      path: '/calculators',
    },
    {
      title: 'Engineering Specs',
      description: 'Access comprehensive engineering data including material properties and industrial component references.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      path: '/engineering-specs',
    },
  ];

  const popularTools = [
    { name: 'Length Converter', path: '/unit-converters/length' },
    { name: 'PDF to Word', path: '/document-conversion/pdf-to-word' },
    { name: 'BMI Calculator', path: '/calculators/bmi' },
    { name: 'Loan Calculator', path: '/calculators/loan' },
    { name: 'Image Resizer', path: '/document-conversion/image-resizer' },
    { name: 'Temperature Converter', path: '/unit-converters/temperature' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section with Radiating Effect - Full width, no border */}
      <div 
        className="relative text-center mb-20 pt-28 pb-28 -mx-4 sm:-mx-6 lg:-mx-8 overflow-visible hero-container"
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          width: '100vw',
          position: 'relative',
        }}
      >
        {/* Extended gradient background with fade-out effect */}
        <div className="absolute inset-0 overflow-visible" style={{ height: '130%' }}>
          {/* Purple gradient - extending downward */}
          <div 
            className="absolute inset-0 opacity-90 hero-gradient-1"
            style={{ 
              background: 'radial-gradient(circle at top center, rgba(170, 0, 255, 0.7) 0%, rgba(120, 0, 255, 0.35) 45%, rgba(0, 0, 0, 0) 100%)',
              transform: 'scale(1.5)',
              transformOrigin: 'top center',
              height: '150%',
            }}
          ></div>
          
          {/* Blue gradient - extending downward */}
          <div 
            className="absolute inset-0 opacity-80 hero-gradient-2"
            style={{ 
              background: 'radial-gradient(circle at top right, rgba(0, 80, 255, 0.7) 0%, rgba(0, 30, 200, 0.35) 45%, rgba(0, 0, 0, 0) 100%)',
              transform: 'scale(1.8)',
              transformOrigin: 'top right',
              height: '150%',
            }}
          ></div>
          
          {/* Additional purple gradient - extending downward */}
          <div 
            className="absolute inset-0 opacity-80 hero-gradient-3"
            style={{ 
              background: 'radial-gradient(circle at top left, rgba(200, 70, 255, 0.7) 0%, rgba(160, 0, 240, 0.35) 40%, rgba(0, 0, 0, 0) 100%)',
              transform: 'scale(1.8)',
              transformOrigin: 'top left',
              height: '150%',
            }}
          ></div>
          
          {/* Gradual fade to black */}
          <div 
            className="absolute inset-x-0 bottom-0 opacity-90"
            style={{ 
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
              height: '60%',
              top: '65%',
            }}
          ></div>
          
          {/* Black overlay for text readability with reduced opacity at bottom */}
          <div className="absolute inset-0 bg-black opacity-20" style={{ height: '120%' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-glow">
            Free Online Conversion Tools & Calculators
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your one-stop platform for unit conversions, document transformations, and specialized calculators. Always free, no signup required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/unit-converters" 
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
            >
              Unit Converters
            </Link>
            <Link 
              to="/document-conversion" 
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition duration-300"
            >
              Document Tools
            </Link>
          </div>
        </div>
      </div>

      {/* Ad banner */}
      <div className="flex justify-center mb-16">
        <AdPlaceholder format="leaderboard" />
      </div>

      {/* Feature Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {featureCategories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="bg-gray-900 hover:bg-gray-800 rounded-lg p-6 transition duration-300 flex flex-col h-full border border-gray-800"
          >
            <div className="text-primary mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{category.description}</p>
            <div className="text-primary hover:text-white flex items-center mt-auto">
              <span>Explore tools</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Ad banner */}
      <div className="flex justify-center mb-16">
        <AdPlaceholder format="medium-rectangle" className="mx-auto" />
      </div>

      {/* Popular Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="bg-gray-900 hover:bg-gray-800 rounded-lg p-4 text-center transition duration-300 border border-gray-800"
            >
              <span className="block text-lg">{tool.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900 rounded-lg p-8 mb-16 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Dox4Free</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
            <p className="text-gray-400">Get results instantly with our optimized tools, designed for speed and efficiency.</p>
          </div>
          <div className="text-center p-4">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p className="text-gray-400">All tools are completely free to use with no hidden fees or subscriptions required.</p>
          </div>
          <div className="text-center p-4">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-400">Your data stays on your device. We don't store your files or information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 