import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Sun-like Radiating Effect */}
      <div 
        className="relative text-center py-24 overflow-hidden hero-container h-screen flex items-center justify-center"
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Sun-like radiating background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary sun-like radial gradient */}
          <div 
            className="absolute inset-0 sun-pulse-1"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(200, 60, 255, 0.9) 0%, rgba(120, 0, 200, 0.6) 25%, rgba(40, 0, 80, 0.3) 45%, rgba(0, 0, 0, 0) 70%)',
            }}
          ></div>
          
          {/* Secondary blue-toned radial gradient */}
          <div 
            className="absolute inset-0 sun-pulse-2"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(100, 120, 255, 0.7) 0%, rgba(50, 70, 220, 0.4) 25%, rgba(0, 0, 0, 0) 60%)',
            }}
          ></div>
          
          {/* Magenta highlight gradient */}
          <div 
            className="absolute inset-0 sun-pulse-3"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(255, 40, 150, 0.7) 0%, rgba(220, 0, 120, 0.3) 20%, rgba(0, 0, 0, 0) 50%)',
            }}
          ></div>
        </div>
        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-['Montserrat',_sans-serif]">
            Convert, Calculate, Refer
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-purple-300 font-['Poppins',_sans-serif]">
            100% Free
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Poppins',_sans-serif]">
            Your one-stop solution for all document conversions, 
            calculations, and industrial references. No hidden fees, no
            registration required.
          </p>
        </div>
      </div>

      {/* Powerful Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white font-['Montserrat',_sans-serif]">
          Powerful Tools at Your Fingertips
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 font-['Poppins',_sans-serif]">
          Everything you need to handle your documents and calculations efficiently
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-900 bg-opacity-95 rounded-lg p-6 border border-gray-800" style={{ background: '#111827' }}>
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white font-['Poppins',_sans-serif]">Lightning Fast</h3>
            <p className="text-gray-300 font-['Poppins',_sans-serif]">Convert files in seconds with our optimized processing</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-900 bg-opacity-95 rounded-lg p-6 border border-gray-800" style={{ background: '#111827' }}>
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white font-['Poppins',_sans-serif]">Secure & Private</h3>
            <p className="text-gray-300 font-['Poppins',_sans-serif]">Your files are processed locally and never stored</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-900 bg-opacity-95 rounded-lg p-6 border border-gray-800" style={{ background: '#111827' }}>
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white font-['Poppins',_sans-serif]">24/7 Available</h3>
            <p className="text-gray-300 font-['Poppins',_sans-serif]">Access our tools anytime, anywhere</p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-gray-900 bg-opacity-95 rounded-lg p-6 border border-gray-800" style={{ background: '#111827' }}>
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white font-['Poppins',_sans-serif]">Community Driven</h3>
            <p className="text-gray-300 font-['Poppins',_sans-serif]">Built for everyone, by everyone</p>
          </div>
        </div>
      </div>
      
      {/* Main Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Document Conversion Tools */}
        <div className="bg-purple-900 bg-opacity-90 rounded-lg p-6 border border-purple-800">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-['Poppins',_sans-serif]">Document Conversion Tools</h3>
          <p className="text-purple-200 mb-4 font-['Poppins',_sans-serif]">
            Convert your documents between various formats with our easy-to-use tools. Perfect for students, professionals, and anyone who works with documents.
          </p>
          <Link to="/document-conversion" className="text-white font-medium hover:text-purple-200">
            Explore tools
          </Link>
        </div>
        
        {/* Calculators */}
        <div className="bg-indigo-900 bg-opacity-90 rounded-lg p-6 border border-indigo-800">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-['Poppins',_sans-serif]">Calculators</h3>
          <p className="text-indigo-200 mb-4 font-['Poppins',_sans-serif]">
            Access a wide range of calculators for various purposes. From simple arithmetic to complex engineering calculations, we've got you covered.
          </p>
          <Link to="/calculators" className="text-white font-medium hover:text-indigo-200">
            Explore tools
          </Link>
        </div>
        
        {/* Industrial Reference Tools */}
        <div className="bg-blue-900 bg-opacity-90 rounded-lg p-6 border border-blue-800">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-['Poppins',_sans-serif]">Industrial Reference Tools</h3>
          <p className="text-blue-200 mb-4 font-['Poppins',_sans-serif]">
            Access comprehensive reference data and calculators for various industries and applications. Quick access to essential specifications and standards.
          </p>
          <Link to="/engineering-specs" className="text-white font-medium hover:text-blue-200">
            Explore tools
          </Link>
        </div>
      </div>

      {/* Why Choose Dox4Free Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-gray-900 bg-opacity-80 rounded-xl p-8 border border-gray-800 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white font-['Montserrat',_sans-serif]">
            Why Choose Dox4Free
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-purple-800 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-['Poppins',_sans-serif]">Fast & Efficient</h3>
              <p className="text-gray-300 font-['Poppins',_sans-serif]">
                Get results instantly with our optimized tools, designed for speed and efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-purple-800 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-['Poppins',_sans-serif]">100% Free</h3>
              <p className="text-gray-300 font-['Poppins',_sans-serif]">
                All tools are completely free to use with no hidden fees or subscriptions required.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-purple-800 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-['Poppins',_sans-serif]">Privacy First</h3>
              <p className="text-gray-300 font-['Poppins',_sans-serif]">
                Your data stays on your device. We don't store your files or information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 