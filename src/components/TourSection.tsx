export function TourSection() {
  const tourDates = [
    { date: '02 AGO, 2025', city: 'Barquisimeto, VE', venue: 'Apertura Negocio Carolinita' },
    { date: '28 OCT, 2025', city: 'Muddenahalli, IN', venue: 'Ashram Muddenahalli' },
    { date: '23 NOV, 2025', city: 'Muddenahalli, IN', venue: 'Ashram Muddenahalli' },
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
