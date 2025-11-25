import defaultImage from '../assets/default-image.svg';

export default function Clients() {
  const clients = [
    { name: 'Client 1', region: 'UK' },
    { name: 'Client 2', region: 'UK' },
    { name: 'Client 3', region: 'UK' },
    { name: 'Client 4', region: 'West Africa' },
    { name: 'Client 5', region: 'West Africa' },
    { name: 'Client 6', region: 'West Africa' },
    { name: 'Client 7', region: 'Europe' },
    { name: 'Client 8', region: 'Europe' },
  ];

  const ukClients = clients.filter(c => c.region === 'UK').sort((a, b) => a.name.localeCompare(b.name));
  const africaClients = clients.filter(c => c.region === 'West Africa').sort((a, b) => a.name.localeCompare(b.name));
  const europeClients = clients.filter(c => c.region === 'Europe').sort((a, b) => a.name.localeCompare(b.name));

  const ClientLogo = ({ name, className = "w-32 h-32" }) => (
    <div className={`${className} bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center`}>
      <img src={defaultImage} alt={name} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Our Clients & Partners</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are proud to work with a diverse range of organizations, from government agencies to grassroots nonprofits, across multiple continents.
          </p>
        </div>
      </section>

      {/* UK Clients */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>United Kingdom</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {ukClients.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <ClientLogo name={client.name} className="w-28 h-28" />
                <p className="text-center text-sm text-gray-600">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* West Africa Clients */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>West Africa</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {africaClients.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <ClientLogo name={client.name} className="w-28 h-28" />
                <p className="text-center text-sm text-gray-600">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Clients */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Europe</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {europeClients.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <ClientLogo name={client.name} className="w-28 h-28" />
                <p className="text-center text-sm text-gray-600">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 px-10" style={{backgroundColor: 'var(--brand-teal)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Become a Partner</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            We welcome partnerships with organizations that share our vision for positive change.
          </p>
          <button className="px-8 py-3 bg-white font-bold rounded-lg transition-transform hover:scale-105" style={{color: 'var(--brand-teal)'}}>
            Explore Partnership Opportunities
          </button>
        </div>
      </section>
    </main>
  );
}
