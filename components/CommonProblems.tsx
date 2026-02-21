import { CheckCircle2 } from 'lucide-react';
import { COMMON_PROBLEMS, COMMON_PROBLEMS_INTRO, COMMON_PROBLEMS_CTA } from '@/lib/config';

const CommonProblems = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
          {COMMON_PROBLEMS_INTRO}
        </h2>
        <p className="text-slate-600 mb-8 text-sm md:text-base">
          {COMMON_PROBLEMS_CTA}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMMON_PROBLEMS.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonProblems;
