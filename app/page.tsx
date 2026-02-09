import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import { readdir } from 'fs/promises';
import { extname, join } from 'path';

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
      <Services />
      <WhyUs initialImages={images} />
      {/*<Contact />*/}
    </>
  );
}
