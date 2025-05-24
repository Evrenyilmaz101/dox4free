import React, { useState, useRef } from 'react';

interface ConversionJob {
  id: string;
  fileName: string;
  status: 'uploading' | 'converting' | 'completed' | 'error';
  progress: number;
}

const PdfToWordConverter: React.FC = () => {
  const [jobs, setJobs] = useState<ConversionJob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    Array.from(selectedFiles).forEach(file => {
      if (file.type === 'application/pdf') {
        const job: ConversionJob = {
          id: Math.random().toString(36).substr(2, 9),
          fileName: file.name,
          status: 'uploading',
          progress: 0
        };

        setJobs(prev => [...prev, job]);
        simulateConversion(job.id);
      }
    });
  };

  const simulateConversion = async (jobId: string) => {
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setJobs(prev => prev.map(job => 
        job.id === jobId ? { ...job, progress: i } : job
      ));
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Switch to converting
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: 'converting', progress: 0 } : job
    ));

    // Simulate conversion progress
    for (let i = 0; i <= 100; i += 5) {
      setJobs(prev => prev.map(job => 
        job.id === jobId ? { ...job, progress: i } : job
      ));
      await new Promise(resolve => setTimeout(resolve, 150));
    }

    // Complete
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: 'completed', progress: 100 } : job
    ));
  };

  const removeJob = (id: string) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const downloadFile = (job: ConversionJob) => {
    // In a real implementation, this would download the converted file
    const link = document.createElement('a');
    link.href = '#';
    link.download = job.fileName.replace('.pdf', '.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`Demo: ${job.fileName.replace('.pdf', '.docx')} would be downloaded`);
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
          PDF to Word Converter
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>
        
        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-3 text-purple-200">How it works:</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Upload your PDF files (supports multiple files)</li>
            <li>• Our advanced OCR technology extracts text and formatting</li>
            <li>• Download your editable Word documents (.docx format)</li>
            <li>• Preserves layout, images, and text formatting when possible</li>
          </ul>
        </div>

        {/* Upload Area */}
        <div className="mb-8">
          <div 
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors duration-200 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <svg 
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
              />
            </svg>
            <h3 className="text-lg font-medium text-white mb-2">Upload PDF Files</h3>
            <p className="text-gray-400">Click here or drag and drop your PDF files</p>
            <p className="text-sm text-gray-500 mt-2">Supports multiple files • Max 50MB per file</p>
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

        {/* Jobs List */}
        {jobs.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-200">Conversion Jobs</h3>
            {jobs.map((job) => (
              <div key={job.id} className="p-4 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-purple-400">
                      {job.status === 'completed' ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : job.status === 'error' ? (
                        <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-white font-medium">{job.fileName}</div>
                      <div className="text-sm text-gray-400">
                        {job.status === 'uploading' && 'Uploading...'}
                        {job.status === 'converting' && 'Converting to Word...'}
                        {job.status === 'completed' && 'Ready to download'}
                        {job.status === 'error' && 'Conversion failed'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {job.status === 'completed' && (
                      <button
                        onClick={() => downloadFile(job)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      >
                        Download DOCX
                      </button>
                    )}
                    <button
                      onClick={() => removeJob(job.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {(job.status === 'uploading' || job.status === 'converting') && (
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">High Accuracy</h4>
            <p className="text-gray-300 text-sm">Advanced OCR technology ensures accurate text extraction and formatting preservation.</p>
          </div>
          
          <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Secure Processing</h4>
            <p className="text-gray-300 text-sm">Your files are processed securely and deleted immediately after conversion.</p>
          </div>
          
          <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Fast Conversion</h4>
            <p className="text-gray-300 text-sm">Quick processing times with batch conversion support for multiple files.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfToWordConverter; 