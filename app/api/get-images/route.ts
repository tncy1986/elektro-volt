import { readdirSync } from 'fs';
import { join, extname } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pictureDir = join(process.cwd(), 'public', 'workPicture');
    const files = readdirSync(pictureDir);
    
    // Filter nur Bilddateien (extname verwenden, damit z.B. '.jpeg' korrekt erkannt wird)
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
    const images = files
      .filter((file) => imageExtensions.includes(extname(file).toLowerCase()))
      .map((file) => `/workPicture/${file}`);
    
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: 'Fehler beim Lesen der Bilder' },
      { status: 500 }
    );
  }
}
