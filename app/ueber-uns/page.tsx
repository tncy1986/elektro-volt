import WhyUs from '@/components/WhyUs';
import { COMPANY } from '@/lib/config';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Über {COMPANY.name}</h1>
           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
             Traditionelles Handwerk trifft auf moderne Technik. Seit vielen Jahren sind wir der vertrauensvolle Partner für Wien.<br />
             Wir verbinden Fachwissen mit persönlichem Service und begleiten von der Beratung über die Planung bis zur fachgerechten Umsetzung aller elektrotechnischen Arbeiten – zuverlässig, sauber und termingerecht.
           </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-4 pt-2 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Unser Anspruch: Sicherheit & Qualität</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
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
            <div className="overflow-hidden transition duration-500">
                <img src={COMPANY.teamsUrl} alt="Team bei der Arbeit" className="max-w-lg h-auto opacity-80" />
            </div>
        </div>
      </div>

      {/*<WhyUs />*/}
    </div>
  );
}
