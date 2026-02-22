"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import services from '@/lib/services';

const Services = ({ showLearnMore = false, mode = 'carousel' }: { showLearnMore?: boolean, mode?: 'carousel' | 'list' }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);
  // Für Hervorhebung des aktiven Service-Blocks
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const blockRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (mode === 'list' && typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setHighlighted(hash);
        // Optional: Nach 3 Sekunden Hervorhebung entfernen
        const timeout = setTimeout(() => setHighlighted(null), 3000);
        // Scrollen zum Block (falls nicht automatisch)
        if (blockRefs.current[hash]) {
          blockRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return () => clearTimeout(timeout);
      }
    }
  }, [mode]);

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  const visibleServices = useMemo(() => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return services.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40; // Mindestabstand für Swipe
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
    
    // Reset swipe state after a short delay
    setTimeout(() => setIsSwiping(false), 100);
  };

  if (mode === 'list') {
    return (
      <section id="services" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Leistungen</h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-6"></div>
            <p className="text-sm text-slate-900">
              Wir bieten ein breites Spektrum an elektrotechnischen Dienstleistungen für Privat- und Gewerbekunden in ganz Wien.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.slug}
                ref={el => { blockRefs.current[service.slug] = el; }}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 group flex flex-col transition-all duration-300 ${highlighted === service.slug ? 'ring-4 ring-brand-yellow/70 border-brand-yellow bg-yellow-50' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Carousel mode
  return (
    <section id="services" className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-sm text-slate-900">
            Wir bieten ein breites Spektrum an elektrotechnischen Dienstleistungen für Privat- und Gewerbekunden in ganz Wien.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-slate-100 text-slate-700 rounded-full p-3 shadow-lg transition-all hidden md:flex items-center justify-center"
            aria-label="Vorherige Leistungen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((service, index) => (
              <Link
                key={`${currentPage}-${index}`}
                href={`/leistungen#${service.slug}`}
                onClick={(e) => {
                  if (isSwiping) {
                    e.preventDefault();
                  }
                }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 group flex flex-col transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed mb-4 flex-grow">
                  {service.shortDescription || service.description}
                </p>
                {showLearnMore && (
                  <Link href={`/leistungen#${service.slug}`} className="flex items-center text-brand-yellow font-semibold text-sm group-hover:translate-x-1 transition-transform mt-2">
                    Mehr erfahren
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                )}
              </Link>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-slate-100 text-slate-700 rounded-full p-3 shadow-lg transition-all hidden md:flex items-center justify-center"
            aria-label="Nächste Leistungen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentPage === index
                  ? 'bg-brand-yellow w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Seite ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrevious}
            className="bg-white hover:bg-slate-100 text-slate-700 rounded-full p-3 shadow-md transition-all flex items-center justify-center"
            aria-label="Vorherige Leistungen"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white hover:bg-slate-100 text-slate-700 rounded-full p-3 shadow-md transition-all flex items-center justify-center"
            aria-label="Nächste Leistungen"
            >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
