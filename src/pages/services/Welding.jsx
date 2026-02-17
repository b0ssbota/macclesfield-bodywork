import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, CheckCircle2, ArrowRight, Phone, ChevronRight,
  Wrench, Shield, Award, Clock
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../../components/SectionHeading';
import QuoteForm from '../../components/QuoteForm';

// SEO meta tags injected for this page
function WeldingMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]');
    const prevKeywords = document.querySelector('meta[name="keywords"]');

    document.title = 'Vehicle Welding Macclesfield | Car & Van Welding | MOT Welding Repairs';

    if (prevDesc) {
      prevDesc.setAttribute('content', 'Expert vehicle welding in Macclesfield, Cheshire. MOT failure welding, car welding, van welding, car restoration and fabrication. Over 15 years experience. Free quotes.');
    }

    let kwEl = prevKeywords;
    if (!kwEl) {
      kwEl = document.createElement('meta');
      kwEl.setAttribute('name', 'keywords');
      document.head.appendChild(kwEl);
    }
    kwEl.setAttribute('content', 'welding Macclesfield, car welding Macclesfield, van welding Macclesfield, vehicle welding Cheshire, MOT welding repairs, car restoration Macclesfield, vehicle fabrication, welding near me, bodywork welding, structural welding, sill welding, chassis welding, welding Cheshire');

    return () => {
      document.title = prevTitle;
      if (prevDesc) prevDesc.setAttribute('content', 'Quality craftsmanship for accident damage, paintwork, and alloy restoration in Macclesfield.');
      if (!prevKeywords && kwEl) kwEl.remove();
    };
  }, []);
  return null;
}

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

const weldingServices = [
  { title: 'MOT Failure Welding', desc: 'Failed your MOT on structural corrosion or weakened metalwork? We carry out all MOT-related welding repairs to get your vehicle back on the road and back through the test.' },
  { title: 'Sill Repairs & Replacement', desc: 'Rotten or corroded sills are one of the most common MOT failures. We cut out the damaged metal and weld in new sill sections to a high standard.' },
  { title: 'Chassis & Floor Pan Welding', desc: 'Structural rust in the chassis or floor pan can compromise your vehicle\'s safety. We assess the damage and carry out repairs that restore full structural integrity.' },
  { title: 'Car Restoration Welding', desc: 'Bringing a classic or project car back to life? Whether it\'s a full restoration or targeted repairs, our welders have the skill to work on any make and model.' },
  { title: 'Van Welding & Repairs', desc: 'We weld all types of commercial vans — Transits, Sprinters, Vivaro and more. Bodywork panels, sills, chassis — we keep your van on the road.' },
  { title: 'Vehicle Fabrication', desc: 'Custom brackets, panels, patches, and fabricated parts. If you need something made from scratch, our fabrication skills can deliver a purpose-built solution.' },
];

const faqs = [
  { q: 'Do you do MOT welding repairs?', a: 'Yes — MOT failure welding is one of our most common requests. We carry out all types of structural welding to help your vehicle pass its MOT, including sill repairs, floor pan work, and chassis reinforcement.' },
  { q: 'Can you weld vans as well as cars?', a: 'Absolutely. We weld all types of vehicles including cars, vans, and light commercials. Whether it\'s a small panel repair or a full sill replacement on a Transit, we have the skills and equipment.' },
  { q: 'How much does welding cost?', a: 'Every job is different. We always provide a free, no-obligation quote before any work begins. Contact us with details of the repair needed and we\'ll give you a fair, honest price.' },
  { q: 'Do you offer car restoration welding?', a: 'Yes. We work on restoration projects of all scales, from targeted rust repairs on classic cars to full shell rebuilds. Get in touch to discuss your project.' },
];

export default function Welding() {
  return (
    <>
      <WeldingMeta />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/" className="hover:text-electric transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">Vehicle Welding</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-6 shadow-sm">
                <Flame size={16} className="text-electric" />
                Car &amp; Van Welding Macclesfield
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Expert Vehicle Welding in{' '}
                <span className="gradient-text">Macclesfield</span>
              </h1>
              <p className="text-xl text-electric font-medium mb-4">
                Car Welding · Van Welding · MOT Repairs · Car Restoration
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Whether it's an MOT failure or a full restoration project, we can help with all aspects of car and van welding. We are highly skilled with over <strong className="text-gray-700">15 years of experience</strong> — get in touch or come and see us at our Macclesfield workshop.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                From sill repairs and floor pan patches to chassis work and custom fabrication, our welders deliver strong, clean, and lasting results. We serve customers across Macclesfield, Cheshire, and the surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-center hover:opacity-90 transition-opacity shadow-lg shadow-electric/25 inline-flex items-center justify-center gap-2"
                >
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:07307353951"
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-center hover:border-electric hover:text-electric transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> 07307 353 951
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="/images/welding-body.jpeg" alt="Car welding Macclesfield - vehicle body welding" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                <img src="/images/welding-under-car.jpeg" alt="Van welding Macclesfield - underside chassis welding" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="gradient-bg rounded-2xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: 'All', label: 'Vehicle Types' },
              { value: 'MOT', label: 'Approved Repairs' },
              { value: 'Free', label: 'No-Obligation Quotes' },
            ].map((s, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
                <div className="text-sm text-white/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welding Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Welding Services"
            title="All Aspects of Vehicle Welding"
            description="From MOT failure repairs to full restoration projects, we cover every type of automotive welding in Macclesfield and across Cheshire."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weldingServices.map((s, i) => (
              <AnimatedDiv key={s.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full hover:border-electric/20 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mb-4">
                    <Flame size={22} className="text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedDiv>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src="/images/welding-body.jpeg" alt="Skilled car welder Macclesfield" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                  <img src="/images/welding-under-car.jpeg" alt="Vehicle chassis welding Cheshire" className="w-full h-full object-cover" />
                </div>
              </div>
            </AnimatedDiv>
            <AnimatedDiv delay={200}>
              <span className="inline-block gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Macclesfield's Welding Specialists
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                With over 15 years of experience in vehicle welding, our team has tackled every kind of welding job — from quick MOT sill patches to complex chassis reconstruction on classic car restorations. We pride ourselves on clean, strong welds and honest, transparent service.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We weld all types of vehicles across Macclesfield, Wilmslow, Congleton, Stockport, and the wider Cheshire area. Whether your car, van, or commercial vehicle needs structural welding, rust repair, or fabrication — we've got you covered.
              </p>
              <div className="space-y-3">
                {[
                  '15+ years of automotive welding experience',
                  'MIG, TIG, and spot welding capabilities',
                  'All vehicle makes and models accepted',
                  'MOT failure welding specialists',
                  'Car restoration and fabrication work',
                  'Free, no-obligation quotes',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-electric shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Areas We Cover"
            title="Vehicle Welding Across Cheshire"
            description="Based in Macclesfield, we serve customers from across the region."
          />
          <AnimatedDiv>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Macclesfield', 'Wilmslow', 'Alderley Edge', 'Congleton', 'Knutsford', 'Stockport', 'Buxton', 'Poynton', 'Bollington', 'Middlewich', 'Northwich', 'Cheshire'].map((area) => (
                <span key={area} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                  {area}
                </span>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQs"
            title="Common Welding Questions"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedDiv key={faq.q} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Free Quote"
                title="Get a Welding Quote"
                description="Tell us about the welding work needed and we'll get back to you with a competitive, honest price."
              />
              <div className="hidden lg:block space-y-4 mt-6">
                {[
                  'Free, no-obligation estimates',
                  'All vehicle types & makes',
                  'MOT failure specialists',
                  'Collection available on request',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-electric shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <QuoteForm preselect="Welding" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Also Available" title="More Body Shop Services" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Body Work Repairs', path: '/services/body-work-repairs', icon: Wrench },
              { label: 'Accident Damage', path: '/services/accident-damage', icon: Shield },
              { label: 'Scratch Repairs', path: '/services/scratch-repairs', icon: Award },
              { label: 'Spray Painting', path: '/services/spray-painting', icon: Flame },
              { label: 'Alloy Wheel Repairs', path: '/services/alloy-wheel-repairs', icon: Clock },
              { label: 'Alloy Wheel Resprays', path: '/services/alloy-wheel-resprays', icon: Flame },
            ].map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="group flex flex-col items-center gap-2 bg-white rounded-xl p-4 border border-gray-100 hover:border-electric/20 hover:shadow-md transition-all text-center"
              >
                <s.icon size={20} className="text-electric" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-electric transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
