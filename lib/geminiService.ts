import { GoogleGenAI, Type } from "@google/genai";

export interface EmergencyAdvice {
  urgency: 'NIEDRIG' | 'MITTEL' | 'HOCH' | 'LEBENSGEFAHR';
  safetyTips: string[];
  estimatedCostRange: string;
  summary: string;
}

export const analyzeEmergency = async (userDescription: string): Promise<EmergencyAdvice> => {
  try {
    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      console.warn('GEMINI_API_KEY not set, using fallback response');
      return {
        urgency: 'HOCH',
        safetyTips: ['Sicherung ausschalten', 'Geräte nicht anfassen', 'Bitte rufen Sie uns direkt an'],
        estimatedCostRange: 'Auf Anfrage',
        summary: 'Automatische Analyse nicht verfügbar. Bitte kontaktieren Sie uns telefonisch für eine Notfallberatung.'
      };
    }

    // Initialize the Gemini client only when needed
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const model = 'gemini-3-flash-preview';

    const prompt = `
      Du bist ein erfahrener Elektriker-Meister in Wien.
      Ein Kunde beschreibt ein elektrisches Problem: "${userDescription}".

      Analysiere die Situation und gib folgendes zurück:
      1. Dringlichkeit (NIEDRIG, MITTEL, HOCH, LEBENSGEFAHR).
      2. 3 kurze, konkrete Sicherheitstipps, was der Kunde sofort tun oder lassen sollte, bevor der Techniker kommt.
      3. Eine grobe Kostenschätzung für Wien (nur eine Spanne, z.B. "100-200€").
      4. Eine kurze Zusammenfassung des vermuteten Problems für den Techniker.

      Antworte strikt im JSON Format.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            urgency: { type: Type.STRING, enum: ['NIEDRIG', 'MITTEL', 'HOCH', 'LEBENSGEFAHR'] },
            safetyTips: { type: Type.ARRAY, items: { type: Type.STRING } },
            estimatedCostRange: { type: Type.STRING },
            summary: { type: Type.STRING }
          },
          required: ['urgency', 'safetyTips', 'estimatedCostRange', 'summary']
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as EmergencyAdvice;
    }

    throw new Error("Keine Antwort von Gemini erhalten.");
  } catch (error) {
    console.error("Fehler bei der Gemini Analyse:", error);
    // Fallback response if AI fails
    return {
      urgency: 'HOCH',
      safetyTips: ['Sicherung ausschalten', 'Geräte nicht anfassen', 'Auf Techniker warten'],
      estimatedCostRange: 'Auf Anfrage',
      summary: 'Fehler bei der automatischen Analyse. Bitte rufen Sie direkt an.'
    };
  }
};
