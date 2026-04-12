import type { Metadata } from 'next';
import { COMPANY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum von ${COMPANY.name}. Firmensitz: ${COMPANY.addressFull}. UID: ${COMPANY.uidNummer}.`,
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] md:text-5xl font-extrabold tracking-tight leading-tight text-center text-brand-dark mb-4">Impressum</h2>
      <div className="mx-auto mb-8 h-1 w-40 bg-brand-yellow rounded" />
      <div className="space-y-6 text-slate-700">
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Vollständiger Firmenname</h2>
          <p className="font-bold">Elektro Volt KG</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Ort der Gewerbeberechtigung</h2>
          <p>Pirkebnerstraße 1-3 Stiege 1/2<br />1120 Wien<br />Österreich</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">UID-Nummer</h2>
          <p>ATU71545447</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Rechtsform</h2>
          <p>KG</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Geschäftsführung/Juristische Person</h2>
          <p>Sedat Akar</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Firmenbuchnummer</h2>
          <p>FN461066p</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Firmenbuchgericht</h2>
          <p>Handelsgericht Wien</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Unternehmensgegenstand</h2>
          <p>Elektrotechnik</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Kammer/Berufsverband-Zugehörigkeit(en)</h2>
          <p>Mitglied der Wirtschaftskammer Wien; LI Elektro-, Gebäude-, Alarm- und Kommunikationstechniker</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Aufsichtsbehörde</h2>
          <p>Magistratisches Bezirksamt des XII. Bezirkes</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-dark mb-2">Gewerbeordnung</h2>
          <p>Elektrotechnik eingeschränkt auf die Installation elektrischer Starkstromanlagen und Einrichtungen, beschränkt auf Nennspannungen bis einschließlich 1500 Volt und zwar im Anschluss an bestehende Anlagen zur Gewinnung oder Verteilung elektrische Energie, zur Gewinnung elektrischer Energie mit einer Nennleistung bis einschließlich 150 Kilowatt, die Errichtung von Blitzschutzanlagen und die Erichtung von Brandmeldeanlagen</p>
          <br />
          <p>Alle Bildrechte liegen bei Elektro Volt KG.</p>
        </div>
      </div>
    </div>
  );
}
