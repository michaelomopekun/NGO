import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-b from-gray-100 to-white py-32 px-4 md:px-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Partners in Progress: Our services are renowned for delivering exceptional value, going above and beyond expectations, and providing an eye-opening experience that transforms lives and organizations.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid - Enhanced Spacing */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                className="p-10 border-2 rounded-xl hover:shadow-2xl transition-all bg-white" 
                style={{borderColor: idx % 3 === 0 ? 'var(--brand-teal)' : idx % 3 === 1 ? 'var(--brand-orange)' : 'var(--brand-gray)'}}
              >
                <motion.div className="text-4xl mb-4">
                  {idx % 3 === 0 ? '🎓' : idx % 3 === 1 ? '💰' : '🚀'}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>{service.title}</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">{service.description}</p>
                <div className="border-t pt-6">
                  <p className="text-sm font-semibold mb-4" style={{color: idx % 3 === 0 ? 'var(--brand-teal)' : idx % 3 === 1 ? 'var(--brand-orange)' : 'var(--brand-gray)'}}>Key Areas:</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.courses.map((course, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start"
                      >
                        <span className="mr-2 font-bold">✓</span>
                        {course}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 px-4 md:px-10" 
        style={{backgroundColor: 'var(--brand-teal)'}}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Explore Our Training Programs
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-xl mb-12 opacity-90 leading-relaxed"
          >
            Discover the full range of our training courses and how we can propel your growth journey.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/training" className="inline-block px-12 py-4 bg-white font-bold rounded-full transition-all hover:shadow-lg shadow-md" style={{color: 'var(--brand-teal)'}}>
              Training & Career
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Why Choose NexGen?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="p-12 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div className="text-6xl font-bold mb-6" style={{color: 'var(--brand-teal)'}}>20+</motion.div>
              <h4 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Years of Experience</h4>
              <p className="text-gray-600 text-lg">Over two decades of proven success in training and consultancy.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="p-12 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div className="text-6xl font-bold mb-6" style={{color: 'var(--brand-orange)'}}>500+</motion.div>
              <h4 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Organizations Served</h4>
              <p className="text-gray-600 text-lg">Trusted by hundreds of organizations across the UK and Africa.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="p-12 bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div className="text-6xl font-bold mb-6" style={{color: 'var(--brand-gray)'}}>100%</motion.div>
              <h4 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Tailored Solutions</h4>
              <p className="text-gray-600 text-lg">Every program is customized to meet your unique needs.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
