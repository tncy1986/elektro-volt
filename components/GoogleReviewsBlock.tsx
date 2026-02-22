import { Star } from 'lucide-react';
import { COMPANY, GOOGLE_REVIEWS } from '@/lib/config';

type GoogleReviewsBlockProps = {
  inline?: boolean;
};

const GoogleReviewsBlock = ({ inline = false }: GoogleReviewsBlockProps) => {
  const content = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6 h-full">
      <div className="max-w-xl mx-auto">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Google Bewertungen
              </h2>
              <p className="text-slate-700 mb-4 text-sm md:text-base">
                ⭐⭐⭐⭐⭐ Google-Bewertungen
              </p>

              <div className="flex items-center gap-2 mb-2" aria-label="Google Bewertung">
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                <span className="text-slate-900 font-semibold ml-1">
                  {GOOGLE_REVIEWS.rating} ({GOOGLE_REVIEWS.totalReviews})
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-4">
                Bewerten Sie {COMPANY.nameWithoutKG} direkt auf Google.
              </p>

              <div className="space-y-1.5 text-slate-900 font-semibold text-sm md:text-base">
                <p>10+ Jahre Erfahrung</p>
                <p>Geprüfter Elektriker – WKO</p>
                <p>Über 50+ Kunden jährlich</p>
              </div>
                {/*
              <a
                href={GOOGLE_REVIEWS.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold px-5 py-3 rounded-md transition"
              >
                Jetzt auf Google bewerten
              </a>
              */}
            </div>
      </div>
    </div>
  );

  if (inline) {
    return content;
  }

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">{content}</div>
      </div>
    </section>
  );
};

export default GoogleReviewsBlock;
