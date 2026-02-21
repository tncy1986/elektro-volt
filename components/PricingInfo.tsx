import { PRICING, PRICING_INTRO, PRICING_CTA } from '@/lib/config';

const PricingInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
          💶 {PRICING_INTRO}
        </h2>
        <p className="text-slate-600 mb-8 text-sm md:text-base font-semibold">
          {PRICING_CTA}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRICING.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-4 hover:bg-slate-100 transition"
            >
              <span className="text-slate-700 font-semibold">{item.label}</span>
              <span className="text-brand-yellow font-extrabold text-lg">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingInfo;
