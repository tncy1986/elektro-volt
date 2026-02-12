"use client";
import { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle2, ArrowRight, Mail, AlertCircle, X } from 'lucide-react';
import Link from 'next/link';
import { COMPANY, ROUTES } from '@/lib/config';

interface MessageState {
  type: 'success' | 'error' | null;
  text: string;
}

const Hero = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<MessageState>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload: Record<string, string> = {};
      fd.forEach((v, k) => (payload[k] = String(v)));

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        form.reset();
        setMessage({ type: 'success', text: 'Ihre Anfrage wurde erfolgreich versendet! Wir melden uns schnellstmöglich bei Ihnen.' });
      } else {
        const data = await res.json().catch(() => ({}));
        const errorText = (data && data.error) || 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es später.';
        setMessage({ type: 'error', text: errorText });
      }
    } catch (err) {
      console.error('Submit error', err);
      setMessage({ type: 'error', text: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es später.' });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
    <section className="relative bg-brand-dark text-white pt-8 pb-10 overflow-x-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src={COMPANY.heroImage}
          alt=""
          className="w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-0">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Text Content */}
          <div className="space-y-5 text-center md:text-left">
            <div className="inline-flex items-center bg-brand-yellow/10 text-brand-yellow px-3 py-1 rounded border border-brand-yellow/20 mb-1">
              <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-2 animate-pulse" />
              <span className="font-semibold uppercase tracking-wide text-[11px]">24h Notdienst Wien</span>
            </div>

            <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] md:text-5xl font-extrabold tracking-tight leading-tight">
              Wir bringen <span className="text-brand-yellow">Licht</span> ins Dunkel.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-prose mx-auto md:mx-0 font-light">
              {COMPANY.slogan}. Schnell, kompetent und zu fairen Preisen. In 20–40 Minuten bei Ihnen vor Ort.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 pt-4">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark text-base font-bold py-3 px-4 rounded-md shadow-[0_0_20px_rgba(251,191,36,0.25)] transition flex items-center justify-center gap-2"
                aria-label={`Telefon anrufen ${COMPANY.phoneDisplay}`}
              >
                {/*<Phone className="w-5 h-5 fill-current" />*/}
                <Phone className="w-5 h-5" />
                {COMPANY.phoneDisplay}
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark text-base font-bold py-3 px-4 rounded-md shadow-[0_0_20px_rgba(251,191,36,0.25)] transition flex items-center justify-center gap-2"
                aria-label={`E-Mail senden an ${COMPANY.email}`}
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">E-Mail senden an </span>
                {COMPANY.email}
              </a>

              {/* 
              <Link
                href={ROUTES.contact}
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-slate-600 text-white font-semibold py-3 px-4 rounded-md transition flex items-center justify-center gap-2"
              >
                Angebot anfordern <ArrowRight className="w-4 h-4" />
              </Link>
              */}
              
            </div>

            <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wide">
              <div className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-yellow" />
                24/7 Erreichbar
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-yellow" />
                Wien & Umgebung
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-yellow" />
                Meisterbetrieb
              </div>
            </div>
            
            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wide">
              {/*Standort */}
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

              {/* Google Maps
              <div className="mt-1 w-full h-52 rounded overflow-hidden shadow-inner">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.7!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d!2s${encodeURIComponent(COMPANY.addressFull)}!5e0!3m2!1sde!2sat!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              */}

            </div>
          
          </div>

          {/* Logo / Visual 
          <div className="md:justify-self-end">
            <img
              src={COMPANY.firmenlogoUrl}
              alt="Firmenlogo"
              className="w-[220px] sm:w-[260px] md:w-[320px] max-w-full mx-auto md:mx-0 h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          */}
          
          {/* Anfrage-Block (Formspree + HTML5-Validation) */}
          <div className="md:justify-self-end w-full">
            <div className="bg-black/55 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] max-w-md ml-auto">

              <h3 className="text-xl font-bold text-white mb-1">Jetzt Anfrage senden oder direkt anrufen</h3>
              <p className="text-sm text-slate-300 mb-4">
                Wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>

              <form className="space-y-3" noValidate onSubmit={handleSubmit}>
                {/* Optional: Redirect hier setzen (oder im Formspree-Dashboard) */}
                <input type="hidden" name="_redirect" value="/danke" />
                <input type="hidden" name="_subject" value="Neue Anfrage über die Website (Hero)" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Ihr Name"
                    title="Bitte Ihren Namen mit mindestens 2 Zeichen eingeben."
                    className="w-full pl-3 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-slate-400
                              focus:outline-none focus:ring-2 focus:ring-brand-yellow/50
                              invalid:border-rose-400 invalid:text-rose-50"
                  />
                  <p className="mt-1 text-xs text-slate-400">Pflichtfeld</p>
                </div>

                {/* E-Mail */}
                <div>
                  <label htmlFor="email" className="sr-only">E‑Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Ihre E‑Mail"
                    title="Bitte eine gültige E‑Mail-Adresse eingeben (z. B. name@beispiel.at)."
                    className="w-full pl-3 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-slate-400
                              focus:outline-none focus:ring-2 focus:ring-brand-yellow/50
                              invalid:border-rose-400 invalid:text-rose-50"
                  />
                  <p className="mt-1 text-xs text-slate-400">Pflichtfeld</p>
                </div>

                {/* Telefon (optional, aber validiert wenn ausgefüllt) */}
                <div>
                  <label htmlFor="phone" className="sr-only">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Telefon (optional)"
                    pattern="^\+?[0-9 ()\/\-]{6,}$"
                    title="Bitte eine gültige Telefonnummer eingeben (Ziffern, Leerzeichen, +, /, - sind erlaubt)."
                    className="w-full pl-3 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-slate-400
                              focus:outline-none focus:ring-2 focus:ring-brand-yellow/50
                              invalid:border-rose-400 invalid:text-rose-50"
                  />
                </div>

                {/* Nachricht */}
                <div>
                  <label htmlFor="message" className="sr-only">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    placeholder="Kurz beschreiben, wobei wir helfen können…"
                    title="Bitte Ihre Nachricht mit mindestens 10 Zeichen eingeben."
                    className="w-full pl-3 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-slate-400
                              focus:outline-none focus:ring-2 focus:ring-brand-yellow/50
                              invalid:border-rose-400 invalid:text-rose-50"
                  />
                  <p className="mt-1 text-xs text-slate-400">Pflichtfeld</p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="w-full bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold py-3 px-4 rounded-md shadow-[0_0_20px_rgba(251,191,36,0.25)] transition disabled:opacity-60"
                >
                  {submitting ? 'Sende...' : 'Absenden'}
                </button>
              </form>

              <div className="mt-4 text-center">
                {/*<p className="text-xs text-slate-400">Oder direkt anrufen</p>*/}
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 mt-1 text-brand-yellow font-semibold"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
    {message.type && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60" onClick={() => setMessage({ type: null, text: '' })} />
        <div className={`relative z-10 max-w-md w-full p-6 rounded-lg border shadow-2xl backdrop-blur-sm ${
          message.type === 'success'
            ? 'bg-green-950/80 border-green-500/30'
            : 'bg-red-950/80 border-red-500/30'
        }`}>
          <div className="flex items-start gap-4">
            {message.type === 'success' ? (
              <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <h2 className={`text-xl font-extrabold mb-2 ${
                message.type === 'success' ? 'text-green-100' : 'text-red-100'
              }`}>
                {message.type === 'success' ? 'Danke für Ihre Anfrage' : 'Fehler beim Versand'}
              </h2>
              <p className={`text-sm mb-4 ${
                message.type === 'success' ? 'text-green-200' : 'text-red-200'
              }`}>
                {message.text}
              </p>
            </div>
            <button
              onClick={() => setMessage({ type: null, text: '' })}
              className="text-slate-400 hover:text-white transition"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => setMessage({ type: null, text: '' })}
            className={`w-full mt-4 font-semibold py-2 px-4 rounded transition ${
              message.type === 'success'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Schließen
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default Hero;