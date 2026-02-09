import React from 'react';

const ImageCard = ({ src, alt, caption, rotate = 0 }) => {
  return (
    <div 
      className="bg-white p-4 rounded-md transform transition-transform hover:scale-105 hover:z-10 duration-300 border border-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:shadow-[0_0_50px_rgba(244,63,94,1)]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="h-48 w-48 overflow-hidden rounded-sm mb-4 bg-gray-100 flex items-center justify-center">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <p className="text-center font-handwriting text-rose-500 text-lg font-medium">
          {caption}
        </p>
      )}
    </div>
  );
};

export default ImageCard;
