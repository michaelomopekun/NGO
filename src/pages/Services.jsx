import { Link } from 'react-router-dom';
import defaultImage from '../assets/default-image.svg';

export default function Services() {
  const services = [
    {
      title: 'Training and Development',
      description: 'Meticulously crafted training programs to empower organizations and individuals, enhancing capabilities and unlocking full potential.',
      courses: ['Social Enterprise', 'Business Fundraising', 'Management', 'Leadership and Governance Skills', 'Public Speaking', 'Capacity Building', 'Grant Writing', 'Social Entrepreneurship']
    },
    {
      title: 'Fundraising',
      description: 'Dedicated to empowering voluntary and community organizations by providing expert fundraising services. We assist over 500 organizations in securing funding.',
      courses: ['Fundraising Strategy Development', 'Grant Writing', 'Donor Relations', 'Campaign Planning']
    },
    {
      title: 'Consulting Services',
      description: 'Renowned for our ability to listen and provide bespoke solutions. Our consultancy services offer invaluable guidance to organizations of all sizes.',
      courses: ['Project Implementation', 'Idea Development', 'Leadership Strategies', 'Funding Advisory', 'Strategic Planning']
    },
    {
      title: 'Support Programmes',
      description: 'Impactful support programmes that uplift and empower communities across the UK and Africa.',
      courses: ['Community Development', 'Capacity Building', 'Empowerment Initiatives', 'Sustainability Programs']
    },
    {
      title: 'Business Start-ups for Women',
      description: 'Dedicated to creating a harmonious balance between personal/family life and business through personalized assessments.',
      courses: ['Business Idea Selection', 'Business Plan Creation', 'Funding Access', 'Mentorship', 'Support System']
    },
    {
      title: 'Training for Service Industries',
      description: 'Equip your organization with skills needed to achieve your goals and enhance customer service excellence.',
      courses: ['Customer Service Excellence', 'Technical Support', 'Field Service Training', 'Industry Standards']
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-gray-100 to-white py-16 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Our Services</h1>
          <p className="text-lg text-gray-700">
            Partners in Progress: Our services are renowned for delivering exceptional value, going above and beyond expectations, and providing an eye-opening experience that transforms lives and organizations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 border-2 rounded-lg hover:shadow-lg transition-shadow" style={{borderColor: idx % 3 === 0 ? 'var(--brand-teal)' : idx % 3 === 1 ? 'var(--brand-orange)' : 'var(--brand-gray)'}}>
                <h3 className="text-2xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Key Areas:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.courses.map((course, i) => (
                      <li key={i}>• {course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-10" style={{backgroundColor: 'var(--brand-teal)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Explore Our Training Programs</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Discover the full range of our training courses and how we can propel your growth journey.
          </p>
          <Link to="/training" className="inline-block px-8 py-3 bg-white font-bold rounded-full transition-transform hover:scale-105" style={{color: 'var(--brand-teal)'}}>
            Training & Career
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Why Choose NexGen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg text-center">
              <div className="text-4xl font-bold mb-3" style={{color: 'var(--brand-teal)'}}>20+</div>
              <h4 className="text-lg font-bold mb-2">Years of Experience</h4>
              <p className="text-gray-600">Over two decades of proven success in training and consultancy.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center">
              <div className="text-4xl font-bold mb-3" style={{color: 'var(--brand-orange)'}}>500+</div>
              <h4 className="text-lg font-bold mb-2">Organizations Served</h4>
              <p className="text-gray-600">Trusted by hundreds of organizations across the UK and Africa.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center">
              <div className="text-4xl font-bold mb-3" style={{color: 'var(--brand-gray)'}}>100%</div>
              <h4 className="text-lg font-bold mb-2">Tailored Solutions</h4>
              <p className="text-gray-600">Every program is customized to meet your unique needs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
