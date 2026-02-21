import { CheckCircle2 } from 'lucide-react';
import { 
  COMMON_PROBLEMS, 
  COMMON_PROBLEMS_INTRO, 
  TRUST_POINTS, 
  TRUST_INTRO, 
  PRICING, 
  PRICING_INTRO, 
  COMMON_PROBLEMS_CTA
} from '@/lib/config';

const ProblemsAndSolution = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Block 1: Probleme */}
          <div className="bg-white border border-slate-300 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-6">
              ❓ {COMMON_PROBLEMS_INTRO}
            </h3>
            <div className="space-y-3">
              {COMMON_PROBLEMS.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-sm font-medium">{problem}</span>
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm font-semibold text-slate-600 mt-6 pt-6 border-t border-slate-200">
              {COMMON_PROBLEMS_CTA}
            </p>
          </div>

          {/* Block 2: Warum Kunden uns wählen */}
          <div className="bg-white border border-slate-300 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-6">
              👷 Warum Kunden<br/>uns wählen
            </h3>
            <p className="text-brand-yellow font-extrabold text-sm mb-6">
              {TRUST_INTRO}
            </p>
            <div className="space-y-3">
              {TRUST_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Transparente Kosten 
          <div className="bg-white border border-slate-300 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-6">
              💶 {PRICING_INTRO}
            </h3>
            <div className="space-y-2.5">
              {PRICING.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-slate-50 rounded-lg p-3 border border-slate-200 hover:border-brand-yellow hover:shadow-md transition"
                >
                  <span className="text-slate-700 font-semibold text-sm">{item.label}</span>
                  <span className="text-brand-yellow font-extrabold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndSolution;
