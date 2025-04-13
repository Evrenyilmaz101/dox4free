import React, { useState, useEffect } from 'react';

type BmiCategory = {
  category: string;
  range: string;
  description: string;
  color: string;
};

const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('70');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<BmiCategory | null>(null);
  const [error, setError] = useState<string>('');

  const bmiCategories: BmiCategory[] = [
    {
      category: 'Underweight',
      range: 'Less than 18.5',
      description: 'May indicate malnutrition or health issues that prevent normal weight gain.',
      color: 'text-blue-400'
    },
    {
      category: 'Normal weight',
      range: '18.5 - 24.9',
      description: 'Generally associated with the lowest health risks for most people.',
      color: 'text-green-400'
    },
    {
      category: 'Overweight',
      range: '25 - 29.9',
      description: 'May increase risk for health issues like heart disease, diabetes, and high blood pressure.',
      color: 'text-yellow-400'
    },
    {
      category: 'Obesity Class I',
      range: '30 - 34.9',
      description: 'Higher risk for serious health conditions including cardiovascular disease.',
      color: 'text-orange-400'
    },
    {
      category: 'Obesity Class II',
      range: '35 - 39.9',
      description: 'Significantly elevated risk for serious health conditions.',
      color: 'text-red-400'
    },
    {
      category: 'Obesity Class III',
      range: '40 or higher',
      description: 'Extremely high risk for serious health conditions and mortality.',
      color: 'text-red-600'
    }
  ];

  const calculateBMI = () => {
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);

    if (isNaN(weightVal) || isNaN(heightVal) || weightVal <= 0 || heightVal <= 0) {
      setError('Please enter valid values for height and weight.');
      setBmi(null);
      setBmiCategory(null);
      return;
    }

    setError('');
    let bmiValue: number;

    if (unit === 'metric') {
      // Weight in kg, height in cm - need to convert height to meters
      bmiValue = weightVal / Math.pow(heightVal / 100, 2);
    } else {
      // Weight in pounds, height in inches
      bmiValue = (weightVal * 703) / Math.pow(heightVal, 2);
    }

    setBmi(parseFloat(bmiValue.toFixed(1)));

    // Determine BMI category
    const category = bmiCategories.find(cat => {
      const range = cat.range.split(' - ');
      if (range.length === 1) {
        // This is for the "Less than X" or "X or higher" categories
        if (cat.range.startsWith('Less')) {
          return bmiValue < parseFloat(cat.range.split('Less than ')[1]);
        } else {
          return bmiValue >= parseFloat(cat.range.split(' or higher')[0]);
        }
      } else {
        // This is for the "X - Y" range categories
        const lowerBound = parseFloat(range[0]);
        const upperBound = parseFloat(range[1]);
        return bmiValue >= lowerBound && bmiValue < upperBound;
      }
    });

    setBmiCategory(category || null);
  };

  useEffect(() => {
    calculateBMI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, weight, unit]);

  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    if (newUnit === unit) return;
    
    // Convert values when changing units
    if (newUnit === 'imperial') {
      // Convert kg to pounds and cm to inches
      setWeight((parseFloat(weight) * 2.20462).toFixed(1));
      setHeight((parseFloat(height) * 0.393701).toFixed(1));
    } else {
      // Convert pounds to kg and inches to cm
      setWeight((parseFloat(weight) / 2.20462).toFixed(1));
      setHeight((parseFloat(height) / 0.393701).toFixed(1));
    }
    
    setUnit(newUnit);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">BMI Calculator</h2>
      
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              unit === 'metric' ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => handleUnitChange('metric')}
          >
            Metric (kg/cm)
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              unit === 'imperial' ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => handleUnitChange('imperial')}
          >
            Imperial (lb/in)
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="height" className="block mb-2 text-sm font-medium">
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              id="height"
              type="number"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-primary focus:border-primary"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="1"
            />
          </div>
          
          <div>
            <label htmlFor="weight" className="block mb-2 text-sm font-medium">
              Weight ({unit === 'metric' ? 'kg' : 'lb'})
            </label>
            <input
              id="weight"
              type="number"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-primary focus:border-primary"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="1"
            />
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 text-red-500 mb-6">
          {error}
        </div>
      )}
      
      {bmi !== null && bmiCategory && (
        <div className="mt-8">
          <div className="bg-gray-700 p-6 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div>
                <span className="text-sm text-gray-400">Your BMI:</span>
                <div className="text-3xl font-bold mt-1">{bmi}</div>
              </div>
              <div className={`text-xl font-semibold mt-2 md:mt-0 ${bmiCategory.color}`}>
                {bmiCategory.category}
              </div>
            </div>
            <p className="text-gray-300">{bmiCategory.description}</p>
          </div>
          
          <h3 className="text-lg font-semibold mb-4">BMI Categories</h3>
          <div className="space-y-3">
            {bmiCategories.map((cat, index) => (
              <div 
                key={index}
                className={`p-3 rounded-md ${cat.category === bmiCategory.category ? 'bg-gray-700' : 'bg-gray-800'}`}
              >
                <div className="flex justify-between">
                  <span className={`font-medium ${cat.color}`}>{cat.category}</span>
                  <span className="text-gray-400">{cat.range}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            <p>
              <strong>Note:</strong> BMI is a screening tool, not a diagnostic tool. 
              It does not account for factors like muscle mass, bone density, or body composition. 
              Consult a healthcare professional for a comprehensive health assessment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator; 