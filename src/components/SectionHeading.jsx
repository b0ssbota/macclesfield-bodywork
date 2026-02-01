import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SectionHeading({ label, title, description }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {label && (
        <span className="inline-block gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
