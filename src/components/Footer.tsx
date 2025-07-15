import { FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black p-8 text-center text-gray-400">
      <div className="mb-4">
        <p className="text-lg font-bold">Compass Venezuela</p>
        <a
          href="mailto:saturnob612@gmail.com"
          className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
        >
          <FaEnvelope />
          <span>Contacto</span>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Compass Venezuela. Todos los derechos reservados.</p>
    </footer>
  );
}
