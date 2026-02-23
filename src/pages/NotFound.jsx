import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5 px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <img src="/images/logo.png" alt="Macclesfield Body Work" className="h-20 w-auto mx-auto mb-6" />
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-electric/25 inline-flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-electric hover:text-electric transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/services/body-work-repairs" className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-electric hover:text-electric transition-colors">Body Work</Link>
            <Link to="/services/spray-painting" className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-electric hover:text-electric transition-colors">Spray Painting</Link>
            <Link to="/services/welding" className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-electric hover:text-electric transition-colors">Welding</Link>
            <Link to="/services/alloy-wheel-repairs" className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-electric hover:text-electric transition-colors">Alloy Repairs</Link>
            <Link to="/contact" className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-electric hover:text-electric transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
