import { Link } from 'react-router-dom';
import defaultImage from '../assets/default-image.svg';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${defaultImage})`}}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex min-h-[60vh] flex-col items-start justify-center gap-8 px-10 py-20 text-left">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter" style={{fontFamily: "'Poppins', sans-serif"}}>
              Welcome to NExGen International!
            </h1>
            <p className="text-lg md:text-xl font-normal leading-normal text-gray-200">
              We Ignite Dreams and Transform Communities
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 md:h-14 md:px-10 text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" style={{backgroundColor: 'var(--brand-teal)'}}>
              <span className="truncate">Explore Our Services</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 md:h-14 md:px-10 bg-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" style={{color: 'var(--brand-dark)'}}>
              <span className="truncate">Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
                <img src={defaultImage} alt="Entrepreneurial Dreams" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Do You Have a Personal or Business Objective?</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Let us help you move your entrepreneurial dreams into reality. From ideation to execution, we provide comprehensive support for startups, ensuring your venture takes off with confidence.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
                <img src={defaultImage} alt="Funding & Grants" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Seeking Funding or Grants?</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Navigating the world of funding and grants can be daunting. Our experienced professionals will guide you through the process, increasing your chances of securing the resources you need for growth and expansion.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
                <img src={defaultImage} alt="Personal Development" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Personal or Professional Development?</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Investing in yourself is the key to unlocking new opportunities. Our personalized development programs are designed to enhance your skills, boost your confidence, and position you for success in your chosen field.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
                <img src={defaultImage} alt="Training & Mentoring" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Training and Mentoring?</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Whether you're a budding professional or an established leader, our tailored training and mentoring programs will equip you with the knowledge and guidance you need to excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>What's Our Story?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                It begins with a simple belief; that by harnessing the collective passion and determination of visionaries and change-makers, we can uplift communities and create a ripple effect of hope, empowerment, and prosperity. As a social enterprise driven by purpose, we are your partner in this journey of transformation.
              </p>
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>Our Areas of Expertise:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Project Initiation and Development:</strong> From the spark of an idea to its full-fledged manifestation, our team of experts guides you through the entire project lifecycle.</li>
                <li>• <strong>Consulting Services:</strong> Tap into our wellspring of knowledge and experience as we provide practical, tailored advice.</li>
                <li>• <strong>Fundraising:</strong> Access our extensive network and proven strategies to secure the resources necessary.</li>
                <li>• <strong>Training and Capacity Building:</strong> Empower yourself and your team with the knowledge and skills.</li>
                <li>• <strong>Business and Proposal Development:</strong> Craft compelling narratives and business plans.</li>
              </ul>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden h-80 mb-8">
                <img src={defaultImage} alt="Our Story" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                WE ARE A MOVEMENT, a force that believes in the power of action to reshape the world we live in.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mt-4">
                By partnering with Nexgen, you gain access to a global community that supports changemakers, united in the pursuit of a brighter, more equitable future.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border-l-4" style={{borderColor: 'var(--brand-orange)'}}>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you're a social entrepreneur seeking guidance, a grassroots activist in need of resources, an entrepreneur seeking support, or an individual with a dream that burns brightly, we invite you to engage our services.
            </p>
            <p className="text-2xl font-bold" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>
              Come, let's help YOU unlock YOUR potential and amplify YOUR impact!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-10 text-center" style={{backgroundColor: 'var(--brand-teal)'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Ready to Transform Your Journey?</h2>
          <p className="text-white text-lg mb-8 opacity-90">Take the first step towards your goals – contact us now!</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-base font-bold rounded-full transition-transform hover:scale-105" style={{color: 'var(--brand-teal)'}}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold leading-tight tracking-tight" style={{color: 'var(--brand-dark)', fontFamily: "'Poppins', sans-serif"}}>Our Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((partner) => (
              <div key={partner} className="flex justify-center">
                <div className="w-32 h-32 bg-center bg-contain bg-no-repeat rounded-lg" style={{backgroundImage: `url(${defaultImage})`}}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services" className="p-6 border-2 rounded-lg text-center hover:shadow-lg transition-shadow" style={{borderColor: 'var(--brand-teal)'}}>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>Our Services</h3>
              <p className="text-gray-600">Learn about all the comprehensive services we offer.</p>
            </Link>
            <Link to="/team" className="p-6 border-2 rounded-lg text-center hover:shadow-lg transition-shadow" style={{borderColor: 'var(--brand-gray)'}}>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>Meet Our Team</h3>
              <p className="text-gray-600">Get to know the passionate people behind NexGen.</p>
            </Link>
            <Link to="/projects" className="p-6 border-2 rounded-lg text-center hover:shadow-lg transition-shadow" style={{borderColor: 'var(--brand-orange)'}}>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>Our Projects</h3>
              <p className="text-gray-600">Discover the impactful projects we're working on.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
