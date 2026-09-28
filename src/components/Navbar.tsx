import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Produce', href: '#produce' },
  { label: 'Cold Chain', href: '#cold-chain' },
  { label: 'Reach', href: '#reach' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-olive-600 text-white transition-transform group-hover:scale-110">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-display text-xl font-bold leading-none ${scrolled ? 'text-primary-900' : 'text-white'}`}>
              S3M
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-accent-600' : 'text-cream-200'}`}>
              Global Exporters
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  scrolled ? 'text-gray-700 hover:text-accent-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-all duration-300 hover:shadow-lg hover:shadow-accent-600/30"
        >
          Request a Quote
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden ${scrolled ? 'text-primary-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream-50/98 backdrop-blur-md mx-4 mt-3 rounded-2xl shadow-xl p-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 font-medium hover:text-accent-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
