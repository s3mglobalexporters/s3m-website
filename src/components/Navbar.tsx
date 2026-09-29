import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import SpecularButton from './ui/SpecularButton';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Produce', href: '#produce' },
  { label: 'Cold Chain', href: '#cold-chain' },
  { label: 'Reach', href: '#reach' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      role="banner"
    >
      <nav
        className={`max-w-7xl mx-auto px-6 transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? 'bg-white/70 dark:bg-primary-950/70 backdrop-blur-lg shadow-lg rounded-full mx-4 py-0.5 mt-2 scale-[0.97]'
            : 'bg-transparent py-1'
        }`}
        aria-label="Main Navigation"
      >
        <a href="#home" className="flex items-center justify-center group" aria-label="S3M Global Exporters Home">
          <div className="flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <img
              src="/s3mlogo.png"
              alt="S3M Logo"
              className={`object-contain transition-all duration-500 ${scrolled ? 'w-24 h-24' : 'w-40 h-40'}`}
            />
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-all duration-500 relative group ${
                  scrolled ? 'text-gray-700 dark:text-gray-300 hover:text-accent-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <SpecularButton
              size="md"
              radius={24}
              tint="#d6a847"
              tintOpacity={1}
              blur={0}
              textColor="#ffffff"
              lineColor="#fad767"
              baseColor="#a87828"
              intensity={2}
              thickness={1.5}
              proximity={300}
              onClick={() => window.location.href = '#contact'}
              className="!rounded-full transition-all duration-500"
            >
              Contact us
            </SpecularButton>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-all duration-500 ${scrolled ? 'text-primary-900 dark:text-white' : 'text-white'}`}
            aria-label={menuOpen ? "Close main menu" : "Open main menu"}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Drawer backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[55] bg-primary-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`lg:hidden fixed top-0 right-0 z-[60] h-full w-[82%] max-w-sm bg-white dark:bg-primary-950 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-primary-100 dark:border-white/10">
          <img src="/s3mlogo.png" alt="S3M Logo" className="w-16 h-16 object-contain" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full text-primary-900 dark:text-white hover:bg-primary-50 dark:hover:bg-white/10 transition-colors"
            aria-label="Close main menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-medium text-primary-900 dark:text-gray-100 hover:text-accent-600 border-b border-primary-50 dark:border-white/5 transition-colors"
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                >
                  {link.label}
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-6 py-6 border-t border-primary-100 dark:border-white/10">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/30"
            aria-label="Go to contact section"
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
}
