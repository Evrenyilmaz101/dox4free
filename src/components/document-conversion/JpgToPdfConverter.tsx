import React, { useState, useRef } from 'react';

interface ImageFile {
  id: string;
  name: string;
  size: number;
  file: File;
  previewUrl: string;
}

interface PdfSettings {
  pageSize: 'A4' | 'Letter' | 'A3' | 'Custom';
  orientation: 'portrait' | 'landscape';
  margin: number;
  quality: number;
  customWidth?: number;
  customHeight?: number;
}

const JpgToPdfConverter: React.FC = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [pdfSettings, setPdfSettings] = useState<PdfSettings>({
    pageSize: 'A4',
    orientation: 'portrait',
    margin: 20,
    quality: 85
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    Array.from(selectedFiles).forEach(file => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        const imageFile: ImageFile = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          file,
          previewUrl: url
        };
        setImages(prev => [...prev, imageFile]);
      }
    });
  };

  const removeImage = (id: string) => {
    const image = images.find(img => img.id === id);
    if (image) {
      URL.revokeObjectURL(image.previewUrl);
    }
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const moveImage = (id: string, direction: 'up' | 'down') => {
    setImages(prev => {
      const index = prev.findIndex(img => img.id === id);
      if (index === -1) return prev;
      
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      
      const newImages = [...prev];
      [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
      return newImages;
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const processToPdf = async () => {
    if (images.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // In a real implementation, this would use libraries like jsPDF or pdf-lib
    setIsProcessing(false);
    
    // Show demo result
    const pdfName = `converted_images_${Date.now()}.pdf`;
    alert(`Demo: PDF "${pdfName}" with ${images.length} image${images.length > 1 ? 's' : ''} would be downloaded`);
  };

  const clearAll = () => {
    images.forEach(image => URL.revokeObjectURL(image.previewUrl));
    setImages([]);
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 pb-2 relative inline-block">
          JPG to PDF Converter
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
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <h3 className="text-lg font-medium text-white mb-2">Upload Images</h3>
            <p className="text-gray-400">Click here or drag and drop your images</p>
            <p className="text-sm text-gray-500 mt-2">Supports JPG, PNG, WebP, GIF • Multiple files supported</p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PDF Settings */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-200">PDF Settings</h3>
            
            {/* Page Size */}
            <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Page Size</h4>
              <select
                value={pdfSettings.pageSize}
                onChange={(e) => setPdfSettings(prev => ({ ...prev, pageSize: e.target.value as any }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none mb-4"
              >
                <option value="A4">A4 (210 × 297 mm)</option>
                <option value="Letter">Letter (8.5 × 11 in)</option>
                <option value="A3">A3 (297 × 420 mm)</option>
                <option value="Custom">Custom Size</option>
              </select>

              {pdfSettings.pageSize === 'Custom' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Width (mm)</label>
                    <input
                      type="number"
                      min="50"
                      max="1000"
                      value={pdfSettings.customWidth || 210}
                      onChange={(e) => setPdfSettings(prev => ({ ...prev, customWidth: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Height (mm)</label>
                    <input
                      type="number"
                      min="50"
                      max="1000"
                      value={pdfSettings.customHeight || 297}
                      onChange={(e) => setPdfSettings(prev => ({ ...prev, customHeight: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Orientation */}
            <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Orientation</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPdfSettings(prev => ({ ...prev, orientation: 'portrait' }))}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    pdfSettings.orientation === 'portrait' 
                      ? 'border-purple-500 bg-purple-900 bg-opacity-30' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-8 h-10 bg-gray-600 mx-auto mb-2 rounded"></div>
                    <span className="text-sm text-white">Portrait</span>
                  </div>
                </button>
                <button
                  onClick={() => setPdfSettings(prev => ({ ...prev, orientation: 'landscape' }))}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    pdfSettings.orientation === 'landscape' 
                      ? 'border-purple-500 bg-purple-900 bg-opacity-30' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-10 h-8 bg-gray-600 mx-auto mb-2 rounded"></div>
                    <span className="text-sm text-white">Landscape</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Quality & Margin */}
            <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Quality & Margin</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Quality: {pdfSettings.quality}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={pdfSettings.quality}
                    onChange={(e) => setPdfSettings(prev => ({ ...prev, quality: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Margin: {pdfSettings.margin}mm
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={pdfSettings.margin}
                    onChange={(e) => setPdfSettings(prev => ({ ...prev, margin: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Convert Button */}
            {images.length > 0 && (
              <button
                onClick={processToPdf}
                disabled={isProcessing}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Creating PDF...</span>
                  </div>
                ) : (
                  `Convert ${images.length} Image${images.length > 1 ? 's' : ''} to PDF`
                )}
              </button>
            )}
          </div>

          {/* Images List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-purple-200">
                Images ({images.length})
              </h3>
              {images.length > 0 && (
                <button
                  onClick={clearAll}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Clear All
                </button>
              )}
            </div>
            
            {images.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {images.map((image, index) => (
                  <div key={image.id} className="flex items-center space-x-4 p-4 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                    <div className="flex flex-col">
                      <button
                        onClick={() => moveImage(image.id, 'up')}
                        disabled={index === 0}
                        className="p-1 text-gray-400 hover:text-purple-400 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => moveImage(image.id, 'down')}
                        disabled={index === images.length - 1}
                        className="p-1 text-gray-400 hover:text-purple-400 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    <img
                      src={image.previewUrl}
                      alt={image.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="text-white font-medium">{image.name}</div>
                      <div className="text-gray-400 text-sm">{formatFileSize(image.size)}</div>
                      <div className="text-purple-300 text-sm">Page {index + 1}</div>
                    </div>
                    
                    <button
                      onClick={() => removeImage(image.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900 hover:bg-opacity-30 rounded-lg transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-12 text-gray-400">
                <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg">No images uploaded yet</p>
                <p className="text-sm">Upload images to create your PDF</p>
              </div>
            )}

            {images.length > 0 && (
              <div className="p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
                <h4 className="text-sm font-semibold text-purple-200 mb-2">Preview Settings</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Page Size: {pdfSettings.pageSize} ({pdfSettings.orientation})</div>
                  <div>Quality: {pdfSettings.quality}%</div>
                  <div>Margin: {pdfSettings.margin}mm</div>
                  <div>Total Pages: {images.length}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JpgToPdfConverter; 