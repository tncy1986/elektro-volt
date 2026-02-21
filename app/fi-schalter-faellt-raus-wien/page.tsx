import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'FI-Schalter fällt raus | Elektriker Wien Notdienst',
  description:
    'FI-Schalter fällt immer wieder raus? Unser Elektriker findet die Ursache – ob Isolationsfehler, defekte Geräte oder Feuchtigkeit. 24/7 Notdienst in Wien.',
  keywords: [
    'FI Schalter fällt raus',
    'FI Schalter Problem',
    'Elektriker Fehlersuche Wien',
    'Sicherung springt raus',
  ],
  openGraph: {
    title: 'FI-Schalter fällt raus | Elektriker Notdienst Wien',
    description:
      'Professionelle Fehlersuche beim wiederholten Auslösen des FI-Schalters. Schnell vor Ort in Wien.',
  },
};

export default function FiSchalterPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum springt der FI-Schalter immer wieder raus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Häufige Gründe sind defekte Geräte, Feuchtigkeit oder beschädigte Leitungen in einem Stromkreis.',
        },
      },
      {
        '@type': 'Question',
        name: 'Darf ich den FI-Schalter einfach wieder einschalten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Einmaliges Testen ist möglich, aber bei wiederholtem Auslösen sollte ein Elektriker die Ursache prüfen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist das ein Notfall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wenn mehrere Bereiche ohne Strom sind oder Schmorgeruch auftritt, handelt es sich um einen dringenden Einsatz.',
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-5">
        FI-Schalter fällt raus – Ursachensuche & Behebung
      </h1>
      <p className="text-slate-700 mb-4 leading-relaxed">
        Wenn der FI-Schalter (Fehlerstromschutzschalter) immer wieder auslöst, liegt meist ein Isolationsfehler, ein defektes Gerät oder Feuchtigkeit in einem Stromkreis vor. Das ist ein Zeichen, dass die Schutzanlage funktioniert – aber die Ursache muss gefunden werden.
      </p>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Schalten Sie den FI nicht wiederholt ohne Prüfung wieder ein – das kann zu ernsthaften Schäden oder Brandgefahren führen. Unser Elektriker-Notdienst find den Fehler systematisch und behebt ihn sicher. Auch abends, nachts und am Wochenende.
      </p>

      <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">So helfen wir bei FI-Problemen</h2>
        <ul className="space-y-2 text-slate-700 list-disc pl-5">
          <li>Stromkreisweise Eingrenzung der Fehlerquelle</li>
          <li>Prüfung von Leitungen, Steckdosen und Geräten</li>
          <li>Sichere Reparatur und Funktionskontrolle</li>
          <li>Empfehlungen zur Vermeidung weiterer Ausfälle</li>
        </ul>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">Warum springt der FI-Schalter immer wieder raus?</h3>
            <p>Häufige Gründe sind defekte Geräte, Feuchtigkeit oder beschädigte Leitungen in einem Stromkreis.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Darf ich den FI-Schalter einfach wieder einschalten?</h3>
            <p>Einmaliges Testen ist möglich, aber bei wiederholtem Auslösen sollte ein Elektriker die Ursache prüfen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Ist das ein Notfall?</h3>
            <p>Wenn mehrere Bereiche ohne Strom sind oder Schmorgeruch auftritt, handelt es sich um einen dringenden Einsatz.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-5 rounded"
        >
          Notdienst anrufen: {COMPANY.phoneDisplay}
        </a>
        <Link href="/leistungen" className="border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 px-5 rounded">
          Zu unseren Leistungen
        </Link>
      </div>
    </section>
  );
}
