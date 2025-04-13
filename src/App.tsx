import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// Pages
import HomePage from './pages/HomePage';
import UnitConverterPage from './pages/UnitConverterPage';
import DocumentConversionPage from './pages/DocumentConversionPage';
import CalculatorsPage from './pages/CalculatorsPage';
import EngineeringSpecsPage from './pages/EngineeringSpecsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-dark to-secondary-dark text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
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
      <Footer />
    </div>
  );
}

export default App;
