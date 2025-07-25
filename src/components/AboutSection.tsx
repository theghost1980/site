import { useState } from 'react';
import { FaGuitar, FaMicrophone } from 'react-icons/fa';
import { GiDrum } from 'react-icons/gi';
import { PiGuitarFill } from 'react-icons/pi';
import { GiFlute } from "react-icons/gi";

// Definimos la estructura de datos para un músico
interface Musician {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  instruments: string[];
}

// Datos de los músicos.
const musicians: Musician[] = [
  {
    id: 0,
    name: 'Saturno Mangieri',
    role: 'Multi-instrumentista, Cantante',
    bio: 'Apasionado cantante y percusionista que ha grabado producciones musicales en Venezuela y a nivel internacional. Músico de guataca con corazón.',
    avatar: '/avatars/saturno.png',
    instruments: ['voice', 'guitar', 'percussion'],
  },
  {
    id: 1,
    name: 'Adrián Cedeño',
    role: 'Multi-instrumentista, Cantante y Arreglista',
    bio: 'Músico desde muy temprana edad, que ha defendido, valorado y practicado el folklore venezolano. Pertenece al sistema de orquestas de Venezuela y su energía y pasión por la música, no tienen límites',
    avatar: '/avatars/adrian.JPG',
    instruments: ['voice', 'cuatro', 'percussion'],
  },
  {
    id: 2,
    name: 'Hanuman Sánchez',
    role: 'Multi-instrumentista, Cantante y Percusionista Profesional',
    bio: 'Hijo de padres músicos, egresado del sistema de orquestas de la Fundación Conservatorio "Vicente Emilio Sojo". Ha participado activamente en muchos escenarios y podemos decir que su corazón late al ritmo latino y tradicional.',
    avatar: '/avatars/hanuman.jpeg',
    instruments: ['voice', 'percussion', 'cuatro'],
  },
  {
    id: 3,
    name: 'Guillermo Tona',
    role: 'Multi-instrumentista y Cantante',
    bio: 'Proveniente de una larga tradición de familia de músicos, ha compartido con nosotros desde que tengo memoria musical. Guillermo es cantante, compositor y ha participado en varias grabaciones profesionales.',
    avatar: '/avatars/guillermo.jpeg',
    instruments: ['voice', 'guitar', 'cuatro'],
  },
  {
    id: 4,
    name: 'Williams Reinoso',
    role: 'Multi-instrumentista y Cantante',
    bio: 'Es un músico con amplia trayectoria que ha pertenecido a muchas agrupaciones en Barquisimeto, su ciudad natal. Además de apoyarnos con su oido absoluto, nos deleita con el juego en las cuerdas como ningún otro.',
    avatar: '/avatars/williams.JPG',
    instruments: ['voice', 'guitar', 'cuatro'],
  },
  {
    id: 5,
    name: 'Rama Tona',
    role: 'Flauta Traversa y Cantante',
    bio: 'Músico egresado del Sistema Nacional de Orquestas de Venezuela. Cuenta con amplia trayectoria a nivel musical y proviene de una familia de músicos. Nos deleita con su amplio desempeño para tocar y cantar múltiples generos y estilos musicales.',
    avatar: '/avatars/rama.jpeg',
    instruments: ['flute','voice'],
  },
  {
    id: 6,
    name: 'Juan S. Reinoso',
    role: 'Flauta Dulce, percusión y Cantante',
    bio: 'Jóven músico que pertenece al sistema de orquestas juveniles del Estado Lara en su Sistema de Iniciación Musical Simón Bolívar, Venezuela. Juan proviene de una larga tradición de músicos y nos deleita con su flauta, acompañamientos de percusión y su voz.',
    avatar: '/avatars/juan.jpeg',
    instruments: ['flute','voice', 'percussion'],
  },
   {
    id: 7,
    name: 'Nadir Sánchez',
    role: 'Guitarra y Cantante',
    bio: 'Músico de larga trayectoria, compositor y arreglista. Nadir ha dedicado su vida a cantar la música que nos conecta con lo divino, en todas sus formas y nombres. Ha participado en diferentes agrupaciones y ha grabado varios albumes de World Music.',
    avatar: '/avatars/nadir.jpeg',
    instruments: ['guitar','voice'],
  },
];

// Mapeo de nombres de instrumentos a componentes de íconos
const instrumentIcons: Record<string, React.ReactNode> = {
  voice: <FaMicrophone title="Voz" />,
  guitar: <FaGuitar title="Guitarra" />,
  percussion: <GiDrum title="Percusión" />,
   cuatro: <PiGuitarFill title="Cuatro" />,
   flute: <GiFlute title="Flauta" />,
};

// Mapeo de nombres de instrumentos a enlaces de Wikipedia
const instrumentWikiLinks: Record<string, string> = {
  voice: 'https://es.wikipedia.org/wiki/Voz_(m%C3%BAsica)',
  guitar: 'https://es.wikipedia.org/wiki/Guitarra',
  percussion: 'https://es.wikipedia.org/wiki/Instrumento_de_percusi%C3%B3n',
  cuatro: 'https://es.wikipedia.org/wiki/Cuatro_(instrumento)',
  flute: 'https://es.wikipedia.org/wiki/Flauta',
};

export function AboutSection() {
  const [selectedMusician, setSelectedMusician] = useState<Musician | null>(null);

  const handleCloseCard = () => {
    setSelectedMusician(null);
  };

  return (
    <>
      <section id="about" className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-20 text-white">
        {/* Contenido de la sección */}
        <div className="w-full max-w-6xl px-8">
          <h2 className="mb-12 text-center text-4xl font-bold">Sobre Nosotros</h2>

          {/* Contenedor de dos columnas para imagen e historia */}
          <div className="mb-20 flex flex-col items-center gap-12 md:flex-row">
            {/* Columna de la imagen */}
            <div className="md:w-2/5">
              <img
                src="/backgrounds/trip.png"
                alt="El ensamble Compass Venezuela"
                className="aspect-square w-full rounded-lg object-cover shadow-2xl"
              />
            </div>
            {/* Columna del texto */}
            <div className="md:w-3/5">
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                El ensamble Compass Venezuela, es una agrupación que nace con el propósito de representar a Venezuela en una presentación cultural que tendrá lugar en la India, específicamente en Muddenahalli con motivo a la celebración del aniversario número 100 de Sai Baba. Nosotros hemos estado en el camino musical desde hace mucho e incluso somos como una familia. Nuestro grupo quiere llevar un compendio de géneros musicales que van desde el Joropo, la Gaita Zuliana, el Golpe Tocuyano, hasta la Parranda y el afrovenezolano.
              </p>
              <p className="mt-6 text-lg font-semibold italic text-cyan-400">
                Los Sueños y deseos hacia Dios, se hacen realidad
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                Siempre hemos utilizado la música como la expresión mas pura de nuestro sentir y nuestra cultura. Dios nos ha regalado un viaje único para ir a India y poder llevar una muestra de folklore. Este viaje y esta oportunidad son un milagro en sí mismo. El simple hecho de que podamos llevar a los más jóvenes a cantar y tocar para miles de personas, da fe de que el amor y las buenas acciones siempre seran recompensados.
              </p>
            </div>
          </div>

          {/* Parte 2: Miembros de la banda */}
          <div className="text-center">
            <h3 className="mb-10 text-3xl font-bold">Miembros</h3>
            <p className="mx-auto mb-12 -mt-6 max-w-3xl text-gray-400">
              Justo acá debajo puedes ver la información de cada músico.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {musicians.map((musician) => (
                <div
                  key={musician.id}
                  className="cursor-pointer text-center transition-transform duration-300 hover:scale-110"
                  onClick={() => setSelectedMusician(musician)}
                >
                  <img
                    src={musician.avatar}
                    alt={musician.name}
                    className="mx-auto h-32 w-32 rounded-full border-4 border-cyan-500 bg-gray-700 object-cover"
                  />
                  <p className="mt-4 font-semibold">{musician.name}</p>
                  <p className="text-sm text-gray-400">{musician.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tarjeta de información del músico (Modal) */}
      {selectedMusician && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={handleCloseCard}>
          <div className="relative w-full max-w-md rounded-lg bg-gray-900 p-8 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseCard} className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-cyan-400">&times;</button>
            <div className="text-center">
              <img src={selectedMusician.avatar} alt={selectedMusician.name} className="mx-auto h-56 w-56 rounded-full border-4 border-cyan-500 bg-gray-700 object-cover" />
              <h4 className="mt-6 text-3xl font-bold text-white">{selectedMusician.name}</h4>
              <p className="text-lg text-cyan-400">{selectedMusician.role}</p>
              <p className="mt-4 text-gray-300">{selectedMusician.bio}</p>

              {/* Sección de Instrumentos con Íconos */}
              {selectedMusician.instruments.length > 0 && (
                <div className="mt-8 border-t border-gray-700 pt-6">
                  <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Instrumentos</h5>
                  <div className="flex items-center justify-center gap-8 text-3xl text-cyan-400">
                    {selectedMusician.instruments.map((instrument) => (
                      <a
                        key={instrument}
                        href={instrumentWikiLinks[instrument]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-125"
                      >
                        {instrumentIcons[instrument]}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}