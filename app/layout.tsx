import type { Metadata } from "next";
// Removed Google font import to avoid fetch during build in offline environments
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/config";
import CookieBanner from "@/components/CookieBanner";


// Use system fonts via Tailwind `font-sans` (defined in tailwind config)

export const metadata: Metadata = {
  title: `${COMPANY.name} | Ihr Elektriker in Wien`,
  description: `${COMPANY.slogan}. 24/7 Notdienst in Wien. Schnell, kompetent und zu fairen Preisen.`,
  keywords: "Elektriker Wien, Notdienst, Elektroinstallation, E-Befund, Störungsdienst",
  authors: [{ name: COMPANY.name }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: `${COMPANY.name} | Ihr Elektriker in Wien`,
    description: `${COMPANY.slogan}. 24/7 Notdienst in Wien.`,
    type: "website",
    locale: "de_AT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />

        {/* Floating Action Button for Mobile */}
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
          className="fixed bottom-6 right-6 z-50 md:hidden bg-brand-yellow text-brand-dark p-4 rounded-full shadow-2xl animate-bounce border-2 border-brand-dark"
          aria-label="Notdienst anrufen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}


