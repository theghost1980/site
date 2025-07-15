// /src/App.tsx
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MusicSection } from './components/MusicSection';
import { Navbar } from './components/Navbar';
import { TourSection } from './components/TourSection';
import { useState, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement|null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      // El estado se actualiza automáticamente por los eventos onPlay/onPause del <audio>
    }
  };

  return (
    <main>
      <Navbar isPlaying={isPlaying} onTogglePlay={togglePlayPause} />
      <HeroSection />
      <AboutSection />
      <MusicSection audioRef={audioRef} setIsPlaying={setIsPlaying} />
      <TourSection /> 
      <Footer />
    </main>
  );
}

export default App;
