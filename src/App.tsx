import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import ProductDetail from '@/components/ProductDetail';
import GlobalReach from '@/components/GlobalReach';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactWithGlobe from '@/components/ui/contact-with-globe';
import Footer from '@/components/Footer';
import { getProduct } from '@/data/products';

const SITE_URL = 'https://www.s3mglobalexporters.com';
const DEFAULT_TITLE = 'S3M Global Exporters | Fresh Fruit & Vegetable Export from India';
const DEFAULT_DESCRIPTION =
  'S3M Global Exporters helps international buyers source fresh fruits and vegetables from India, with practical sourcing, export documentation, and cold-chain support.';
const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function applySeo(title: string, description: string, url: string, image: string, jsonLd?: object) {
  document.title = title;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[name="title"]', 'content', title);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[property="og:image"]', 'content', image);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
  setMeta('meta[name="twitter:image"]', 'content', image);
  setMeta('link[rel="canonical"]', 'href', url);

  const scriptId = 'product-structured-data';
  document.getElementById(scriptId)?.remove();
  if (!jsonLd) return;

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

function App() {
  const [productSlug, setProductSlug] = useState<string | null>(null);

  useEffect(() => {
    const syncRoute = () => {
      const match = window.location.hash.match(/^#\/product\/([a-z0-9-]+)$/);
      setProductSlug(match ? match[1] : null);
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (productSlug) {
      window.scrollTo(0, 0);
      return;
    }
    const id = window.location.hash.replace('#', '');
    if (id && !id.startsWith('/')) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [productSlug]);

  const product = productSlug ? getProduct(productSlug) : undefined;

  useEffect(() => {
    if (!product) {
      applySeo(DEFAULT_TITLE, DEFAULT_DESCRIPTION, `${SITE_URL}/`, DEFAULT_IMAGE);
      return;
    }

    const title = `${product.category} | ${product.season} Supply — S3M Global Exporters`;
    const description = product.tagline;
    const url = `${SITE_URL}/#/product/${product.slug}`;

    applySeo(title, description, url, product.image, {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.category,
      description: product.description,
      image: [product.image],
      category: 'Fresh produce and agricultural exports',
      brand: { '@type': 'Brand', name: 'S3M Global Exporters' },
      url,
      additionalProperty: product.specifications.map((spec) => ({
        '@type': 'PropertyValue',
        name: spec.label,
        value: spec.value,
      })),
    });
  }, [product]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {product ? (
          <ProductDetail product={product} />
        ) : (
          <>
            <Hero />
            <About />
            <Products />
            <GlobalReach />
            <Process />
            <WhyChooseUs />
            <Testimonials />
            <ContactWithGlobe />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
