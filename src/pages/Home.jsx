import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroImage from '../assets/Hero.png';
import partner1 from '../assets/partner_1.png';
import partner2 from '../assets/partner_2.png';
import partner3 from '../assets/partner_3.png';
import partner4 from '../assets/partner_4.png';
import partner5 from '../assets/partner_5.jpg';
import partner6 from '../assets/partner_6.png';

export default function Home() 
{
  const navigate = useNavigate();
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

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-screen text-white overflow-hidden"
        >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat " 
              style={{backgroundImage: `url(${HeroImage})`}}
            ></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative flex h-full flex-col items-start justify-center gap-8 px-4 md:px-10 text-left">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col gap-4 max-w-2xl"
                >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter" style={{fontFamily: "'Poppins', sans-serif"}}>
                Welcome to <span style={{color: 'var(--brand-teal)'} }>NExGen</span> International!
              </h1>
              <p className="text-lg md:text-xl font-normal leading-normal text-gray-200">
                We Ignite Dreams and Transform Communities
              </p>
            </motion.div>
            <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap gap-4"
            >
          <button onClick={() => navigate('/services')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 md:h-14 md:px-10 text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" style={{backgroundColor: 'var(--brand-teal)'} }>
            <span className="truncate">Explore Our Services</span>
          </button>
          <button onClick ={() => navigate('/contact')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 md:h-14 md:px-10 bg-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" style={{color: 'var(--brand-dark)'}}>
            <span className="truncate">Contact Us</span>
          </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Carousel Section - Enhanced Spacing */}
      <section className="bg-white py-32 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16 md:gap-18 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12"
            >
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Do You Have a Personal or Business Objective?</h3>
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Let us help you move your entrepreneurial dreams into reality. From ideation to execution, we provide comprehensive support for startups, ensuring your venture takes off with confidence.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="w-full rounded-lg overflow-hidden h-48 sm:h-64 md:h-72 lg:h-96 shadow-2xl hover:shadow-2xl transition-shadow"
              >
                <img src={"https://nexgeninternational.org/wp-content/uploads/2020/04/woman-wearing-gray-blazer-writing-on-dry-erase-board-1181534-scaled.jpg"} alt="Entrepreneurial Dreams" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12 md:auto-cols-fr [&>:nth-child(1)]:md:order-2 [&>:nth-child(2)]:md:order-1"
            >
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Seeking Funding or Grants?</h3>
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Navigating the world of funding and grants can be daunting. Our experienced professionals will guide you through the process, increasing your chances of securing the resources you need for growth and expansion.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="w-full rounded-lg overflow-hidden h-48 sm:h-64 md:h-72 lg:h-96 shadow-2xl hover:shadow-3xl transition-shadow"
              >
                <img src={"https://nexgeninternational.org/wp-content/uploads/2020/07/fund-scaled.jpg"} alt="Funding & Grants" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12"
            >
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Personal or Professional Development?</h3>
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Investing in yourself is the key to unlocking new opportunities. Our personalized development programs are designed to enhance your skills, boost your confidence, and position you for success in your chosen field.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.1 }}
                className="w-full rounded-lg overflow-hidden h-48 sm:h-64 md:h-72 lg:h-96 shadow-2xl hover:shadow-3xl transition-shadow"
              >
                <img src={"https://nexgeninternational.org/wp-content/uploads/2020/04/group-oo-people-having-a-meeting-1367276-scaled.jpg"} alt="Personal Development" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12 md:auto-cols-fr [&>:nth-child(1)]:md:order-2 [&>:nth-child(2)]:md:order-1"
            >
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
                className="w-full"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Training and Mentoring?</h3>
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Whether you're a budding professional or an established leader, our tailored training and mentoring programs will equip you with the knowledge and guidance you need to excel.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="w-full rounded-lg overflow-hidden h-48 sm:h-64 md:h-72 lg:h-96 shadow-2xl hover:shadow-3xl transition-shadow"
              >
                <img src={"http://nexgeninternational.org/wp-content/uploads/2021/01/pexels-mentatdgt-1569076-1024x683.jpg"} alt="Training & Mentoring" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeIn" }}
        className="bg-gray-50 py-24 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>What's Our Story?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                It begins with a simple belief; that by harnessing the collective passion and determination of visionaries and change-makers, we can uplift communities and create a ripple effect of hope, empowerment, and prosperity. As a social enterprise driven by purpose, we are your partner in this journey of transformation.
              </p>
              {/* <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>Our Areas of Expertise:</h3> */}
              {/* <ul className="space-y-3 text-gray-700">
                <li>• <strong>Project Initiation and Development:</strong> From the spark of an idea to its full-fledged manifestation, our team of experts guides you through the entire project lifecycle.</li>
                <li>• <strong>Consulting Services:</strong> Tap into our wellspring of knowledge and experience as we provide practical, tailored advice.</li>
                <li>• <strong>Fundraising:</strong> Access our extensive network and proven strategies to secure the resources necessary.</li>
                <li>• <strong>Training and Capacity Building:</strong> Empower yourself and your team with the knowledge and skills.</li>
                <li>• <strong>Business and Proposal Development:</strong> Craft compelling narratives and business plans.</li>
              </ul> */}
            </div>
            <div>
              <div className="rounded-lg overflow-hidden h-96 mb-8 shadow-lg">
                <video 
                  src="http://nexgeninternational.org/wp-content/uploads/2021/01/Nexgen-introductory-video-1.mp4?_=1" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                WE ARE A MOVEMENT, a force that believes in the power of action to reshape the world we live in.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mt-4">
                By partnering with Nexgen, you gain access to a global community that supports changemakers, united in the pursuit of a brighter, more equitable future.
              </p>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg p-10 border-l-8 shadow-sm" 
            style={{borderColor: 'var(--brand-orange)'}}
          >
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              Whether you're a social entrepreneur seeking guidance, a grassroots activist in need of resources, an entrepreneur seeking support, or an individual with a dream that burns brightly, we invite you to engage our services.
            </p>
            <p className="text-2xl font-bold" style={{fontFamily: "'Poppins', sans-serif", color: 'var(--brand-teal)'}}>
              Come, let's help YOU unlock YOUR potential and amplify YOUR impact!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 md:px-10 text-center" 
        style={{backgroundColor: 'var(--brand-teal)'}}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>Ready to Transform Your Journey?</h2>
          <p className="text-white text-xl mb-10 opacity-90">Take the first step towards your goals – contact us now!</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-lg font-bold rounded-full transition-transform hover:scale-105 shadow-lg" style={{color: 'var(--brand-teal)'}}>
            Contact Us
          </Link>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white py-24 px-4 md:px-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold leading-tight tracking-tight" style={{color: 'var(--brand-dark)', fontFamily: "'Poppins', sans-serif"}}>Our Partners</h2>
          </div>
          <div className="relative w-full overflow-hidden">
            <motion.div 
              animate={{ x: "-100%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center"
            >
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-12 items-center flex-shrink-0">
                  {[partner1, partner2, partner3, partner4, partner5, partner6].map((partner, idx) => (
                    <motion.div 
                      key={`${setIdx}-${idx}`} 
                      whileHover={{ scale: 1.1 }}
                      className="flex justify-center flex-shrink-0"
                    >
                      <img 
                        src={partner} 
                        alt={`Partner ${idx + 1}`}
                        className="w-32 h-32 object-contain rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-24 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{fontFamily: "'Poppins', sans-serif"}}>Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services" className="group p-8 border-2 rounded-xl text-center hover:shadow-xl transition-all bg-white" style={{borderColor: 'var(--brand-teal)'}}>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--brand-teal)] transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>Our Services</h3>
              <p className="text-gray-600 text-lg">Learn about all the comprehensive services we offer.</p>
            </Link>
            <Link to="/team" className="group p-8 border-2 rounded-xl text-center hover:shadow-xl transition-all bg-white" style={{borderColor: 'var(--brand-gray)'}}>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--brand-gray)] transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>Meet Our Team</h3>
              <p className="text-gray-600 text-lg">Get to know the passionate people behind NexGen.</p>
            </Link>
            <Link to="/projects" className="group p-8 border-2 rounded-xl text-center hover:shadow-xl transition-all bg-white" style={{borderColor: 'var(--brand-orange)'}}>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--brand-orange)] transition-colors" style={{fontFamily: "'Poppins', sans-serif"}}>Our Projects</h3>
              <p className="text-gray-600 text-lg">Discover the impactful projects we're working on.</p>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
