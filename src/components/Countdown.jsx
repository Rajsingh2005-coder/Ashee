import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    // Set for Feb 14 of current or next year
    const now = new Date();
    let year = now.getFullYear();
    const valentineDate = new Date(year, 1, 14); // Month is 0-indexed, so 1 is Feb

    if (now > valentineDate) {
      year += 1; // If passed, count to next year
    }
    
    const target = new Date(year, 1, 14);
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    return (
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
        <span className="text-3xl md:text-5xl font-bold text-rose-600 font-handwriting">
          {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
        </span>
        <span className="text-xs md:text-sm uppercase tracking-wider text-rose-400">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in">
      <h2 className="text-xl md:text-2xl text-rose-500 font-light mb-4">Time until Valentine's Day</h2>
      <div className="flex justify-center items-center bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg border border-white/50">
        {timerComponents}
      </div>
    </div>
  );
};

export default Countdown;
