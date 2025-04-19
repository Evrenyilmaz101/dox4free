import React from 'react';

interface AdPlaceholderProps {
  format: 'leaderboard' | 'medium-rectangle' | 'skyscraper' | 'large-mobile';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ format, className = '' }) => {
  // Determine dimensions based on format
  let width = '';
  let height = '';

  switch (format) {
    case 'leaderboard':
      width = '728px';
      height = '90px';
      break;
    case 'medium-rectangle':
      width = '300px';
      height = '250px';
      break;
    case 'skyscraper':
      width = '160px';
      height = '600px';
      break;
    case 'large-mobile':
      width = '320px';
      height = '100px';
      break;
    default:
      width = '300px';
      height = '250px';
  }

  return (
    <div 
      className={`bg-gray-800 border border-gray-700 flex items-center justify-center ${className}`} 
      style={{ width, height, maxWidth: '100%' }}
    >
      <div className="text-gray-500 text-sm text-center px-4">
        <p>Advertisement</p>
        <p className="text-xs mt-1">(Google AdSense)</p>
      </div>
      
      {/* 
        This is a placeholder. When you're ready to implement real ads, 
        replace this div with the actual AdSense code, which will look something like:
        
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        
        And add the script to initialize it:
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
    </div>
  );
};

export default AdPlaceholder; 