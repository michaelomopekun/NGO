import { Link } from 'react-router-dom';
import defaultImage from '../assets/default-image.svg';

export default function AboutUs() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>About Us</h1>
          <p className="text-lg text-gray-700">
            We are NexGen International, a social enterprise dedicated to empowering communities and transforming lives through innovative programs and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden h-80">
              <img src={defaultImage} alt="Who We Are" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At the core of our organization lies a deep-rooted commitment to transforming lives and uplifting communities. We are driven by a VISION to create positive and lasting change for a better future.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through collaborative partnerships with faith-based groups, corporations, government parastatals, and individuals, we strive to develop innovative thinking, cultivate an entrepreneurial mindset, and promote sustainable ways of living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower groups and individuals by enhancing their capabilities, enabling them to actively participate in community development initiatives and projects. We believe in the power of diversity and aim to bring together people from all walks of life.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-orange)'}}>Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a brighter future for all, one community at a time. We work to develop skills, mobilize potential, and empower individuals to actively participate in community development and regeneration activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Integrity</h4>
              <p className="text-gray-600">We uphold the highest ethical standards in all our actions.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Collaboration</h4>
              <p className="text-gray-600">We believe in the power of partnerships to achieve shared goals.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Impact</h4>
              <p className="text-gray-600">We are committed to creating measurable and lasting positive change.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Sustainability</h4>
              <p className="text-gray-600">We prioritize long-term solutions that are environmentally and socially sustainable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Our Dedicated Team</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Our dedicated team of 20 professionals is the driving force behind our efforts.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 overflow-hidden">
                  <img src={defaultImage} alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1" style={{fontFamily: "'Poppins', sans-serif"}}>Team Member {i}</h4>
                  <p className="text-sm" style={{color: 'var(--brand-teal)'}}>Position</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/team" className="inline-block px-8 py-3 rounded-full font-bold transition-transform hover:scale-105" style={{backgroundColor: 'var(--brand-teal)', color: 'white'}}>
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>Find Us</h2>
          <div className="p-8 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Headquartered at:</strong>
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-2">The Sojourner Truth Centre</p>
            <p className="text-gray-700">161 Sumner Road, London SE15 6JL, United Kingdom</p>
          </div>
        </div>
      </section>
    </main>
  );
}
