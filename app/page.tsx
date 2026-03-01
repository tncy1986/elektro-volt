import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import ProblemsAndSolution from '@/components/ProblemsAndSolution';
import { readdir } from 'fs/promises';
import { extname, join } from 'path';

export const metadata: Metadata = {
  title: 'Elektriker Wien - 24/7 Notdienst | Schnell & Zuverlässig',
  description: 'Elektriker Wien: 24/7 Notdienst, Elektroinstallationen, E-Befund & Störungsbehebung. Schnell, kompetent, faire Preise. Jetzt anrufen: 0699 173 70101',
  keywords: ['Elektriker Wien', 'Notdienst Elektriker', '24h Elektriker Wien', 'Elektroinstallation', 'E-Befund Wien'],
  openGraph: {
    title: 'Elektriker Wien - 24/7 Notdienst | Schnell & Zuverlässig',
    description: 'Ihr zuverlässiger Elektriker in Wien. 24/7 Notdienst für alle Bezirke.',
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
