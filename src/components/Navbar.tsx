import { useEffect, useState } from 'react';
import { FaBars, FaPause, FaPlay } from 'react-icons/fa';

interface NavbarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function Navbar({ isPlaying, onTogglePlay }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Un pequeño umbral para que el efecto no se active inmediatamente
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // La barra principal ahora tiene un fondo con efecto "blur" que aparece al hacer scroll
  // Aumentamos el z-index a 50 para asegurar que esté por encima de todo.
   const navClasses = `fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    isScrolled ? 'bg-black/50 shadow-lg backdrop-blur-sm' : 'bg-transparent'
  }`;

  // Estilos para cada enlace individual
  const linkClasses =
    'rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg';

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
     <>
      <nav className={navClasses}>
        <div className="mx-auto flex max-w-6xl items-center justify-center p-4">
          {/* Menú para Escritorio */}
          <ul className="hidden list-none items-center justify-center space-x-2 md:flex md:space-x-4">
            <li><a href="#hero" className={linkClasses}>Inicio</a></li>
            <li><a href="#about" className={linkClasses}>Nosotros</a></li>
            <li>
              <button onClick={onTogglePlay} className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none">
                {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} className="ml-1" />}
              </button>
            </li>
            <li><a href="#music" className={linkClasses}>Música</a></li>
            <li><a href="#tour" className={linkClasses}>Conciertos</a></li>
          </ul>

          {/* Botón de Menú para Móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-white focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay del Menú Móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-black/95 text-white">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-3xl text-white">&times;</button>
          <ul className="flex flex-col items-center gap-8 text-2xl">
            <li><a href="#hero" onClick={handleLinkClick}>Inicio</a></li>
            <li><a href="#about" onClick={handleLinkClick}>Nosotros</a></li>
            <li><a href="#music" onClick={handleLinkClick}>Música</a></li>
            <li><a href="#tour" onClick={handleLinkClick}>Conciertos</a></li>
          </ul>
          <button onClick={onTogglePlay} className="flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 text-lg font-bold text-white">
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span>{isPlaying ? 'Pausar Música' : 'Reproducir Música'}</span>
          </button>
        </div>
      )}
    </>
  );
}