import { Apple, Citrus, Grape, Carrot, Leaf, Cherry } from 'lucide-react';

const produce = [
  {
    icon: Citrus,
    category: 'Citrus',
    season: 'Nov – Mar',
    image: 'https://images.pexels.com/photos/14766928/pexels-photo-14766928.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Oranges', 'Mandarins', 'Lemons', 'Grapefruit'],
    note: 'Sourced from Egypt, Spain, and South Africa depending on season.',
  },
  {
    icon: Apple,
    category: 'Pome Fruit',
    season: 'Aug – Dec',
    image: 'https://images.pexels.com/photos/12382613/pexels-photo-12382613.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Red Apples', 'Green Apples', 'Pears'],
    note: 'Polish and Italian orchards, controlled-atmosphere storage year-round.',
  },
  {
    icon: Grape,
    category: 'Grapes',
    season: 'Jul – Oct',
    image: 'https://images.pexels.com/photos/10922960/pexels-photo-10922960.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Red Globe', 'White Seedless', 'Black Seedless'],
    note: 'Indian and South African vineyards, packed in ventilated crates.',
  },
  {
    icon: Cherry,
    category: 'Tropical',
    season: 'Year-round',
    image: 'https://images.pexels.com/photos/28903096/pexels-photo-28903096.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Mango', 'Pineapple', 'Banana', 'Papaya'],
    note: 'Hot-water treated mangoes compliant with EU and US phytosanitary rules.',
  },
  {
    icon: Carrot,
    category: 'Root Vegetables',
    season: 'Year-round',
    image: 'https://images.pexels.com/photos/29181503/pexels-photo-29181503.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Potatoes', 'Carrots', 'Onions', 'Beets'],
    note: 'Stored in dark, climate-controlled facilities to extend shelf life.',
  },
  {
    icon: Leaf,
    category: 'Leafy & Salad',
    season: 'Sep – May',
    image: 'https://images.pexels.com/photos/7658792/pexels-photo-7658792.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Lettuce', 'Spinach', 'Cabbage', 'Herbs'],
    note: 'Hydro-cooled within two hours of harvest, shipped in refrigerated trucks.',
  },
];

export default function Products() {
  return (
    <section id="produce" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Our Produce
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight text-balance">
            Seasonal catalog, sourced at peak.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We export over 40 varieties of fresh fruit and vegetables. Each category has a
            dedicated supply manager who tracks harvest windows, quality grades, and phytosanitary
            requirements for every destination market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produce.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.category}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
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

                {/* Content */}
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
