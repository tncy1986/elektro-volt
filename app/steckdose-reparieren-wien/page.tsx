import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Steckdose reparieren | Elektriker Wien Notdienst',
  description:
    'Defekte, lockere oder heiß werdende Steckdose? Wir tauschen und reparieren Steckdosen fachgerecht und sicher. 24/7 Notdienst Wien – auch bei Brandgeruch.',
  keywords: [
    'Steckdose reparieren',
    'defekte Steckdose',
    'Steckdose tauschen',
    'Wackelkontakt Steckdose',
  ],
  openGraph: {
    title: 'Steckdose reparieren | Elektriker Meisterbetrieb Wien',
    description:
      'Defekte Steckdose? Fachgerechte Reparatur und Austausch durch Elektriker-Meisterbetrieb – schnell & sicher.',
  },
};

export default function SteckdoseReparierenPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kann ich eine defekte Steckdose selbst tauschen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aus Sicherheitsgründen empfehlen wir den Austausch durch einen Elektriker, besonders bei älteren Anlagen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine Steckdosen-Reparatur in Wien?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Kosten hängen von Zustand, Leitungssituation und nötigem Material ab. Wir geben vorab eine transparente Einschätzung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Reparieren Sie auch mehrere Steckdosen in einem Termin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wir können mehrere Problemstellen in einem Einsatz prüfen und beheben.',
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] md:text-4xl font-extrabold tracking-tight leading-tight text-center text-brand-dark mb-4">Defekte Steckdose? Wir reparieren & tauschen fachgerecht</h1>
      <div className="mx-auto mb-8 h-1 w-80 bg-brand-yellow rounded" />         
      <p className="text-slate-700 mb-4 leading-relaxed">
        Eine defekte, lockere oder heiß werdende Steckdose ist ein Sicherheitsrisiko. Wenn es knistert, verbrannt riecht, der Stecker keinen Kontakt hat oder die Dose warm wird, besteht Brand- und Stromschlaggefahr. Wir reparieren oder tauschen Steckdosen fachgerecht nach aktuellen Normen aus.
      </p>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Besonders bei älteren Wohnungen prüfen wir auch die Leitungsführung und den gesamten Stromkreis, um die Ursache langfristig zu beheben und weitere Probleme zu vermeiden. Ihre Sicherheit ist unser Fokus.
      </p>

      <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">Wann Sie sofort handeln sollten</h2>
        <ul className="space-y-2 text-slate-700 list-disc pl-5">
          <li>Brandgeruch oder verfärbte Steckdose</li>
          <li>Stecker sitzt locker und fällt heraus</li>
          <li>Stromausfall beim Einstecken eines Geräts</li>
          <li>Sicherung oder FI löst wiederholt aus</li>
        </ul>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">Kann ich eine defekte Steckdose selbst tauschen?</h3>
            <p>Aus Sicherheitsgründen empfehlen wir den Austausch durch einen Elektriker, besonders bei älteren Anlagen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Was kostet eine Steckdosen-Reparatur in Wien?</h3>
            <p>Die Kosten hängen von Zustand, Leitungssituation und nötigem Material ab. Wir geben vorab eine transparente Einschätzung.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Reparieren Sie auch mehrere Steckdosen in einem Termin?</h3>
            <p>Ja, wir können mehrere Problemstellen in einem Einsatz prüfen und beheben.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-5 rounded"
        >
          Elektriker anrufen: {COMPANY.phoneDisplay}
        </a>
        <Link href="/kontakt" className="border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 px-5 rounded">
          Termin anfragen
        </Link>
      </div>
    </section>
  );
}
