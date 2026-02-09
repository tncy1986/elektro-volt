import Services from '@/components/Services';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/config';

export default function ServicesPage() {
  return (
    <div>
      {/* 
      <div className="bg-brand-light py-12 text-center">
        <h1 className="text-4xl font-extrabold text-brand-dark">Unsere Leistungen im Detail</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto px-4">
          Von der kleinen Reparatur bis zur kompletten Hausinstallation. Wir sind Ihr Fachbetrieb für alle elektrischen Belange.
        </p>
      </div>      
      */}    

      <Services />

      {/* Additional Service Details Block */}
      <div className="container mx-auto px-2 mb-10">
        <div className="bg-brand-dark text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Haben Sie ein spezifisches Anliegen?</h2>
                <p className="text-slate-300">Wir beraten Sie gerne unverbindlich zu Ihrem Projekt.</p>
            </div>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-8 rounded transition flex items-center">
                <Phone className="mr-2 w-5 h-5 fill-current" />
                {COMPANY.phoneDisplay} anrufen
            </a>
        </div>
      </div>
    </div>
  );
}
