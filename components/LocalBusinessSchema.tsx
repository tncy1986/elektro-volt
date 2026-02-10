import { COMPANY } from '@/lib/config';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://elektrovolt.vercel.app'}/#organization`,
    "name": COMPANY.name,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://elektrovolt.vercel.app'}${COMPANY.logoUrl}`,
    "description": COMPANY.slogan,
    "telephone": COMPANY.phone,
    "email": COMPANY.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pirkebnerstrasse 1-3/1/2",
      "addressLocality": "Wien",
      "postalCode": "1120",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.2082,
      "longitude": 16.3738
    },
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://elektrovolt.vercel.app',
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Wien"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elektriker-Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektroinstallationen",
            "description": "Professionelle Elektroinstallationen für Wohn- und Gewerbeobjekte"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Notdienst",
            "description": "Schneller Elektro-Notdienst rund um die Uhr in Wien"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Befund & Prüfung",
            "description": "Elektrische Befundung und Sicherheitsprüfung nach österreichischen Normen"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
