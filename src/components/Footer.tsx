import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Cold-Chain Process', href: '#process' },
      { label: 'Our Network', href: '#reach' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Produce',
    links: [
      { label: 'Citrus', href: '#produce' },
      { label: 'Pome Fruit', href: '#produce' },
      { label: 'Grapes', href: '#produce' },
      { label: 'Tropical', href: '#produce' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Request a Quote', href: '#contact' },
      { label: 'Seasonal Calendar', href: '#produce' },
      { label: 'Quality & Process', href: '#cold-chain' },
      { label: 'Request a Quote', href: '#contact' },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-950 text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/16664900/pexels-photo-16664900.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Aerial view of a vibrant vegetable farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-950/80 to-primary-950/95" />
      </div>

      {/* Curved SVG overlay - top */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 Q 360 0 720 50 T 1440 30 L 1440 0 L 0 0 Z"
            fill="currentColor"
            className="text-cream-50"
          />
        </svg>
      </div>

      {/* Curved SVG overlay - bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          className="w-full h-16 md:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 Q 360 80 720 40 T 1440 60 L 1440 80 L 0 80 Z"
            fill="currentColor"
            className="text-cream-50"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-32 flex flex-col items-center text-center">
        {/* Brand */}
        <a href="#home" className="flex items-center justify-center mb-6" aria-label="S3M Global Exporters Home">
          <div className="flex items-center justify-center transition-transform hover:scale-110">
            <img
              src="/s3mlogo.png"
              alt="S3M Logo"
              className="w-48 h-48 object-contain"
            />
          </div>
        </a>

        <p className="text-white/70 leading-relaxed max-w-md mb-10">
          Fresh fruit and vegetable export from India, with sourcing, documentation, and cold-chain support for international buyers.
        </p>

        {/* Contact info */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-10 text-sm text-white/70">
          <a href="mailto:info@s3mglobalexporters.com" className="flex items-center gap-2 hover:text-cream-300 transition-colors duration-300">
            <Mail className="w-4 h-4 text-olive-400" />
            info@s3mglobalexporters.com
          </a>
          <a href="tel:+97140000000" className="flex items-center gap-2 hover:text-cream-300 transition-colors duration-300">
            <Phone className="w-4 h-4 text-olive-400" />
            +971 4 000 0000
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-olive-400" />
            Trade Center, Business Bay, Dubai, UAE
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12 w-full max-w-2xl">
          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col items-center">
              <h4 className="font-semibold text-cream-300 mb-4 text-xs tracking-[0.2em] uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mb-10">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-olive-600 hover:border-olive-600 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} S3M Global Exporters. All rights reserved.</p>
          <span className="hidden md:inline text-white/20">·</span>
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-white/20">·</span>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>

        {/* Back to top */}
        <a
          href="#home"
          className="group mt-8 flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
        >
          Back to Top
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-olive-600 transition-colors duration-300">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>
      </div>
    </footer>
  );
}
