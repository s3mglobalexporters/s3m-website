import { Citrus, Grape, Carrot, Leaf, Fish, Wheat, ArrowRight } from 'lucide-react';
import type { ProductIcon } from '@/data/products';
import { products } from '@/data/products';

const iconMap: Record<ProductIcon, typeof Leaf> = {
  citrus: Citrus,
  leaf: Leaf,
  wheat: Wheat,
  grape: Grape,
  fish: Fish,
  carrot: Carrot,
};

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
            Our core offer is export-ready fresh fruits and vegetables — conventional and organic —
            supported by selected plantation goods, spices, seafood, and custom sourcing when the
            product, compliance, and quantity are right. Open any category for the full detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={item.slug}
                href={`#/product/${item.slug}`}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
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

                <div className="p-6 flex flex-col flex-1">
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
                  <p className="text-sm text-gray-500 leading-relaxed italic mb-6">
                    {item.note}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-700">
                    View details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
