import React, { useState, useEffect } from 'react';

type Unit = {
  name: string;
  toKilograms: (value: number) => number; // Convert to kilograms (base unit)
  fromKilograms: (value: number) => number; // Convert from kilograms
  symbol: string;
};

const MassConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('kilogram');
  const [toUnit, setToUnit] = useState<string>('pound');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isConverting, setIsConverting] = useState<boolean>(false);

  const units: Unit[] = [
    { 
      name: 'kilogram', 
      toKilograms: (value) => value,
      fromKilograms: (value) => value,
      symbol: 'kg'
    },
    { 
      name: 'gram', 
      toKilograms: (value) => value / 1000,
      fromKilograms: (value) => value * 1000,
      symbol: 'g'
    },
    { 
      name: 'milligram', 
      toKilograms: (value) => value / 1000000,
      fromKilograms: (value) => value * 1000000,
      symbol: 'mg'
    },
    { 
      name: 'microgram', 
      toKilograms: (value) => value / 1000000000,
      fromKilograms: (value) => value * 1000000000,
      symbol: 'μg'
    },
    { 
      name: 'metric_ton', 
      toKilograms: (value) => value * 1000,
      fromKilograms: (value) => value / 1000,
      symbol: 't'
    },
    { 
      name: 'pound', 
      toKilograms: (value) => value * 0.45359237,
      fromKilograms: (value) => value / 0.45359237,
      symbol: 'lb'
    },
    { 
      name: 'ounce', 
      toKilograms: (value) => value * 0.0283495231,
      fromKilograms: (value) => value / 0.0283495231,
      symbol: 'oz'
    },
    { 
      name: 'stone', 
      toKilograms: (value) => value * 6.35029318,
      fromKilograms: (value) => value / 6.35029318,
      symbol: 'st'
    },
    { 
      name: 'us_ton', 
      toKilograms: (value) => value * 907.18474,
      fromKilograms: (value) => value / 907.18474,
      symbol: 'ton (US)'
    },
    { 
      name: 'imperial_ton', 
      toKilograms: (value) => value * 1016.0469088,
      fromKilograms: (value) => value / 1016.0469088,
      symbol: 'ton (UK)'
    },
    { 
      name: 'carat', 
      toKilograms: (value) => value * 0.0002,
      fromKilograms: (value) => value / 0.0002,
      symbol: 'ct'
    },
    { 
      name: 'grain', 
      toKilograms: (value) => value * 0.00006479891,
      fromKilograms: (value) => value / 0.00006479891,
      symbol: 'gr'
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
      
      // Convert from input unit to kilograms, then to output unit
      const kilograms = fromUnitData.toKilograms(Number(inputValue));
      const convertedValue = toUnitData.fromKilograms(kilograms);
      
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
          Mass Converter
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
                    {fromUnit === 'kilogram' && toUnit === 'pound' && '1 kg = 2.2046 lb'}
                    {fromUnit === 'pound' && toUnit === 'kilogram' && '1 lb = 0.4536 kg'}
                    {fromUnit === 'kilogram' && toUnit === 'gram' && '1 kg = 1,000 g'}
                    {fromUnit === 'gram' && toUnit === 'kilogram' && '1 g = 0.001 kg'}
                    {fromUnit === 'pound' && toUnit === 'ounce' && '1 lb = 16 oz'}
                    {fromUnit === 'ounce' && toUnit === 'pound' && '1 oz = 0.0625 lb'}
                    {fromUnit === 'metric_ton' && toUnit === 'kilogram' && '1 t = 1,000 kg'}
                    {fromUnit === 'kilogram' && toUnit === 'metric_ton' && '1 kg = 0.001 t'}
                    {fromUnit === 'stone' && toUnit === 'pound' && '1 st = 14 lb'}
                    {fromUnit === 'pound' && toUnit === 'stone' && '1 lb = 0.0714 st'}
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
              <p className="py-1">1 kilogram = <span className="text-purple-300 font-medium">2.20462 pounds</span></p>
              <p className="py-1">1 pound = <span className="text-purple-300 font-medium">0.453592 kilograms</span></p>
              <p className="py-1">1 kilogram = <span className="text-purple-300 font-medium">1,000 grams</span></p>
              <p className="py-1">1 pound = <span className="text-purple-300 font-medium">16 ounces</span></p>
            </div>
            <div className="bg-gray-900 bg-opacity-40 p-4 rounded-lg border border-gray-800 hover:border-purple-900/30 transition-all duration-300">
              <p className="py-1">1 stone = <span className="text-purple-300 font-medium">14 pounds</span></p>
              <p className="py-1">1 metric ton = <span className="text-purple-300 font-medium">1,000 kilograms</span></p>
              <p className="py-1">1 US ton = <span className="text-purple-300 font-medium">2,000 pounds</span></p>
              <p className="py-1">1 carat = <span className="text-purple-300 font-medium">0.2 grams</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassConverter; 