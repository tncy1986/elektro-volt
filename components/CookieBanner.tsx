"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __analytics_loaded?: boolean;
  }
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookieLocal(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;SameSite=Lax;expires=${d.toUTCString()}`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const c = getCookie("cookie_consent");
    if (c) {
      // cookie exists -> hide banner
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  async function persistServer(p: object) {
    try {
      await fetch('/api/cookie-preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      });
    } catch (e) {
      // ignore network errors; local cookie is fallback
      console.error('Persist cookie prefs failed', e);
    }
  }

  function acceptAll() {
    const preferences = { analytics: true };
    setCookieLocal('cookie_consent', JSON.stringify(preferences), 365);
    persistServer(preferences);
    setVisible(false);
    // optional: initialize analytics here
    loadAnalytics();
  }

  function rejectAll() {
    const preferences = { analytics: false };
    setCookieLocal('cookie_consent', JSON.stringify(preferences), 365);
    persistServer(preferences);
    setVisible(false);
  }

  function loadAnalytics() {
    if (typeof window === 'undefined') return;
    if (window.__analytics_loaded) return;
    const id = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXX';
    if (!id) return;
    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer!.push(...args); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id);
    window.__analytics_loaded = true;
  }

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" aria-hidden="true"></div>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[60rem] bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1 text-sm text-slate-700 leading-relaxed">
          Wir verwenden Cookies, um die Seite zu verbessern. Nicht-essenzielle Cookies werden nur mit Ihrer Zustimmung aktiviert. <a href="/datenschutz" className="underline">Datenschutzerklärung</a>
        </div>
        <div className="flex gap-4">
          <button onClick={rejectAll} className="px-5 py-3 rounded-md border">Nur notwendige</button>
          <button onClick={rejectAll} className="px-5 py-3 rounded-md border border-red-500 text-red-600">Ablehnen</button>
          <button onClick={acceptAll} className="px-5 py-3 rounded-md bg-emerald-600 text-white">Alle akzeptieren</button>
        </div>
      </div>
    </>
  );
}
