# 📧 E-Mail-Versand einrichten mit Resend

## Schnellstart (empfohlen)

Resend ist ein moderner E-Mail-Service, speziell entwickelt für Next.js und Vercel.

### Vorteile:
✅ Keine SMTP-Konfiguration nötig  
✅ Funktioniert perfekt mit Vercel Serverless Functions  
✅ 100 E-Mails/Tag kostenlos  
✅ Sehr zuverlässig  

---

## Schritt 1: Resend Account erstellen

1. Gehe zu: **https://resend.com**
2. Klicke auf **"Sign Up"**
3. Registriere dich mit deiner E-Mail

---

## Schritt 2: API Key erstellen

1. Nach dem Login, gehe zu **"API Keys"** (im linken Menü)
2. Klicke auf **"Create API Key"**
3. Gib einen Namen ein: z.B. `elektro-volt-production`
4. Kopiere den API Key (beginnt mit `re_...`)
   - ⚠️ **Wichtig:** Speichere ihn sicher - er wird nur einmal angezeigt!

---

## Schritt 3: Umgebungsvariablen in Vercel setzen

1. Gehe zu deinem Vercel Projekt
2. **Settings** → **Environment Variables**
3. Füge folgende Variable hinzu:

   | Name | Wert | Environment |
   |------|------|-------------|
   | `RESEND_API_KEY` | `re_xxxxxxxxxxxxx` | Production, Preview, Development |
   | `CONTACT_TO` | `deine-email@beispiel.at` | Production, Preview, Development |

4. Klicke auf **"Save"**

---

## Schritt 4: Deployment

1. Gehe zu **Deployments**
2. Klicke auf **"Redeploy"** (bei letztem erfolgreichen Deployment)
3. Fertig! 🎉

---

## (Optional) Eigene Domain verifizieren

**Für Tests** kannst du die Standard-Adresse `onboarding@resend.dev` nutzen.

**Für Production** solltest du deine eigene Domain verifizieren:

1. In Resend: Gehe zu **"Domains"**
2. Klicke auf **"Add Domain"**
3. Gib deine Domain ein: z.B. `elektro-volt.at`
4. Füge die angezeigten DNS-Records bei deinem Domain-Provider hinzu
5. Warte auf Verifizierung (ca. 5-10 Minuten)
6. In Vercel: Setze die Variable `RESEND_FROM`:
   ```
   RESEND_FROM=kontakt@elektro-volt.at
   ```

---

## Test

1. Besuche deine Website: https://elektrovolt.vercel.app/kontakt
2. Fülle das Kontaktformular aus
3. Sende ab
4. Prüfe dein E-Mail-Postfach (CONTACT_TO)

---

## Troubleshooting

### E-Mail kommt nicht an?
- Prüfe den **Spam-Ordner**
- Prüfe in Resend Dashboard → **"Logs"** ob die E-Mail gesendet wurde
- Prüfe in Vercel → Deployment → **"Functions"** → `/api/contact` → Logs

### Fehler: "API key invalid"?
- Stelle sicher, dass der API Key korrekt kopiert wurde
- Keine Leerzeichen vor/nach dem Key
- In Vercel: Redeploy nach Änderung der Environment Variables

---

## Kosten

**Kostenlos:**
- 100 E-Mails pro Tag
- 3.000 E-Mails pro Monat

**Bei mehr Bedarf:**
- $20/Monat für 50.000 E-Mails
- Siehe: https://resend.com/pricing
