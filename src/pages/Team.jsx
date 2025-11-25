import defaultImage from '../assets/default-image.svg';

export default function Team() {
  const coreTeam = [
    {
      name: 'SHOLA LANA',
      role: 'CEO/Portfolio Development Director',
      bio: 'Shola is a seasoned professional with over 30 years of diverse experience in training, capacity building, and community empowerment. She serves as the Founding Projects Director of Nexgen International.'
    },
    {
      name: "'NOLA ONOJOBI",
      role: 'Partner/Project Development Strategist',
      bio: 'Nola is a multi-talented professional with expertise in business development, project strategy, and sustainability. With over two decades of experience, Nola provides invaluable guidance to individuals and organizations.'
    }
  ];

  const trainers = [
    {
      name: 'EKUNDAYO AKANDE',
      role: 'Grant Writer',
      bio: 'Distinguished International Arbitrator with 25+ years of experience in commercial contracts and stakeholder management.'
    },
    {
      name: 'Dr. STEPHEN OKORO',
      role: 'Grant Writer',
      bio: 'Seasoned physician with 34+ years of experience and commitment to preventive health and wellness initiatives.'
    },
    {
      name: 'GOSPEL OBELE',
      role: 'Grant Writer',
      bio: 'Consummate professional research economist with expertise across 15+ sectors and 40 markets.'
    },
    {
      name: 'DANIEL AMOAH',
      role: 'Consultant',
      bio: 'Accomplished professional integrating strategic business acumen with advanced analytical capabilities.'
    },
    {
      name: 'MOSES ADEKOJE',
      role: 'Grant Writer & Project Manager',
      bio: 'Highly driven Project Manager with proven track record in strategic planning and digital product design.'
    },
    {
      name: 'CARLA AMOAH',
      role: 'Grant Writer',
      bio: 'Accomplished professional with a decade of experience in education, psychology, and child development.'
    }
  ];

  const collaborators = [
    {
      name: 'TOKUNBO SONOWO',
      role: 'Recruitment Consultant',
      bio: 'Visionary recruitment consultant empowering ethnic minorities in accessing job opportunities across sectors.'
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Meet Our Team</h1>
          <p className="text-lg text-gray-700">
            We are a passionate group of innovators, dreamers, and doers dedicated to making a positive impact on the world.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Core Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden">
                  <img src={defaultImage} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h3>
                <p className="text-lg font-semibold mb-4" style={{color: 'var(--brand-teal)'}}>{member.role}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Trainers & Specialists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={defaultImage} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{color: 'var(--brand-orange)'}}>{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Collaborators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map((member, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={defaultImage} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{color: 'var(--brand-gray)'}}>{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-10" style={{backgroundColor: 'var(--brand-teal)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Join Our Mission</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Interested in joining our team of changemakers? We're always looking for passionate individuals to help us make a difference.
          </p>
          <button className="px-8 py-3 bg-white font-bold rounded-lg transition-transform hover:scale-105" style={{color: 'var(--brand-teal)'}}>
            View Open Positions
          </button>
        </div>
      </section>
    </main>
  );
}
