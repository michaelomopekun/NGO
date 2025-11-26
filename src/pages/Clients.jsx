import { motion } from 'framer-motion';
import defaultImage from '../assets/default-image.svg';

const ClientLogo = ({ name }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 h-48"
  >
    <div className="w-24 h-24 mb-4 bg-contain bg-center bg-no-repeat opacity-80" style={{backgroundImage: `url(${defaultImage})`}}></div>
    <span className="text-gray-600 font-medium text-center">{name}</span>
  </motion.div>
);

export default function Clients() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-linear-to-b from-gray-100 to-white py-24 px-4 md:px-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6" 
            style={{fontFamily: "'Poppins', sans-serif"}}
          >
            Our Clients & Partners
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700"
          >
            We are proud to work with a diverse range of organizations across the globe. Together, we are building a better future.
          </motion.p>
        </div>
      </motion.section>

      {/* UK Clients */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-24 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>United Kingdom</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Client UK 1', 'Client UK 2', 'Client UK 3', 'Client UK 4', 'Client UK 5', 'Client UK 6', 'Client UK 7', 'Client UK 8'].map((client, idx) => (
              <motion.div key={idx} variants={item}>
                <ClientLogo name={client} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* West Africa Clients */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-50 py-24 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-orange)'}}>West Africa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Client WA 1', 'Client WA 2', 'Client WA 3', 'Client WA 4', 'Client WA 5', 'Client WA 6', 'Client WA 7', 'Client WA 8'].map((client, idx) => (
              <motion.div key={idx} variants={item}>
                <ClientLogo name={client} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Europe Clients */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-24 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-gray)'}}>Europe</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Client EU 1', 'Client EU 2', 'Client EU 3', 'Client EU 4'].map((client, idx) => (
              <motion.div key={idx} variants={item}>
                <ClientLogo name={client} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-24 px-4 md:px-10 text-center" 
        style={{backgroundColor: 'var(--brand-teal)'}}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Partner With Us</h2>
          <p className="text-white text-xl mb-10 opacity-90">
            Join our network of partners and let's achieve great things together.
          </p>
          <button className="px-10 py-4 bg-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg" style={{color: 'var(--brand-teal)'}}>
            Become a Partner
          </button>
        </div>
      </motion.section>
    </main>
  );
}
