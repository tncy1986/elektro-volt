'use client';
import { useState, useEffect } from 'react';
import { Euro, Clock, Award, ThumbsUp, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { COMPANY, ROUTES } from '@/lib/config';

const features = [
  {
    icon: <Euro className="w-10 h-10" />,
    title: "Faire & transparente Preise",
    text: "Sie wissen immer, was Sie zahlen – garantiert keine versteckten Kosten."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Schnell vor Ort",
    text: "Meist in 30-45 Minuten bei Ihnen in Wien – auch nachts & am Wochenende."
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Meisterbetrieb",
    text: "Geprüfte Qualität & Sicherheit durch konzessionierten Elektromeister."
  },
  {
    icon: <ThumbsUp className="w-10 h-10" />,
    title: "Top bewertet in Wien",
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
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  // Touch/Swipe-Funktionalität
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    const touch = e.touches[0];
    setTouchStart(touch ? touch.clientX : null);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    const touch = e.changedTouches[0];
    const touchEndX = touch ? touch.clientX : null;
    if (touchStart !== null && touchEndX !== null) {
      const distance = touchStart - touchEndX;
      const isSwipeLeft = distance > 50; // Mindestens 50px nach links
      const isSwipeRight = distance < -50; // Mindestens 50px nach rechts
      
      if (isSwipeLeft) {
        goToNext();
      } else if (isSwipeRight) {
        goToPrevious();
      }
    }
    setTouchStart(null);
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
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-[0_4px_14px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_20px_rgba(251,191,36,0.15)] border border-slate-100 group flex flex-col transform transition-all duration-300 opacity-100 translate-y-0 hover:scale-105 hover:bg-yellow-50"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-50 w-14 h-14 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform text-brand-yellow shadow-md">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-yellow transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-900 text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

           <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.18)] group cursor-pointer" style={{ height: '400px', width: '100%' }} onClick={() => setIsModalOpen(true)}>
             <img
               src={displayedSrc}
               alt="Elektriker bei der Arbeit"
               className="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 bg-white hover:opacity-90 cursor-pointer"
             />
             <div className="absolute inset-0 bg-slate-900/5"></div>

             {/* Navigation Pfeile */}
             <button
               onClick={goToPrevious}
               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button
               onClick={goToNext}
               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
             >
               <ChevronRight className="w-6 h-6" />
             </button>

             {/* Navigation Punkte */}
             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
               {images.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToImage(index)}
                   className={`w-3 h-3 rounded-full transition-all ${
                     index === currentImage
                       ? 'bg-brand-yellow w-8'
                       : 'bg-slate-800/50 hover:bg-slate-800'
                   }`}
                 />
               ))}
             </div>
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
