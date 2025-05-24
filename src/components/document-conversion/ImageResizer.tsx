import React, { useState, useRef } from 'react';

interface ImageFile {
  id: string;
  name: string;
  size: number;
  originalDimensions: { width: number; height: number };
  file: File;
  previewUrl: string;
}

interface ResizeSettings {
  width: number;
  height: number;
  quality: number;
  format: 'jpeg' | 'png' | 'webp';
  maintainAspectRatio: boolean;
}

const ImageResizer: React.FC = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [resizeSettings, setResizeSettings] = useState<ResizeSettings>({
    width: 800,
    height: 600,
    quality: 80,
    format: 'jpeg',
    maintainAspectRatio: true
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    Array.from(selectedFiles).forEach(file => {
      if (file.type.startsWith('image/')) {
        const img = new Image();
        const url = URL.createObjectURL(file);
        
        img.onload = () => {
          const imageFile: ImageFile = {
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: file.size,
            originalDimensions: { width: img.width, height: img.height },
            file,
            previewUrl: url
          };
          setImages(prev => [...prev, imageFile]);
        };
        
        img.src = url;
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

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const updateDimensions = (dimension: 'width' | 'height', value: number) => {
    if (resizeSettings.maintainAspectRatio && images.length > 0) {
      const aspectRatio = images[0].originalDimensions.width / images[0].originalDimensions.height;
      
      if (dimension === 'width') {
        setResizeSettings(prev => ({
          ...prev,
          width: value,
          height: Math.round(value / aspectRatio)
        }));
      } else {
        setResizeSettings(prev => ({
          ...prev,
          height: value,
          width: Math.round(value * aspectRatio)
        }));
      }
    } else {
      setResizeSettings(prev => ({
        ...prev,
        [dimension]: value
      }));
    }
  };

  const processImages = async () => {
    if (images.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, this would use Canvas API or server-side processing
    setIsProcessing(false);
    
    // Show demo result
    alert(`Demo: ${images.length} images would be resized to ${resizeSettings.width}x${resizeSettings.height} at ${resizeSettings.quality}% quality and downloaded as ${resizeSettings.format.toUpperCase()}`);
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
          Image Resizer
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-200">Resize Settings</h3>
            
            {/* Dimensions */}
            <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Dimensions</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Width (px)</label>
                    <input
                      type="number"
                      min="1"
                      max="4000"
                      value={resizeSettings.width}
                      onChange={(e) => updateDimensions('width', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Height (px)</label>
                    <input
                      type="number"
                      min="1"
                      max="4000"
                      value={resizeSettings.height}
                      onChange={(e) => updateDimensions('height', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="aspectRatio"
                    checked={resizeSettings.maintainAspectRatio}
                    onChange={(e) => setResizeSettings(prev => ({ ...prev, maintainAspectRatio: e.target.checked }))}
                    className="rounded border-gray-600 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="aspectRatio" className="text-sm text-gray-300">
                    Maintain aspect ratio
                  </label>
                </div>
              </div>
            </div>

            {/* Quality & Format */}
            <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Quality & Format</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Quality: {resizeSettings.quality}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={resizeSettings.quality}
                    onChange={(e) => setResizeSettings(prev => ({ ...prev, quality: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Lower size</span>
                    <span>Higher quality</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Output Format</label>
                  <select
                    value={resizeSettings.format}
                    onChange={(e) => setResizeSettings(prev => ({ ...prev, format: e.target.value as any }))}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  >
                    <option value="jpeg">JPEG (smaller file size)</option>
                    <option value="png">PNG (lossless, transparency)</option>
                    <option value="webp">WebP (modern format)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Presets</h4>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'HD', width: 1920, height: 1080 },
                  { name: 'Instagram', width: 1080, height: 1080 },
                  { name: 'Thumbnail', width: 400, height: 300 },
                  { name: 'Avatar', width: 200, height: 200 }
                ].map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => setResizeSettings(prev => ({ 
                      ...prev, 
                      width: preset.width, 
                      height: preset.height 
                    }))}
                    className="px-4 py-2 bg-gray-800 hover:bg-purple-900 hover:bg-opacity-30 border border-gray-600 hover:border-purple-500 rounded-lg text-white text-sm transition-all duration-200"
                  >
                    {preset.name}
                    <div className="text-xs text-gray-400">{preset.width}×{preset.height}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Process Button */}
            {images.length > 0 && (
              <button
                onClick={processImages}
                disabled={isProcessing}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Images...</span>
                  </div>
                ) : (
                  `Resize ${images.length} Image${images.length > 1 ? 's' : ''}`
                )}
              </button>
            )}
          </div>

          {/* Images Preview */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-200">
              Images ({images.length})
            </h3>
            
            {images.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {images.map((image) => (
                  <div key={image.id} className="flex items-center space-x-4 p-4 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-800">
                    <img
                      src={image.previewUrl}
                      alt={image.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="text-white font-medium">{image.name}</div>
                      <div className="text-gray-400 text-sm">
                        {image.originalDimensions.width}×{image.originalDimensions.height} • {formatFileSize(image.size)}
                      </div>
                      <div className="text-purple-300 text-sm">
                        → {resizeSettings.width}×{resizeSettings.height} • {resizeSettings.format.toUpperCase()}
                      </div>
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
              <div className="text-center p-8 text-gray-400">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>No images uploaded yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageResizer; 