import React, { useState, useRef, useEffect } from "react";
import music1 from "../assets/music1.mp3";
import music2 from "../assets/music2.mp3";

const MusicPlayer = ({ yesPressed }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Default to music1
  const audioRef = useRef(null);

  const songs = [
    { src: music1, title: "Music 1" }, // First page song
    { src: music2, title: "Music 2" }  // Success page song
  ];

  // Auto-switch song based on yesPressed
  useEffect(() => {
    if (yesPressed) {
      setCurrentSongIndex(1); // Switch to music2
    } else {
      setCurrentSongIndex(0); // Switch to music1
    }
    // Also ensure it plays when switching context if it wasn't already? 
    // Usually user interaction is needed first, but let's try to autoplay.
    setIsPlaying(true);
  }, [yesPressed]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
          .catch((error) => console.log("Playback failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]); // Re-run when song or play state changes

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
      <div className="w-auto bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg border border-rose-200 flex items-center gap-3">
        <audio ref={audioRef} src={songs[currentSongIndex].src} loop />
        
        <button 
          onClick={togglePlay}
          className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white hover:bg-rose-600 transition-colors shadow-md"
        >
          {isPlaying ? (
            <span className="text-xl">⏸</span>
          ) : (
            <span className="text-xl pl-1">▶</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
