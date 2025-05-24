import React, { useState, useRef } from 'react';

interface SplitJob {
  id: string;
  fileName: string;
  totalPages: number;
  splitMethod: 'pages' | 'range' | 'size';
  splitValue: string;
  status: 'ready' | 'processing' | 'completed';
  resultFiles: string[];
}

const PdfSplitter: React.FC = () => {
  const [jobs, setJobs] = useState<SplitJob[]>([]);
  const [activeMethod, setActiveMethod] = useState<'pages' | 'range' | 'size'>('pages');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    Array.from(selectedFiles).forEach(file => {
      if (file.type === 'application/pdf') {
        const job: SplitJob = {
          id: Math.random().toString(36).substr(2, 9),
          fileName: file.name,
          totalPages: Math.floor(Math.random() * 20) + 5, // Simulate page count
          splitMethod: activeMethod,
          splitValue: '',
          status: 'ready',
          resultFiles: []
        };
        setJobs(prev => [...prev, job]);
      }
    });
  };

  const updateSplitValue = (jobId: string, value: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, splitValue: value } : job
    ));
  };

  const processSplit = async (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: 'processing' } : job
    ));

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    let resultFiles: string[] = [];
    
    switch (job.splitMethod) {
      case 'pages':
        const pagesPerFile = parseInt(job.splitValue) || 1;
        const numFiles = Math.ceil(job.totalPages / pagesPerFile);
        resultFiles = Array.from({ length: numFiles }, (_, i) => 
          `${job.fileName.replace('.pdf', '')}_part${i + 1}.pdf`
        );
        break;
      case 'range':
        // Example: "1-3,5-7,10-12"
        const ranges = job.splitValue.split(',').filter(r => r.trim());
        resultFiles = ranges.map((range, i) => 
          `${job.fileName.replace('.pdf', '')}_pages${range.trim()}.pdf`
        );
        break;
      case 'size':
        const sizeLimit = parseInt(job.splitValue) || 1;
        const estimatedFiles = Math.ceil(job.totalPages / (sizeLimit * 2)); // Rough estimate
        resultFiles = Array.from({ length: estimatedFiles }, (_, i) => 
          `${job.fileName.replace('.pdf', '')}_${sizeLimit}MB_part${i + 1}.pdf`
        );
        break;
    }

    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: 'completed', resultFiles } : job
    ));
  };

  const removeJob = (id: string) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const downloadFile = (fileName: string) => {
    alert(`Demo: ${fileName} would be downloaded`);
  };

  const downloadAll = (job: SplitJob) => {
    alert(`Demo: All ${job.resultFiles.length} files would be downloaded as a ZIP archive`);
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
          PDF Splitter
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
        </h2>

        {/* Split Method Selection */}
        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">Split Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveMethod('pages')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                activeMethod === 'pages' 
                  ? 'border-purple-500 bg-purple-900 bg-opacity-30' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="text-purple-400 mb-2">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white">By Pages</h4>
              <p className="text-sm text-gray-300 mt-1">Split into files with specific page count</p>
            </button>

            <button
              onClick={() => setActiveMethod('range')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                activeMethod === 'range' 
                  ? 'border-purple-500 bg-purple-900 bg-opacity-30' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="text-purple-400 mb-2">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h4 className="font-semibold text-white">By Range</h4>
              <p className="text-sm text-gray-300 mt-1">Extract specific page ranges</p>
            </button>

            <button
              onClick={() => setActiveMethod('size')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                activeMethod === 'size' 
                  ? 'border-purple-500 bg-purple-900 bg-opacity-30' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="text-purple-400 mb-2">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white">By Size</h4>
              <p className="text-sm text-gray-300 mt-1">Split into files of specific size limit</p>
            </button>
          </div>
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
            <p className="text-sm text-gray-500 mt-2">Upload multiple PDFs to split them individually</p>
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
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-200">Split Jobs</h3>
            {jobs.map((job) => (
              <div key={job.id} className="p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{job.fileName}</h4>
                    <p className="text-gray-400 text-sm">{job.totalPages} pages • Method: {job.splitMethod}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {job.status === 'completed' && (
                      <button
                        onClick={() => downloadAll(job)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      >
                        Download All ({job.resultFiles.length})
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

                {job.status === 'ready' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {activeMethod === 'pages' && 'Pages per file'}
                        {activeMethod === 'range' && 'Page ranges (e.g., 1-3,5-7,10-12)'}
                        {activeMethod === 'size' && 'Maximum file size (MB)'}
                      </label>
                      <input
                        type="text"
                        value={job.splitValue}
                        onChange={(e) => updateSplitValue(job.id, e.target.value)}
                        placeholder={
                          activeMethod === 'pages' ? 'e.g., 2' :
                          activeMethod === 'range' ? 'e.g., 1-3,5-7,10-12' :
                          'e.g., 2'
                        }
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={() => processSplit(job.id)}
                      disabled={!job.splitValue.trim()}
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                    >
                      Split PDF
                    </button>
                  </div>
                )}

                {job.status === 'processing' && (
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
                    <span className="text-purple-300">Processing...</span>
                  </div>
                )}

                {job.status === 'completed' && job.resultFiles.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-purple-200 mb-3">Result Files ({job.resultFiles.length})</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.resultFiles.map((fileName, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                          <span className="text-white text-sm">{fileName}</span>
                          <button
                            onClick={() => downloadFile(fileName)}
                            className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded transition-colors duration-200"
                          >
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfSplitter; 