import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Body Work Repairs', path: '/services/body-work-repairs' },
  { name: 'Accident Damage', path: '/services/accident-damage' },
  { name: 'Scratch Repairs', path: '/services/scratch-repairs' },
  { name: 'Spray Painting', path: '/services/spray-painting' },
  { name: 'Alloy Wheel Repairs', path: '/services/alloy-wheel-repairs' },
  { name: 'Alloy Wheel Resprays', path: '/services/alloy-wheel-resprays' },
  { name: 'Vehicle Welding', path: '/services/welding' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Macclesfield Body Work" className="h-12 w-auto" />
            <div className="leading-tight hidden sm:block">
              <span className="font-bold text-gray-900 text-lg block">Macclesfield</span>
              <span className="text-sm gradient-text font-semibold">Body Work</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-electric ${isActive('/') ? 'text-electric' : 'text-gray-700'}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-electric transition-colors">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-cyan/5 hover:to-purple/5 hover:text-electric transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-electric ${isActive('/about') ? 'text-electric' : 'text-gray-700'}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-electric ${isActive('/contact') ? 'text-electric' : 'text-gray-700'}`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-electric/25"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">Home</Link>
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</div>
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm"
              >
                {s.name}
              </Link>
            ))}
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">About Us</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">Contact</Link>
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full gradient-bg text-white text-center px-6 py-3 rounded-full font-semibold"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
