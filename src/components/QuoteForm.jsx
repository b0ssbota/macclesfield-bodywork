import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const serviceOptions = [
  'Body Work Repairs',
  'Accident Damage',
  'Scratch Repairs',
  'Spray Painting',
  'Alloy Wheel Repairs',
  'Alloy Wheel Resprays',
  'Vehicle Welding',
];

export default function QuoteForm({ preselect = '' }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselect,
    message: '',
  });
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fallback: if EmailJS not configured, open mailto
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`Quote Request: ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:cars@maccgarage.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: preselect, message: '' });
      setFiles([]);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Message Sent!</h3>
        <p className="text-gray-500 text-sm">Thank you — we'll be in touch shortly with your quote.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-electric text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Describe the Damage / Work Needed</label>
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
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Photos of Damage</label>
        <label className="block border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-electric/50 transition-colors cursor-pointer">
          <Upload size={24} className="mx-auto text-gray-400 mb-2" />
          {files.length > 0 ? (
            <p className="text-sm text-electric font-medium">{files.length} file{files.length > 1 ? 's' : ''} selected</p>
          ) : (
            <>
              <p className="text-sm text-gray-500">Drag photos here or <span className="text-electric font-medium">browse</span></p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB each</p>
            </>
          )}
          <input
            type="file"
            name="attachments"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try calling us on 07307 353 951.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-electric/25 disabled:opacity-60"
      >
        {status === 'sending' ? (
          <><Loader2 size={18} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={18} /> Send Quote Request</>
        )}
      </button>
    </form>
  );
}
