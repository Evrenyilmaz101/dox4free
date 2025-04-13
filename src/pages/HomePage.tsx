import React from 'react';

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