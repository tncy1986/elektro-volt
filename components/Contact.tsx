import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/config';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Kontaktieren Sie uns</h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-sm text-slate-600">
            Wir sind 24/7 für Sie erreichbar. Rufen Sie uns an oder schreiben Sie uns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <div className="bg-slate-50 p-6 rounded border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-brand-yellow text-brand-dark rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-lg font-bold mb-2">Telefon</h3>
            <p className="text-slate-600 mb-2 text-sm">Notdienst rund um die Uhr</p>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-base font-bold text-slate-900 hover:text-brand-yellowHover">
              {COMPANY.phoneDisplay}
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-brand-dark text-brand-yellow rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">E-Mail</h3>
            <p className="text-slate-600 mb-2 text-sm">Für schriftliche Anfragen</p>
            <a href={`mailto:${COMPANY.email}`} className="text-base font-bold text-slate-900 hover:text-brand-yellowHover">
              {COMPANY.email}
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-brand-dark text-white rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Standort</h3>
            <p className="text-slate-600 mb-2 text-sm">Einsatzgebiet ganz Wien</p>
            <span className="text-base font-bold text-slate-900">
              {COMPANY.addressFull}
            </span>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 w-full h-80 rounded overflow-hidden shadow-inner">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.7!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d!2s${encodeURIComponent(COMPANY.addressFull)}!5e0!3m2!1sde!2sat!4v1234567890`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
