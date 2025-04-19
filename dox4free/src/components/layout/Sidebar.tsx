import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

type CategoryType = {
  name: string;
  path: string;
  icon: React.ReactNode;
  subcategories: {
    name: string;
    path: string;
  }[];
};

const Sidebar: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('unit-converters');
  
  const categories: CategoryType[] = [
    {
      name: 'Unit Converters',
      path: '/unit-converters',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      ),
      subcategories: [
        { name: 'Length', path: '/unit-converters/length' },
        { name: 'Weight', path: '/unit-converters/weight' },
        { name: 'Temperature', path: '/unit-converters/temperature' },
        { name: 'Time', path: '/unit-converters/time' },
        { name: 'Area', path: '/unit-converters/area' },
        { name: 'Volume', path: '/unit-converters/volume' },
      ],
    },
    {
      name: 'Document Tools',
      path: '/document-conversion',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      subcategories: [
        { name: 'PDF to Word', path: '/document-conversion/pdf-to-word' },
        { name: 'PDF Merger', path: '/document-conversion/pdf-merger' },
        { name: 'PDF Splitter', path: '/document-conversion/pdf-splitter' },
        { name: 'Image Resizer', path: '/document-conversion/image-resizer' },
        { name: 'JPG to PDF', path: '/document-conversion/jpg-to-pdf' },
      ],
    },
    {
      name: 'Calculators',
      path: '/calculators',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
        </svg>
      ),
      subcategories: [
        { name: 'BMI Calculator', path: '/calculators/bmi' },
        { name: 'Calorie Calculator', path: '/calculators/calorie' },
        { name: 'Loan Calculator', path: '/calculators/loan' },
        { name: 'Percentage Calculator', path: '/calculators/percentage' },
        { name: 'Scientific Calculator', path: '/calculators/scientific' },
        { name: 'Geometry Calculator', path: '/calculators/geometry' },
      ],
    },
    {
      name: 'Engineering Specs',
      path: '/engineering-specs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      subcategories: [
        { name: 'Material Properties', path: '/engineering-specs/materials' },
        { name: 'Pressure-Temperature', path: '/engineering-specs/pressure-temperature' },
        { name: 'Industrial Components', path: '/engineering-specs/components' },
      ],
    },
  ];

  const toggleCategory = (categoryPath: string) => {
    setExpandedCategory(expandedCategory === categoryPath ? null : categoryPath);
  };

  return (
    <aside className="w-64 bg-primary hidden md:block p-4 overflow-y-auto">
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.path} className="mb-2">
              <button
                className={`w-full flex items-center justify-between p-2 rounded-md ${
                  expandedCategory === category.path
                    ? 'bg-secondary text-white'
                    : 'text-gray-300 hover:bg-secondary-dark hover:text-white'
                }`}
                onClick={() => toggleCategory(category.path)}
              >
                <div className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </div>
                <svg
                  className={`h-4 w-4 transform ${expandedCategory === category.path ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {expandedCategory === category.path && (
                <ul className="ml-6 mt-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.path}>
                      <NavLink
                        to={subcategory.path}
                        className={({ isActive }) =>
                          `block px-2 py-1 rounded-md ${
                            isActive
                              ? 'bg-secondary text-white'
                              : 'text-gray-300 hover:bg-secondary-dark hover:text-white'
                          }`
                        }
                      >
                        {subcategory.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 