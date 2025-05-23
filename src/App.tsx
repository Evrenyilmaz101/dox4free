import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout components
import Header from './components/layout/Header';

// Pages
import HomePage from './pages/HomePage';
import UnitConverterPage from './pages/UnitConverterPage';
import DocumentConversionPage from './pages/DocumentConversionPage';
import CalculatorsPage from './pages/CalculatorsPage';
import EngineeringSpecsPage from './pages/EngineeringSpecsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/unit-converters/*" element={<UnitConverterPage />} />
          <Route path="/document-conversion/*" element={<DocumentConversionPage />} />
          <Route path="/calculators/*" element={<CalculatorsPage />} />
          <Route path="/engineering-specs/*" element={<EngineeringSpecsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
