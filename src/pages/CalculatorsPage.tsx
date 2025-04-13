import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Calculator Components
import BmiCalculator from '../components/calculators/BmiCalculator';

// Placeholder components for now
const CalorieCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Calorie Calculator Coming Soon</div>;
const LoanCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Loan Calculator Coming Soon</div>;
const PercentageCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Percentage Calculator Coming Soon</div>;
const ScientificCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Scientific Calculator Coming Soon</div>;
const GeometryCalculator = () => <div className="p-6 bg-gray-800 rounded-lg">Geometry Calculator Coming Soon</div>;

const CalculatorsPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/calculators';

  const calculators = [
    {
      name: 'BMI Calculator',
      path: '/calculators/bmi',
      description: 'Calculate your Body Mass Index to assess if you are at a healthy weight for your height.',
      category: 'Health'
    },
    {
      name: 'Calorie Calculator',
      path: '/calculators/calorie',
      description: 'Determine your daily caloric needs based on your age, weight, height, and activity level.',
      category: 'Health'
    },
    {
      name: 'Loan Calculator',
      path: '/calculators/loan',
      description: 'Calculate monthly payments, total interest, and total cost for various types of loans.',
      category: 'Finance'
    },
    {
      name: 'Percentage Calculator',
      path: '/calculators/percentage',
      description: 'Easily calculate percentages, percent changes, and percent differences.',
      category: 'Mathematics'
    },
    {
      name: 'Scientific Calculator',
      path: '/calculators/scientific',
      description: 'Perform advanced mathematical calculations with this comprehensive scientific calculator.',
      category: 'Mathematics'
    },
    {
      name: 'Geometry Calculator',
      path: '/calculators/geometry',
      description: 'Calculate area, perimeter, volume and more for various geometric shapes.',
      category: 'Mathematics'
    }
  ];

  // Group calculators by category
  const calculatorsByCategory = calculators.reduce((acc, calculator) => {
    if (!acc[calculator.category]) {
      acc[calculator.category] = [];
    }
    acc[calculator.category].push(calculator);
    return acc;
  }, {} as Record<string, typeof calculators>);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Calculators</h1>
      <p className="text-gray-300 mb-8">
        Make complex calculations simple with our free online calculators for health, finance, math, and more.
      </p>

      {isRootPath ? (
        <div className="space-y-10">
          {Object.entries(calculatorsByCategory).map(([category, categoryCalculators]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category} Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryCalculators.map((calculator, index) => (
                  <Link
                    key={index}
                    to={calculator.path}
                    className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{calculator.name}</h3>
                    <p className="text-gray-400">{calculator.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Routes>
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/calorie" element={<CalorieCalculator />} />
          <Route path="/loan" element={<LoanCalculator />} />
          <Route path="/percentage" element={<PercentageCalculator />} />
          <Route path="/scientific" element={<ScientificCalculator />} />
          <Route path="/geometry" element={<GeometryCalculator />} />
        </Routes>
      )}
    </div>
  );
};

export default CalculatorsPage; 