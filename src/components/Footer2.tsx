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
      { label: 'Certifications', href: '#' },
      { label: 'Track Shipment', href: '#' },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer2() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olive-400 via-olive-600 to-olive-400" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-olive-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-olive-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3 w-fit">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-olive-600 text-white">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold leading-none">S3M</span>
                <span className="text-[10px] tracking-[0.1em] uppercase text-slate-400">
                  Global Exporters
                </span>
              </div>
            </a>
            <p className="text-slate-400 leading-relaxed text-sm">
              Connecting the world's finest produce with global markets through
              innovation in cold-chain logistics and sustainable sourcing.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-olive-600 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-olive-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:sales@s3mglobalexporters.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="p-2 rounded-md bg-slate-800 group-hover:bg-olive-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">sales@s3mglobalexporters.com</span>
              </a>
              <a href="tel:+97140000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="p-2 rounded-md bg-slate-800 group-hover:bg-olive-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+971 4 000 0000</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="p-2 rounded-md bg-slate-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} S3M Global Exporters. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">
              Terms of Service
            </a>
            <a
              href="#home"
              className="flex items-center gap-2 text-slate-500 hover:text-white text-xs transition-colors group"
            >
              Back to Top
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
