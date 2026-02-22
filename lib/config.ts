// This file acts as the single source of truth for company details.
// It prioritizes environment variables, falling back to the defaults (ElektroVienna data).

export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Elektro Volt KG",
  nameWithoutKG: process.env.NEXT_PUBLIC_COMPANY_NAME_WITHOUT_KG || "Elektro Volt",
  slogan: process.env.NEXT_PUBLIC_COMPANY_SLOGAN || "Ihr zuverlässiger Partner für Elektroinstallationen",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "0699 173 70101",
  phoneDisplay: process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "0699 173 70101",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "tncy_isler@hotmail.com", //"office@elektrovolt.co.at",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "1120 Wien",
  addressFull: process.env.NEXT_PUBLIC_COMPANY_ADDRESS_FULL || "Pirkebnerstrasse 1-3/1/2, 1120 Wien",
  uidNummer: process.env.NEXT_PUBLIC_COMPANY_UID_NUMMER || "ATU12345678 (Muster)",
  firmenbuchNummer: process.env.NEXT_PUBLIC_COMPANY_FIRMA_NUMMER || "FN 123456x (Muster)",
  gerichtsstand: process.env.NEXT_PUBLIC_COMPANY_GERICHTSSTAND || "Wien",
  wkoMitglied: process.env.NEXT_PUBLIC_COMPANY_WKO_MEMBER || "Ja",
  meisterBetrieb: process.env.NEXT_PUBLIC_COMPANY_MEISTERBETRIEB || "Meisterbetrieb",
  notDienstBereit: process.env.NEXT_PUBLIC_COMPANY_24_7_NOTDIENST || "24/7 Notdienst bereit",

  
addressLine: 'Pirkebnerstrasse 1-3/1/2, 1120 Wien',
serviceArea: 'Einsatzgebiet ganz Wien',


  // External Links
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Pirkebnerstrasse 1-3/1/2, 1120 Wien")}`,
  // Build whatsappLink from env NEXT_PUBLIC_WHATSAPP_NUMBER (digits only). Falls nicht gesetzt, Fallback zur bekannten Nummer.
  whatsappLink:
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/\D/g, '')}`
      : `https://wa.me/4369917370101`),
  facebookLink: "https://www.facebook.com/elektrovolt",
  

  // Assets (Using placeholders that can be swapped via ENV)
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || "/picture/headerLogo.png", // If null, uses text logo
  firmenlogoUrl: process.env.NEXT_PUBLIC_FIRMENLOGO_URL || "/picture/image.png",
  licht_ins_dunkel_Url: process.env.NEXT_PUBLIC_LICHT_INS_DUNKEL_URL || "/picture/wir_bringen_Licht_ins_dunkel.png",
  firmenlogo3DUrl: process.env.NEXT_PUBLIC_FIRMENLOGO_3D_URL || "/picture/firmenlogo3D.png",
  teamsUrl: process.env.NEXT_PUBLIC_TEAMS_URL || "/picture/firmenlogo3D.png",
  //heroImage: process.env.NEXT_PUBLIC_HERO_IMAGE || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  //heroImage: process.env.NEXT_PUBLIC_HERO_IMAGE || "/picture/electrician-white-bg.jpg",
  //heroImage: process.env.NEXT_PUBLIC_HERO_IMAGE || "/picture/hero.avif",
  heroImage: process.env.NEXT_PUBLIC_HERO_IMAGE || "/picture/hero_1.png",
  mapImage: process.env.NEXT_PUBLIC_MAP_IMAGE || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.7192643!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079f54bef725%3A0x1234567890!2sWien!5e0!3m2!1sde!2sat!4v1234567890",
};

export const ROUTES = {
  home: "/",
  services: "/leistungen",
  about: "/ueber-uns",
  contact: "/kontakt",
  impressum: "/impressum",
  datenschutz: "/datenschutz",
  faq: "/faq"
};

// Typische Probleme - extrem wichtig für Google & Kunden
export const COMMON_PROBLEMS = [
  "Sicherung fliegt ständig raus",
  "FI-Schalter lässt sich nicht einschalten",
  "Teil der Wohnung ohne Strom",
  "Steckdose funktioniert nicht mehr",
  "Herd oder Backofen ohne Funktion",
  "Kurzschluss nach Gerät anschließen",
  "Stromausfall nachts",
];

export const COMMON_PROBLEMS_INTRO = "Haben Sie eines dieser Probleme?";
export const COMMON_PROBLEMS_CTA = "In den meisten Fällen können wir das sofort vor Ort beheben.";

// Transparente Kosten - nimmt Angst, bringt Anrufe
export const PRICING = [
  { label: "Notdienst", price: "ab 89€" },
  { label: "Steckdose reparieren", price: "ca. 120–180€" },
  { label: "Sicherung / FI tauschen", price: "ca. 150–280€" },
  { label: "E-Befund", price: "ab 250€" },
];

export const PRICING_INTRO = "Transparente Kosten";
export const PRICING_CTA = "Sie erhalten vor Arbeitsbeginn immer eine Preisinfo.";

// Warum Kunden uns wählen - Vertrauen aufbauen
export const TRUST_POINTS = [
  "24/7 Notdienst erreichbar",
  "Anfahrt meist unter 45 Minuten",
  "Transparente Preise vorab",
  "Meisterbetrieb aus Wien",
  "Saubere Arbeit ohne Schäden",
  "Erklärung des Problems",
  "Fachgerechte Beratung vor Ort",
  "Sauberkeit und Schutz der Wohnung",
  "Schnelle Terminvergabe"
];

export const TRUST_INTRO = "Ihr Elektriker in Wien – schnell & ehrlich";

export const GOOGLE_REVIEWS = {
  reviewLink:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_LINK ||
    "https://search.google.com/local/writereview?placeid=DEINE_PLACE_ID",
  screenshotUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_SCREENSHOT || "", rating: "4,9",
  totalReviews: process.env.NEXT_PUBLIC_GOOGLE_TOTAL_REVIEWS || "40+",
};

export const GOOGLE_REVIEW_QUOTES = [
  "Nachts um 23 Uhr gekommen – Problem sofort gelöst!",
  "Defekt schnell gefunden und direkt vor Ort behoben.",
  "Kompetent, fair, pünktlich und sympathisch! Als am nächsten Tag dann doch was nicht richtig funktionierte, waren die Burschen binnen weniger Stunden zur Stelle und brachten alles in Ordnung – ohne Extrakosten. Stromsachen nur noch mit ElektroVolt!",
  "Schnell einen Termin für Saunaanschluss bekommen (am nächsten Tag). Freundlicher Service, hat alles super erledigt und sogar noch ein paar Extraarbeiten gemacht.",
  "Professioneller Service sofort gekommen und das Problem sofort behoben. Preis klasse völlig in Ordnung.",
  "Pünktlich da, sauber gearbeitet und alles verständlich erklärt. Sehr fairer Preis!",
  "Top Notdienst – auch am Wochenende sofort erreichbar.",  
  "Sehr freundlich, professionell und ohne Überraschungen beim Preis.",
  "Sehr gute Elektriker sehr zuverlässig top Eklektiker danke Elektro Volt das sie so schnell die Störungen übernommen haben",
  "Kurz angerufen, schnell da – genau so wünscht man es sich.",
  "Sicherungskasten geprüft und alles sauber dokumentiert.",
  "Klare Empfehlung – verlässlich, schnell, sauber.",
  "Auch kleine Arbeiten wurden ernst genommen und perfekt erledigt.",
  "Sehr guter Elektriker! Preis und Arbeitsleistung sind top. Ich bin sehr zufrieden und kann ihn nur weiterempfehlen",
  "Hatte einen Stromausfall. Nachdem der Strom wieder an war, haben auf einmal Herd, paar Steckdosen und die Wärmepumpe nicht mehr funktioniert. Herr Akar war um 18 uhr bei mir und hat Top Arbeit geleistet zu einem fairen Preis! Alles funktioniert wieder! Kann ich nur empfehlen! Danke!",
  "Ein erstklassiger Fachmann. Wir hatten abends einen Stromausfall durch eine unglückliche Überlastung unserer Sicherungen - haben nicht aufgepasst und Geschirrspüler, Waschmaschine, Quooker und ausnahmsweise e-Auto geladen. Er hat die Sicherungen ersetzt, alles durchgemessen, den Hochlauf aller Geräte überwacht und uns die Tipps gegeben, wie wir das besser machen können. Nach Prüfung aller Lasten sind wir beruhigt und klüger geworden. Eine Empfehlung.",
];

export const GOOGLE_REVIEW_TRUST_POINTS = [
  "Geprüfter Elektriker – WKO",
  "10+ Jahre Erfahrung",
  "Über 50+ Kunden jährlich",
];

export const GOOGLE_REVIEW_QUOTES_HEADING = "Weitere Kundenstimmen:";

export const GOOGLE_REVIEW_CARD_HEADING = "⭐ Google Bewertungen";
