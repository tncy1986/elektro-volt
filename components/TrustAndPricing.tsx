import { CheckCircle2 } from 'lucide-react';
import { TRUST_POINTS, TRUST_INTRO, PRICING, PRICING_INTRO, PRICING_CTA } from '@/lib/config';

const TrustAndPricing = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-brand-dark to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Why Choose Us - Links */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
              👷 Warum Kunden uns wählen
            </h2>
            <p className="text-brand-yellow font-extrabold text-lg mb-8">
              {TRUST_INTRO}
            </p>

            <div className="space-y-5">
              {TRUST_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-white font-semibold">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing - Rechts */}
          <div className="bg-slate-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              💶 {PRICING_INTRO}
            </h2>
            <p className="text-slate-300 mb-8 text-sm md:text-base font-semibold">
              {PRICING_CTA}
            </p>

            <div className="space-y-3">
              {PRICING.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-slate-700 border border-slate-600 rounded-lg p-4 hover:bg-slate-600 transition"
                >
                  <span className="text-slate-100 font-semibold">{item.label}</span>
                  <span className="text-brand-yellow font-extrabold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndPricing;
