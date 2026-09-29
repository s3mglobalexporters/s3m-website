import { ArrowRight, Truck, Globe2, Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&w=1920"
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/37284475/15794944_2560_1440_60fps.mp4"
            type="video/mp4"
          />
        </video>
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
