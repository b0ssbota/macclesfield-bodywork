import { Link, useParams } from 'react-router-dom';
import {
  Wrench, CarFront, Paintbrush, SprayCan, CircleDot, Palette,
  CheckCircle2, ArrowRight, Phone, ChevronRight
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../../components/SectionHeading';
import QuoteForm from '../../components/QuoteForm';

const servicesData = {
  'body-work-repairs': {
    icon: Wrench,
    title: 'Body Work Repairs',
    tagline: 'Structural & Cosmetic Panel Work',
    heroImage: '/images/spray-prep.jpeg',
    heroImageAlt: 'Car body work repair in progress at Macclesfield workshop',
    heroDescription: 'From minor dents to major structural repairs, our skilled technicians restore your vehicle to its pre-accident condition using manufacturer-approved methods and premium materials.',
    features: [
      'Dent removal and panel beating',
      'Panel replacement and alignment',
      'Structural straightening on our dedicated jig',
      'Filler work and finishing to factory standards',
      'Corrosion and rust repair',
      'Insurance-approved repairs with warranty',
    ],
    details: [
      {
        title: 'Expert Panel Work',
        description: 'Our experienced panel beaters use a combination of traditional skills and modern techniques to repair or replace damaged body panels. Whether it\'s a minor parking dent or a major crease, we restore every panel to its original profile.',
        image: '/images/door-damage.jpeg',
        imageAlt: 'Panel damage before bodywork repair',
      },
      {
        title: 'Structural Integrity',
        description: 'For vehicles that have sustained structural damage, we use computerised measuring systems and a dedicated jig to ensure perfect alignment. Safety is our top priority — your vehicle leaves our workshop as strong as the day it was built.',
        image: '/images/spray-prep.jpeg',
        imageAlt: 'Car being prepared for structural body repair in workshop',
      },
      {
        title: 'Seamless Finish',
        description: 'Every repair is finished with precision filler work, high-build primers, and a factory-matched paint finish. Our goal is an invisible repair that you\'d never know was there.',
        image: '/images/porsche-after.jpeg',
        imageAlt: 'Finished bodywork repair — flawless result',
      },
    ],
  },
  'accident-damage': {
    icon: CarFront,
    title: 'Accident Damage',
    tagline: 'Full Insurance-Approved Collision Repair',
    heroImage: '/images/bmw-prep.jpeg',
    heroImageAlt: 'BMW accident damage repair in Macclesfield workshop',
    heroDescription: 'We handle everything from the initial assessment to the final quality check. Our team works directly with your insurer to make the claims process as smooth as possible.',
    features: [
      'All insurance companies accepted',
      'Direct billing with major insurers',
      'Courtesy car available during repair',
      'Genuine and OEM replacement parts',
      'Complete structural and cosmetic repair',
      'Full photographic documentation',
    ],
    details: [
      {
        title: 'Hassle-Free Claims',
        description: 'We take the stress out of accident repair by managing the entire insurance process on your behalf. From submitting the initial claim to agreeing the scope of work, we handle all the paperwork so you don\'t have to.',
        image: '/images/door-damage.jpeg',
        imageAlt: 'Vehicle accident damage assessed before repair',
      },
      {
        title: 'Comprehensive Repair',
        description: 'Our fully equipped workshop can handle all levels of collision damage. We carry out structural repairs, panel replacement, paint refinishing, and mechanical work — all under one roof for a faster, more efficient repair.',
        image: '/images/bmw-prep.jpeg',
        imageAlt: 'BMW undergoing comprehensive accident damage repair',
      },
      {
        title: 'Back On The Road',
        description: 'We understand how disruptive it is to be without your car. That\'s why we work efficiently to return your vehicle as quickly as possible, and offer courtesy cars to keep you mobile during the repair.',
        image: '/images/porsche-after.jpeg',
        imageAlt: 'Finished vehicle repair — ready to collect',
      },
    ],
  },
  'scratch-repairs': {
    icon: Paintbrush,
    title: 'Scratch Repairs',
    tagline: 'Precision Paint Matching & Buffing',
    heroImage: '/images/door-damage.jpeg',
    heroImageAlt: 'Car scratch and panel damage before repair in Macclesfield',
    heroDescription: 'Don\'t let scratches and scuffs diminish your car\'s appearance and value. Our precision scratch repair service restores your paintwork to a flawless finish.',
    features: [
      'Computerised paint colour matching',
      'Machine polishing and buffing',
      'Lacquer peel and fade repair',
      'Key scratch and vandal damage repair',
      'Car park scuff removal',
      'Smart repair for localised damage',
    ],
    details: [
      {
        title: 'Perfect Colour Match',
        description: 'Using our advanced spectrophotometer, we analyse your vehicle\'s exact paint code and create a custom blend that perfectly matches the existing colour — even accounting for age and weathering.',
        image: '/images/painting-red-1.jpeg',
        imageAlt: 'Precise colour matching and spray painting in booth',
      },
      {
        title: 'Smart Repair Techniques',
        description: 'For smaller scratches and scuffs, we use smart repair techniques that target only the affected area. This means less paint used, faster turnaround, and a lower cost — without compromising on quality.',
        image: '/images/painting-black.jpeg',
        imageAlt: 'Smart repair technique — targeted panel painting',
      },
      {
        title: 'Full Panel Repair',
        description: 'For deeper scratches that have gone through to the primer or bare metal, we carry out a full panel repair including preparation, priming, colour coat, and lacquer application for a factory-fresh finish.',
        image: '/images/porsche-after.jpeg',
        imageAlt: 'Perfect finish after full panel scratch repair',
      },
    ],
  },
  'spray-painting': {
    icon: SprayCan,
    title: 'Spray Painting',
    tagline: 'Professional Resprays & Panel Matching',
    heroImage: '/images/painting-red-2.jpeg',
    heroImageAlt: 'Professional car spray painting in Macclesfield spray booth',
    heroDescription: 'From single panel resprays to full vehicle colour changes, our state-of-the-art spray booth and expert painters deliver a showroom-quality finish every time.',
    features: [
      'Down-draught spray booth for a dust-free finish',
      'Water-based and solvent-based paint systems',
      'Full vehicle resprays and colour changes',
      'Individual panel painting',
      'Bumper and trim painting',
      'Clearcoat and lacquer application',
    ],
    details: [
      {
        title: 'Professional Spray Booth',
        description: 'All painting is carried out in our purpose-built, temperature-controlled down-draught spray booth. This ensures a completely dust-free environment for a flawless, factory-quality finish on every job.',
        image: '/images/painting-red-1.jpeg',
        imageAlt: 'Professional spray booth — car respray in progress',
      },
      {
        title: 'Expert Painters',
        description: 'Our painters have years of experience working with all types of finishes — solid, metallic, pearlescent, and matte. Whatever your vehicle\'s paint type, we have the skills and equipment to match it perfectly.',
        image: '/images/painting-red-2.jpeg',
        imageAlt: 'Expert painter applying colour coat in spray booth',
      },
      {
        title: 'Quality Materials',
        description: 'We use only premium paint systems from leading manufacturers. Combined with proper preparation, priming, and multi-stage application, the result is a durable, beautiful finish that stands the test of time.',
        image: '/images/bmw-prep.jpeg',
        imageAlt: 'Car prepared and masked for professional respray',
      },
    ],
  },
  'alloy-wheel-repairs': {
    icon: CircleDot,
    title: 'Alloy Wheel Repairs',
    tagline: 'Fixing Scuffs, Cracks & Buckles',
    heroImage: '/images/alloy-respray.jpeg',
    heroImageAlt: 'Alloy wheel repair and refurbishment in Macclesfield',
    heroDescription: 'Kerb damage, potholes, and general wear can leave your alloys looking tired. Our wheel repair service restores them to better-than-new condition.',
    features: [
      'Kerb scuff and scrape repair',
      'Crack welding and sealing',
      'Buckle straightening',
      'Diamond-cut wheel refurbishment',
      'Same-day service available',
      'All wheel sizes and types repaired',
    ],
    details: [
      {
        title: 'Scuff & Scrape Repair',
        description: 'Kerb rash is one of the most common types of wheel damage. We remove the damage by machining or filling the affected area, then repaint to match the original finish — whether that\'s painted, polished, or diamond-cut.',
        image: '/images/alloy-respray.jpeg',
        imageAlt: 'Alloy wheels being repaired and resprayed',
      },
      {
        title: 'Structural Repairs',
        description: 'Cracked or buckled alloys can be dangerous. We assess every wheel for structural integrity and carry out specialist welding and straightening where safe to do so, always prioritising your safety.',
        image: null,
        imageAlt: null,
      },
      {
        title: 'Diamond-Cut Finish',
        description: 'For wheels with a diamond-cut (machined face) finish, we use CNC lathes to re-machine the wheel face before applying a protective lacquer. The result is a pristine, factory-spec finish.',
        image: null,
        imageAlt: null,
      },
    ],
  },
  'alloy-wheel-resprays': {
    icon: Palette,
    title: 'Alloy Wheel Resprays',
    tagline: 'Custom Colours & Factory Finishes',
    heroImage: '/images/alloy-respray.jpeg',
    heroImageAlt: 'Alloy wheel respray — custom colour finish in Macclesfield',
    heroDescription: 'Whether you want to restore your wheels to their original colour or go for a completely new look, our alloy wheel respray service delivers a stunning, durable finish.',
    features: [
      'Any colour from our extensive range',
      'Gloss, satin, and matte finishes',
      'Factory colour restoration',
      'Custom and bespoke finishes',
      'Powder coating available',
      'Protective lacquer application',
    ],
    details: [
      {
        title: 'Endless Colour Options',
        description: 'Choose from hundreds of colours and finishes to give your wheels a completely new look. From classic silver and gunmetal to bold custom colours, we can spray your wheels in any shade you desire.',
        image: '/images/alloy-respray.jpeg',
        imageAlt: 'Alloy wheels being resprayed in professional booth',
      },
      {
        title: 'Professional Preparation',
        description: 'Great results start with great preparation. We strip each wheel back, repair any damage, apply a corrosion-resistant primer, and build up multiple paint layers for a smooth, even, and durable finish.',
        image: '/images/painting-red-1.jpeg',
        imageAlt: 'Professional preparation and priming before respray',
      },
      {
        title: 'Durable Protection',
        description: 'Every wheel respray is sealed with a high-quality clearcoat lacquer that protects against brake dust, road salt, and everyday wear. Your wheels will stay looking fresh for years to come.',
        image: null,
        imageAlt: null,
      },
    ],
  },
};

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

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-electric font-medium hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const otherServices = Object.entries(servicesData)
    .filter(([key]) => key !== slug)
    .map(([key, val]) => ({ slug: key, title: val.title, icon: val.icon }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">{service.title}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mb-6">
                <Icon size={32} className="text-electric" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-electric font-medium mb-4">{service.tagline}</p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {service.heroDescription}
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
            <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={service.heroImage}
                alt={service.heroImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What's Included"
            title={`Our ${service.title} Service`}
            description="Every job is carried out to the highest standard using premium materials and expert techniques."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.features.map((feature, i) => (
              <AnimatedDiv key={feature} delay={i * 80}>
                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100">
                  <CheckCircle2 size={20} className="text-electric shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {service.details.map((detail, i) => (
              <AnimatedDiv key={detail.title} delay={i * 100}>
                {detail.image ? (
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{detail.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{detail.description}</p>
                    </div>
                    <div className="flex-1 rounded-2xl overflow-hidden aspect-[4/3]">
                      <img
                        src={detail.image}
                        alt={detail.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{detail.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{detail.description}</p>
                  </div>
                )}
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Free Quote"
                title={`Get a ${service.title} Quote`}
                description="Tell us about your vehicle and the damage, and we'll come back to you with a competitive estimate."
              />
              <div className="hidden lg:block space-y-4 mt-8">
                {['No obligation, free estimates', 'Insurance claims handled', 'Fast turnaround times', 'Collection & delivery available'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-electric shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Explore"
            title="Our Other Services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4 hover:bg-gradient-to-r hover:from-cyan/5 hover:to-purple/5 border border-gray-100 hover:border-electric/20 transition-all"
              >
                <s.icon size={20} className="text-electric shrink-0" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-electric transition-colors">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
