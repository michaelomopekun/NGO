import defaultImage from '../assets/default-image.svg';

export default function Projects() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Our Projects</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the heart of our work. We're dedicated to creating lasting, positive change in communities across the UK and West Africa through targeted, impactful projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* UK Projects */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-80 overflow-hidden">
                <img src={defaultImage} alt="UK Projects" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>UK Projects</h2>
                <p className="text-gray-700 mb-6">
                  In the UK, we're tackling societal challenges head-on. Our projects focus on youth mentorship, community integration for refugees, and promoting mental well-being in urban areas. We aim to build stronger, more resilient local communities from the ground up.
                </p>
                <button className="px-6 py-2 rounded-lg font-bold transition-transform hover:scale-105 text-white" style={{backgroundColor: 'var(--brand-teal)'}}>
                  Explore UK Initiatives
                </button>
              </div>
            </div>

            {/* West Africa Projects */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-80 overflow-hidden">
                <img src={defaultImage} alt="West Africa Projects" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>West Africa Projects</h2>
                <p className="text-gray-700 mb-6">
                  Our work in West Africa is centered on sustainable development. We implement clean water solutions, support small-scale farmers with climate-resilient agriculture techniques, and enhance access to primary education for children in remote villages.
                </p>
                <button className="px-6 py-2 rounded-lg font-bold transition-transform hover:scale-105 text-white" style={{backgroundColor: 'var(--brand-orange)'}}>
                  Discover West Africa Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold mb-3" style={{color: 'var(--brand-teal)'}}>150+</div>
              <p className="text-lg font-semibold text-gray-800">Projects Completed</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold mb-3" style={{color: 'var(--brand-orange)'}}>40+</div>
              <p className="text-lg font-semibold text-gray-800">Countries Impacted</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold mb-3" style={{color: 'var(--brand-gray)'}}>500K+</div>
              <p className="text-lg font-semibold text-gray-800">Lives Transformed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
