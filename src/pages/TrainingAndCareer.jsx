import defaultImage from '../assets/default-image.svg';

export default function TrainingAndCareer() {
  const trainingCourses = [
    {
      title: 'Social Enterprise',
      description: 'Learn the fundamentals of building and scaling a social enterprise with impact.',
      duration: 'Flexible'
    },
    {
      title: 'Business Fundraising',
      description: 'Master the art of securing funding for your business initiatives.',
      duration: 'Flexible'
    },
    {
      title: 'Management',
      description: 'Develop essential management skills for organizational success.',
      duration: 'Flexible'
    },
    {
      title: 'Leadership and Governance Skills Development',
      description: 'Enhance your leadership capabilities and governance knowledge.',
      duration: 'Flexible'
    },
    {
      title: 'Public Speaking',
      description: 'Build confidence and master the art of effective public speaking.',
      duration: 'Flexible'
    },
    {
      title: 'Capacity Building',
      description: 'Strengthen your teams capabilities and organizational capacity.',
      duration: 'Flexible'
    },
    {
      title: 'Grant Writing and Proposal Development',
      description: 'Learn to craft compelling grant proposals that secure funding.',
      duration: 'Flexible'
    },
    {
      title: 'Social Entrepreneurship and Enterprise Incubation',
      description: 'Transform your social enterprise idea into a sustainable business.',
      duration: 'Flexible'
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-linear-to-r from-gray-100 to-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Training & Career Development</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Nexgen, our training and development services are meticulously crafted to empower both organizations and individuals. Discover how we can propel your growth journey.
          </p>
        </div>
      </section>

      {/* Training Overview */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 rounded-lg overflow-hidden">
              <img src={defaultImage} alt="Training Programs" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Our Approach</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Through a personalized needs assessment approach, we ensure that our training solutions are tailored to meet the unique requirements of every participant. Our comprehensive training programs are designed to strengthen the specific skills each participant needs to improve, elevating their knowledge and expertise to new heights.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl mr-3" style={{color: 'var(--brand-teal)'}}>✓</span>
                  <span>Personalized needs assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" style={{color: 'var(--brand-teal)'}}>✓</span>
                  <span>Hands-on practical training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" style={{color: 'var(--brand-teal)'}}>✓</span>
                  <span>Ongoing mentorship and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3" style={{color: 'var(--brand-teal)'}}>✓</span>
                  <span>Industry-recognized certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Courses */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Available Training Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingCourses.map((course, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-l-4 hover:shadow-lg transition-shadow" style={{borderColor: idx % 3 === 0 ? 'var(--brand-teal)' : idx % 3 === 1 ? 'var(--brand-orange)' : 'var(--brand-gray)'}}>
                <h3 className="text-xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                  <button className="text-sm font-semibold" style={{color: 'var(--brand-teal)'}}>Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Why Choose Our Training?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center">
              <div className="text-5xl font-bold mb-4" style={{color: 'var(--brand-teal)'}}>20+</div>
              <h4 className="text-xl font-bold mb-3">Years of Excellence</h4>
              <p className="text-gray-600">Delivering quality training and development programs for over two decades.</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-5xl font-bold mb-4" style={{color: 'var(--brand-orange)'}}>1000+</div>
              <h4 className="text-xl font-bold mb-3">Professionals Trained</h4>
              <p className="text-gray-600">Successfully trained thousands of individuals and organizational teams.</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-5xl font-bold mb-4" style={{color: 'var(--brand-gray)'}}>100%</div>
              <h4 className="text-xl font-bold mb-3">Success Focused</h4>
              <p className="text-gray-600">Tailored approach ensuring every participant achieves their learning objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-10" style={{backgroundColor: 'var(--brand-teal)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Ready to Advance Your Skills?</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Take the next step in your professional journey with NexGen's transformative training programs.
          </p>
          <button className="px-8 py-3 bg-white font-bold rounded-lg transition-transform hover:scale-105" style={{color: 'var(--brand-teal)'}}>
            Enroll Now
          </button>
        </div>
      </section>
    </main>
  );
}
