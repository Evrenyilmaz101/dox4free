import React, { useState, useEffect } from 'react';

type Unit = {
  name: string;
  conversion: number; // Conversion rate to joules (base unit)
};

const EnergyConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('joule');
  const [toUnit, setToUnit] = useState<string>('kilowatt hour');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isConverting, setIsConverting] = useState<boolean>(false);

  const units: Unit[] = [
    { name: 'joule', conversion: 1 },
    { name: 'kilojoule', conversion: 1000 },
    { name: 'calorie', conversion: 4.184 },
    { name: 'kilocalorie', conversion: 4184 },
    { name: 'watt hour', conversion: 3600 },
    { name: 'kilowatt hour', conversion: 3600000 },
    { name: 'BTU', conversion: 1055.06 },
    { name: 'foot pound', conversion: 1.35582 },
    { name: 'electronvolt', conversion: 1.602e-19 },
    { name: 'therm', conversion: 105500000 },
    { name: 'ton of TNT', conversion: 4.184e9 },
  ];

  const convert = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      setError('Please enter a valid number');
      setResult('');
      return;
    }

    setError('');
    setIsConverting(true);
    
    setTimeout(() => {
      const fromUnitData = units.find(u => u.name === fromUnit);
      const toUnitData = units.find(u => u.name === toUnit);
      
      if (!fromUnitData || !toUnitData) {
        setError('Invalid unit selection');
        setIsConverting(false);
        return;
      }
      
      const joules = Number(inputValue) * fromUnitData.conversion;
      const convertedValue = joules / toUnitData.conversion;
      
      let formattedResult: string;
      if (convertedValue < 0.0001 || convertedValue > 10000000) {
        formattedResult = convertedValue.toExponential(6);
      } else if (Number.isInteger(convertedValue)) {
        formattedResult = convertedValue.toString();
      } else {
        formattedResult = convertedValue.toPrecision(8).replace(/\.?0+$/, '');
      }
      
      setResult(formattedResult);
      setIsConverting(false);
    }, 300);
  };
  
  useEffect(() => {
    convert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, fromUnit, toUnit]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="p-8 relative" style={{ backgroundColor: 'black' }}>
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
          Energy Converter
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
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
                    {unit.name.charAt(0).toUpperCase() + unit.name.slice(1)}
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
                    {unit.name.charAt(0).toUpperCase() + unit.name.slice(1)}
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
        
        <div className={`mt-8 p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800 transition-all duration-300 relative overflow-hidden ${isConverting ? 'opacity-70' : 'opacity-100'}`}>
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-80"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <span className="text-sm text-purple-300">Result:</span>
              <div className="text-3xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
                {result} {toUnit}{result !== '1' ? 's' : ''}
              </div>
            </div>
            
            {isConverting && (
              <div className="mt-4 md:mt-0">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-sm text-purple-200">
            Convert between various energy units including scientific, electrical, and thermal measurements
          </div>
        </div>
        
        {/* Common Conversions Reference */}
        <div className="mt-8 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-purple-200 mb-3">Common Energy Conversions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
            <div>• 1 kWh = 3.6 million joules</div>
            <div>• 1 calorie = 4.184 joules</div>
            <div>• 1 BTU = 1,055 joules</div>
            <div>• 1 therm = 105.5 million joules</div>
            <div>• 1 foot-pound = 1.356 joules</div>
            <div>• 1 kilocalorie = 4,184 joules</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyConverter; 