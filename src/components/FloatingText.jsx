import React from 'react';

const FloatingText = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-rose-500/80 font-bold font-handwriting animate-float whitespace-nowrap select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            fontSize: `${Math.random() * 20 + 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          Abhishek ❤️
          Aas_hee_
        </div>
      ))}
    </div>
  );
};

export default FloatingText;
