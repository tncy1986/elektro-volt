import { Zap, Home, ShieldCheck } from 'lucide-react';
import React from 'react';

export const services = [
  {
    slug: 'elektroinstallationen',
    icon: <Zap className="w-6 h-6 text-brand-yellow" />,
    title: 'Elektroinstallationen',
    description: 'Von Verteilerkasten bis Steckdosen – sichere und moderne Elektroinstallationen für Ihr Zuhause und Unternehmen.',
  },
  {
    slug: 'sicherheitstechnik',
    icon: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
    title: 'Sicherheitstechnik',
    description: 'Alarmanlagen, Videoüberwachung & Zutrittssysteme – für Ihre Sicherheit rund um die Uhr. Installation und Wartung von modernen Sprech- und Videoanlagen (Sprechanlagen) inklusive.',
  },
  {
    slug: 'haustechnik',
    icon: <Home className="w-6 h-6 text-brand-yellow" />,
    title: 'Hausinstallationen & Intelligente Haustechnik',
    description: 'Komplette Neuinstallationen für Wohnungen und Häuser sowie Sanierung von Altbauten. Zusätzlich bieten wir Smart Home, PV-Anlagen, Batteriespeicher und E-Ladestationen — alles für ein vernetztes und energieeffizienten Zuhause.',
  },
  {
    slug: 'stoerungsdienst',
    icon: <Zap className="w-6 h-6 text-brand-yellow" />,
    title: 'Störungsdienst 24h',
    description: 'Stromausfall? Kurzschluss? Wir sind rund um die Uhr für Sie da und beheben Probleme schnell und sicher.',
  },
  /* optional entry - commented out */
  // {
  //   slug: 'reparaturen',
  //   icon: <Wrench className="w-6 h-6 text-brand-yellow" />,
  //   title: 'Reparaturen',
  //   description: 'Fachgerechte Reparatur von Elektrogeräten, Schaltern, Steckdosen und Beleuchtungssystemen.',
  // },
  {
    slug: 'ebefund',
    icon: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
    title: 'E-Befund',
    description: 'Offizielle Überprüfung Ihrer Anlagen (E-Check) für Sicherheit und Versicherungsschutz.',
  },
  /*
  {
    slug: 'herdanschluss',
    icon: <Cable className="w-6 h-6 text-brand-yellow" />,
    title: 'Herdanschluss',
    description: 'Professioneller und sicherer Anschluss Ihres neuen Elektroherds oder Backofens.',
  },
  */
  /* sprechanlagen merged into sicherheitstechnik */
];

export type Service = (typeof services)[number];

export default services;
