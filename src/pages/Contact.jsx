import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Contact() 
{
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We'd love to hear from you. Whether you have a question about our services, projects, or just want to say hello, our team is ready to answer all your questions.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-40 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Get in Touch</h2>
              <div className="space-y-12">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mr-8 flex-shrink-0 text-3xl" 
                    style={{color: 'var(--brand-teal)'}}
                    whileHover={{ scale: 1.1 }}
                  >
                    📍
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Visit Us</h3>
                    <p className="text-gray-600 text-lg">The Sojourner Truth Centre</p>
                    <p className="text-gray-600 text-lg">161 Sumner Road, London SE15 6JL</p>
                    <p className="text-gray-600 text-lg">United Kingdom</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-8 flex-shrink-0 text-3xl" 
                    style={{color: 'var(--brand-orange)'}}
                    whileHover={{ scale: 1.1 }}
                  >
                    📞
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Call Us</h3>
                    <p className="text-gray-600 text-lg">+44 (0) 20 7732 2222</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mr-8 flex-shrink-0 text-3xl" 
                    style={{color: 'var(--brand-gray)'}}
                    whileHover={{ scale: 1.1 }}
                  >
                    ✉️
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                    <p className="text-gray-600 text-lg">info@nexgenint.org</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold mb-8">Follow Us</h3>
                <div className="flex space-x-6">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <motion.a 
                      key={social} 
                      href="#" 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm" 
                      style={{backgroundColor: 'var(--brand-teal)', color: 'white'}}
                    >
                      {social.charAt(0)}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-16 rounded-xl shadow-xl"
            >
              <h2 className="text-4xl font-bold mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                >
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">Your Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[var(--brand-teal)] focus:border-transparent outline-none transition-all text-lg"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                >
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">Email Address</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[var(--brand-teal)] focus:border-transparent outline-none transition-all text-lg"
                    placeholder="john@example.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3">Subject</label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[var(--brand-teal)] focus:border-transparent outline-none transition-all text-lg"
                    placeholder="How can we help?"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">Message</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[var(--brand-teal)] focus:border-transparent outline-none transition-all text-lg resize-none"
                    placeholder="Your message here..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-4 px-6 rounded-lg text-white font-bold text-lg transition-all hover:shadow-lg shadow-md"
                  style={{backgroundColor: 'var(--brand-teal)'}}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-96 w-full bg-gray-200"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.673775676766!2d-0.07689968423095703!3d51.48256877963106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876037a542615a5%3A0x6280453303350000!2s161%20Sumner%20Rd%2C%20London%20SE15%206JL%2C%20UK!5e0!3m2!1sen!2s!4v1645555555555!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </motion.section>
    </main>
  );
}
