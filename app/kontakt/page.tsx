import { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Kontakt - Elektriker Wien | Jetzt Anrufen oder Nachricht senden',
  description: 'Kontaktieren Sie Elektro Volt Wien: 24/7 Notdienst unter 0699 173 70101. Schnelle Hilfe bei elektrischen Problemen in ganz Wien.',
  keywords: ['Elektriker Wien Kontakt', 'Notdienst anrufen', 'Elektriker Anfrage Wien'],
  openGraph: {
    title: 'Kontakt | Elektriker Wien - 24/7 Erreichbar',
    description: 'Rufen Sie uns an: 0699 173 70101 oder senden Sie eine Nachricht.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <Contact />
    </div>
  );
}
