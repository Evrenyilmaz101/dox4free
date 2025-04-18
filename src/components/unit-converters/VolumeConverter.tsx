import React, { useState, useEffect } from 'react';

type Unit = {
  name: string;
  toCubicMeters: (value: number) => number; // Convert to cubic meters (base unit)
  fromCubicMeters: (value: number) => number; // Convert from cubic meters
  symbol: string;
};

const VolumeConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('cubic_meter');
  const [toUnit, setToUnit] = useState<string>('cubic_foot');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isConverting, setIsConverting] = useState<boolean>(false);

  const units: Unit[] = [
    { 
      name: 'cubic_meter', 
      toCubicMeters: (value) => value,
      fromCubicMeters: (value) => value,
      symbol: 'm³'
    },
    { 
      name: 'cubic_kilometer', 
      toCubicMeters: (value) => value * 1000000000,
      fromCubicMeters: (value) => value / 1000000000,
      symbol: 'km³'
    },
    { 
      name: 'cubic_centimeter', 
      toCubicMeters: (value) => value / 1000000,
      fromCubicMeters: (value) => value * 1000000,
      symbol: 'cm³'
    },
    { 
      name: 'cubic_millimeter', 
      toCubicMeters: (value) => value / 1000000000,
      fromCubicMeters: (value) => value * 1000000000,
      symbol: 'mm³'
    },
    { 
      name: 'cubic_foot', 
      toCubicMeters: (value) => value * 0.028316846592,
      fromCubicMeters: (value) => value / 0.028316846592,
      symbol: 'ft³'
    },
    { 
      name: 'cubic_inch', 
      toCubicMeters: (value) => value * 0.000016387064,
      fromCubicMeters: (value) => value / 0.000016387064,
      symbol: 'in³'
    },
    { 
      name: 'cubic_yard', 
      toCubicMeters: (value) => value * 0.764554857984,
      fromCubicMeters: (value) => value / 0.764554857984,
      symbol: 'yd³'
    },
    { 
      name: 'liter', 
      toCubicMeters: (value) => value / 1000,
      fromCubicMeters: (value) => value * 1000,
      symbol: 'L'
    },
    { 
      name: 'milliliter', 
      toCubicMeters: (value) => value / 1000000,
      fromCubicMeters: (value) => value * 1000000,
      symbol: 'mL'
    },
    { 
      name: 'gallon_us', 
      toCubicMeters: (value) => value * 0.00378541,
      fromCubicMeters: (value) => value / 0.00378541,
      symbol: 'gal (US)'
    },
    { 
      name: 'gallon_uk', 
      toCubicMeters: (value) => value * 0.00454609,
      fromCubicMeters: (value) => value / 0.00454609,
      symbol: 'gal (UK)'
    },
    { 
      name: 'fluid_ounce_us', 
      toCubicMeters: (value) => value * 0.0000295735,
      fromCubicMeters: (value) => value / 0.0000295735,
      symbol: 'fl oz (US)'
    },
    { 
      name: 'fluid_ounce_uk', 
      toCubicMeters: (value) => value * 0.0000284131,
      fromCubicMeters: (value) => value / 0.0000284131,
      symbol: 'fl oz (UK)'
    },
    { 
      name: 'pint_us', 
      toCubicMeters: (value) => value * 0.000473176,
      fromCubicMeters: (value) => value / 0.000473176,
      symbol: 'pt (US)'
    },
    { 
      name: 'pint_uk', 
      toCubicMeters: (value) => value * 0.000568261,
      fromCubicMeters: (value) => value / 0.000568261,
      symbol: 'pt (UK)'
    }
  ];

  const convert = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      setError('Please enter a valid number');
      setResult('');
      return;
    }

    setError('');
    setIsConverting(true);
    
    // Small delay to show animation
    setTimeout(() => {
      const fromUnitData = units.find(u => u.name === fromUnit);
      const toUnitData = units.find(u => u.name === toUnit);
      
      if (!fromUnitData || !toUnitData) {
        setError('Invalid unit selection');
        setIsConverting(false);
        return;
      }
      
      // Convert from input unit to cubic meters, then to output unit
      const cubicMeters = fromUnitData.toCubicMeters(Number(inputValue));
      const convertedValue = toUnitData.fromCubicMeters(cubicMeters);
      
      // Format the result based on size
      let formattedResult: string;
      if (Math.abs(convertedValue) < 0.001 || Math.abs(convertedValue) > 1000000) {
        formattedResult = convertedValue.toExponential(4);
      } else {
        formattedResult = convertedValue.toFixed(6).replace(/\.?0+$/, '');
      }
      
      setResult(formattedResult);
      setIsConverting(false);
    }, 300);
  };
  
  // Convert whenever inputs change
  useEffect(() => {
    convert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, fromUnit, toUnit]);

  // Handle swap button click
  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Format unit name for display
  const formatUnitName = (name: string): string => {
    return name.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="p-8 relative" style={{ backgroundColor: 'black' }}>
      {/* Background accent */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 opacity-20 rounded-full" 
        style={{ 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(80, 40, 120, 0.1) 70%, transparent 100%)',
          filter: 'blur(40px)',
          transform: 'translate(20%, -30%)',
          zIndex: 0
        }}
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 pb-2 relative inline-block">
          Volume Converter
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        {/* Value section */}
        <div className="mb-8">
          <label htmlFor="fromValue" className="block mb-2 text-sm font-medium">Value</label>
          <div className="relative">
            <input
              id="fromValue"
              type="text"
              className="w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm hover:shadow-purple-900/30"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a number"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-indigo-800/10 rounded-md pointer-events-none"></div>
          </div>
        </div>
        
        {/* From/To section with swap button */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <label htmlFor="fromUnit" className="text-sm font-medium text-purple-200">From</label>
            <label htmlFor="toUnit" className="text-sm font-medium text-purple-200">To</label>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <select
                id="fromUnit"
                className="w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm hover:shadow-purple-900/30 appearance-none"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {units.map((unit) => (
                  <option key={unit.name} value={unit.name}>
                    {formatUnitName(unit.name)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-indigo-800/10 rounded-md pointer-events-none"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <button
              onClick={handleSwap}
              className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-3 rounded-full transition duration-300 z-10 transform hover:scale-110 shadow-md hover:shadow-purple-500/50"
              aria-label="Swap units"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
            
            <div className="flex-1 relative">
              <select
                id="toUnit"
                className="w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm hover:shadow-purple-900/30 appearance-none"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                {units.map((unit) => (
                  <option key={unit.name} value={unit.name}>
                    {formatUnitName(unit.name)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-indigo-800/10 rounded-md pointer-events-none"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 text-red-400 bg-red-900/20 p-3 rounded border border-red-800/50">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}
        
        {/* Result section */}
        <div className={`mt-8 p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800 transition-all duration-300 relative overflow-hidden ${isConverting ? 'opacity-70' : 'opacity-100'}`}>
          {/* Subtle purple glow at top */}
          <div 
            className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-80"
          ></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <span className="text-sm text-purple-300">Result:</span>
              <div className="text-3xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
                {result} <span className="text-xl">{units.find(u => u.name === toUnit)?.symbol}</span>
              </div>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <span className="text-sm text-purple-300">Formula:</span>
              <div className="mt-1 text-indigo-200">
                {fromUnit !== toUnit && (
                  <>
                    {fromUnit === 'cubic_meter' && toUnit === 'cubic_foot' && '1 m³ = 35.3147 ft³'}
                    {fromUnit === 'cubic_foot' && toUnit === 'cubic_meter' && '1 ft³ = 0.0283 m³'}
                    {fromUnit === 'liter' && toUnit === 'cubic_meter' && '1 L = 0.001 m³'}
                    {fromUnit === 'cubic_meter' && toUnit === 'liter' && '1 m³ = 1,000 L'}
                    {fromUnit === 'gallon_us' && toUnit === 'liter' && '1 gal (US) = 3.785 L'}
                    {fromUnit === 'liter' && toUnit === 'gallon_us' && '1 L = 0.264 gal (US)'}
                    {fromUnit === 'gallon_us' && toUnit === 'gallon_uk' && '1 gal (US) = 0.833 gal (UK)'}
                    {fromUnit === 'gallon_uk' && toUnit === 'gallon_us' && '1 gal (UK) = 1.201 gal (US)'}
                    {fromUnit === 'cubic_inch' && toUnit === 'cubic_foot' && '1 ft³ = 1,728 in³'}
                    {fromUnit === 'cubic_foot' && toUnit === 'cubic_inch' && '1 ft³ = 1,728 in³'}
                  </>
                )}
              </div>
            </div>
          </div>
          
          {isConverting && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="w-8 h-8 border-4 border-t-purple-500 border-r-transparent border-b-indigo-500 border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        {/* Common Conversions section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6 pb-2 relative inline-block">
            Common Conversions
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/70 to-indigo-600/70 rounded-full"></span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-gray-800 hover:border-purple-900/30 transition-all duration-300">
              <p className="py-1">1 cubic meter = <span className="text-purple-300 font-medium">1,000 liters</span></p>
              <p className="py-1">1 liter = <span className="text-purple-300 font-medium">0.264 gallon (US)</span></p>
              <p className="py-1">1 gallon (US) = <span className="text-purple-300 font-medium">3.785 liters</span></p>
              <p className="py-1">1 cubic foot = <span className="text-purple-300 font-medium">7.481 gallons (US)</span></p>
            </div>
            <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-gray-800 hover:border-purple-900/30 transition-all duration-300">
              <p className="py-1">1 cubic foot = <span className="text-purple-300 font-medium">1,728 cubic inches</span></p>
              <p className="py-1">1 gallon (UK) = <span className="text-purple-300 font-medium">4.546 liters</span></p>
              <p className="py-1">1 cubic yard = <span className="text-purple-300 font-medium">27 cubic feet</span></p>
              <p className="py-1">1 milliliter = <span className="text-purple-300 font-medium">0.034 fluid ounce (US)</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeConverter; 