import { Zap, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { COMPANY, ROUTES } from '@/lib/config';
import services from '@/lib/services';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-8">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href={ROUTES.home} className="flex items-center space-x-2 mb-4">
              {COMPANY.logoUrl ? (
                <img src={COMPANY.logoUrl} alt={COMPANY.name} className="h-10" />
              ) : (
                <div className="bg-brand-yellow p-1.5 rounded">
                  <Zap className="text-brand-dark w-5 h-5 fill-current" />
                </div>
              )}
              <span className="text-lg font-bold text-white">{COMPANY.name}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              {COMPANY.slogan}. Ihr kompetenter Partner für Elektroinstallationen und Störungsdienst in Wien.
            </p>
            <div className="flex items-center gap-2 text-brand-yellow font-bold">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               24/7 Notdienst bereit
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`${ROUTES.services}#${s.slug}`} className="hover:text-brand-yellow transition">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.impressum} className="hover:text-brand-yellow transition">Impressum</Link></li>
              <li><Link href={ROUTES.datenschutz} className="hover:text-brand-yellow transition">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white transition">{COMPANY.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>{COMPANY.addressFull}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
