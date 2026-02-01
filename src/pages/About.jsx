import { Link } from 'react-router-dom';
import {
  Users, Award, Shield, Wrench, Target, Heart,
  CheckCircle2, ArrowRight, ChevronRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from '../components/SectionHeading';

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

const values = [
  { icon: Target, title: 'Precision', description: 'Every repair is carried out with meticulous attention to detail, ensuring a flawless finish that meets manufacturer standards.' },
  { icon: Shield, title: 'Integrity', description: 'We provide honest assessments, transparent pricing, and only carry out work that is genuinely needed.' },
  { icon: Heart, title: 'Care', description: 'We treat every vehicle as if it were our own. Your car is in safe, careful hands from drop-off to collection.' },
  { icon: Award, title: 'Excellence', description: 'We never cut corners. Premium materials, skilled technicians, and rigorous quality checks on every job.' },
];

const timeline = [
  { year: 'Founded', title: 'Macclesfield Car Sales Established', description: 'Our parent company began as a trusted name in quality used vehicles across Cheshire.' },
  { year: 'Growth', title: 'Body Shop Division Launched', description: 'To better serve our customers, we opened our dedicated bodywork repair facility with a full spray booth and panel shop.' },
  { year: 'Today', title: 'Your Trusted Body Shop', description: 'With thousands of repairs completed and a growing reputation, we\'re proud to be Macclesfield\'s go-to body shop.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Macclesfield Body Work</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We are the dedicated bodywork division of Macclesfield Car Sales, providing premium car body repair and restoration services across Cheshire. Our mission is simple: deliver exceptional results with honest, transparent service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-center hover:opacity-90 transition-opacity shadow-lg shadow-electric/25 inline-flex items-center justify-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Story"
            title="Built on Trust, Driven by Quality"
            description="From our beginnings in car sales to becoming a leading body shop, our journey has always been about putting customers first."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {timeline.map((item, i) => (
              <AnimatedDiv key={item.year} delay={i * 150}>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <span className="inline-block gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="These are the principles that guide every repair, every interaction, and every decision we make."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedDiv key={value.title} delay={i * 100}>
                <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon size={28} className="text-electric" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedDiv>
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan/10 to-purple/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Wrench size={48} className="text-electric/30 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Workshop Image</p>
                </div>
              </div>
            </AnimatedDiv>
            <AnimatedDiv delay={200}>
              <span className="inline-block gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Drivers Across Cheshire
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                With years of experience and thousands of satisfied customers, we've built a reputation
                for quality, reliability, and honest service that keeps customers coming back.
              </p>
              <div className="space-y-4">
                {[
                  'Fully equipped modern workshop with professional spray booth',
                  'Experienced, factory-trained technicians',
                  'Insurance approved — we work with all major insurers',
                  'Genuine and OEM parts used as standard',
                  'Competitive pricing with no hidden charges',
                  'Courtesy cars available on request',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-electric shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Skilled Professionals, Quality Results"
            description="Our team of experienced technicians, painters, and customer service staff are committed to delivering exceptional results on every job."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { role: 'Panel Technicians', desc: 'Skilled in structural and cosmetic repairs to restore every panel to factory spec.' },
              { role: 'Paint Specialists', desc: 'Expert painters delivering flawless colour matching and finishes in our spray booth.' },
              { role: 'Customer Service', desc: 'Friendly, knowledgeable staff to guide you through every step of the process.' },
            ].map((member, i) => (
              <AnimatedDiv key={member.role} delay={i * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-electric" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-gray-500 text-sm">{member.desc}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedDiv>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Your Car Repaired?
            </h2>
            <p className="text-gray-500 mb-8">
              Contact us today for a free, no-obligation quote. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-electric/25 inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href="tel:01625000000"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-electric hover:text-electric transition-colors inline-flex items-center justify-center gap-2"
              >
                Call 01625 000 000
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
}
