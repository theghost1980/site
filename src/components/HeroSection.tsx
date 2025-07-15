import { useState, useEffect } from 'react';

// Lista de imágenes de fondo para el carrusel.
// Asegúrate de que estas imágenes estén en tu carpeta `public/backgrounds/`.
const backgroundImages = [
  '/backgrounds/bg1.png',
  '/backgrounds/bg2.png',
  '/backgrounds/bg3.jpeg',
   '/backgrounds/bg4.png',
    '/backgrounds/bg5.jpeg',
    '/backgrounds/bg6.jpeg',
    '/backgrounds/bg7.jpeg',
    '/backgrounds/bg8.jpeg',
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCurrentImagePortrait, setIsCurrentImagePortrait] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  // Este efecto se ejecuta cada vez que cambia la imagen para determinar su orientación.
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImages[currentImageIndex];
    img.onload = () => {
      // Si la altura es mayor que el ancho, es una imagen de retrato.
      setIsCurrentImagePortrait(img.naturalHeight > img.naturalWidth);
    };
  }, [currentImageIndex]);

  const sectionStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
  };

  const backgroundClass = isCurrentImagePortrait ? 'bg-contain' : 'bg-cover';

  return (
    <section
      id="hero"
      style={sectionStyle}
      // La clase del fondo ahora es dinámica dependiendo de la orientación de la imagen.
      className={`relative h-screen bg-black bg-center bg-no-repeat transition-all duration-1000 ${backgroundClass}`}
    >
      {/* Overlay oscuro para mejorar la legibilidad del texto y el logo */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido centrado sobre el fondo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-around p-8 text-white">
        <img src="/logo.png" alt="Logo de la banda" className="h-3/5 w-auto max-w-full" />
        <div className="flex-shrink-0 text-center">
          <p className="mt-4 text-lg md:text-2xl">Un viaje sonoro inolvidable</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#music"
              className="w-full rounded-full bg-cyan-500 px-8 py-3 font-bold text-white transition duration-300 hover:bg-cyan-600 sm:w-auto"
            >
              Escucha Ahora
            </a>
            <a
              href="mailto:saturnob612@gmail.com"
              className="w-full rounded-full border-2 border-white/80 px-8 py-3 font-bold text-white transition duration-300 hover:bg-white hover:text-black sm:w-auto"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
