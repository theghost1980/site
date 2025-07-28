import type { RefObject } from 'react';

interface MusicSectionProps {
  audioRef: RefObject<HTMLAudioElement|null>;
  setIsPlaying: (playing: boolean) => void;
}

export function MusicSection({ audioRef, setIsPlaying }: MusicSectionProps) {
  return (
    <section id="music" className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-20 text-white">
      <div className="w-full max-w-5xl px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Un poco de Nuestra Música</h2>

        {/* Reproductor de audio local */}
        <p className="mb-4 text-center text-lg text-gray-300">Escucha un tema de estudio de Compass Venezuela aquí:</p>
        <audio
          ref={audioRef}
          controls
          className="mb-12 w-full rounded-lg"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/music/senor-de-senores-pasaje-pajarillo.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>

        <p className="mb-4 text-center text-lg text-gray-300">O escúchanos desde Youtube:</p>
        <iframe
          className="aspect-video w-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/uET3TxyTk_s?si=_ztlbEQNNYXAy5mJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="aspect-video w-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/g0wOBEAmc8I?si=Z4sAYKbaWePn5_M-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
