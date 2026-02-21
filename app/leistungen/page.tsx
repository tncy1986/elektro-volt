import { Metadata } from 'next';
import Services from '@/components/Services';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/config';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unsere Leistungen - Elektroinstallation, Notdienst & E-Befund Wien',
  description: 'Professionelle Elektro-Leistungen in Wien: Installationen, 24/7 Notdienst, E-Befund, Smart Home, Sicherungskästen. Alle Arbeiten aus Meisterhand.',
  keywords: ['Elektroinstallation Wien', 'E-Befund Wien', 'Smart Home Wien', 'Elektriker Leistungen', 'Sicherungskasten'],
  openGraph: {
    title: 'Elektro-Leistungen Wien | Vom Notdienst bis Smart Home',
    description: 'Alle Elektro-Leistungen für Wien: Installation, Wartung, Notdienst, E-Befund & mehr.',
  },
};

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

      <div className="container mx-auto px-4 pb-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">Häufige Elektro-Probleme in Wien</h2>
          <p className="text-slate-700 mb-6">
            Auf diesen Seiten finden Sie konkrete Hilfe zu häufig gesuchten Themen in Wien:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/elektriker-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
              <h3 className="font-bold text-slate-900 mb-1">Elektriker Wien</h3>
              <p className="text-sm text-slate-700">Schnelle Hilfe in Wien bei Störungen und Reparaturen.</p>
            </Link>
            <Link href="/fi-schalter-faellt-raus-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
              <h3 className="font-bold text-slate-900 mb-1">FI Schalter fällt raus Wien</h3>
              <p className="text-sm text-slate-700">Ursachen, Fehlersuche und sichere Behebung durch Elektriker.</p>
            </Link>
            <Link href="/steckdose-reparieren-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
              <h3 className="font-bold text-slate-900 mb-1">Steckdose reparieren Wien</h3>
              <p className="text-sm text-slate-700">Defekte Steckdosen fachgerecht prüfen, reparieren oder tauschen.</p>
            </Link>
            <Link href="/kurzschluss-nachts-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
              <h3 className="font-bold text-slate-900 mb-1">Kurzschluss nachts Wien</h3>
              <p className="text-sm text-slate-700">24h Notdienst bei akutem Stromausfall und Kurzschluss.</p>
            </Link>
            <Link href="/e-befund-wien-kosten" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition md:col-span-2">
              <h3 className="font-bold text-slate-900 mb-1">E-Befund Wien Kosten</h3>
              <p className="text-sm text-slate-700">Transparente Infos zu Ablauf, Umfang und Preisfaktoren.</p>
            </Link>
          </div>
        </div>
      </div>

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
