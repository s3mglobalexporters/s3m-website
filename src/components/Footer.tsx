import { Leaf, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Produce', href: '#produce' },
  { label: 'Process', href: '#process' },
  { label: 'Network', href: '#reach' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 text-white overflow-hidden">
      {/* Image background section with curved SVG transition */}
      <div className="relative h-[280px] md:h-[360px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/16664900/pexels-photo-16664900.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Aerial view of a vibrant vegetable farm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-primary-950/20 to-primary-950" />

        {/* Curved SVG overlay - large dramatic wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            className="w-full h-[120px] md:h-[160px]"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 160 C 240 80 480 160 720 120 C 960 80 1200 160 1440 100 L 1440 160 Z"
              fill="currentColor"
              className="text-primary-950"
            />
          </svg>
        </div>

        {/* Curved SVG accent line */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            className="w-full h-[120px] md:h-[160px]"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 160 C 240 80 480 160 720 120 C 960 80 1200 160 1440 100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-olive-500/40"
            />
          </svg>
        </div>
      </div>

      {/* Footer content - centered */}
      <div className="relative max-w-3xl mx-auto px-6 pb-12 -mt-8 flex flex-col items-center text-center">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-olive-600 text-white shadow-lg shadow-olive-600/30">
            <Leaf className="w-7 h-7" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-display text-2xl font-bold leading-none">S3M</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-cream-300">
              Global Exporters
            </span>
          </div>
        </a>

        <p className="text-white/60 leading-relaxed max-w-sm mb-8 text-sm">
          Fresh fruit and vegetable export from farm-direct sourcing to cold-chain delivery.
          Serving 35+ markets across five regions.
        </p>

        {/* Horizontal nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-cream-300 text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-3 mb-8">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-olive-600 hover:border-olive-600 text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} S3M Global Exporters. All rights reserved.</p>
          <span className="hidden md:inline text-white/15">·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <span className="hidden md:inline text-white/15">·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
        </div>

        {/* Back to top */}
        <a
          href="#home"
          className="group mt-8 flex items-center gap-2 text-white/50 hover:text-white text-xs transition-colors"
        >
          Back to Top
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-olive-600 transition-colors duration-300">
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>
      </div>
    </footer>
  );
}
