export type ProductIcon = 'citrus' | 'leaf' | 'wheat' | 'grape' | 'fish' | 'carrot';

export interface Product {
  slug: string;
  category: string;
  icon: ProductIcon;
  season: string;
  image: string;
  tagline: string;
  items: string[];
  note: string;
  description: string;
  highlights: string[];
  specifications: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: 'fresh-fruits',
    category: 'Fresh Fruits',
    icon: 'citrus',
    season: 'Year-round',
    image:
      'https://images.pexels.com/photos/14766928/pexels-photo-14766928.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Export-grade conventional and organic fruit, graded and cooled for long-haul quality.',
    items: ['Mango', 'Banana', 'Pineapple', 'Pomegranate', 'Organic Range'],
    note: 'Commercially sourced fruit selected for export grade, variety, and destination requirements.',
    description:
      'Our core fruit range is bought against the buyer brief, not against a fixed catalogue. Variety, count, brix, ripeness, and pack format are agreed before the lot is picked, and organic fruit is handled as a separate, documented line from farm to container. Each consignment is graded by hand, hydro-cooled, and packed for the transit time of its destination.',
    highlights: [
      'Conventional and certified organic lines, kept separate through packing and dispatch',
      'Hand grading with variety, count, and ripeness checked against the approved sample',
      'Hydro-cooling and pre-cooling before loading to protect shelf life',
      'Pre-shipment inspection, phytosanitary support, and full export documentation',
    ],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Season', value: 'Year-round, variety dependent' },
      { label: 'Size & grade', value: 'Buyer-specified counts and grades' },
      { label: 'Packing', value: '3–10 kg cartons, crates, or buyer packing' },
      { label: 'Availability', value: 'Conventional and organic' },
      { label: 'MOQ', value: '1 MT per line (mixed loads considered)' },
    ],
  },
  {
    slug: 'fresh-vegetables',
    category: 'Fresh Vegetables',
    icon: 'leaf',
    season: 'Year-round',
    image:
      'https://images.pexels.com/photos/29181503/pexels-photo-29181503.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Fresh conventional and organic vegetables for wholesale, retail, and foodservice.',
    items: ['Onion', 'Potato', 'Tomato', 'Okra', 'Organic Range'],
    note: 'Fresh vegetables prepared for wholesale, retail, foodservice, and institutional buyers.',
    description:
      'Vegetables are sourced from growing regions matched to the season and the specification, then cleaned, sorted, and packed on the same day where possible. Organic vegetables are procured from certified farms and kept on a separate handling line with their own documentation. We confirm grade, sizing, and shelf-life expectations before dispatch so the load arrives in the condition the buyer planned for.',
    highlights: [
      'Certified organic vegetables available alongside the conventional range',
      'Cleaning, sorting, and grading to the agreed size and quality band',
      'Cold-chain or ventilated transport chosen to suit the product',
      'Consistent weekly volumes for wholesale and foodservice programmes',
    ],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Season', value: 'Year-round, with regional peaks' },
      { label: 'Size & grade', value: 'Buyer-specified sizing and grading' },
      { label: 'Packing', value: 'Mesh bags, cartons, crates, or bulk bins' },
      { label: 'Availability', value: 'Conventional and organic' },
      { label: 'MOQ', value: '1 MT per line (mixed loads considered)' },
    ],
  },
  {
    slug: 'plantation-products',
    category: 'Plantation Products',
    icon: 'wheat',
    season: 'Seasonal',
    image:
      'https://images.pexels.com/photos/8148229/pexels-photo-8148229.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Vanilla and cocoa from Madagascar, alongside Indian coffee and tea.',
    items: ['Vanilla (Madagascar)', 'Cocoa (Madagascar)', 'Coffee', 'Tea'],
    note: 'Vanilla and cocoa sourced from Madagascar; coffee and tea from India. Grade and availability confirmed before quotation.',
    description:
      'Our plantation range is built around two Madagascar origin products: Bourbon vanilla and fermented cocoa beans. Vanilla is supplied as whole gourmet beans with the split, length, and moisture profile stated on the lot; cocoa is supplied fermented and sun-dried with moisture and bean count agreed per shipment. Indian coffee and tea complete the range for buyers consolidating plantation goods in one container.',
    highlights: [
      'Madagascar Bourbon vanilla beans, gourmet grade, 15–18 cm, vacuum packed',
      'Madagascar cocoa beans, fermented and sun-dried, moisture at or below 7.5%',
      'Lot-level grading with samples available before confirmation',
      'Indian coffee and tea for consolidated plantation shipments',
    ],
    specifications: [
      { label: 'Origin', value: 'India & Madagascar' },
      { label: 'Vanilla', value: 'Madagascar Bourbon, 15–18 cm, 30–35% moisture' },
      { label: 'Cocoa', value: 'Madagascar fermented & sun-dried, moisture ≤ 7.5%' },
      { label: 'Packing', value: 'Vacuum packs / 60–65 kg jute bags' },
      { label: 'Season', value: 'Seasonal, crop dependent' },
      { label: 'MOQ', value: '25 kg vanilla / 1 MT cocoa' },
    ],
  },
  {
    slug: 'spices-agri',
    category: 'Spices & Agri Products',
    icon: 'grape',
    season: 'Seasonal',
    image:
      'https://images.pexels.com/photos/15741144/pexels-photo-15741144.jpeg?auto=compress&cs=tinysrgb&w=940',
    tagline: 'Whole, dried, and processed agricultural products to the required specification.',
    items: ['Black Pepper', 'Cardamom', 'Turmeric', 'Cinnamon'],
    note: 'Whole, dried, or processed agricultural products supplied according to the required specification.',
    description:
      'Spices and agri products are supplied whole, dried, or processed depending on how the buyer will use them. Each lot is checked for moisture, cleanliness, and defect levels against the agreed specification, with lab testing arranged where a destination or customer requires it. Packing options range from bulk bags to retail-ready formats.',
    highlights: [
      'Whole, cracked, ground, or processed formats',
      'Moisture, cleanliness, and defect checks per lot',
      'Third-party lab testing arranged on request',
      'Bulk and retail-ready packing options',
    ],
    specifications: [
      { label: 'Origin', value: 'India' },
      { label: 'Products', value: 'Black pepper, cardamom, turmeric, cinnamon' },
      { label: 'Form', value: 'Whole, dried, or processed' },
      { label: 'Packing', value: '25–50 kg bags, cartons, or retail packs' },
      { label: 'Season', value: 'Seasonal, crop dependent' },
      { label: 'MOQ', value: '500 kg per line' },
    ],
  },
  {
    slug: 'fish-seafood',
    category: 'Fish & Seafood',
    icon: 'fish',
    season: 'By availability',
    image:
      'https://images.pexels.com/photos/8352394/pexels-photo-8352394.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Lobster, crab, oyster, and fish handled only where the cold chain is confirmed.',
    items: ['Lobster', 'Crab (India / Madagascar)', 'Oyster', 'Prawns & Shrimp', 'Others on Request'],
    note: 'Lobster, crab (India / Madagascar), oyster, and further species on request. Our normal fish size is 5–10 kg or above.',
    description:
      'Seafood is offered where sourcing, processing, cold-chain, and regulatory requirements can all be confirmed before the order is accepted. The range covers lobster, crab from India and Madagascar, oyster, prawns, and whole fish, with other species quoted on request. Frozen product is IQF or block frozen at −18 °C; chilled product moves at 0–4 °C with a documented temperature record for the full journey.',
    highlights: [
      'Crab sourced from India and Madagascar; lobster and oyster by availability',
      'Our normal fish size is 5–10 kg or above, with larger sizes quoted on request',
      'IQF and block frozen at −18 °C, or chilled at 0–4 °C for short transit',
      'Catch and processing documentation, health certificates, and cold-chain records',
    ],
    specifications: [
      { label: 'Origin', value: 'India & Madagascar' },
      { label: 'Range', value: 'Lobster, crab, oyster, prawns, fish, others on request' },
      { label: 'Fish size', value: '5–10 kg or above (normal range)' },
      { label: 'Form', value: 'Fresh chilled (0–4 °C) or frozen (IQF / block, −18 °C)' },
      { label: 'Packing', value: 'Bulk cartons, IQF bags, or buyer packing' },
      { label: 'MOQ', value: '500 kg – 1 MT per line' },
    ],
  },
  {
    slug: 'custom-sourcing',
    category: 'Custom Sourcing',
    icon: 'carrot',
    season: 'On request',
    image:
      'https://images.pexels.com/photos/16664900/pexels-photo-16664900.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'A practical sourcing service for products outside the standard range.',
    items: ['Buyer Briefs', 'Private Sourcing', 'Export Partners'],
    note: 'A practical sourcing service for specific products, quantities, quality standards, and destinations.',
    description:
      'When a product is not on our standard list, we source it against a written brief: product, specification, volume, packing, destination, and timeline. We confirm supply before quoting, name the origin and grade honestly, and handle the same documentation and logistics coordination as our core lines. If the brief cannot be met properly, we say so rather than substituting.',
    highlights: [
      'Written buyer brief used as the single reference for sourcing and quotation',
      'Availability confirmed before a price is offered',
      'Origin, grade, and processing disclosed for every lot',
      'Same documentation and logistics support as our core range',
    ],
    specifications: [
      { label: 'Coverage', value: 'Agri products, plantation goods, seafood, and more' },
      { label: 'Basis', value: 'Buyer brief: product, spec, volume, destination' },
      { label: 'Quotation', value: 'FOB or CIF, with availability confirmed first' },
      { label: 'Packing', value: 'To buyer specification' },
      { label: 'Timeline', value: 'Confirmed per requirement' },
      { label: 'MOQ', value: 'Agreed per brief' },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
