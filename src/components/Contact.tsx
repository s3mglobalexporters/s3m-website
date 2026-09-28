import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', product: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cream-50 to-olive-50/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-olive-200/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-200/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight text-balance">
              Tell us what you need. We will quote it.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Send us your product list, volume, and destination port. You will receive a detailed
              FOB or CIF quote within 24 hours, broken down by line item.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-olive-100 text-olive-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Email</h4>
                  <p className="text-gray-600">sales@s3mglobalexporters.com</p>
                  <p className="text-gray-600">logistics@s3mglobalexporters.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-olive-100 text-olive-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+971 4 000 0000</p>
                  <p className="text-gray-600">+971 50 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-olive-100 text-olive-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Office</h4>
                  <p className="text-gray-600">Trade Center, Business Bay</p>
                  <p className="text-gray-600">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-cream-200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-scale-in">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-success-100 text-success-600 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-900 mb-3">
                  Quote request sent.
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Our team will respond with a detailed quote within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-2xl font-bold text-primary-900 mb-2">
                  Request a Quote
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Fields marked with * are required.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Produce Category
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                  >
                    <option value="">Select a category</option>
                    <option value="citrus">Citrus</option>
                    <option value="pome">Pome Fruit (Apples, Pears)</option>
                    <option value="grapes">Grapes</option>
                    <option value="tropical">Tropical Fruit</option>
                    <option value="root">Root Vegetables</option>
                    <option value="leafy">Leafy & Salad</option>
                    <option value="mixed">Mixed / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all resize-none"
                    placeholder="Include volume, destination port, and delivery timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-300 hover:shadow-xl hover:shadow-accent-600/30"
                >
                  Send Request
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
