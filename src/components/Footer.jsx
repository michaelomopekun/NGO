import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link to="/" className="text-base font-normal leading-normal hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-base font-normal leading-normal hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-base font-normal leading-normal hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-base font-normal leading-normal hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-base font-normal leading-normal hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <a className="hover:text-white transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
            </a>
            <a className="hover:text-white transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-base font-normal leading-normal">© 2024 NexGen International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
