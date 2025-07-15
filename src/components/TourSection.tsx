export function TourSection() {
  const tourDates = [
    { date: '25 DIC, 2024', city: 'Madrid, ES', venue: 'Wizink Center' },
    { date: '28 DIC, 2024', city: 'Barcelona, ES', venue: 'Palau Sant Jordi' },
    { date: '15 ENE, 2025', city: 'Ciudad de México, MX', venue: 'Foro Sol' },
    { date: '20 ENE, 2025', city: 'Bogotá, CO', venue: 'Movistar Arena' },
  ];

  return (
    <section id="tour" className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-20 text-white">
      <div className="w-full max-w-5xl px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Próximas Fechas</h2>
        <ul className="space-y-6">
          {tourDates.map((item, index) => (
            <li key={index} className="flex items-center justify-between rounded-lg bg-gray-700 p-4">
              <div>
                <p className="text-lg font-semibold">{item.city}</p>
                <p className="text-sm text-gray-400">{item.venue}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-cyan-400">{item.date}</p>
                <a href="#" className="mt-1 inline-block rounded bg-cyan-500 px-3 py-1 text-sm hover:bg-cyan-600">Tickets</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
