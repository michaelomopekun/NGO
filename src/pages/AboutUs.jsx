import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import defaultImage from '../assets/default-image.svg';
import hero from '../assets/Hero.png';

export default function AboutUs() 
{
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const popIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const coreTeam = [
    {
      name: 'SHOLA LANA',
      role: 'CEO/Portfolio Development Director',
      bio: 'Shola is a seasoned professional with over 30 years of diverse experience in training, capacity building, and community empowerment. She serves as the Founding Projects Director of Nexgen International.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.13.11-1024x949.jpeg'
    },
    {
      name: "'NOLA ONOJOBI",
      role: 'Partner/Project Development Strategist',
      bio: 'Nola is a multi-talented professional with expertise in business development, project strategy, and sustainability. With over two decades of experience, Nola provides invaluable guidance to individuals and organizations.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2021/01/blank.png'
    },
    {
      name: 'EKUNDAYO AKANDE',
      role: 'Grant Writer',
      bio: 'Distinguished International Arbitrator with 25+ years of experience in commercial contracts and stakeholder management.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.12.25.jpeg'
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 py-32 px-4 md:px-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We are NexGen International, a social enterprise dedicated to empowering communities and transforming lives through innovative programs and strategic partnerships.
          </motion.p>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={slideInLeft}
              className="rounded-xl overflow-hidden h-96 shadow-2xl hover:shadow-3xl transition-shadow"
            >
              <img src={hero} alt="Who We Are" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              variants={slideInRight}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At the core of our organization lies a deep-rooted commitment to transforming lives and uplifting communities. We are driven by a VISION to create positive and lasting change for a better future.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through collaborative partnerships with faith-based groups, corporations, government parastatals, and individuals, we strive to develop innovative thinking, cultivate an entrepreneurial mindset, and promote sustainable ways of living.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              variants={popIn}
              whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(0,128,128,0.15)" }}
              className="p-12 bg-white rounded-xl shadow-lg transition-all"
            >
              <motion.div className="text-4xl mb-4">🎯</motion.div>
              <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower groups and individuals by enhancing their capabilities, enabling them to actively participate in community development initiatives and projects. We believe in the power of diversity and aim to bring together people from all walks of life.
              </p>
            </motion.div>
            <motion.div 
              variants={popIn}
              whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(217,111,59,0.15)" }}
              className="p-12 bg-white rounded-xl shadow-lg transition-all"
            >
              <motion.div className="text-4xl mb-4">✨</motion.div>
              <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-orange)'}}>Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a brighter future for all, one community at a time. We work to develop skills, mobilize potential, and empower individuals to actively participate in community development and regeneration activities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-10">
            {['Integrity', 'Collaboration', 'Impact', 'Sustainability'].map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-center hover:shadow-xl transition-all"
              >
                <h4 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>{value}</h4>
                <p className="text-gray-600 text-lg">We uphold the highest ethical standards in all our actions.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Preview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Our Dedicated Team
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 text-lg mb-20"
          >
            Our dedicated team of 20 professionals is the driving force behind our efforts.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {coreTeam.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt="Team Member" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h4>
                  <p className="text-sm font-semibold" style={{color: 'var(--brand-teal)'}}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Link to="/team" className="inline-block px-12 py-4 rounded-full font-bold transition-all hover:shadow-lg shadow-md" style={{backgroundColor: 'var(--brand-teal)', color: 'white'}}>
              View Full Team
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Find Us
          </motion.h2>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg transition-all"
          >
            <p className="text-lg text-gray-700 mb-6">
              <strong>Headquartered at:</strong>
            </p>
            <p className="text-3xl font-bold text-gray-800 mb-4">The Sojourner Truth Centre</p>
            <p className="text-gray-700 text-xl leading-relaxed">161 Sumner Road, London SE15 6JL, United Kingdom</p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
