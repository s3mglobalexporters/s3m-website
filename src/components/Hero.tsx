import { ArrowRight, Truck, Globe2, Sprout } from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  {
    url: 'https://images.pexels.com/photos/22156653/pexels-photo-22156653.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Aerial view of a cabbage farm',
  },
  {
    url: 'https://images.pexels.com/photos/30309037/pexels-photo-30309037.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Vibrant cluster of ripe tomatoes on the vine',
  },
  {
    url: 'https://images.pexels.com/photos/28387811/pexels-photo-28387811.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Apple orchard with a dirt path',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-900/70 to-primary-800/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-olive-400 animate-pulse" />
            GlobalG.A.P. Certified · Cold-Chain Ready
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up text-balance">
            Fresh from the farm,
            <span className="block text-cream-300">delivered to the world.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up">
            S3M Global Exporters connects growers and markets across three continents. We source
            seasonal fruits and vegetables at peak freshness and move them through a
            temperature-controlled supply chain straight to your warehouse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-300 hover:shadow-xl hover:shadow-accent-600/40"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#produce"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Browse Our Produce
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/15 animate-fade-in">
            <div>
              <div className="flex items-center gap-2 text-cream-300 mb-1">
                <Globe2 className="w-5 h-5" />
                <span className="text-3xl font-bold text-white">35+</span>
              </div>
              <p className="text-sm text-white/60">Destination Markets</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-cream-300 mb-1">
                <Truck className="w-5 h-5" />
                <span className="text-3xl font-bold text-white">48h</span>
              </div>
              <p className="text-sm text-white/60">Avg. Transit Time</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-cream-300 mb-1">
                <Sprout className="w-5 h-5" />
                <span className="text-3xl font-bold text-white">120+</span>
              </div>
              <p className="text-sm text-white/60">Partner Farms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
