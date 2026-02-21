import { CheckCircle2 } from 'lucide-react';
import { TRUST_POINTS, TRUST_INTRO } from '@/lib/config';

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-brand-dark to-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          👷 Warum Kunden uns wählen
        </h2>
        <p className="text-brand-yellow font-extrabold text-lg mb-8">
          {TRUST_INTRO}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_POINTS.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
              <span className="text-white font-semibold">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
