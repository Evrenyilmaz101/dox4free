import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Document Conversion Components
import PdfToWordConverter from '../components/document-conversion/PdfToWordConverter';
import PdfMerger from '../components/document-conversion/PdfMerger';
import PdfSplitter from '../components/document-conversion/PdfSplitter';
import ImageResizer from '../components/document-conversion/ImageResizer';
import JpgToPdfConverter from '../components/document-conversion/JpgToPdfConverter';

const DocumentConversionPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/document-conversion';

  // PDF Tools
  const pdfTools = [
    { 
      name: 'PDF to Word', 
      path: '/document-conversion/pdf-to-word',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Convert PDF documents to editable Word files. Perfect for students, professionals, and anyone who works with documents.' 
    },
    { 
      name: 'PDF Merger', 
      path: '/document-conversion/pdf-merger',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Combine multiple PDF files into a single document quickly and easily with page numbering options.' 
    },
    { 
      name: 'PDF Splitter', 
      path: '/document-conversion/pdf-splitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      description: 'Extract pages from a PDF or split a large PDF into multiple smaller documents with custom selections.' 
    }
  ];

  // Image Tools
  const imageTools = [
    { 
      name: 'Image Resizer', 
      path: '/document-conversion/image-resizer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Resize, crop, and compress images for various purposes. Maintain quality while reducing file size.' 
    },
    { 
      name: 'JPG to PDF', 
      path: '/document-conversion/jpg-to-pdf',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
      description: 'Convert JPG, PNG, and other image files to PDF documents. Combine multiple images into a single PDF.' 
    },
    { 
      name: 'Image Format Converter', 
      path: '/document-conversion/image-format',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      description: 'Convert between image formats including JPG, PNG, WebP, TIFF, BMP and more with quality options.' 
    }
  ];

  // Office Document Tools
  const officeTools = [
    { 
      name: 'Excel to Sheets', 
      path: '/document-conversion/excel-to-sheets',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Transform Excel spreadsheets to Google Sheets format for cloud-based collaboration and sharing.' 
    },
    { 
      name: 'DOCX to PDF', 
      path: '/document-conversion/docx-to-pdf',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Convert Word documents to PDF format with layout preservation and customization options.' 
    },
    { 
      name: 'Text Extractor', 
      path: '/document-conversion/text-extractor',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      description: 'Extract text from images, PDFs, and other documents using advanced OCR technology.' 
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(#999999 1px, transparent 1px), linear-gradient(90deg, #999999 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.15
        }} 
      />
      
      {/* Glow Overlay */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none z-0 opacity-30" 
        style={{ 
          background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.3), rgba(0, 0, 0, 0) 70%)'
        }} 
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {isRootPath ? (
          <>
            <div className="text-center mb-12 pt-12">
              <h1 className="text-5xl font-bold mb-8 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
                Document Conversion Tools
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Convert, modify, and manipulate your documents with our powerful online tools.
                From PDF conversions to image editing, we have everything you need for document management.
              </p>
            </div>

            {/* PDF Tools Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                PDF Tools
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Powerful tools for PDF manipulation and conversion</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pdfTools.map((tool, index) => (
                  <Link
                    key={index}
                    to={tool.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{tool.name}</h2>
                      <p className="text-gray-300 text-sm">{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Image Tools Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Image Tools
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Resize, convert, and optimize your images</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {imageTools.map((tool, index) => (
                  <Link
                    key={index}
                    to={tool.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{tool.name}</h2>
                      <p className="text-gray-300 text-sm">{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Office Document Tools Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 text-center relative">
                Office Document Tools
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
              </h2>
              <p className="text-center text-gray-300 mb-8">Convert and transform office document formats</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeTools.map((tool, index) => (
                  <Link
                    key={index}
                    to={tool.path}
                    className="group flex flex-col bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{tool.name}</h2>
                      <p className="text-gray-300 text-sm">{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/pdf-to-word" element={<PdfToWordConverter />} />
            <Route path="/pdf-merger" element={<PdfMerger />} />
            <Route path="/pdf-splitter" element={<PdfSplitter />} />
            <Route path="/image-resizer" element={<ImageResizer />} />
            <Route path="/jpg-to-pdf" element={<JpgToPdfConverter />} />
            <Route path="/image-format" element={<div className="p-6 bg-gray-800 rounded-lg">Image Format Converter Coming Soon</div>} />
            <Route path="/excel-to-sheets" element={<div className="p-6 bg-gray-800 rounded-lg">Excel to Sheets Converter Coming Soon</div>} />
            <Route path="/docx-to-pdf" element={<div className="p-6 bg-gray-800 rounded-lg">DOCX to PDF Converter Coming Soon</div>} />
            <Route path="/text-extractor" element={<div className="p-6 bg-gray-800 rounded-lg">Text Extractor Coming Soon</div>} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default DocumentConversionPage; 