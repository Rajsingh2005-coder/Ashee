import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import lala1 from "./assets/lala1.jpeg";
import lala2 from "./assets/lala2.jpeg";
import image1 from "./assets/image1.jpeg";
import MusicPlayer from "./components/MusicPlayer";
import LoveLetter from "./components/LoveLetter";
import ImageCard from "./components/ImageCard";

import ReasonsGallery from "./components/ReasonsGallery";
import FloatingText from "./components/FloatingText";
import backgroundImage from "./assets/bg1.webp";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    console.log("No clicked");
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 selection:bg-rose-600 selection:text-white text-zinc-900 relative overflow-x-hidden">
      
      {/* Background Image - Fixed Layer */}
      <div 
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
             <div 
                key={i} 
                className="absolute text-rose-300 animate-float"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    fontSize: `${Math.random() * 20 + 10}px`
                }}
             >
                ❤
             </div>
          ))}
      </div>

      <FloatingText />
      <MusicPlayer yesPressed={yesPressed} />

      {yesPressed ? (
        <>
          <LoveLetter />
           <div className="flex flex-wrap justify-center gap-6 mt-8 z-10 w-full px-4">
             <ImageCard 
               src={lala2} 
               alt="Us" 
               caption="Us Forever ❤️" 
               rotate={-5}
             />
             <ImageCard 
               src={lala1} 
               alt="Memories" 
               caption="Making Memories ✨" 
               rotate={5}
             />

             <ImageCard 
               src={image1} 
               alt="Memories" 
               caption="Us Forever ✨" 
               rotate={-5}
             />

            
          </div>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4 text-center text-rose-600">
            Ok Yayyyyy!!! <br/>
            I love you so much! <span className="text-pink-800 font-handwriting">Abhishek</span> ❤️
          </div>

          

          

          {/* Simple CSS Confetti */}
           <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
            <div className="w-full h-full bg-[url('https://i.gifer.com/origin/fa/fa062725553e414c9c10bc93160a37e9_w200.gif')] bg-cover opacity-30"></div>
           </div>
           
           <ReasonsGallery />
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center font-bold text-rose-600">
            Will you be my Valentine?
          </h1>



          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4 transition-all duration-300`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 transition-all duration-300"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
