import { Zap, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { COMPANY, ROUTES } from '@/lib/config';
import services from '@/lib/services';

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-50 text-slate-900 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-8">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href={ROUTES.home} className="flex items-center space-x-2 mb-2">
              {COMPANY.logoUrl ? (
                <img src={COMPANY.logoUrl} alt={COMPANY.name} className="h-10" />
              ) : (
                <div className="bg-brand-yellow p-1.5 rounded">
                  <Zap className="text-brand-dark w-5 h-5 fill-current" />
                </div>
              )}
              <span className="text-base font-bold text-slate-900">{COMPANY.name}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-slate-900">
              {COMPANY.slogan}. <br />Ihr kompetenter Partner für Elektroinstallationen und Störungsdienst in Wien.
            </p>
            <div className="flex items-center gap-2 font-bold text-slate-900">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               {COMPANY.notDienstBereit} 
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase text-sm tracking-wider">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`${ROUTES.services}#${s.slug}`} className="text-slate-900 hover:text-slate-700 transition">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase text-sm tracking-wider">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.impressum} className="text-slate-900 hover:text-slate-700 transition">Impressum</Link></li>
              <li><Link href={ROUTES.datenschutz} className="text-slate-900 hover:text-slate-700 transition">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase text-sm tracking-wider">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-slate-900 hover:text-slate-700 transition">{COMPANY.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-slate-900 hover:text-slate-700 transition">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.addressLine)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                  {COMPANY.addressLine}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div className="bg-brand-dark text-slate-400 py-4 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="pt-2 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
