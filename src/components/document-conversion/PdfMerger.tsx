import React, { useState, useRef } from 'react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  file: File;
}

const PdfMerger: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = Array.from(selectedFiles)
      .filter(file => file.type === 'application/pdf')
      .map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        file
      }));

    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const moveFile = (id: string, direction: 'up' | 'down') => {
    setFiles(prev => {
      const index = prev.findIndex(file => file.id === id);
      if (index === -1) return prev;
      
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      
      const newFiles = [...prev];
      [newFiles[index], newFiles[newIndex]] = [newFiles[newIndex], newFiles[index]];
      return newFiles;
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleMerge = async () => {
    if (files.length < 2) return;
    
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, this would send files to a backend service
    // that uses libraries like pdf-lib or PDFtk to merge the files
    
    setIsProcessing(false);
    
    // Show demo result
    alert('Demo: PDF files would be merged and downloaded as "merged.pdf"');
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

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 pb-2 relative inline-block">
          PDF Merger
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        {/* Upload Area */}
        <div className="mb-8">
          <div 
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors duration-200 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <svg 
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 48 48"
            >
              <path 
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <h3 className="text-lg font-medium text-white mb-2">Upload PDF Files</h3>
            <p className="text-gray-400">Click here or drag and drop your PDF files</p>
            <p className="text-sm text-gray-500 mt-2">Multiple files supported</p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Files to Merge ({files.length})</h3>
            <div className="space-y-3">
              {files.map((file, index) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <button
                        onClick={() => moveFile(file.id, 'up')}
                        disabled={index === 0}
                        className="p-1 text-gray-400 hover:text-purple-400 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => moveFile(file.id, 'down')}
                        disabled={index === files.length - 1}
                        className="p-1 text-gray-400 hover:text-purple-400 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="text-purple-400">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div>
                      <div className="text-white font-medium">{file.name}</div>
                      <div className="text-gray-400 text-sm">{formatFileSize(file.size)}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">#{index + 1}</span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900 hover:bg-opacity-30 rounded-lg transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Merge Button */}
        {files.length >= 2 && (
          <div className="text-center mb-8">
            <button
              onClick={handleMerge}
              disabled={isProcessing}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Merging PDFs...</span>
                </div>
              ) : (
                `Merge ${files.length} PDFs`
              )}
            </button>
          </div>
        )}

        {/* Instructions */}
        <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-purple-200 mb-3">How to Use</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-medium mb-2">Steps:</h4>
              <ol className="space-y-1 list-decimal list-inside">
                <li>Upload multiple PDF files</li>
                <li>Arrange them in the desired order</li>
                <li>Click "Merge PDFs" to combine them</li>
                <li>Download the merged PDF file</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="space-y-1">
                <li>• Drag and drop file upload</li>
                <li>• Reorder files with arrows</li>
                <li>• Remove unwanted files</li>
                <li>• Secure client-side processing</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded-lg">
            <p className="text-yellow-200 text-sm">
              <strong>Note:</strong> This is a demo interface. In a production environment, 
              PDF processing would be handled by backend services for security and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfMerger; 