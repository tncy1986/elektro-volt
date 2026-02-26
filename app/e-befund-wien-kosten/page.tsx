import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'E-Befund Kosten | Elektroprüfung & transparente Preise Wien',
  description:
    'E-Befund (Elektrobefund) in Wien: Transparente Kosten basierend auf Objektgröße & Anlagenzustand. Fachgerechte Prüfung, verständlicher Befund, keine versteckten Preise.',
  keywords: [
    'E-Befund Kosten',
    'Elektrobefund Preis',
    'Elektroprüfung Wohnung',
    'Befund Elektriker',
  ],
  openGraph: {
    title: 'E-Befund Kosten | Elektriker Meisterbetrieb Wien',
    description:
      'Transparente Information zu E-Befund-Kosten, Ablauf und Leistungsumfang der Elektroprüfung in Wien.',
  },
};

export default function EBefundKostenPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Gibt es einen Fixpreis für den E-Befund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ein verbindlicher Preis ist meist erst nach kurzer Vorabklärung oder Besichtigung sinnvoll möglich.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie lange dauert ein E-Befund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das hängt von Größe und Zustand der Anlage ab. Kleinere Objekte sind deutlich schneller geprüft.',
        },
      },
      {
        '@type': 'Question',
        name: 'Erhalte ich eine nachvollziehbare Dokumentation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, Sie erhalten einen verständlichen Befund mit den relevanten Prüfergebnissen.',
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] md:text-4xl font-extrabold tracking-tight leading-tight text-center text-brand-dark mb-4"> E-Befund & Elektroprüfung – Kosten transparent erklärt</h1>
      <div className="mx-auto mb-8 h-1 w-80 bg-brand-yellow rounded" />   
      <p className="text-slate-700 mb-4 leading-relaxed">
        Ein E-Befund (auch Elektrobefund oder Elektroprüfung) ist eine systematische Überprüfung Ihrer elektrischen Anlage nach österreichischen Normen. Die Kosten richten sich nach Objektgröße, Anzahl der Stromkreise und Zustand der vorhandenen Installation – nicht nach Pauschalpreisen.
      </p>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Wir erklären Ihnen vorab transparent, welche Prüfungen sinnvoll sind und was sie kosten. Sie erhalten einen verständlichen, technisch sauberen Befund mit allen relevanten Ergebnissen und Empfehlungen – ohne versteckte Kosten.
      </p>

      <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">Was den Preis beeinflusst</h2>
        <ul className="space-y-2 text-slate-700 list-disc pl-5">
          <li>Wohnungs- oder Objektgröße</li>
          <li>Anzahl von Verteilern, Stromkreisen und Steckdosen</li>
          <li>Zustand und Alter der bestehenden Anlage</li>
          <li>Zusätzlicher Reparaturbedarf nach Prüfung</li>
        </ul>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">Gibt es einen Fixpreis für den E-Befund?</h3>
            <p>Ein verbindlicher Preis ist meist erst nach kurzer Vorabklärung oder Besichtigung sinnvoll möglich.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Wie lange dauert ein E-Befund?</h3>
            <p>Das hängt von Größe und Zustand der Anlage ab. Kleinere Objekte sind deutlich schneller geprüft.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Erhalte ich eine nachvollziehbare Dokumentation?</h3>
            <p>Ja, Sie erhalten einen verständlichen Befund mit den relevanten Prüfergebnissen.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-5 rounded"
        >
          Beratung anrufen: {COMPANY.phoneDisplay}
        </a>
        <Link href="/kontakt" className="border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 px-5 rounded">
          E-Befund anfragen
        </Link>
      </div>
    </section>
  );
}
