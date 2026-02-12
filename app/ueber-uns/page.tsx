import { Metadata } from 'next';
import WhyUs from '@/components/WhyUs';
import { COMPANY } from '@/lib/config';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Über uns - Meisterbetrieb für Elektrotechnik in Wien',
  description: 'Elektro Volt Wien: Ihr verlässlicher Elektriker-Meisterbetrieb seit Jahren. Qualität, Sicherheit und persönlicher Service für alle Wiener Bezirke.',
  keywords: ['Elektriker Meisterbetrieb Wien', 'Über Elektro Volt', 'Elektriker Team Wien'],
  openGraph: {
    title: 'Über Elektro Volt Wien | Ihr Meisterbetrieb',
    description: 'Traditionelles Handwerk trifft moderne Technik. Ihr Elektriker in Wien.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="text-slate-900 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Über {COMPANY.nameWithoutKG}</h1>
           <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-6"></div>
           <p className="text-sm text-slate-900 leading-relaxed">
             Traditionelles Handwerk trifft auf moderne Technik. Seit vielen Jahren sind wir der vertrauensvolle Partner für Wien.<br />
             Wir verbinden Fachwissen mit persönlichem Service und begleiten von der Beratung über die Planung bis zur fachgerechten Umsetzung aller elektrotechnischen Arbeiten – zuverlässig, sauber und termingerecht.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-2 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Unser Anspruch: Sicherheit & Qualität</h2>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                    <p>
                        Als konzessionierter Elektro-Meisterbetrieb in Wien stehen wir für höchste Qualität und Verlässlichkeit.
                        Strom ist Vertrauenssache – deshalb beschäftigen wir ausschließlich ausgebildetes Fachpersonal.
                    </p>
                    <p>
                        Egal ob es sich um einen Notfall mitten in der Nacht oder um eine geplante Sanierung handelt:
                        Wir behandeln jeden Auftrag mit der gleichen Sorgfalt und Professionalität.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                    {['Meisterbetrieb', 'Wiener Traditionsbetrieb', '24h Erreichbarkeit', 'Top geschulte Mitarbeiter'].map(item => (
                        <div key={item} className="flex items-center text-brand-dark font-semibold">
                            <CheckCircle2 className="text-brand-yellow mr-2 w-5 h-5" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    src={COMPANY.firmenlogo3DUrl} 
                    alt="Team bei der Arbeit" 
                    className="w-full max-w-md md:max-w-lg h-auto object-contain opacity-80" 
                />
            </div>
        </div>
      </div>

      {/*<WhyUs />*/}
    </div>
  );
}
