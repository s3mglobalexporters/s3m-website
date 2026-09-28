import { Sprout, ClipboardCheck, Snowflake, Ship, FileCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: Sprout,
    number: '01',
    title: 'Harvest & Field Grading',
    description: 'Produce is hand-picked at optimal maturity and graded in the field. Our agronomists verify brix levels, size, and defect thresholds before anything leaves the farm.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Quality Inspection',
    description: 'Each lot passes a second inspection at our packing house: pesticide residue testing, visual grading, and GlobalG.A.P. compliance verification.',
  },
  {
    icon: Snowflake,
    number: '03',
    title: 'Pre-Cooling & Packing',
    description: 'Produce is hydro-cooled or forced-air cooled within hours of harvest, then packed in category-appropriate packaging with temperature loggers.',
  },
  {
    icon: Ship,
    number: '04',
    title: 'Reefer Loading',
    description: 'Pallets are loaded into pre-cooled reefer containers. Set-point temperatures are calibrated per produce type and locked for the entire voyage.',
  },
  {
    icon: FileCheck,
    number: '05',
    title: 'Phytosanitary & Customs',
    description: 'We prepare phytosanitary certificates, certificates of origin, and import documentation before departure to prevent port-side delays.',
  },
  {
    icon: Truck,
    number: '06',
    title: 'Destination Delivery',
    description: 'On arrival, cold-chain integrity is verified against logger data. We coordinate last-mile delivery to your DC, wholesale market, or retail depot.',
  },
];

export default function Process() {
  return (
    <section id="cold-chain" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Cold-Chain Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6 leading-tight text-balance">
            From field to shelf, temperature-locked.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Freshness is a function of time and temperature. Our six-step process controls both,
            with data loggers tracking every pallet from harvest to handover.
          </p>
        </div>

        {/* Process grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative group p-8 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-olive-600 text-white font-bold text-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-olive-50 text-olive-600 mb-5 group-hover:bg-olive-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-display text-lg font-bold text-primary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cream-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
