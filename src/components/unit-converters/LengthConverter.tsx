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
  }, [inputValue, fromUnit, toUnit]);

  // Handle swap button click
  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Length Converter</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fromValue" className="block mb-2 text-sm font-medium">Value</label>
          <input
            id="fromValue"
            type="text"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-primary focus:border-primary"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
          />
          
          <label htmlFor="fromUnit" className="block mt-4 mb-2 text-sm font-medium">From</label>
          <select
            id="fromUnit"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-primary focus:border-primary"
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
        
        <div className="flex flex-col">
          <div className="flex items-center justify-center h-10 mb-4 md:mb-0 md:mt-8">
            <button
              onClick={handleSwap}
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition duration-300"
              aria-label="Swap units"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>
          
          <label htmlFor="toUnit" className="block mb-2 text-sm font-medium">To</label>
          <select
            id="toUnit"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-primary focus:border-primary"
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
      
      <div className="mt-8 p-4 bg-gray-700 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-400">Result:</span>
            <div className="text-2xl font-semibold mt-1">
              {result} {toUnit}{result !== '1' && 's'}
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-400">Formula:</span>
            <div className="mt-1">
              {fromUnit !== toUnit && (
                <>1 {fromUnit} = {(units.find(u => u.name === fromUnit)?.conversion || 0) / (units.find(u => u.name === toUnit)?.conversion || 1)} {toUnit}</>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Common Conversions</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li>1 meter = 3.28084 feet</li>
          <li>1 foot = 0.3048 meters</li>
          <li>1 inch = 2.54 centimeters</li>
          <li>1 mile = 1.60934 kilometers</li>
          <li>1 kilometer = 0.621371 miles</li>
          <li>1 yard = 0.9144 meters</li>
        </ul>
      </div>
    </div>
  );
};

export default LengthConverter; 