import { Apple, Citrus, Grape, Carrot, Leaf, Fish, Wheat } from 'lucide-react';

const produce = [
  {
    icon: Citrus,
    category: 'Fresh Fruits',
    season: 'Year-round',
    image: 'https://images.pexels.com/photos/14766928/pexels-photo-14766928.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Mango', 'Banana', 'Pineapple', 'Pomegranate'],
    note: 'Commercially sourced fruit selected for export grade, variety, and destination requirements.',
  },
  {
    icon: Leaf,
    category: 'Fresh Vegetables',
    season: 'Year-round',
    image: 'https://images.pexels.com/photos/29181503/pexels-photo-29181503.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Onion', 'Potato', 'Tomato', 'Okra'],
    note: 'Fresh vegetables prepared for wholesale, retail, foodservice, and institutional buyers.',
  },
  {
    icon: Wheat,
    category: 'Plantation Products',
    season: 'Seasonal',
    image: 'https://images.pexels.com/photos/8148229/pexels-photo-8148229.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Vanilla', 'Cocoa', 'Coffee', 'Tea'],
    note: 'Sourced to buyer specification with availability, grade, and compliance confirmed before quotation.',
  },
  {
    icon: Grape,
    category: 'Spices & Agri Products',
    season: 'Seasonal',
    image: 'https://images.pexels.com/photos/15741144/pexels-photo-15741144.jpeg?auto=compress&cs=tinysrgb&w=940',
    items: ['Black Pepper', 'Cardamom', 'Turmeric', 'Cinnamon'],
    note: 'Whole, dried, or processed agricultural products supplied according to the required specification.',
  },
  {
    icon: Fish,
    category: 'Fish & Seafood',
    season: 'By availability',
    image: 'https://images.pexels.com/photos/8352394/pexels-photo-8352394.jpeg?auto=compress&cs=tinysrgb&w=940',
    items: ['Fresh Fish', 'Frozen Fish', 'Seafood'],
    note: 'Handled only where sourcing, processing, cold-chain, and regulatory requirements are confirmed.',
  },
  {
    icon: Carrot,
    category: 'Custom Sourcing',
    season: 'On request',
    image: 'https://images.pexels.com/photos/16664900/pexels-photo-16664900.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Buyer Briefs', 'Private Sourcing', 'Export Partners'],
    note: 'A practical sourcing service for specific products, quantities, quality standards, and destinations.',
  },
];

export default function Products() {
  return (
    <section id="produce" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Our Produce
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight text-balance">
            Fresh fruits and vegetables first. Sourced to buyer specification.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our core offer is export-ready fresh produce, supported by selected plantation goods,
            spices, seafood, and custom sourcing when the product, compliance, and quantity are right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produce.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.category}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm text-accent-600 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-olive-700">
                    {item.season}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-700 transition-colors">
                    {item.category}
                  </h3>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {item.items.map((variety) => (
                      <li
                        key={variety}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-olive-50 text-olive-700 border border-olive-100"
                      >
                        {variety}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 leading-relaxed italic">
                    {item.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
