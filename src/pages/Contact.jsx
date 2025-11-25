import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Get In Touch</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have a question or ready to start your journey with us? We'd love to hear from you. Reach out today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>Contact Information</h2>
              
              <div className="mb-8">
                <h3 className="font-bold mb-2" style={{color: 'var(--brand-teal)'}}>Address</h3>
                <p className="text-gray-700">
                  The Sojourner Truth Centre<br />
                  161 Sumner Road<br />
                  London SE15 6JL<br />
                  United Kingdom
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold mb-2" style={{color: 'var(--brand-teal)'}}>Email</h3>
                <a href="mailto:info@nexgeninternational.org" className="text-blue-600 hover:underline">
                  info@nexgeninternational.org
                </a>
              </div>

              <div className="mb-8">
                <h3 className="font-bold mb-2" style={{color: 'var(--brand-teal)'}}>Phone</h3>
                <a href="tel:+44" className="text-blue-600 hover:underline">
                  +44 (0) XXX XXXX XXX
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-4" style={{color: 'var(--brand-teal)'}}>Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--brand-teal)', color: 'white'}}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.6 11.9h-2.4v7.9h-3v-7.9h-1.4v-2.4h1.4v-1.5c0-1.1.3-2.8 2.7-2.8h2.1v2.3h-1.5c-.3 0-.4.1-.4.5v1.5h2l-.4 2.4z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--brand-orange)', color: 'white'}}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2.4c2.65 0 2.97.01 4.02.06 1.01.05 1.56.24 1.93.4.48.19.83.41 1.19.77.36.36.58.71.77 1.19.16.37.35.92.4 1.93.05 1.05.06 1.37.06 4.02s-.01 2.97-.06 4.02c-.05 1.01-.24 1.56-.4 1.93-.19.48-.41.83-.77 1.19-.36.36-.71.58-1.19.77-.37.16-.92.35-1.93.4-1.05.05-1.37.06-4.02.06s-2.97-.01-4.02-.06c-1.01-.05-1.56-.24-1.93-.4-.48-.19-.83-.41-1.19-.77-.36-.36-.58-.71-.77-1.19-.16-.37-.35-.92-.4-1.93-.05-1.05-.06-1.37-.06-4.02s.01-2.97.06-4.02c.05-1.01.24-1.56.4-1.93.19-.48.41-.83.77-1.19.36-.36.71-.58 1.19-.77.37-.16.92-.35 1.93-.4 1.05-.05 1.37-.06 4.02-.06m0-1.2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.24-2.42.5-.65.26-1.2.61-1.75 1.16-.55.55-.9 1.1-1.16 1.75-.26.63-.45 1.36-.5 2.42-.05 1.06-.06 1.4-.06 4.12s.01 3.06.06 4.12c.05 1.06.24 1.79.5 2.42.26.65.61 1.2 1.16 1.75.55.55 1.1.9 1.75 1.16.63.26 1.36.45 2.42.5 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.24 2.42-.5.65-.26 1.2-.61 1.75-1.16.55-.55.9-1.1 1.16-1.75.26-.63.45-1.36.5-2.42.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.24-1.79-.5-2.42-.26-.65-.61-1.2-1.16-1.75-.55-.55-1.1-.9-1.75-1.16-.63-.26-1.36-.45-2.42-.5-1.06-.05-1.4-.06-4.12-.06zm0 3.24c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.24c-1.8 0-3.24-1.46-3.24-3.24s1.46-3.24 3.24-3.24 3.24 1.46 3.24 3.24-1.46 3.24-3.24 3.24zm6.36-8.48c0 .65-.52 1.17-1.17 1.17s-1.17-.52-1.17-1.17.52-1.17 1.17-1.17 1.17.52 1.17 1.17z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>Send us a Message</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--brand-teal)'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--brand-teal)'}}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--brand-teal)'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--brand-teal)'}}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{'--tw-ring-color': 'var(--brand-teal)'}}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white font-bold rounded-lg transition-transform hover:scale-105"
                style={{backgroundColor: 'var(--brand-teal)'}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>Visit Us</h2>
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6237475006597!2d-0.06015!3d51.47496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47604ccb8b4e85e1%3A0x123456789!2sThe%20Sojourner%20Truth%20Centre%2C%20161%20Sumner%20Road!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NexGen Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
