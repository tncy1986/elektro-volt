import { COMPANY } from '@/lib/config';

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Impressum</h1>
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
        </div>
      </div>
    </div>
  );
}
