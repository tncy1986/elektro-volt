import { COMPANY } from '@/lib/config';

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Impressum</h1>
      <div className="space-y-6 text-slate-700">
        <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Medieninhaber & Herausgeber</h2>
            <p className="font-bold">{COMPANY.name}</p>
            <p>{COMPANY.addressFull}</p>
        </div>

        <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Kontakt</h2>
            <p>Telefon: {COMPANY.phoneDisplay}</p>
            <p>E-Mail: {COMPANY.email}</p>
        </div>

        <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Gewerbeinformationen</h2>
            <p>UID-Nummer: {COMPANY.uidNummer}</p>
            <p>Firmenbuchnummer: {COMPANY.firmenbuchNummer}</p>
            <p>Gerichtsstand: {COMPANY.gerichtsstand}</p>
            <p>Mitglied der WKÖ</p>
        </div>

        {/*
        <div className="text-sm text-slate-500 mt-12">
            <p>Hinweis: ...</p>
        </div>
        */}
      </div>
    </div>
  );
}
