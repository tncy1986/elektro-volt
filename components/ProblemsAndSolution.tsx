import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { 
  COMMON_PROBLEMS, 
  COMMON_PROBLEMS_INTRO, 
  TRUST_POINTS, 
  TRUST_INTRO, 
  COMMON_PROBLEMS_CTA,
  COMPANY,
  GOOGLE_REVIEWS
} from '@/lib/config';

const ProblemsAndSolution = () => {
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {/* Block 1: Probleme */}
          <div className="bg-white border border-slate-300 rounded-xl p-6 md:p-8 h-full">
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
          <div className="bg-white border border-slate-300 rounded-xl p-6 md:p-8 h-full">
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

          <div className="bg-white border border-slate-300 rounded-xl p-6 md:p-8 h-full">
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-6">
              ⭐ Google Bewertungen
            </h3>

            {GOOGLE_REVIEWS.screenshotUrl ? (
              <div className="rounded-lg overflow-hidden border border-slate-200 mb-4 bg-slate-50">
                <Image
                  src={GOOGLE_REVIEWS.screenshotUrl}
                  alt="Google Bewertungen Screenshot"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}

            <p className="text-xs md:text-sm font-semibold text-slate-600 mb-3">
              ⭐⭐⭐⭐⭐ {GOOGLE_REVIEWS.rating} ({GOOGLE_REVIEWS.totalReviews})
            </p>

            <p className="text-xs md:text-sm font-semibold text-slate-600 mb-6">
              Bewerten Sie {COMPANY.nameWithoutKG} direkt auf Google.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm font-semibold text-slate-600">10+ Jahre Erfahrung</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm font-semibold text-slate-600">Geprüfter Elektriker – WKO</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm font-semibold text-slate-600">Über 50+ Kunden jährlich</span>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-200 space-y-2.5">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs md:text-sm font-semibold text-slate-600">„Nachts um 23 Uhr gekommen – Problem sofort gelöst!“</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs md:text-sm font-semibold text-slate-600">„Sehr fairer Preis!“</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs md:text-sm font-semibold text-slate-600">„Endlich ein ehrlicher Elektriker“</p>
              </div>
            </div>
          </div>
    </div>
  );

  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        {content}
      </div>
    </section>
  );
};

export default ProblemsAndSolution;
