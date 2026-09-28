import { Globe2, MapPin } from 'lucide-react';

const regions = [
  { name: 'Western Europe', countries: '12 markets', note: 'Rotterdam, Hamburg, Felixstowe', color: 'bg-accent-500' },
  { name: 'Middle East', countries: '8 markets', note: 'Jebel Ali, Doha, Jeddah', color: 'bg-primary-500' },
  { name: 'East Asia', countries: '7 markets', note: 'Singapore, Hong Kong, Tokyo', color: 'bg-olive-500' },
  { name: 'North America', countries: '3 markets', note: 'Los Angeles, New York, Toronto', color: 'bg-cream-600' },
  { name: 'East Africa', countries: '5 markets', note: 'Mombasa, Djibouti, Dar es Salaam', color: 'bg-accent-400' },
];

const stats = [
  { value: '35+', label: 'Destination Markets' },
  { value: '120+', label: 'Partner Farms' },
  { value: '40K+', label: 'Tons / Year' },
  { value: '48h', label: 'Avg. Transit' },
];

export default function GlobalReach() {
  return (
    <section id="reach" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/27099094/pexels-photo-27099094.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Refrigerated trucks in an industrial lot"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-950/95 to-primary-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm mb-6">
            <Globe2 className="w-4 h-4" />
            Our Network
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            Five regions. One cold chain.
          </h2>
          <p className="text-white/70 leading-relaxed">
            We operate fixed weekly departures to every major produce hub. Your goods share
            container space with complementary produce, reducing cost per pallet without
            compromising temperature integrity.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <p className="text-4xl md:text-5xl font-bold text-cream-300 mb-2">{stat.value}</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="space-y-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="group flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                <MapPin className="w-5 h-5 text-white/30 group-hover:text-cream-300 transition-colors" />
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{region.name}</h3>
                  <p className="text-sm text-white/50">{region.countries}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm flex-1">{region.note}</p>
              <div className={`h-1 w-12 rounded-full ${region.color} group-hover:w-full md:w-24 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
