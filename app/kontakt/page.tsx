import { Metadata } from 'next';
import Contact from '@/components/Contact';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontakt - Elektriker Wien | Jetzt Anrufen oder Nachricht senden',
  description: 'Kontaktieren Sie Elektro Volt Wien: 24/7 Notdienst unter 0699 173 70101. Schnelle Hilfe bei elektrischen Problemen in ganz Wien.',
  keywords: ['Elektriker Wien Kontakt', 'Notdienst anrufen', 'Elektriker Anfrage Wien'],
  openGraph: {
    title: 'Kontakt | Elektriker Wien - 24/7 Erreichbar',
    description: 'Rufen Sie uns an: 0699 173 70101 oder senden Sie eine Nachricht.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <Contact />
      <section className="container mx-auto px-4 pb-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Passende Hilfe für Ihr Anliegen</h2>
          <p className="text-slate-700 mb-6">Direkt zu häufigen Themen in Wien:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/elektriker-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">Elektriker Wien</Link>
            <Link href="/fi-schalter-faellt-raus-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">FI Schalter fällt raus Wien</Link>
            <Link href="/steckdose-reparieren-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">Steckdose reparieren Wien</Link>
            <Link href="/kurzschluss-nachts-wien" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">Kurzschluss nachts Wien</Link>
            <Link href="/e-befund-wien-kosten" className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition md:col-span-2">E-Befund Wien Kosten</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
