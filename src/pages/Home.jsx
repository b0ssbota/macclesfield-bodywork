import { Link } from 'react-router-dom';
import {
  Wrench, CarFront, Paintbrush, SprayCan, CircleDot, Palette,
  ArrowRight, Star, Shield, Clock, CheckCircle2, ChevronRight,
  Camera
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from '../components/SectionHeading';
import QuoteForm from '../components/QuoteForm';

const services = [
  {
    icon: Wrench,
    title: 'Body Work Repairs',
    description: 'Structural and cosmetic panel work to restore your vehicle to its original condition.',
    path: '/services/body-work-repairs',
  },
  {
    icon: CarFront,
    title: 'Accident Damage',
    description: 'Full insurance-approved collision repair with manufacturer-standard parts.',
    path: '/services/accident-damage',
  },
  {
    icon: Paintbrush,
    title: 'Scratch Repairs',
    description: 'Precision paint matching and buffing to eliminate unsightly scratches.',
    path: '/services/scratch-repairs',
  },
  {
    icon: SprayCan,
    title: 'Spray Painting',
    description: 'Full resprays and panel matching in our professional spray booth.',
    path: '/services/spray-painting',
  },
  {
    icon: CircleDot,
    title: 'Alloy Wheel Repairs',
    description: 'Expert repair of scuffs, cracks, and buckles on all alloy types.',
    path: '/services/alloy-wheel-repairs',
  },
  {
    icon: Palette,
    title: 'Alloy Wheel Resprays',
    description: 'Custom colours and factory finishes for a showroom-quality look.',
    path: '/services/alloy-wheel-resprays',
  },
];

const steps = [
  { number: '01', title: 'Drop Off', description: 'Bring your vehicle to us or arrange a free collection. We\'ll assess the damage and provide a detailed quote.' },
  { number: '02', title: 'Expert Repair', description: 'Our skilled technicians carry out the repairs using premium materials and manufacturer-approved methods.' },
  { number: '03', title: 'Quality Check', description: 'Every repair undergoes a rigorous quality inspection before we hand your vehicle back to you.' },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5,000+', label: 'Cars Repaired' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '24h', label: 'Quote Turnaround' },
];

function AnimatedSection({ children, className = '', delay = 0 }) {
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-6 shadow-sm animate-fade-in-up">
              <Shield size={16} className="text-electric" />
              Insurance Approved Repairs
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up animate-delay-100">
              Expert Car Body Repairs in{' '}
              <span className="gradient-text">Macclesfield</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl animate-fade-in-up animate-delay-200">
              Quality craftsmanship for accident damage, paintwork, and alloy restoration.
              Trusted by thousands of drivers across Cheshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link
                to="/contact"
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-center hover:opacity-90 transition-opacity shadow-lg shadow-electric/25 inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-center hover:border-electric hover:text-electric transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="gradient-bg rounded-2xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Body Shop Services"
            description="From minor scratches to major collision repairs, we offer a full range of professional body shop services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.path} delay={i * 100}>
                <Link
                  to={service.path}
                  className="group block bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-electric/5 hover:border-electric/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mb-5 group-hover:from-cyan/20 group-hover:to-purple/20 transition-colors">
                    <service.icon size={26} className="text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-electric text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Our Simple 3-Step Process"
            description="Getting your car repaired shouldn't be complicated. Here's how we make it easy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 150}>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <span className="text-6xl font-bold gradient-text opacity-20 absolute top-4 right-6">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-lg mb-5">
                    {parseInt(step.number)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="The Macclesfield Body Work Difference"
            description="We combine expert craftsmanship with premium materials to deliver results that exceed expectations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Insurance Approved', desc: 'We work with all major insurers for hassle-free claims.' },
              { icon: Star, title: 'Quality Guaranteed', desc: 'Every repair comes with our satisfaction guarantee.' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Most repairs completed within 3-5 working days.' },
              { icon: CheckCircle2, title: 'Free Estimates', desc: 'No obligation quotes — drop in or send us photos.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-electric" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Before & After Gallery"
            description="See the quality of our workmanship for yourself. Every repair is finished to the highest standard."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <AnimatedSection key={item} delay={item * 80}>
                <div className="group relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center">
                    <div className="text-center">
                      <Camera size={32} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 font-medium">Before & After #{item}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Get In Touch"
                title="Request a Free Quote"
                description="Send us the details of the damage and we'll get back to you with a competitive quote."
              />
              <div className="hidden lg:block space-y-4 mt-8">
                {[
                  'No obligation, free estimates',
                  'Insurance claims handled for you',
                  'Collection & delivery available',
                  'Courtesy cars available on request',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-electric shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
