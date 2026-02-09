'use client';

import { useState } from 'react';
import { Bot, AlertTriangle, CheckCircle, Loader2, Phone } from 'lucide-react';

interface EmergencyAdvice {
  urgency: 'NIEDRIG' | 'MITTEL' | 'HOCH' | 'LEBENSGEFAHR';
  safetyTips: string[];
  estimatedCostRange: string;
  summary: string;
}

const EmergencyAssistant = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<EmergencyAdvice | null>(null);

  const handleAnalyze = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setAdvice(null);

    try {
      const response = await fetch('/api/analyze-emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze emergency');
      }

      const result = await response.json();
      setAdvice(result);
    } catch (error) {
      console.error('Error analyzing emergency:', error);
      setAdvice({
        urgency: 'HOCH',
        safetyTips: ['Sicherung ausschalten', 'Geräte nicht anfassen', 'Auf Techniker warten'],
        estimatedCostRange: 'Auf Anfrage',
        summary: 'Fehler bei der automatischen Analyse. Bitte rufen Sie direkt an.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 max-w-2xl mx-auto my-8">
      <div className="bg-brand-dark p-6 text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Bot className="text-brand-yellow" />
            KI Notfall-Assistent
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Beschreiben Sie Ihr Problem für eine sofortige Sicherheitseinschätzung durch Gemini AI.
          </p>
        </div>
      </div>

      <div className="p-6">
        {!advice ? (
          <div className="space-y-4">
            <textarea
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none h-32 resize-none"
              placeholder="Z.B.: Es riecht verbrannt aus der Steckdose in der Küche und das Licht flackert..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !description.trim()}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Analysiere Situation...
                </>
              ) : (
                <>
                  Jetzt Einschätzung erhalten
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 text-center italic">
              Hinweis: Dies ist eine KI-Einschätzung und ersetzt keine professionelle Diagnose vor Ort. Bei Feuer sofort 112 rufen.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={`p-4 rounded-lg mb-6 border-l-4 ${
              advice.urgency === 'LEBENSGEFAHR' ? 'bg-red-50 border-red-600 text-red-900' :
              advice.urgency === 'HOCH' ? 'bg-orange-50 border-orange-500 text-orange-900' :
              'bg-blue-50 border-blue-500 text-blue-900'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold uppercase tracking-wider text-xs">Dringlichkeit</span>
                <span className="font-bold">{advice.urgency}</span>
              </div>
              <p className="text-lg font-medium">{advice.summary}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-brand-yellow" />
                Sofortmaßnahmen (Safety First):
              </h4>
              <ul className="space-y-2">
                {advice.safetyTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-100 p-4 rounded-lg">
              <div>
                <span className="text-sm text-slate-500 block">Geschätzter Kostenrahmen</span>
                <span className="font-bold text-slate-900 text-xl">{advice.estimatedCostRange}</span>
              </div>
              <a href="tel:+43123456789" className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-6 rounded-lg text-center shadow-lg transition flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Techniker jetzt anfordern
              </a>
            </div>
            <button
              onClick={() => setAdvice(null)}
              className="mt-4 text-slate-500 text-sm hover:underline w-full text-center"
            >
              Neue Analyse starten
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyAssistant;
