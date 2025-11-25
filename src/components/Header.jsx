import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="size-6" style={{color: 'var(--brand-teal)'}}>
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-tight" style={{fontFamily: "'Poppins', sans-serif"}}>
          NexGen
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
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
    </header>
  );
}
