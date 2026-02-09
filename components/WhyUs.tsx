'use client';
import { useState, useEffect } from 'react';
import { Euro, Clock, Award, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY, ROUTES } from '@/lib/config';

const features = [
  {
    icon: <Euro className="w-8 h-8" />,
    title: "Transparente Preise",
    text: "Keine versteckten Kosten. Wir kommunizieren Preise fair und offen vor Arbeitsbeginn."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Schnelle Anfahrt",
    text: "Dank unserer zentralen Lage sind wir in Wien meist innerhalb von 30-45 Minuten bei Ihnen."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Zertifizierter Betrieb",
    text: "Als konzessionierter Meisterbetrieb garantieren wir höchste Qualität und Sicherheit."
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: "Kundenzufriedenheit",
    text: "Hunderte zufriedene Kunden in Wien vertrauen auf unseren Service und unsere Kompetenz."
  }
];

type WhyUsProps = {
  initialImages?: string[];
};

const WhyUs = ({ initialImages = [] }: WhyUsProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [images, setImages] = useState<string[]>(initialImages);

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

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };
  const displayedSrc = images.length ? images[currentImage] : COMPANY.heroImage;
  return (
    <section id="about" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum {COMPANY.nameWithoutKG}?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Elektroprobleme halten sich an keine Öffnungszeiten. Deshalb sind wir rund um die Uhr für Sie erreichbar.
              Unser Team besteht aus erfahrenen Elektrotechnikern, die jedes Problem effizient und sicher lösen.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-start p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-700/30 transition-colors">
                  <div className="flex items-center mb-2">
                    <div className="text-brand-yellow mr-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
             <img
               src={displayedSrc}
               alt="Elektriker bei der Arbeit"
               className="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 bg-brand-dark"
             />
             <div className="absolute inset-0 bg-brand-dark/30"></div>

             {/* Navigation Pfeile */}
             <button
               onClick={goToPrevious}
               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-brand-dark p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button
               onClick={goToNext}
               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-brand-dark p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
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
                       : 'bg-white/50 hover:bg-white'
                   }`}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
