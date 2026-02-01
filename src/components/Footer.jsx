import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white text-lg block">Macclesfield</span>
                <span className="text-sm gradient-text font-semibold">Body Work</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium car body repairs and restoration services. The bodywork division of{' '}
              <a href="https://macclesfieldcarsales.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
                Macclesfield Car Sales
              </a>.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/body-work-repairs" className="hover:text-cyan transition-colors">Body Work Repairs</Link></li>
              <li><Link to="/services/accident-damage" className="hover:text-cyan transition-colors">Accident Damage</Link></li>
              <li><Link to="/services/scratch-repairs" className="hover:text-cyan transition-colors">Scratch Repairs</Link></li>
              <li><Link to="/services/spray-painting" className="hover:text-cyan transition-colors">Spray Painting</Link></li>
              <li><Link to="/services/alloy-wheel-repairs" className="hover:text-cyan transition-colors">Alloy Wheel Repairs</Link></li>
              <li><Link to="/services/alloy-wheel-resprays" className="hover:text-cyan transition-colors">Alloy Wheel Resprays</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-cyan transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-cyan transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-cyan transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan mt-0.5 shrink-0" />
                <span>Macclesfield, Cheshire, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan shrink-0" />
                <a href="tel:01onal" className="hover:text-cyan transition-colors">01625 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan shrink-0" />
                <a href="mailto:info@macclesfieldBodywork.co.uk" className="hover:text-cyan transition-colors">info@macclesfieldbodywork.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-cyan mt-0.5 shrink-0" />
                <span>Mon – Fri: 8:00 AM – 5:30 PM<br />Sat: 9:00 AM – 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Macclesfield Body Work. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-electric transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-electric transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-electric transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
