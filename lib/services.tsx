import { Zap, Home, ShieldCheck, Video, Bell, Network, Satellite, Sun, Battery, Lightbulb, Wifi } from 'lucide-react';
import React from 'react';

export const services = [
  {
    slug: 'elektroinstallationen',
    icon: <Zap className="w-6 h-6 text-brand-yellow" />,
    title: 'Elektroinstallationen',
    shortDescription: 'Elektroinstallationen für Neubau, Sanierung & Erweiterung – sicher, sauber, zuverlässig.',
    description:
      'Wir übernehmen sämtliche Elektroinstallationen – von der Planung über die fachgerechte Ausführung bis zur Abnahme. Ob Neubau, Altbausanierung oder Erweiterung: Wir installieren Stromkreise, Verteiler, Steckdosen, Schalter, Beleuchtung, Infrarotheizungen und vieles mehr. Unsere erfahrenen Elektriker achten auf höchste Sicherheit, Energieeffizienz und eine saubere Umsetzung. Auch nach Projektabschluss stehen wir für Wartung und Erweiterungen zur Verfügung.',
  },
  {
    slug: 'smart-home',
    icon: <Home className="w-6 h-6 text-brand-yellow" />,
    title: 'Smart Home',
    shortDescription: 'Smart-Home-Lösungen: Komfort, Sicherheit & Effizienz per App oder Sprache.',
    description:
      'Wir machen Ihr Zuhause intelligent: Mit moderner Smart-Home-Technik steuern Sie Licht, Heizung, Jalousien, Sicherheitssysteme und mehr bequem per App oder Sprachbefehl. Wir beraten Sie zu KNX, Funklösungen und maßgeschneiderten Systemen, übernehmen die Installation und sorgen für eine reibungslose Integration in Ihr Zuhause. Mehr Komfort, Energieeffizienz und Sicherheit – alles aus einer Hand.',
  },
  {
    slug: 'videoueberwachung',
    icon: <Video className="w-6 h-6 text-brand-yellow" />,
    title: 'Videoüberwachung',
    shortDescription: 'Videoüberwachung für Privat & Gewerbe – Sicherheit mit System.',
    description:
      'Schützen Sie Ihr Eigentum mit moderner Videoüberwachung: Wir planen und installieren Kamerasysteme für Privat, Gewerbe und Außenbereiche. Sie erhalten gestochen scharfe Bilder, Fernzugriff per Smartphone und auf Wunsch eine Anbindung an Alarmanlagen. Wir beraten zu Datenschutz, optimaler Platzierung und übernehmen Wartung sowie Nachrüstung bestehender Systeme.',
  },
  {
    slug: 'alarmanlage',
    icon: <Bell className="w-6 h-6 text-brand-yellow" />,
    title: 'Alarmanlage',
    shortDescription: 'Alarmanlagen für Einbruch-, Brand- & Gefahrenmeldungen – individuell & sicher.',
    description:
      'Wir bieten Ihnen zuverlässige Alarmanlagen für Wohnungen, Häuser und Betriebe. Von der Beratung über die Installation bis zur regelmäßigen Wartung – wir sorgen für ein sicheres Gefühl. Unsere Systeme sind flexibel erweiterbar, können mit Videoüberwachung und Smart-Home-Lösungen kombiniert werden und bieten effektiven Schutz vor Einbruch, Brand und anderen Gefahren.',
  },
  {
    slug: 'netzwerkverkabelung',
    icon: <Network className="w-6 h-6 text-brand-yellow" />,
    title: 'Netzwerkverkabelung',
    shortDescription: 'Netzwerkverkabelung für schnelles, stabiles Internet & moderne IT-Infrastruktur.',
    description:
      'Ob Home-Office, Smart Home oder Firmennetzwerk: Wir planen und installieren strukturierte Netzwerkverkabelungen (LAN, CAT, Glasfaser) für stabile und schnelle Datenübertragung. Wir übernehmen die fachgerechte Verlegung, Anschlussdosen, Patchfelder und sorgen für eine zukunftssichere Infrastruktur – inklusive Messprotokoll und Dokumentation.',
  },
  {
    slug: 'sat-anlagen',
    icon: <Satellite className="w-6 h-6 text-brand-yellow" />,
    title: 'SAT-Anlagen',
    shortDescription: 'SAT-Anlagen: Installation, Ausrichtung & Reparatur für besten TV-Empfang.',
    description:
      'Wir installieren und warten Satellitenanlagen für Ein- und Mehrfamilienhäuser sowie Wohnanlagen. Ob Neuinstallation, Erweiterung oder Reparatur: Wir sorgen für besten Empfang, richten Satellitenschüsseln präzise aus und beraten zu Multischalter- und Gemeinschaftsanlagen. Auch Umrüstung auf moderne Empfangstechnik und Fehlerbehebung gehören zu unserem Service.',
  },
  {
    slug: 'pv-anlagen',
    icon: <Sun className="w-6 h-6 text-brand-yellow" />,
    title: 'PV-Anlagen',
    shortDescription: 'Photovoltaik-Anlagen: Planung, Montage & Wartung für nachhaltige Energie.',
    description:
      'Setzen Sie auf nachhaltige Energie: Wir planen, installieren und warten Photovoltaik-Anlagen für Privat und Gewerbe. Von der ersten Beratung über die Montage bis zur Inbetriebnahme und Anmeldung beim Netzbetreiber – alles aus einer Hand. Auf Wunsch mit Batteriespeicher, Monitoring und Förderberatung. Wir sorgen für maximale Effizienz und Sicherheit Ihrer PV-Anlage.',
  },
  {
    slug: 'ladestationen',
    icon: <Battery className="w-6 h-6 text-brand-yellow" />,
    title: 'Ladestationen',
    shortDescription: 'Ladestationen für E-Autos: Beratung, Installation & Anmeldung aus einer Hand.',
    description:
      'Wir installieren sichere und leistungsfähige Ladestationen (Wallboxen) für Elektrofahrzeuge – privat, gewerblich oder für Wohnanlagen. Wir beraten zu Förderungen, übernehmen die Anmeldung beim Netzbetreiber und sorgen für eine normgerechte, zukunftssichere Installation. Auch Lastmanagement und Integration in PV-Anlagen sind möglich.',
  },
  {
    slug: 'lichttechnik',
    icon: <Lightbulb className="w-6 h-6 text-brand-yellow" />,
    title: 'Lichttechnik',
    shortDescription: 'Lichttechnik: Moderne LED-Beleuchtung & Lichtkonzepte für jeden Bedarf.',
    description:
      'Wir realisieren individuelle Lichtkonzepte für Wohnräume, Büros, Geschäfte und Außenbereiche. Von der Planung über die Auswahl moderner LED-Technik bis zur Installation und Steuerung (z.B. DALI, Smart Home). Wir setzen Akzente, schaffen Wohlfühlatmosphäre und sorgen für energieeffiziente Beleuchtungslösungen – auch für Sanierung und Umrüstung.',
  },
  {
    slug: 'sprechanlagen',
    icon: <Wifi className="w-6 h-6 text-brand-yellow" />,
    title: 'Sprechanlagen',
    shortDescription: 'Sprechanlagen: Audio & Video – mehr Sicherheit und Komfort an der Tür.',
    description:
      'Wir installieren und warten moderne Sprech- und Videoanlagen für Ein- und Mehrfamilienhäuser sowie Gewerbeobjekte. Ob klassische Klingelanlage, Video-Türsprechanlage oder IP-basierte Systeme – wir beraten, montieren und integrieren die passende Lösung für mehr Sicherheit und Komfort. Auch Nachrüstung und Reparatur möglich.',
  },
  {
    slug: 'stoerungsdienst',
    icon: <Zap className="w-6 h-6 text-brand-yellow" />,
    title: 'Störungsdienst 24h',
    shortDescription: '24h-Störungsdienst: Schnelle Hilfe bei Stromausfall & Kurzschluss – Tag & Nacht.',
    description:
      'Im Notfall sind wir rund um die Uhr für Sie erreichbar: Bei Stromausfall, Kurzschluss, defekten Sicherungen oder anderen elektrischen Problemen kommen unsere erfahrenen Elektriker schnell zu Ihnen. Wir beheben Störungen sicher, zuverlässig und dokumentieren die Arbeiten transparent. 24/7 Notdienst für Privat, Gewerbe und Hausverwaltungen.',
  },
  {
    slug: 'ebefund',
    icon: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
    title: 'E-Befund',
    shortDescription: 'E-Befund: Gesetzliche Überprüfung & Dokumentation für Ihre Sicherheit.',
    description:
      'Wir führen die gesetzlich vorgeschriebenen Überprüfungen (E-Befund, E-Check) Ihrer elektrischen Anlagen durch – für Wohnungen, Häuser, Betriebe und Immobilienübergaben. Sie erhalten eine fachgerechte Dokumentation für Versicherung und Behörden. Wir beraten zu Sanierungsbedarf, führen Messungen durch und sorgen für Ihre Sicherheit und Rechtssicherheit.',
  },
];

export type Service = (typeof services)[number];

export default services;
