import React, { useState, useMemo } from 'react';

interface Material {
  name: string;
  category: string;
  density: number; // kg/m³
  tensileStrength: number; // MPa
  yieldStrength: number; // MPa
  modulus: number; // GPa
  thermalExpansion: number; // µm/m·K
  thermalConductivity: number; // W/m·K
  meltingPoint: number; // °C
  cost: string; // Relative cost indicator
}

const MaterialProperties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const materials: Material[] = [
    // Metals
    {
      name: 'Aluminum 6061-T6',
      category: 'Aluminum Alloys',
      density: 2700,
      tensileStrength: 310,
      yieldStrength: 276,
      modulus: 68.9,
      thermalExpansion: 23.6,
      thermalConductivity: 167,
      meltingPoint: 582,
      cost: 'Low'
    },
    {
      name: 'Steel AISI 1020',
      category: 'Carbon Steels',
      density: 7870,
      tensileStrength: 420,
      yieldStrength: 350,
      modulus: 200,
      thermalExpansion: 11.7,
      thermalConductivity: 51,
      meltingPoint: 1515,
      cost: 'Very Low'
    },
    {
      name: 'Stainless Steel 316',
      category: 'Stainless Steels',
      density: 8000,
      tensileStrength: 580,
      yieldStrength: 290,
      modulus: 200,
      thermalExpansion: 16,
      thermalConductivity: 16,
      meltingPoint: 1375,
      cost: 'Medium'
    },
    {
      name: 'Titanium Ti-6Al-4V',
      category: 'Titanium Alloys',
      density: 4430,
      tensileStrength: 950,
      yieldStrength: 880,
      modulus: 114,
      thermalExpansion: 8.6,
      thermalConductivity: 6.7,
      meltingPoint: 1604,
      cost: 'Very High'
    },
    {
      name: 'Copper C11000',
      category: 'Copper Alloys',
      density: 8960,
      tensileStrength: 220,
      yieldStrength: 70,
      modulus: 117,
      thermalExpansion: 17.7,
      thermalConductivity: 391,
      meltingPoint: 1083,
      cost: 'High'
    },
    // Plastics
    {
      name: 'ABS',
      category: 'Thermoplastics',
      density: 1050,
      tensileStrength: 40,
      yieldStrength: 30,
      modulus: 2.3,
      thermalExpansion: 90,
      thermalConductivity: 0.25,
      meltingPoint: 220,
      cost: 'Low'
    },
    {
      name: 'Nylon 6/6',
      category: 'Thermoplastics',
      density: 1140,
      tensileStrength: 80,
      yieldStrength: 50,
      modulus: 2.8,
      thermalExpansion: 80,
      thermalConductivity: 0.25,
      meltingPoint: 265,
      cost: 'Low'
    },
    {
      name: 'PEEK',
      category: 'High-Performance Polymers',
      density: 1320,
      tensileStrength: 100,
      yieldStrength: 90,
      modulus: 3.6,
      thermalExpansion: 47,
      thermalConductivity: 0.25,
      meltingPoint: 343,
      cost: 'Very High'
    },
    // Composites
    {
      name: 'Carbon Fiber Epoxy',
      category: 'Composites',
      density: 1600,
      tensileStrength: 1500,
      yieldStrength: 1500,
      modulus: 150,
      thermalExpansion: 0.5,
      thermalConductivity: 1.0,
      meltingPoint: 350,
      cost: 'Very High'
    },
    {
      name: 'Fiberglass',
      category: 'Composites',
      density: 1800,
      tensileStrength: 400,
      yieldStrength: 400,
      modulus: 35,
      thermalExpansion: 21,
      thermalConductivity: 0.3,
      meltingPoint: 300,
      cost: 'Medium'
    }
  ];

  const categories = ['all', ...Array.from(new Set(materials.map(m => m.category)))];

  const filteredMaterials = useMemo(() => {
    return materials.filter(material => {
      const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           material.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCostColor = (cost: string) => {
    switch (cost) {
      case 'Very Low': return 'text-green-400';
      case 'Low': return 'text-green-300';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High': return 'text-red-400';
      default: return 'text-gray-400';
    }
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 pb-2 relative inline-block">
          Material Properties Database
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        {/* Search and Filter Controls */}
        <div className="mb-8 grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Search Materials</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Category Filter</label>
            <select
              className="w-full px-4 py-3 bg-gray-900 bg-opacity-70 border border-gray-800 rounded-md text-white focus:ring-purple-500 focus:border-purple-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Materials List */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              Materials ({filteredMaterials.length})
            </h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredMaterials.map((material, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMaterial(material)}
                  className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    selectedMaterial?.name === material.name
                      ? 'bg-purple-900 bg-opacity-50 border-purple-500'
                      : 'bg-gray-900 bg-opacity-70 border-gray-800 hover:border-purple-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white">{material.name}</h4>
                      <p className="text-sm text-gray-400">{material.category}</p>
                    </div>
                    <span className={`text-sm font-medium ${getCostColor(material.cost)}`}>
                      {material.cost}
                    </span>
                  </div>
                  
                  <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-gray-300">
                    <div>Density: {material.density} kg/m³</div>
                    <div>Tensile: {material.tensileStrength} MPa</div>
                    <div>Modulus: {material.modulus} GPa</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Material Details */}
          <div className="lg:col-span-1">
            {selectedMaterial ? (
              <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800 sticky top-8">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  {selectedMaterial.name}
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <div className="text-white">{selectedMaterial.category}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Cost:</span>
                      <div className={getCostColor(selectedMaterial.cost)}>
                        {selectedMaterial.cost}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-medium text-purple-200 mb-3">Mechanical Properties</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Density:</span>
                        <span className="text-white">{selectedMaterial.density.toLocaleString()} kg/m³</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tensile Strength:</span>
                        <span className="text-white">{selectedMaterial.tensileStrength} MPa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Yield Strength:</span>
                        <span className="text-white">{selectedMaterial.yieldStrength} MPa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Elastic Modulus:</span>
                        <span className="text-white">{selectedMaterial.modulus} GPa</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-medium text-purple-200 mb-3">Thermal Properties</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Thermal Expansion:</span>
                        <span className="text-white">{selectedMaterial.thermalExpansion} µm/m·K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Conductivity:</span>
                        <span className="text-white">{selectedMaterial.thermalConductivity} W/m·K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Melting Point:</span>
                        <span className="text-white">{selectedMaterial.meltingPoint}°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-gray-400">Select a material to view detailed properties</p>
              </div>
            )}
          </div>
        </div>

        {/* Usage Information */}
        <div className="mt-8 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-purple-200 mb-3">About Material Properties</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-medium mb-2">Mechanical Properties:</h4>
              <ul className="space-y-1">
                <li><strong>Tensile Strength:</strong> Maximum stress before failure</li>
                <li><strong>Yield Strength:</strong> Stress at which permanent deformation begins</li>
                <li><strong>Elastic Modulus:</strong> Stiffness measure (stress/strain ratio)</li>
                <li><strong>Density:</strong> Mass per unit volume</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Thermal Properties:</h4>
              <ul className="space-y-1">
                <li><strong>Thermal Expansion:</strong> Length change per temperature change</li>
                <li><strong>Thermal Conductivity:</strong> Heat transfer capability</li>
                <li><strong>Melting Point:</strong> Temperature at which material melts</li>
                <li><strong>Cost:</strong> Relative material cost indicator</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg">
            <p className="text-blue-200 text-sm">
              <strong>Note:</strong> These values are typical ranges for reference. 
              Always consult material certifications and perform testing for critical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialProperties; 