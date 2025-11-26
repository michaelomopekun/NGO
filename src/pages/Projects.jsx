import { motion } from 'framer-motion';
import defaultImage from '../assets/default-image.svg';

export default function Projects() {
  const projects = [
    {
      title: 'UK Initiatives',
      description: 'Empowering local communities through skills workshops, mentorship programs, and social enterprise development.',
      stats: '50+ Communities Served',
      url: "http://nexgeninternational.org/wp-content/uploads/2021/01/pexels-mentatdgt-1569076-300x200.jpg"
    },
    {
      title: 'West Africa Development',
      description: 'Sustainable development projects focusing on education, healthcare access, and economic empowerment in rural areas.',
      stats: '10,000+ Lives Impacted',
      url: "http://nexgeninternational.org/wp-content/uploads/2021/01/pexels-%D0%B2%D0%B0%D1%85%D1%82%D0%B1%D0%BE%D0%B2%D0%B8%D1%87-%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-5998041-227x300.jpg"
    },
    {
      title: 'Youth Empowerment',
      description: 'Targeted programs for young people to develop leadership skills and entrepreneurial mindsets.',
      stats: '2,000+ Youth Trained',
      url: "https://nexgeninternational.org/wp-content/uploads/2021/01/girl-in-black-coat-wearing-eyeglasses-3772525-scaled.jpg"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        className="bg-gradient-to-r from-gray-100 to-gray-50 py-32 px-4 md:px-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            From local initiatives in the UK to large-scale development projects in West Africa, we are committed to creating lasting change.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -15 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="h-64 overflow-hidden">
                  <img src={project.url} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>{project.title}</h3>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">{project.description}</p>
                  <div className="pt-6 border-t border-gray-200">
                    <p className="font-bold text-lg" style={{color: 'var(--brand-teal)'}}>{project.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact Stats */}
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
            Our Impact
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1.15 }} 
              className="p-8"
            >
              <div className="text-6xl font-bold mb-4" style={{color: 'var(--brand-orange)'}}>50+</div>
              <p className="text-gray-600 font-bold text-lg">Projects Completed</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.15 }} 
              className="p-8"
            >
              <div className="text-6xl font-bold mb-4" style={{color: 'var(--brand-teal)'}}>10k+</div>
              <p className="text-gray-600 font-bold text-lg">Lives Impacted</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.15 }} 
              className="p-8"
            >
              <div className="text-6xl font-bold mb-4" style={{color: 'var(--brand-gray)'}}>20+</div>
              <p className="text-gray-600 font-bold text-lg">Years Active</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.15 }} 
              className="p-8"
            >
              <div className="text-6xl font-bold mb-4" style={{color: 'var(--brand-teal)'}}>100%</div>
              <p className="text-gray-600 font-bold text-lg">Commitment</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
