import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Kurzschluss nachts | 24h Elektriker Notdienst Wien',
  description:
    'Kurzschluss nachts? Unser 24h Notdienst ist sofort erreichbar. Schnelle Fehlerbehebung bei Stromausfall, Sicherungsproblemen und Notfällen in Wien und Umgebung.',
  keywords: [
    'Kurzschluss nachts',
    'Elektriker Notdienst Nacht',
    '24h Elektriker',
    'Stromausfall nachts',
  ],
  openGraph: {
    title: 'Kurzschluss nachts | 24h Elektriker Notdienst',
    description:
      'Schnelle Hilfe bei Kurzschluss und Stromausfall – auch nachts, am Wochenende und an Feiertagen.',
  },
};

export default function KurzschlussNotdienPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was soll ich bei Kurzschluss sofort tun?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Betroffene Geräte ausstecken, Sicherung nicht erzwingen und bei Geruch/Funken den Bereich sichern.',
        },
      },
      {
        '@type': 'Question',
        name: 'Sind Sie auch nachts erreichbar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, unser Elektriker-Notdienst in Wien ist rund um die Uhr verfügbar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kommt jemand auch bei Teil-Stromausfall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, auch wenn nur einzelne Räume betroffen sind, prüfen wir die Ursache und beheben den Fehler sicher.',
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-5">
        Kurzschluss nachts? Notdienst sofort vor Ort
      </h1>
      <p className="text-slate-700 mb-4 leading-relaxed">
        Ein Kurzschluss in der Nacht ist nicht nur unangenehm, sondern kann brandgefährlich sein. Wenn Sicherungen rausfliegen, Funken auftreten, Schmorgeruch entsteht oder Großteile der Wohnung ohne Strom sind – handeln Sie sofort. Unser 24h Notdienst ist für solche Notfälle da.
      </p>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Schalten Sie betroffene Geräte aus, betreten Sie nicht den Bereich mit Schmorgeruch und wählen Sie sofort unsere Nummer. Wir lokalisieren den Fehler schnell und stellen Ihre Anlage sicher wieder in Betrieb.
      </p>

      <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">Notfall-Symptome bei Kurzschluss</h2>
        <ul className="space-y-2 text-slate-700 list-disc pl-5">
          <li>Plötzlicher Stromausfall in mehreren Räumen</li>
          <li>Knallgeräusche oder Funkenbildung</li>
          <li>Schmorgeruch aus Verteiler oder Steckdose</li>
          <li>FI und Sicherung lassen sich nicht mehr einschalten</li>
        </ul>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">Was soll ich bei Kurzschluss sofort tun?</h3>
            <p>Betroffene Geräte ausstecken, Sicherung nicht erzwingen und bei Geruch/Funken den Bereich sichern.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Sind Sie auch nachts erreichbar?</h3>
            <p>Ja, unser Elektriker-Notdienst in Wien ist rund um die Uhr verfügbar.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Kommt jemand auch bei Teil-Stromausfall?</h3>
            <p>Ja, auch wenn nur einzelne Räume betroffen sind, prüfen wir die Ursache und beheben den Fehler sicher.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-5 rounded"
        >
          24h Notdienst: {COMPANY.phoneDisplay}
        </a>
        <Link href="/leistungen" className="border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 px-5 rounded">
          Leistungen ansehen
        </Link>
      </div>
    </section>
  );
}
