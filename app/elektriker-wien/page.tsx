import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Elektriker Notdienst Wien | 24/7 Hilfe bei Stromausfall',
  description:
    'Elektriker Notdienst für akute Probleme: Stromausfall, Kurzschluss, FI-Störung und defekte Sicherungen. In Wien 24/7 schnell vor Ort, transparent und zuverlässig.',
  keywords: [
    'Elektriker Wien',
    'Elektriker Notdienst',
    'Elektriker Notdienst Wien',
    'Notdienst Elektriker',
    'Stromausfall Wien',
    'Stromausfall',
    'Elektroreparatur Wien',
    'Elektroinstallateur Wien',
  ],
  openGraph: {
    title: 'Elektriker Notdienst Wien | 24/7 Hilfe',
    description:
      'Elektriker Notdienst bei Stromausfall und Störungen. In Wien schnell vor Ort mit transparenter Abwicklung.',
  },
};

export default function ElektrikerWienPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie schnell kommt der Elektriker in Wien zu mir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei Notfällen sind wir meist innerhalb kurzer Zeit vor Ort. Die genaue Anfahrtszeit hängt von der Dislokation und aktuellen Einsätzen ab. Rufen Sie uns an – wir geben Ihnen sofort eine realistische Einschätzung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Reparieren Sie auch ältere Elektroanlagen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wir prüfen Altanlagen sorgfältig und setzen notwendige Reparaturen fachgerecht und sicher um.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich auch am Wochenende anrufen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, unser Notdienst ist 24/7 erreichbar – auch an Wochenenden und Feiertagen.',
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] md:text-4xl font-extrabold tracking-tight leading-tight text-center text-brand-dark mb-4">Elektriker in Wien – zuverlässig rund um die Uhr</h1>
      <div className="mx-auto mb-8 h-1 w-80 bg-brand-yellow rounded" />          
      <p className="text-slate-700 mb-4 leading-relaxed">
        Sie suchen einen zuverlässigen Elektriker in Wien? Elektro Volt KG ist Ihr Ansprechpartner für alle Elektrofragen – von Notfällen bis zu Modernisierungen. Ob Stromausfall, defekte Sicherung, FI-Schalter-Probleme oder Neuinstallationen: Unser erfahrenes Meisterbetrieb-Team ist 24/7 erreichbar und unterstützt Privatkund:innen ebenso wie Gewerbekunden in ganz Wien.
      </p>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Unsere Arbeitsweise: Saubere Ausführung, absolute Transparenz und offene Kommunikation von Anfang an. Wir diagnostizieren die Ursache gründlich, setzen Lösungen fachgerecht um und erklären Ihnen verständlich, was notwendig ist und warum. Keine versteckten Kosten – nur faire, nachvollziehbare Preise.
      </p>

      <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">Unsere häufigsten Einsatzgebiete</h2>
        <ul className="space-y-2 text-slate-700 list-disc pl-5">
          <li>FI-Schalter löst wiederholt aus</li>
          <li>Steckdose funktioniert nicht oder ist locker</li>
          <li>Kurzschluss nach Geräteeinsatz</li>
          <li>Fehlersuche bei Stromausfall in der Wohnung</li>
        </ul>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">Wie schnell kommt der Elektriker in Wien zu mir?</h3>
            <p>Bei Notfällen sind wir meist innerhalb kurzer Zeit vor Ort. Die genaue Anfahrtszeit hängt von der Dislokation und aktuellen Einsätzen ab. Rufen Sie uns an – wir geben Ihnen sofort eine realistische Einschätzung.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Reparieren Sie auch ältere Elektroanlagen?</h3>
            <p>Ja, wir prüfen Altanlagen sorgfältig und setzen notwendige Reparaturen fachgerecht und sicher um.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Kann ich auch am Wochenende anrufen?</h3>
            <p>Ja, unser Notdienst ist 24/7 erreichbar – auch an Wochenenden und Feiertagen.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-5 rounded"
        >
          Jetzt anrufen: {COMPANY.phoneDisplay}
        </a>
        <Link href="/kontakt" className="border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 px-5 rounded">
          Nachricht senden
        </Link>
      </div>
    </section>
  );
}
