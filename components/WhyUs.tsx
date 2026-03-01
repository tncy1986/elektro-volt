'use client';
import { useState, useEffect } from 'react';
import { Euro, Clock, Award, ThumbsUp, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { COMPANY } from '@/lib/config';

const features = [
  {
    icon: <Euro className="w-10 h-10" />,
    title: "Faire Preise",
    text: "Sie wissen immer, was Sie zahlen – garantiert keine versteckten Kosten."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Schnelle Anfahrt",
    text: "Meist in 30–45 Minuten bei Ihnen in Wien – auch nachts & am Wochenende."
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Geprüfte Qualität",
    text: "Geprüfte Qualität & Sicherheit durch konzessionierten Elektromeister."
  },
  {
    icon: <ThumbsUp className="w-10 h-10" />,
    title: "Top bewertet",
    text: "Hunderte zufriedene Kunden vertrauen auf unseren Service."
  }
];

type WhyUsProps = {
  initialImages?: string[];
};

const WhyUs = ({ initialImages = [] }: WhyUsProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [images, setImages] = useState<string[]>(initialImages);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isSwipingMain, setIsSwipingMain] = useState<boolean>(false);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  // Auto-wechsel alle 20 Sekunden
  useEffect(() => {
    if (images.length === 0) return;
    
    //const interval = setInterval(() => {
    //  setCurrentImage((prev) => (prev + 1) % images.length);
    //}, 20000);

    //return () => clearInterval(interval);
    
  }, [images.length]);

  // ESC-Taste zum Schließen des Modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const goToPrevious = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToImage = (index: number) => {
    if (images.length === 0) return;
    setCurrentImage(index);
  };

  // Touch/Swipe-Funktionalität (Hauptbild + Modal)
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const touch = e.touches[0];
    setTouchStart(touch ? touch.clientX : null);
    setIsSwipingMain(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (touchStart === null) return;
    const touch = e.touches[0];
    const touchX = touch ? touch.clientX : null;
    if (touchX !== null && Math.abs(touchStart - touchX) > 10) {
      setIsSwipingMain(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const touch = e.changedTouches[0];
    const touchEndX = touch ? touch.clientX : null;
    if (touchStart !== null && touchEndX !== null) {
      const distance = touchStart - touchEndX;
      const isSwipeLeft = distance > 40; // Mindestens 40px nach links
      const isSwipeRight = distance < -40; // Mindestens 40px nach rechts
      
      if (isSwipeLeft) {
        goToNext();
      } else if (isSwipeRight) {
        goToPrevious();
      }
    }
    setTouchStart(null);
    setTimeout(() => setIsSwipingMain(false), 120);
  };

  const handleOpenModal = () => {
    if (isSwipingMain) return;
    setIsModalOpen(true);
  };
  const displayedSrc = images.length ? images[currentImage] : COMPANY.heroImage;
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Warum {COMPANY.nameWithoutKG}?</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-slate-900 text-sm mb-8 leading-relaxed">
            Elektroprobleme halten sich an keine Öffnungszeiten. Deshalb sind wir rund um die Uhr für Sie erreichbar.
            Unser Team besteht aus erfahrenen Elektrotechnikern, die jedes Problem effizient und sicher lösen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:order-2">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_14px_rgba(15,23,42,0.06)] border border-slate-100">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${idx !== 0 ? 'pt-5 mt-5 border-t border-slate-100' : ''}`}
                >
                  <div className="bg-yellow-50 w-14 h-14 rounded-full flex items-center justify-center text-brand-yellow shadow-md shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-900 text-sm leading-relaxed mt-2">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

           <div
             className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.18)] group cursor-pointer lg:order-1"
             style={{ height: '400px', width: '100%' }}
             onClick={handleOpenModal}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
           >
             <img
               src={displayedSrc}
               alt="Elektriker im Einsatz"
               className="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 bg-white hover:opacity-90 cursor-pointer"
               loading="lazy"
               decoding="async"
             />
             <div className="absolute inset-0 bg-slate-900/5"></div>

             {/* Navigation Pfeile */}
             {images.length > 1 && (
               <>
                 <button
                   onClick={(e) => {
                     e.stopPropagation();
                     goToPrevious();
                   }}
                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                   aria-label="Vorheriges Bild"
                 >
                   <ChevronLeft className="w-6 h-6" />
                 </button>
                 <button
                   onClick={(e) => {
                     e.stopPropagation();
                     goToNext();
                   }}
                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                   aria-label="Nächstes Bild"
                 >
                   <ChevronRight className="w-6 h-6" />
                 </button>
               </>
             )}

             {/* Navigation Punkte */}
             {images.length > 1 && (
               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                 {images.map((_, index) => (
                   <button
                     key={index}
                     onClick={(e) => {
                       e.stopPropagation();
                       goToImage(index);
                     }}
                     className={`w-3 h-3 rounded-full transition-all ${
                       index === currentImage
                         ? 'bg-brand-yellow w-8'
                         : 'bg-slate-800/50 hover:bg-slate-800'
                     }`}
                     aria-label={`Bild ${index + 1} anzeigen`}
                   />
                 ))}
               </div>
             )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-10 max-w-2xl w-full max-h-[85vh] flex flex-col bg-white rounded-lg p-4">
            {/* Schließen Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-white hover:bg-slate-200 text-slate-900 p-2 rounded-full transition z-20"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Bild */}
            <img
              src={displayedSrc}
              alt="Vergrößertes Bild"
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg mt-6 cursor-grab select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              draggable={false}
            />

            {/* Navigation im Modal */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full transition z-20"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full transition z-20"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bildanzahl */}
                <div className="text-center mt-4 text-sm text-slate-900 font-semibold">
                  {currentImage + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyUs;
