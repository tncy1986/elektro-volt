import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Elektro Volt KG. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] md:text-5xl font-extrabold tracking-tight leading-tight text-center text-brand-dark mb-4">Datenschutzerklärung</h2>
      <div className="mx-auto mb-8 h-1 w-40 bg-brand-yellow rounded" />
      <div className="space-y-6 text-slate-700">
        <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>

        <h3 className="text-lg font-bold">Kontakt mit uns</h3>
        <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

        <h3 className="text-lg font-bold">Server-Logfiles</h3>
        <p>Beim Besuch dieser Website werden automatisch Informationen in so genannten Server-Logfiles gespeichert, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.</p>

        <h3 className="text-lg font-bold">Cookies</h3>
        <p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.</p>

        <h3 className="text-lg font-bold">Web-Analyse</h3>
        <p>Unsere Website verwendet keine externen Web-Analyse-Tools wie Google Analytics. Es werden lediglich anonyme Zugriffsdaten (z.B. Server-Logfiles) gespeichert.</p>

        <h3 className="text-lg font-bold">Ihre Rechte</h3>
        <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.</p>

        <h3 className="text-lg font-bold">SSL-Verschlüsselung</h3>
        <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung.</p>

        <h3 className="text-lg font-bold">Auftragsverarbeiter</h3>
        <p>Wir bedienen uns zur Verarbeitung Ihrer Daten teilweise externer Dienstleister (z.B. Hosting-Provider), die Ihre Daten nur im Rahmen der Auftragserfüllung verwenden dürfen.</p>

        <h3 className="text-lg font-bold">Beschwerderecht</h3>
        <p>Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, steht Ihnen das Recht auf Beschwerde bei der Datenschutzbehörde zu.</p>

        {/*
        <h3 className="text-lg font-bold">KI-Verarbeitung</h3>
        <p>Bei Nutzung des KI-Notfall-Assistenten werden die eingegebenen Texte an Google Gemini API gesendet. Bitte geben Sie keine persönlichen Daten (Namen, Adressen) in das Beschreibungsfeld ein.</p>
        */}
      </div>
    </div>
  );
}
