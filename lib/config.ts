// This file acts as the single source of truth for company details.
// It prioritizes environment variables, falling back to the defaults (ElektroVienna data).

export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Elektro Volt KG",
  nameWithoutKG: process.env.NEXT_PUBLIC_COMPANY_NAME_WITHOUT_KG || "Elektro Volt",
  slogan: process.env.NEXT_PUBLIC_COMPANY_SLOGAN || "Ihr zuverlässiger Partner für Elektroinstallationen",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "0699 173 70101",
  phoneDisplay: process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "0699 173 70101",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "tncy_isler@hotmail.com", //"office@elektrovolt.co.at",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "1120 Wien",
  addressFull: process.env.NEXT_PUBLIC_COMPANY_ADDRESS_FULL || "Pirkebnerstrasse 1-3/1/2, 1120 Wien",
  uidNummer: process.env.NEXT_PUBLIC_COMPANY_UID_NUMMER || "ATU12345678 (Muster)",
  firmenbuchNummer: process.env.NEXT_PUBLIC_COMPANY_FIRMA_NUMMER || "FN 123456x (Muster)",
  gerichtsstand: process.env.NEXT_PUBLIC_COMPANY_GERICHTSSTAND || "Wien",
  wkoMitglied: process.env.NEXT_PUBLIC_COMPANY_WKO_MEMBER || "Ja",

  
addressLine: 'Pirkebnerstrasse 1-3/1/2, 1120 Wien',
serviceArea: 'Einsatzgebiet ganz Wien',


  // External Links
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Pirkebnerstrasse 1-3/1/2, 1120 Wien")}`,
  // Build whatsappLink from env NEXT_PUBLIC_WHATSAPP_NUMBER (digits only). Falls nicht gesetzt, Fallback zur bekannten Nummer.
  whatsappLink:
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/\D/g, '')}`
      : `https://wa.me/4369917370101`),
  facebookLink: "https://www.facebook.com/elektrovolt",
  

  // Assets (Using placeholders that can be swapped via ENV)
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || "/picture/headerLogo3D_100x100.png", // If null, uses text logo
  firmenlogoUrl: process.env.NEXT_PUBLIC_FIRMENLOGO_URL || "/picture/image.png",
  licht_ins_dunkel_Url: process.env.NEXT_PUBLIC_LICHT_INS_DUNKEL_URL || "/picture/wir_bringen_Licht_ins_dunkel.png",
  firmenlogo3DUrl: process.env.NEXT_PUBLIC_FIRMENLOGO_3D_URL || "/picture/firmenlogo3D.png",
  teamsUrl: process.env.NEXT_PUBLIC_TEAMS_URL || "/picture/firmenlogo3D.png",
  heroImage: process.env.NEXT_PUBLIC_HERO_IMAGE || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  mapImage: process.env.NEXT_PUBLIC_MAP_IMAGE || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.7192643!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079f54bef725%3A0x1234567890!2sWien!5e0!3m2!1sde!2sat!4v1234567890",
};

export const ROUTES = {
  home: "/",
  services: "/leistungen",
  about: "/ueber-uns",
  contact: "/kontakt",
  impressum: "/impressum",
  datenschutz: "/datenschutz"
};
