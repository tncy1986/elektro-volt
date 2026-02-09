export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Datenschutzerklärung</h1>
      <div className="space-y-6 text-slate-700">
          <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>

          <h3 className="text-lg font-bold">Kontakt mit uns</h3>
          <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

          <h3 className="text-lg font-bold">Cookies</h3>
          <p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.</p>
          {/*
          <h3 className="text-lg font-bold">KI-Verarbeitung</h3>
          <p>Bei Nutzung des KI-Notfall-Assistenten werden die eingegebenen Texte an Google Gemini API gesendet. Bitte geben Sie keine persönlichen Daten (Namen, Adressen) in das Beschreibungsfeld ein.</p>
          */}
      </div>
    </div>
  );
}
