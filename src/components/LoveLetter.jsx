import React, { useState } from "react";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Envelope Icon Trigger */}
      <div 
        className={`fixed top-4 right-4 z-50 cursor-pointer animate-bounce ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-white/80 p-3 rounded-full shadow-lg border border-rose-200 hover:scale-110 transition-transform">
          <span className="text-3xl" role="img" aria-label="letter">💌</span>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative bg-[#fff0f5] max-w-lg w-full p-8 rounded-2xl shadow-2xl transform transition-all scale-100 rotate-1 border-2 border-rose-200 paper-texture">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-rose-400 hover:text-rose-600 text-3xl font-bold"
            >
              &times;
            </button>

            {/* Letter Content */}
            <div className="text-center font-handwriting">
              <h2 className="text-3xl font-bold text-rose-600 mb-4">My Dearest Valentine,</h2>
              <p className="text-lg text-rose-800 leading-relaxed mb-6">
                Every moment with you is a gift I cherish. Your smile lights up my world in ways I never imagined possible.
                <br /><br />
                I wanted to create this little space just to ask you one special question, but also to remind you how much you mean to me.
                <br /><br />
                You are my favorite person, today and always.
              </p>
              <p className="text-xl font-bold text-rose-600">
                Forever Yours, ❤️
              </p>
            </div>
            
            {/* Decorative Stamps/Stickers */}
            <div className="absolute -top-4 -left-4 text-5xl rotate-[-15deg]">🌹</div>
            <div className="absolute -bottom-4 -right-4 text-5xl rotate-[15deg]">💋</div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoveLetter;
