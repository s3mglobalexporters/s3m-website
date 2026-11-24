import { ArrowLeft, ArrowRight, Check, Fish, Leaf, Citrus, Wheat, Grape, Carrot } from 'lucide-react';
import type { Product, ProductIcon } from '@/data/products';

const iconMap: Record<ProductIcon, typeof Leaf> = {
  citrus: Citrus,
  leaf: Leaf,
  wheat: Wheat,
  grape: Grape,
  fish: Fish,
  carrot: Carrot,
};

export default function ProductDetail({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={product.image}
          alt={product.category}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/70 to-primary-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-16 w-full">
          <a
            href="#produce"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All produce
          </a>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-cream-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white/90">
              {product.season}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4 text-balance">
            {product.category}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {product.tagline}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-5">
              What we supply
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            <ul className="flex flex-wrap gap-2 mb-10">
              {product.items.map((item) => (
                <li
                  key={item}
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-olive-50 text-olive-700 border border-olive-100"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-5">
              How we handle it
            </h2>
            <ul className="space-y-4 mb-10">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-olive-100 text-olive-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 leading-relaxed italic border-l-2 border-accent-300 pl-4">
              {product.note}
            </p>
          </div>

          {/* Specification card */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-primary-900 mb-1">At a glance</h3>
              <p className="text-sm text-gray-500 mb-6">
                Confirmed against your buyer brief before quotation.
              </p>

              <dl className="divide-y divide-cream-200">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="py-3 first:pt-0">
                    <dt className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                      {spec.label}
                    </dt>
                    <dd className="text-sm text-primary-900 leading-relaxed">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA band */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-primary-900 px-8 py-12 md:px-14">
            <div className="absolute inset-0 opacity-20">
              <img src={product.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  Need {product.category.toLowerCase()} on a schedule?
                </h2>
                <p className="text-white/70 max-w-xl">
                  Send the product, volume, and destination. We will confirm availability and reply
                  with a quote.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-cream-100 transition-colors"
              >
                Start a request
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
