export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">FAQ</h1>
      <div className="space-y-6 text-slate-700">
        <div>
          <h2 className="text-lg font-bold">Arbeiten Sie nachts?</h2>
          <p>Ja, 24/7 erreichbar.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Wie schnell sind Sie vor Ort?</h2>
          <p>In Wien sind wir meist innerhalb von 30 bis 45 Minuten bei Ihnen.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Gibt es einen 24/7 Notdienst?</h2>
          <p>Ja, unser Notdienst ist rund um die Uhr erreichbar, auch an Wochenenden und Feiertagen.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Erhalte ich vorab eine Preisinfo?</h2>
          <p>Ja, Sie bekommen vor Beginn der Arbeiten eine klare Preisinfo.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Welche Leistungen bieten Sie an?</h2>
          <p>Von Störungsbehebung und Notdienst bis zu E-Befund und Installationen in ganz Wien.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Wie kann ich Sie erreichen?</h2>
          <p>Telefonisch, per E-Mail oder über das Kontaktformular auf der Website.</p>
        </div>
        <p className="text-sm text-slate-600">Weitere Fragen beantworten wir gerne telefonisch oder per E-Mail.</p>
      </div>
    </div>
  );
}
