import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('sent');

    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-midnight-800/50 border border-glass-border text-heading placeholder-midnight-400 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all duration-300';

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-midnight-200 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-midnight-200 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-midnight-200 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="What's this about?"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-midnight-200 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell me about your project..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
          status === 'sent'
            ? 'bg-green-600 text-white'
            : status === 'sending'
              ? 'bg-violet-600/50 text-white/70 cursor-wait'
              : 'bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5'
        }`}
      >
        {status === 'idle' && 'Send Message'}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && 'Message Sent! ✓'}
        {status === 'error' && 'Error — Try Again'}
      </button>
    </motion.form>
  );
}
