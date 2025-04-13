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
    </div>
  );
};

export default HomePage; 