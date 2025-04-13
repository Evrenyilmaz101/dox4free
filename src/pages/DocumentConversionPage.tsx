import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Document Conversion Components (placeholders for now)
const PdfToWordConverter = () => <div className="p-6 bg-gray-800 rounded-lg">PDF to Word Converter Coming Soon</div>;
const PdfMerger = () => <div className="p-6 bg-gray-800 rounded-lg">PDF Merger Coming Soon</div>;
const PdfSplitter = () => <div className="p-6 bg-gray-800 rounded-lg">PDF Splitter Coming Soon</div>;
const ImageResizer = () => <div className="p-6 bg-gray-800 rounded-lg">Image Resizer Coming Soon</div>;
const JpgToPdfConverter = () => <div className="p-6 bg-gray-800 rounded-lg">JPG to PDF Converter Coming Soon</div>;

const DocumentConversionPage: React.FC = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/document-conversion';

  const tools = [
    { 
      name: 'PDF to Word', 
      path: '/document-conversion/pdf-to-word', 
      description: 'Convert your PDF documents to editable Word files with our free online tool.' 
    },
    { 
      name: 'PDF Merger', 
      path: '/document-conversion/pdf-merger', 
      description: 'Combine multiple PDF files into a single document quickly and easily.' 
    },
    { 
      name: 'PDF Splitter', 
      path: '/document-conversion/pdf-splitter', 
      description: 'Extract pages from a PDF or split a large PDF into multiple smaller documents.' 
    },
    { 
      name: 'Image Resizer', 
      path: '/document-conversion/image-resizer', 
      description: 'Resize your images to specific dimensions or file sizes for different purposes.' 
    },
    { 
      name: 'JPG to PDF', 
      path: '/document-conversion/jpg-to-pdf', 
      description: 'Convert your JPG, PNG, or other image files to PDF format in seconds.' 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Document Conversion Tools</h1>
      <p className="text-gray-300 mb-8">
        Transform, merge, split, and manage your documents with our free online document conversion tools.
      </p>

      {isRootPath ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Routes>
          <Route path="/pdf-to-word" element={<PdfToWordConverter />} />
          <Route path="/pdf-merger" element={<PdfMerger />} />
          <Route path="/pdf-splitter" element={<PdfSplitter />} />
          <Route path="/image-resizer" element={<ImageResizer />} />
          <Route path="/jpg-to-pdf" element={<JpgToPdfConverter />} />
        </Routes>
      )}
    </div>
  );
};

export default DocumentConversionPage; 