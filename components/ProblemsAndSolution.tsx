"use client";

import { useMemo, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { 
  COMMON_PROBLEMS, 
  COMMON_PROBLEMS_INTRO, 
  TRUST_POINTS, 
  TRUST_INTRO, 
  COMMON_PROBLEMS_CTA,
  COMPANY,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEW_QUOTES,
  GOOGLE_REVIEW_TRUST_POINTS,
  GOOGLE_REVIEW_QUOTES_HEADING,
  GOOGLE_REVIEW_CARD_HEADING
} from '@/lib/config';

const ProblemsAndSolution = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const visibleQuotes = useMemo(() => {
    if (GOOGLE_REVIEW_QUOTES.length === 0) return [] as string[];
    const first = GOOGLE_REVIEW_QUOTES[quoteIndex % GOOGLE_REVIEW_QUOTES.length];
    const second = GOOGLE_REVIEW_QUOTES[(quoteIndex + 1) % GOOGLE_REVIEW_QUOTES.length];
    return [first, second].filter(Boolean);
  }, [quoteIndex]);

  const showPrevQuotes = () => {
    if (GOOGLE_REVIEW_QUOTES.length === 0) return;
    setQuoteIndex((prev) => (prev - 2 + GOOGLE_REVIEW_QUOTES.length) % GOOGLE_REVIEW_QUOTES.length);
  };

  const showNextQuotes = () => {
    if (GOOGLE_REVIEW_QUOTES.length === 0) return;
    setQuoteIndex((prev) => (prev + 2) % GOOGLE_REVIEW_QUOTES.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setTouchStartX(touch ? touch.clientX : null);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    const touchEndX = touch ? touch.clientX : null;
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const isSwipeLeft = distance > 40;
      const isSwipeRight = distance < -40;
      if (isSwipeLeft) {
        showNextQuotes();
      } else if (isSwipeRight) {
        showPrevQuotes();
      }
    }
    setTouchStartX(null);
  };

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
              <a
                href={GOOGLE_REVIEWS.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label={`Google Bewertungen für ${COMPANY.nameWithoutKG} öffnen`}
              >
                {GOOGLE_REVIEW_CARD_HEADING}
              </a>
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

            <a
              href={GOOGLE_REVIEWS.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs md:text-sm font-semibold text-slate-600 hover:underline mb-6"
              aria-label={`Google Bewertungen für ${COMPANY.nameWithoutKG} öffnen`}
            >
              Bewerten Sie {COMPANY.nameWithoutKG} direkt auf Google.
            </a>

            <div className="space-y-3">
              {GOOGLE_REVIEW_TRUST_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-xs md:text-sm font-semibold text-slate-600">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-slate-200">
              <p className="text-xs md:text-sm font-semibold text-slate-600 mb-3">
                {GOOGLE_REVIEW_QUOTES_HEADING}
              </p>
              <div
                className="relative pb-6"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="space-y-2.5">
                  {visibleQuotes.map((quote) => (
                    <div key={quote} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <p className="text-xs md:text-sm font-semibold text-slate-600">{quote}</p>
                    </div>
                  ))}
                </div>
                {GOOGLE_REVIEW_QUOTES.length > 2 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={showPrevQuotes}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white shadow-sm transition"
                      aria-label="Vorherige Kundenstimmen"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextQuotes}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white shadow-sm transition"
                      aria-label="Nächste Kundenstimmen"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
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
