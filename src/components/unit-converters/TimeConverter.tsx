import React, { useState, useEffect } from 'react';

type Unit = {
  name: string;
  toSeconds: (value: number) => number; // Convert to seconds (base unit)
  fromSeconds: (value: number) => number; // Convert from seconds
};

const TimeConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('hours');
  const [toUnit, setToUnit] = useState<string>('minutes');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isConverting, setIsConverting] = useState<boolean>(false);

  // Define units and their conversion factors to/from seconds
  const units: Unit[] = [
    {
      name: 'seconds',
      toSeconds: (seconds) => seconds,
      fromSeconds: (seconds) => seconds
    },
    {
      name: 'minutes',
      toSeconds: (minutes) => minutes * 60,
      fromSeconds: (seconds) => seconds / 60
    },
    {
      name: 'hours',
      toSeconds: (hours) => hours * 3600,
      fromSeconds: (seconds) => seconds / 3600
    },
    {
      name: 'days',
      toSeconds: (days) => days * 86400,
      fromSeconds: (seconds) => seconds / 86400
    },
    {
      name: 'weeks',
      toSeconds: (weeks) => weeks * 604800,
      fromSeconds: (seconds) => seconds / 604800
    },
    {
      name: 'months',
      toSeconds: (months) => months * 2592000, // approximation: 30 days
      fromSeconds: (seconds) => seconds / 2592000
    },
    {
      name: 'years',
      toSeconds: (years) => years * 31536000, // non-leap year
      fromSeconds: (seconds) => seconds / 31536000
    },
    {
      name: 'milliseconds',
      toSeconds: (ms) => ms / 1000,
      fromSeconds: (seconds) => seconds * 1000
    },
    {
      name: 'microseconds',
      toSeconds: (μs) => μs / 1000000,
      fromSeconds: (seconds) => seconds * 1000000
    },
    {
      name: 'nanoseconds',
      toSeconds: (ns) => ns / 1000000000,
      fromSeconds: (seconds) => seconds * 1000000000
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
      
      try {
        // First convert to seconds, then to target unit
        const value = Number(inputValue);
        if (value < 0 && fromUnit !== 'nanoseconds' && fromUnit !== 'microseconds' && fromUnit !== 'milliseconds') {
          setError('Time values cannot be negative');
          setIsConverting(false);
          return;
        }
        
        const seconds = fromUnitData.toSeconds(value);
        const convertedValue = toUnitData.fromSeconds(seconds);
        
        // Format the result depending on its size
        let formattedResult: string;
        
        if (Math.abs(convertedValue) < 0.000001 || Math.abs(convertedValue) > 1e12) {
          // Use scientific notation for very small or very large numbers
          formattedResult = convertedValue.toExponential(6);
        } else if (Number.isInteger(convertedValue)) {
          formattedResult = convertedValue.toString();
        } else {
          // Determine appropriate decimal places based on magnitude
          const absValue = Math.abs(convertedValue);
          let decimalPlaces = 2;
          
          if (absValue < 0.01) decimalPlaces = 6;
          else if (absValue < 0.1) decimalPlaces = 4;
          
          formattedResult = convertedValue.toFixed(decimalPlaces).replace(/\.?0+$/, '');
        }
        
        setResult(formattedResult);
      } catch (e) {
        setError('Error during conversion');
      }
      
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

  // Get the unit abbreviation
  const getUnitAbbreviation = (unitName: string): string => {
    switch(unitName) {
      case 'seconds': return 's';
      case 'minutes': return 'min';
      case 'hours': return 'hr';
      case 'days': return 'd';
      case 'weeks': return 'wk';
      case 'months': return 'mo';
      case 'years': return 'yr';
      case 'milliseconds': return 'ms';
      case 'microseconds': return 'μs';
      case 'nanoseconds': return 'ns';
      default: return '';
    }
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
          Time Converter
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
                    {unit.name.charAt(0).toUpperCase() + unit.name.slice(1)} ({getUnitAbbreviation(unit.name)})
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
                    {unit.name.charAt(0).toUpperCase() + unit.name.slice(1)} ({getUnitAbbreviation(unit.name)})
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
                {result} {getUnitAbbreviation(toUnit)}
              </div>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <span className="text-sm text-purple-300">Examples:</span>
              <div className="mt-1 text-indigo-200 text-sm">
                <div>1 hour = 60 minutes = 3,600 seconds</div>
                <div>1 day = 24 hours = 86,400 seconds</div>
              </div>
            </div>
          </div>
          
          {isConverting && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="w-8 h-8 border-4 border-t-purple-500 border-r-transparent border-b-indigo-500 border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        {/* Time Units Information */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6 pb-2 relative inline-block">
            Time Units
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/70 to-indigo-600/70 rounded-full"></span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-gray-800 hover:border-purple-900/30 transition-all duration-300">
              <p className="py-1"><span className="text-purple-300 font-medium">Standard Units:</span></p>
              <p className="py-1">• 1 minute = 60 seconds</p>
              <p className="py-1">• 1 hour = 60 minutes</p>
              <p className="py-1">• 1 day = 24 hours</p>
              <p className="py-1">• 1 week = 7 days</p>
            </div>
            <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-gray-800 hover:border-purple-900/30 transition-all duration-300">
              <p className="py-1"><span className="text-purple-300 font-medium">Scientific Units:</span></p>
              <p className="py-1">• 1 second = 1,000 milliseconds</p>
              <p className="py-1">• 1 millisecond = 1,000 microseconds</p>
              <p className="py-1">• 1 microsecond = 1,000 nanoseconds</p>
              <p className="py-1">• 1 year ≈ 365.24 days (average)</p>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-gray-800">
            <p className="text-sm">
              <span className="text-purple-300 font-medium">Note:</span> For time conversions, we use the following approximations:
            </p>
            <p className="text-sm pt-2">• 1 month ≈ 30 days (average)</p>
            <p className="text-sm pt-1">• 1 year = 365 days (non-leap year)</p>
            <p className="text-sm pt-1">• Astronomical time units (light-years, etc.) are not included in this converter</p>
            <p className="text-sm pt-1">• For precise calendar calculations, consider the specific month/year being calculated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeConverter; 