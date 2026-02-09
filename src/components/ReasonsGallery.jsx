import React, { useState } from 'react';

const reasons = [
  "Your smile lights up my entire world ✨",
  "You make me laugh even when I don't want to 😂",
  "You support my dreams like no one else 🚀",
  "The way you look at me makes me melt 🫠",
  "You give the best hugs 🤗",
  "You are my safe place 🏠",
  "We can talk about anything and everything 🗣️",
  "You make even boring days fun 🎉",
  "I love how kind your heart is ❤️",
  "You are simply perfect to me! 💯"
];

const ReasonsGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReason = () => {
        setCurrentIndex((prev) => (prev + 1) % reasons.length);
    };

    return (
        <div className="w-full max-w-md mx-auto mt-12 mb-8 p-6 text-center">
            <h3 className="text-3xl font-bold text-rose-600 mb-6 font-handwriting">
                Reasons Why I Love You
            </h3>
            
            <div 
                onClick={nextReason}
                className="relative bg-white h-64 rounded-xl shadow-xl p-8 flex items-center justify-center cursor-pointer transform hover:scale-105 transition-all duration-300 group border-2 border-rose-100"
            >
                 <div className="absolute top-4 right-4 text-rose-200 group-hover:text-rose-400 transition-colors">
                    Click me 👆
                </div>
                
                <p className="text-2xl text-zinc-700 font-medium leading-relaxed font-handwriting select-none">
                    {reasons[currentIndex]}
                </p>

                <div className="absolute bottom-4 flex gap-1">
                    {reasons.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-rose-500 w-4' : 'bg-rose-200'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReasonsGallery;
