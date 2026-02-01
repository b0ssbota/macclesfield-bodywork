import { useState } from 'react';
import { Send, Upload } from 'lucide-react';

const serviceOptions = [
  'Body Work Repairs',
  'Accident Damage',
  'Scratch Repairs',
  'Spray Painting',
  'Alloy Wheel Repairs',
  'Alloy Wheel Resprays',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
            placeholder="07123 456 789"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm bg-white"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Describe the Damage</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm resize-none"
          placeholder="Tell us about the damage or work needed..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Photos</label>
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-electric/50 transition-colors cursor-pointer">
          <Upload size={24} className="mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-500">Drag photos here or <span className="text-electric font-medium">browse</span></p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
          <input type="file" multiple accept="image/*" className="hidden" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-electric/25"
      >
        <Send size={18} />
        Send Quote Request
      </button>
    </form>
  );
}
