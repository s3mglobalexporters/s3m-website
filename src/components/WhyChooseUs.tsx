import { ShieldCheck, Clock, Award, Headphones, Leaf, DollarSign } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'GlobalG.A.P. Certified',
    description: 'Every partner farm is audited annually. We maintain full traceability from pallet back to field lot.',
  },
  {
    icon: Clock,
    title: '48-Hour Average Transit',
    description: 'Air freight for premium perishables, reefer containers for the rest. We pick the route that fits the shelf life.',
  },
  {
    icon: Award,
    title: 'Category Specialists',
    description: 'A dedicated supply manager per produce category who knows the harvest calendar and import rules cold.',
  },
  {
    icon: Headphones,
    title: 'Real-Time Tracking',
    description: 'Temperature logger data and shipment status available through a client portal, updated at every checkpoint.',
  },
  {
    icon: Leaf,
    title: 'Fair-Trade Sourcing',
    description: 'We pay farm-gate prices that keep growers profitable. No middlemen, no opaque margins.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'FOB or CIF quotes broken down by line item. You see what you are paying for, line by line.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Why S3M
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight text-balance">
            Six reasons buyers stay with us.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We earn repeat business the hard way: by showing up on time, every time, with produce
            that passes inspection on arrival.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-cream-50 border border-cream-200 hover:border-accent-200 transition-all duration-500"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
