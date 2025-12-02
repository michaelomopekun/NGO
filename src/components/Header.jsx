import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 md:px-10 py-4 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <img 
          src="https://nexgeninternational.org/wp-content/uploads/2020/07/nexgen-logo.png" 
          alt="NexGen Logo"
          className="h-12 w-auto"
        />

        <h2 className="text-xl font-bold leading-tight tracking-tight" style={{fontFamily: "'Poppins', sans-serif"}}>
          {/* NexGen */}
        </h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link to="/" className="text-sm font-medium leading-normal transition-colors" style={{color: 'var(--brand-dark)', '--tw-text-opacity': '1'}} onMouseEnter={(e) => e.target.style.color = 'var(--brand-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--brand-dark)'}>
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium leading-normal transition-colors" style={{color: 'var(--brand-dark)'}} onMouseEnter={(e) => e.target.style.color = 'var(--brand-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--brand-dark)'}>
            About Us
          </Link>
          <Link to="/services" className="text-sm font-medium leading-normal transition-colors" style={{color: 'var(--brand-dark)'}} onMouseEnter={(e) => e.target.style.color = 'var(--brand-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--brand-dark)'}>
            Services
          </Link>
          <Link to="/team" className="text-sm font-medium leading-normal transition-colors" style={{color: 'var(--brand-dark)'}} onMouseEnter={(e) => e.target.style.color = 'var(--brand-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--brand-dark)'}>
            Team
          </Link>
          <Link to="/projects" className="text-sm font-medium leading-normal transition-colors" style={{color: 'var(--brand-dark)'}} onMouseEnter={(e) => e.target.style.color = 'var(--brand-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--brand-dark)'}>
            Projects
          </Link>
          <Link to="/contact" className="text-sm font-medium leading-normal transition-colors" style={{color: 'var(--brand-dark)'}} onMouseEnter={(e) => e.target.style.color = 'var(--brand-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--brand-dark)'}>
            Contact
          </Link>
        </nav>
        <div className="flex gap-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" style={{backgroundColor: 'var(--brand-orange)'}}>
            <span className="truncate">Donate</span>
          </button>
          <Link to="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white text-sm font-bold leading-normal tracking-[0.015em] border-2 border-gray-200 transition-colors hover:bg-gray-100" style={{color: 'var(--brand-dark)'}}>
            <span className="truncate">Contact</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 text-gray-600 focus:outline-none">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden flex flex-col p-4 gap-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={toggleMenu} className="text-base font-medium transition-colors hover:text-[var(--brand-teal)]">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-base font-medium transition-colors hover:text-[var(--brand-teal)]">
              About Us
            </Link>
            <Link to="/services" onClick={toggleMenu} className="text-base font-medium transition-colors hover:text-[var(--brand-teal)]">
              Services
            </Link>
            <Link to="/team" onClick={toggleMenu} className="text-base font-medium transition-colors hover:text-[var(--brand-teal)]">
              Team
            </Link>
            <Link to="/projects" onClick={toggleMenu} className="text-base font-medium transition-colors hover:text-[var(--brand-teal)]">
              Projects
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="text-base font-medium transition-colors hover:text-[var(--brand-teal)]">
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-3 mt-2">
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 text-white text-sm font-bold leading-normal tracking-[0.015em]" style={{backgroundColor: 'var(--brand-orange)'}}>
              <span className="truncate">Donate</span>
            </button>
            <Link to="/contact" onClick={toggleMenu} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white text-sm font-bold leading-normal tracking-[0.015em] border-2 border-gray-200" style={{color: 'var(--brand-dark)'}}>
              <span className="truncate">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
