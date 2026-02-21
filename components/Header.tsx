'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap, CheckCircle2, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { COMPANY, ROUTES } from '@/lib/config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotdiensteOpen, setIsNotdiensteOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Notdienste-Dropdown schließen, wenn die Seite navigiert
  useEffect(() => {
    setIsNotdiensteOpen(false);
  }, [pathname]);

  const emergencyLinks = [
    { href: '/kurzschluss-nachts-wien', label: 'Kurzschluss nachts Wien' },
    { href: '/fi-schalter-faellt-raus-wien', label: 'FI Schalter fällt raus Wien' },
    { href: '/elektriker-wien', label: 'Elektriker Wien' },
    { href: '/steckdose-reparieren-wien', label: 'Steckdose reparieren Wien' },
    { href: '/e-befund-wien-kosten', label: 'E-Befund Wien Kosten' },
  ];

  const isEmergencyActive = emergencyLinks.some((link) => pathname === link.href);

  const isActive = (path: string) =>
    pathname === path
      ? 'text-brand-yellow'
      : 'text-white hover:text-brand-yellow';

  const mobileLinkClass =
    'py-3 border-b border-slate-800 hover:bg-slate-800 hover:text-brand-yellow transition';

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-brand-dark text-white shadow-md border-b border-slate-800 supports-[backdrop-filter]:bg-brand-dark/90 backdrop-blur">
      {/* Fixe Höhe statt py-* */}
      <div className="container mx-auto px-4 h-16 md:h-[4.5rem] lg:h-20 flex items-center gap-4">
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="flex items-center gap-3 min-w-[140px] shrink-0 group"
          aria-label="Startseite"
        >
          {COMPANY.logoUrl ? (
            <>
              <Image
                src={COMPANY.logoUrl}
                alt={COMPANY.name}
                width={256}               // intrinsische Größe (Quelle darf größer sein)
                height={80}
                priority                   // Logo = above-the-fold
                sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, 160px"
                className="
                  block w-auto object-contain
                  h-full                   /* füllt die Höhe des flex-Containers */
                  max-h-[58px]            /* 58px für Handy */
                  md:max-h-[66px]         /* 66px für Tablet */
                  lg:max-h-[74px]         /* 74px für Desktop */
                "
              />
              
              <div className="flex flex-col">
                <span className="block text-sm md:text-lg font-extrabold leading-none tracking-tight">
                  {COMPANY.name.toUpperCase()}
                </span>
                {/*
                <div className="inline-flex items-center text-white px-3 py-1 rounded text-[10px] font-bold tracking-wide mt-1 w-fit shadow-sm">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                  Meisterbetrieb
                </div>*/} 
              <div className="flex items-center mt-1">
                <CheckCircle2 className="w-1.5 h-1.5 sm:w-3 sm:h-3 mr-1.5 text-brand-yellow" />
                <span className="text-[9px] sm:text-[10px]">{COMPANY.meisterBetrieb.toUpperCase()}</span>
              </div>
            </div>         

            </>
          ) : (
            <>
              <div className="bg-brand-yellow p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Zap className="text-brand-dark w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="block text-xl font-extrabold leading-none tracking-tight">
                  {COMPANY.name.toUpperCase()}
                </span>
                <div className="inline-flex items-center text-white px-3 py-1 rounded text-[10px] font-bold tracking-wide mt-2 w-fit shadow-sm">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
                  Meisterbetrieb
                </div>
              </div>
            </>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-x-8 font-semibold text-sm uppercase tracking-wide">
          <div className="relative">
            <Link href={ROUTES.home} aria-current={pathname === ROUTES.home ? 'page' : undefined} className={`${isActive(ROUTES.home)} transition-colors`}>Startseite</Link>
            <span className={`absolute left-1/2 -bottom-3 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out ${pathname === ROUTES.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <svg className="w-4 h-4 text-brand-yellow transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.25 7.5L10 12.25 14.75 7.5 16 8.75 10 14.75 4 8.75 5.25 7.5z" />
              </svg>
            </span>
          </div>

          <div className="relative group" onMouseLeave={() => setIsNotdiensteOpen(false)}>
            <button
              onClick={() => setIsNotdiensteOpen(!isNotdiensteOpen)}
              className={`${isEmergencyActive ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'} transition-colors inline-flex items-center gap-1 font-semibold text-sm uppercase tracking-wide`}
              aria-haspopup="true"
              aria-expanded={isNotdiensteOpen}
            >
              Notdienste
              <ChevronDown className="w-4 h-4" />
            </button>
            <span className={`absolute left-1/2 -bottom-3 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out ${isEmergencyActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <svg className="w-4 h-4 text-brand-yellow transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.25 7.5L10 12.25 14.75 7.5 16 8.75 10 14.75 4 8.75 5.25 7.5z" />
              </svg>
            </span>

            <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 ${isNotdiensteOpen ? 'block' : 'hidden'}`}>
              <div className="w-72 rounded-lg border border-slate-700 bg-slate-900/95 backdrop-blur shadow-xl p-2">
                {emergencyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsNotdiensteOpen(false)}
                    className={`block px-3 py-2 rounded text-left normal-case tracking-normal ${pathname === link.href ? 'bg-slate-800 text-brand-yellow' : 'text-white hover:bg-slate-800 hover:text-brand-yellow'} transition`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <Link href={ROUTES.services} aria-current={pathname === ROUTES.services ? 'page' : undefined} className={`${isActive(ROUTES.services)} transition-colors`}>Leistungen</Link>
            <span className={`absolute left-1/2 -bottom-3 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out ${pathname === ROUTES.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <svg className="w-4 h-4 text-brand-yellow transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.25 7.5L10 12.25 14.75 7.5 16 8.75 10 14.75 4 8.75 5.25 7.5z" />
              </svg>
            </span>
          </div>

          <div className="relative">
            <Link href={ROUTES.about} aria-current={pathname === ROUTES.about ? 'page' : undefined} className={`${isActive(ROUTES.about)} transition-colors`}>Über Uns</Link>
            <span className={`absolute left-1/2 -bottom-3 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out ${pathname === ROUTES.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <svg className="w-4 h-4 text-brand-yellow transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.25 7.5L10 12.25 14.75 7.5 16 8.75 10 14.75 4 8.75 5.25 7.5z" />
              </svg>
            </span>
          </div>

          <div className="relative">
            <Link href={ROUTES.contact} aria-current={pathname === ROUTES.contact ? 'page' : undefined} className={`${isActive(ROUTES.contact)} transition-colors`}>Kontakt</Link>
            <span className={`absolute left-1/2 -bottom-3 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out ${pathname === ROUTES.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
              <svg className="w-4 h-4 text-brand-yellow transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.25 7.5L10 12.25 14.75 7.5 16 8.75 10 14.75 4 8.75 5.25 7.5z" />
              </svg>
            </span>
          </div>
        </nav>

        {/* CTA + Social (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#22c45e] flex items-center justify-center transition-all hover:scale-110 shadow-lg ring-1 ring-white/20 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-white text-xl leading-none" />
          </a>

          {/* 
          <a
            href={COMPANY.facebookLink}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110 shadow-lg ring-1 ring-white/20 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          */}

          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="flex items-center bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark px-5 py-2.5 rounded font-bold transition shadow-lg shadow-brand-yellow/20"
          >
            <Phone className="w-5 h-5 mr-2 fill-current" />
            {COMPANY.phoneDisplay}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white ml-auto" onClick={toggleMenu} aria-label="Menü umschalten">
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 text-white border-t border-slate-700 absolute w-full shadow-xl">
          <nav className="flex flex-col text-center font-medium">
            <Link href={ROUTES.home} onClick={toggleMenu} className={mobileLinkClass}>Startseite</Link>
            <div className="text-left px-4 py-3 border-b border-slate-800">
              <p className="text-brand-yellow font-semibold uppercase text-xs tracking-wider mb-2">Notdienste</p>
              <div className="flex flex-col">
                {emergencyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`py-2 text-sm ${pathname === link.href ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'} transition`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href={ROUTES.services} onClick={toggleMenu} className={mobileLinkClass}>Leistungen</Link>
            <Link href={ROUTES.about} onClick={toggleMenu} className={mobileLinkClass}>Über Uns</Link>
            <Link href={ROUTES.contact} onClick={toggleMenu} className={mobileLinkClass}>Kontakt</Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="bg-brand-yellow text-brand-dark py-4 font-bold flex justify-center items-center mt-2"
            >
              <Phone className="w-5 h-5 mr-2 fill-current" />
              Notdienst: {COMPANY.phoneDisplay}
            </a>
            <div className="flex justify-center gap-6 py-4 border-t border-slate-800">
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#22c45e] flex items-center justify-center transition-all hover:scale-110 shadow-lg ring-1 ring-white/20 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-white text-xl leading-none" />
              </a>

              {/*
              <a
                href={COMPANY.facebookLink}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110 shadow-lg ring-1 ring-white/20 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              */}

            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;