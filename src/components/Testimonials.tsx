import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andreas Müller',
    role: 'Head of Fresh, Müller Fruchtimport GmbH',
    location: 'Hamburg, Germany',
    avatar: 'AM',
    rating: 5,
    text: "We switched our citrus supply to S3M two seasons ago. Their Valencia oranges arrive with a consistent brix of 11-12 and a shelf life that gives our retail customers three extra days. The temperature logger data comes with every shipment.",
  },
  {
    name: 'Sarah Chen',
    role: 'Procurement Manager, FreshMart Asia',
    location: 'Singapore',
    avatar: 'SC',
    rating: 5,
    text: "What I appreciate is the honesty. When a mango crop is delayed by monsoon, S3M tells us a week ahead, not on the day. That kind of communication lets us manage our promotions without scrambling.",
  },
  {
    name: 'Khalid Al-Rashid',
    role: 'Director, Al-Rashid Trading Est.',
    location: 'Dubai, UAE',
    avatar: 'KR',
    rating: 5,
    text: "We import onions and potatoes from S3M year-round. Their packing house standards are visible in the product. Consistent size, minimal bruising, and the documentation is always complete before the container clears customs.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <Quote className="absolute top-10 right-10 w-40 h-40 text-cream-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Client Voices
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight text-balance">
            What produce buyers tell us.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We work with importers, wholesalers, and retail chains across five regions. Here is
            what matters to them.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group p-8 rounded-2xl bg-white border border-cream-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning-400 text-warning-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-cream-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-olive-600 text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-accent-600 mt-0.5">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
