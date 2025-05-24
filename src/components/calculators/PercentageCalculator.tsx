import React, { useState } from 'react';

const PercentageCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('percent-of');
  
  // Percent of a number
  const [percentOf_percent, setPercentOf_percent] = useState<string>('25');
  const [percentOf_number, setPercentOf_number] = useState<string>('200');
  
  // Percentage change
  const [change_original, setChange_original] = useState<string>('100');
  const [change_new, setChange_new] = useState<string>('120');
  
  // What percent is X of Y
  const [whatPercent_x, setWhatPercent_x] = useState<string>('50');
  const [whatPercent_y, setWhatPercent_y] = useState<string>('200');

  const calculatePercentOf = () => {
    const percent = parseFloat(percentOf_percent);
    const number = parseFloat(percentOf_number);
    if (isNaN(percent) || isNaN(number)) return 0;
    return (percent / 100) * number;
  };

  const calculatePercentageChange = () => {
    const original = parseFloat(change_original);
    const newValue = parseFloat(change_new);
    if (isNaN(original) || isNaN(newValue) || original === 0) return 0;
    return ((newValue - original) / original) * 100;
  };

  const calculateWhatPercent = () => {
    const x = parseFloat(whatPercent_x);
    const y = parseFloat(whatPercent_y);
    if (isNaN(x) || isNaN(y) || y === 0) return 0;
    return (x / y) * 100;
  };

  const TabButton: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        activeTab === id
          ? 'bg-purple-600 text-white'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      {children}
    </button>
  );

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

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 pb-2 relative inline-block">
          Percentage Calculator
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <TabButton id="percent-of">% of Number</TabButton>
          <TabButton id="percent-change">% Change</TabButton>
          <TabButton id="what-percent">What %</TabButton>
        </div>

        {/* Percent of a Number */}
        {activeTab === 'percent-of' && (
          <div className="space-y-6">
            <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-purple-200">What is X% of Y?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                  <label className="block mb-2 text-sm font-medium">Percentage</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pr-8 pl-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
                      value={percentOf_percent}
                      onChange={(e) => setPercentOf_percent(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">%</span>
                  </div>
                </div>
                
                <div className="text-center text-gray-400 font-medium">of</div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
                    value={percentOf_number}
                    onChange={(e) => setPercentOf_number(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900 bg-opacity-30 rounded-lg">
                <div className="text-center">
                  <span className="text-sm text-purple-200">Result:</span>
                  <div className="text-3xl font-bold text-white mt-1">
                    {calculatePercentOf().toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Percentage Change */}
        {activeTab === 'percent-change' && (
          <div className="space-y-6">
            <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-purple-200">Percentage Change</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                  <label className="block mb-2 text-sm font-medium">Original Value</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
                    value={change_original}
                    onChange={(e) => setChange_original(e.target.value)}
                  />
                </div>
                
                <div className="text-center text-gray-400 font-medium">to</div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">New Value</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
                    value={change_new}
                    onChange={(e) => setChange_new(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900 bg-opacity-30 rounded-lg">
                <div className="text-center">
                  <span className="text-sm text-purple-200">Percentage Change:</span>
                  <div className={`text-3xl font-bold mt-1 ${
                    calculatePercentageChange() >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {calculatePercentageChange() >= 0 ? '+' : ''}{calculatePercentageChange().toFixed(2)}%
                  </div>
                  <div className="text-sm text-gray-300 mt-2">
                    {calculatePercentageChange() >= 0 ? 'Increase' : 'Decrease'} of {Math.abs(calculatePercentageChange()).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* What Percent */}
        {activeTab === 'what-percent' && (
          <div className="space-y-6">
            <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-purple-200">What percent is X of Y?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                  <label className="block mb-2 text-sm font-medium">Number (X)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
                    value={whatPercent_x}
                    onChange={(e) => setWhatPercent_x(e.target.value)}
                  />
                </div>
                
                <div className="text-center text-gray-400 font-medium">is what % of</div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Total (Y)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
                    value={whatPercent_y}
                    onChange={(e) => setWhatPercent_y(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900 bg-opacity-30 rounded-lg">
                <div className="text-center">
                  <span className="text-sm text-purple-200">Result:</span>
                  <div className="text-3xl font-bold text-white mt-1">
                    {calculateWhatPercent().toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Examples */}
        <div className="mt-8 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-purple-200 mb-3">Common Examples</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-medium mb-2">Sales & Discounts:</h4>
              <p>• 20% off $100 = $80</p>
              <p>• 15% tip on $50 = $7.50</p>
              <p>• 25% markup on $80 = $100</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Growth & Change:</h4>
              <p>• From 100 to 120 = +20%</p>
              <p>• From 200 to 150 = -25%</p>
              <p>• 50 is 25% of 200</p>
            </div>
          </div>
        </div>

        {/* Quick Preset Buttons */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-purple-200 mb-3">Quick Calculations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => {
                setActiveTab('percent-of');
                setPercentOf_percent('20');
                setPercentOf_number('100');
              }}
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
            >
              20% of 100
            </button>
            <button
              onClick={() => {
                setActiveTab('percent-of');
                setPercentOf_percent('15');
                setPercentOf_number('50');
              }}
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
            >
              15% Tip
            </button>
            <button
              onClick={() => {
                setActiveTab('percent-change');
                setChange_original('100');
                setChange_new('120');
              }}
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
            >
              Growth Rate
            </button>
            <button
              onClick={() => {
                setActiveTab('what-percent');
                setWhatPercent_x('25');
                setWhatPercent_y('100');
              }}
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200"
            >
              Quarter %
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator; 