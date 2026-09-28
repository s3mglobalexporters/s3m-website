import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Cold-Chain Process', href: '#cold-chain' },
    { label: 'Our Network', href: '#reach' },
    { label: 'Contact', href: '#contact' },
  ],
  Produce: [
    { label: 'Citrus', href: '#produce' },
    { label: 'Pome Fruit', href: '#produce' },
    { label: 'Grapes', href: '#produce' },
    { label: 'Tropical', href: '#produce' },
  ],
  Resources: [
    { label: 'Request a Quote', href: '#contact' },
    { label: 'Seasonal Calendar', href: '#produce' },
    { label: 'Certifications', href: '#' },
    { label: 'Track Shipment', href: '#' },
  ],
};

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olive-500 via-accent-500 to-cream-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-olive-600 text-white">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold leading-none">S3M</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-cream-300">
                  Global Exporters
                </span>
              </div>
            </a>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              Fresh fruit and vegetable export from farm-direct sourcing to cold-chain delivery.
              Serving 35+ markets across five regions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-olive-400" />
                sales@s3mglobalexporters.com
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-olive-400" />
                +971 4 000 0000
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-olive-400" />
                Trade Center, Business Bay, Dubai, UAE
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-cream-300 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} S3M Global Exporters. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-olive-600 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <a
            href="#home"
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors group"
          >
            Back to Top
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-olive-600 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
