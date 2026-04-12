import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import ProblemsAndSolution from '@/components/ProblemsAndSolution';
import { readdir } from 'fs/promises';
import { extname, join } from 'path';

export const metadata: Metadata = {
  title: 'Elektriker Notdienst | Stromausfall & Strom Notfall in Wien',
  description: 'Kein Strom, Kurzschluss oder FI-Problem? Elektriker Notdienst 24/7 bei Stromausfall und Strom Notfall. Schnell vor Ort in Wien, kompetent und fair. Jetzt anrufen: 0699 173 70101',
  keywords: [
    'Elektriker Wien',
    'Notdienst Elektriker',
    'Elektriker Notdienst',
    '24h Elektriker Wien',
    '24h Elektriker',
    'Elektroinstallation',
    'E-Befund Wien',
    'Stromausfall Wien',
    'Stromausfall',
    'Stromausfall Notdienst',
    'Strom Notfall Wien',
    'Strom Notfall',
    'kein Strom Wien',
    'kein Strom',
    'Elektrischer Notfall Wien',
  ],
  openGraph: {
    title: 'Elektriker Notdienst | Stromausfall & Strom Notfall',
    description: 'Stromausfall oder Strom Notfall? Unser 24/7 Notdienst hilft sofort und ist in Wien schnell vor Ort.',
  },
};

async function getWorkImages() {
  try {
    const pictureDir = join(process.cwd(), 'public', 'workPicture');
    const files = await readdir(pictureDir);
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
    return files
      .filter((file) => imageExtensions.includes(extname(file).toLowerCase()))
      .map((file) => `/workPicture/${file}`);
  } catch (error) {
    console.error('Fehler beim Lesen der Bilder:', error);
    return [] as string[];
  }
}

export default async function HomePage() {
  const images = await getWorkImages();
  return (
    <>
      <Hero />
      <ProblemsAndSolution />
      <WhyUs initialImages={images} />
      <Services showLearnMore={true} />
      {/*<Contact />*/}
    </>
  );
}
