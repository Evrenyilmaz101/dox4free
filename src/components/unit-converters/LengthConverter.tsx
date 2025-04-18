import React, { useState, useEffect } from 'react';

type Unit = {
  name: string;
  conversion: number; // Conversion rate to meters (base unit)
};

const LengthConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('meter');
  const [toUnit, setToUnit] = useState<string>('foot');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const units: Unit[] = [
    { name: 'millimeter', conversion: 0.001 },
    { name: 'centimeter', conversion: 0.01 },
    { name: 'meter', conversion: 1 },
    { name: 'kilometer', conversion: 1000 },
    { name: 'inch', conversion: 0.0254 },
    { name: 'foot', conversion: 0.3048 },
    { name: 'yard', conversion: 0.9144 },
    { name: 'mile', conversion: 1609.344 },
    { name: 'nautical mile', conversion: 1852 },
  ];

  const convert = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      setError('Please enter a valid number');
      setResult('');
      return;
    }

    setError('');
    
    const fromUnitData = units.find(u => u.name === fromUnit);
    const toUnitData = units.find(u => u.name === toUnit);
    
    if (!fromUnitData || !toUnitData) {
      setError('Invalid unit selection');
      return;
    }
    
    // Convert from input unit to meters, then to output unit
    const meters = Number(inputValue) * fromUnitData.conversion;
    const convertedValue = meters / toUnitData.conversion;
    
    // Format the result depending on its size
    let formattedResult: string;
    if (convertedValue < 0.0001 || convertedValue > 10000000) {
      formattedResult = convertedValue.toExponential(6);
    } else if (Number.isInteger(convertedValue)) {
      formattedResult = convertedValue.toString();
    } else {
      formattedResult = convertedValue.toPrecision(8).replace(/\.?0+$/, '');
    }
    
    setResult(formattedResult);
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

  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto" style={{ backgroundColor: 'black' }}>
      <h2 className="text-2xl font-bold mb-8">Length Converter</h2>
      
      {/* Value section */}
      <div className="mb-6">
        <label htmlFor="fromValue" className="block mb-2 text-sm font-medium">Value</label>
        <input
          id="fromValue"
          type="text"
          className="w-full p-4 bg-gray-900 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
      </div>
      
      {/* From/To section with swap button */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 relative">
        <div className="flex-1">
          <label htmlFor="fromUnit" className="block mb-2 text-sm font-medium">From</label>
          <select
            id="fromUnit"
            className="w-full p-4 bg-gray-900 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {units.map((unit) => (
              <option key={unit.name} value={unit.name}>
                {unit.name.charAt(0).toUpperCase() + unit.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        {/* Swap button - absolute positioned in the middle on desktop */}
        <div className="flex justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 my-2 md:my-0">
          <button
            onClick={handleSwap}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition duration-300"
            aria-label="Swap units"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1">
          <label htmlFor="toUnit" className="block mb-2 text-sm font-medium">To</label>
          <select
            id="toUnit"
            className="w-full p-4 bg-gray-900 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {units.map((unit) => (
              <option key={unit.name} value={unit.name}>
                {unit.name.charAt(0).toUpperCase() + unit.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 text-red-500">
          {error}
        </div>
      )}
      
      {/* Result section */}
      <div className="mt-6 p-6 bg-gray-900 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <span className="text-sm text-gray-400">Result:</span>
            <div className="text-2xl font-semibold mt-1">
              {result} {toUnit}{result !== '1' && 's'}
            </div>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Formula:</span>
            <div className="mt-1">
              {fromUnit !== toUnit && (
                <>1 {fromUnit} = {(units.find(u => u.name === fromUnit)?.conversion || 0) / (units.find(u => u.name === toUnit)?.conversion || 1)} {toUnit}</>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Common Conversions section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Common Conversions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p>1 meter = 3.28084 feet</p>
            <p>1 inch = 2.54 centimeters</p>
            <p>1 kilometer = 0.621371 miles</p>
          </div>
          <div>
            <p>1 foot = 0.3048 meters</p>
            <p>1 mile = 1.60934 kilometers</p>
            <p>1 yard = 0.9144 meters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LengthConverter; 