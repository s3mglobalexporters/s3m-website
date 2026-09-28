import { Sprout, Snowflake, Globe2, Leaf } from 'lucide-react';

const stats = [
  { value: '120+', label: 'Partner Farms', sub: 'Across 3 continents' },
  { value: '40K+', label: 'Tons / Year', sub: 'Fresh produce moved' },
  { value: '35+', label: 'Destination Markets', sub: 'Weekly departures' },
  { value: '98.6%', label: 'Fresh-on-Arrival', sub: 'Independently audited' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Centered mission statement with serif emphasis */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Who We Are
          </span>
          <p className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-primary-900 mt-6 leading-[1.35] text-balance">
            We believe the best produce comes from farmers who know their land.
            <span className="text-accent-600"> So we buy direct, move cold,</span>
            <span className="text-olive-600"> and pay fair.</span>
            <br />
            No middlemen. No mystery margins. Just fresh fruit and vegetables, from field to
            shelf, handled right.
          </p>
        </div>

        {/* Cinematic film card */}
        <div className="relative mb-20 animate-scale-in group">
          {/* Film perforations top */}
          <div className="flex justify-between px-4 mb-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-3 rounded-sm bg-primary-300/60" />
            ))}
          </div>

          {/* Main card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-primary-900">
            <img
              src="https://images.pexels.com/photos/5202206/pexels-photo-5202206.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Colorful arrangement of fresh vegetables and olives on a dark surface"
              className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-olive-600 text-white">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-cream-200 text-sm font-medium tracking-wider uppercase">
                  Packing House, Nairobi
                </span>
              </div>
              <p className="text-white font-display text-xl md:text-2xl max-w-xl leading-snug">
                Every lot is hydro-cooled within two hours of harvest and graded by hand before it
                sees a container.
              </p>
            </div>

            {/* Corner badge */}
            <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 rounded-full bg-olive-400 animate-pulse" />
              <span className="text-white text-xs font-medium">Cold-Chain Verified</span>
            </div>
          </div>

          {/* Film perforations bottom */}
          <div className="flex justify-between px-4 mt-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-3 rounded-sm bg-primary-300/60" />
            ))}
          </div>
        </div>

        {/* Editorial stat rail */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream-200 rounded-2xl overflow-hidden border border-cream-200">
          {stats.map((stat, i) => {
            const icons = [Sprout, Snowflake, Globe2, Leaf];
            const Icon = icons[i];
            return (
              <div
                key={stat.label}
                className="bg-cream-50 p-8 text-center hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-olive-100 text-olive-600 mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-accent-700 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
