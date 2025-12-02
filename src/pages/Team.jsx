import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import defaultImage from '../assets/default-image.svg';

export default function Team() 
{
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  
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
    }
  ];

  const trainers = [
    {
      name: 'EKUNDAYO AKANDE',
      role: 'Grant Writer',
      bio: 'Distinguished International Arbitrator with 25+ years of experience in commercial contracts and stakeholder management.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.12.25.jpeg'
    },
    {
      name: 'Dr. STEPHEN OKORO',
      role: 'Grant Writer',
      bio: 'Seasoned physician with 34+ years of experience and commitment to preventive health and wellness initiatives.',
      image: defaultImage
    },
    {
      name: 'GOSPEL OBELE',
      role: 'Grant Writer',
      bio: 'Consummate professional research economist with expertise across 15+ sectors and 40 markets.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.12.37.jpeg'
    },
    {
      name: 'DANIEL AMOAH',
      role: 'Consultant',
      bio: 'Accomplished professional integrating strategic business acumen with advanced analytical capabilities.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.12.05.jpeg'
    },
    {
      name: 'MOSES ADEKOJE',
      role: 'Grant Writer & Project Manager',
      bio: 'Highly driven Project Manager with proven track record in strategic planning and digital product design.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.12.53.jpeg'
    },
    {
      name: 'CARLA AMOAH',
      role: 'Grant Writer',
      bio: 'Accomplished professional with a decade of experience in education, psychology, and child development.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.11.32.jpeg'
    }
  ];

  const collaborators = [
    {
      name: 'TOKUNBO SONOWO',
      role: 'Recruitment Consultant',
      bio: 'Visionary recruitment consultant empowering ethnic minorities in accessing job opportunities across sectors.',
      image: 'http://nexgeninternational.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.13.26.jpeg'
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
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-gray-100 to-gray-50 py-32 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We are a passionate group of innovators, dreamers, and doers dedicated to making a positive impact on the world.
          </motion.p>
        </div>
      </motion.section>

      {/* Core Team */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Core Team
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-24">
            {coreTeam.map((member, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -10 }}
                className="flex flex-col text-center"
              >
                <motion.div 
                  className="w-64 h-64 mx-auto mb-10 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:shadow-3xl transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h3>
                <p className="text-lg font-bold mb-6" style={{color: 'var(--brand-teal)'}}>{member.role}</p>
                <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trainers */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
            Trainers & Specialists
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {trainers.map((member, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -15 }}
                className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-full h-64 mb-8 rounded-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h3>
                <p className="text-sm font-bold mb-4" style={{color: 'var(--brand-orange)'}}>{member.role}</p>
                <p className="text-gray-600 text-base leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Collaborators */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Collaborators
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {collaborators.map((member, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -15 }}
                className="bg-gray-50 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-full h-64 mb-8 rounded-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>{member.name}</h3>
                <p className="text-sm font-bold mb-4" style={{color: 'var(--brand-gray)'}}>{member.role}</p>
                <p className="text-gray-600 text-base leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Us CTA */}
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
            Join Our Mission
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-xl mb-12 opacity-90 leading-relaxed"
          >
            Interested in joining our team of changemakers? We're always looking for passionate individuals to help us make a difference.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-4 bg-white font-bold rounded-full transition-all hover:shadow-lg shadow-md" 
            style={{color: 'var(--brand-teal)'}}
          >
            View Open Positions
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
