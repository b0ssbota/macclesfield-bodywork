import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from '../components/SectionHeading';
import QuoteForm from '../components/QuoteForm';

function AnimatedDiv({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Unit 4, Melville Road', 'Macclesfield, SK10 2BN'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['07307 353 951'],
    href: 'tel:07307353951',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['cars@maccgarage.com'],
    href: 'mailto:cars@maccgarage.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon – Fri: 8:00 AM – 5:30 PM', 'Sat: 9:00 AM – 1:00 PM', 'Sun: Closed'],
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">Contact Us</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Whether you need a quick quote, want to book your car in, or just have a question — we're here to help.
              Reach out using the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <AnimatedDiv key={info.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mb-4">
                    <info.icon size={22} className="text-electric" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm">
                      {info.href ? (
                        <a href={info.href} className="hover:text-electric transition-colors">{line}</a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedDiv>
              <SectionHeading
                label="Free Quote"
                title="Request a Free Quote"
                description="Fill in the form below and we'll get back to you with a competitive estimate."
              />
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <QuoteForm />
              </div>
            </AnimatedDiv>
            <AnimatedDiv delay={200}>
              <div className="sticky top-28">
                <SectionHeading
                  label="Find Us"
                  title="Our Location"
                  description="We're based in Macclesfield, Cheshire. Drop in during opening hours or arrange a time with us."
                />
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    title="Macclesfield Body Work Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38132.05777984557!2d-2.1587!3d53.2587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a311ddd9c4021%3A0xc0e1d59c7c tried!2sMacclesfield!5e0!3m2!1sen!2suk!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Part of the Macclesfield Car Sales family.</strong>{' '}
                    Visit our partner site at{' '}
                    <a href="https://macclesfieldcarsales.com" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
                      macclesfieldcarsales.com
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </>
  );
}
