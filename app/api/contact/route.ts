import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { COMPANY } from '@/lib/config';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, _gotcha, _subject } = body || {};

    if (_gotcha) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name ist erforderlich (mind. 2 Zeichen).' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E‑Mail-Adresse.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Nachricht ist zu kurz (mind. 10 Zeichen).' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'E-Mail-Versand ist nicht konfiguriert (SMTP-Daten fehlen).' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const toAddress = process.env.CONTACT_TO || COMPANY.email || smtpUser;
    const subject = _subject || 'Neue Anfrage über die Website';

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: toAddress,
      replyTo: email,
      subject,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : 'Telefon: -',
        '',
        'Nachricht:',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json({ error: 'Serverfehler beim Verarbeiten der Anfrage.' }, { status: 500 });
  }
}
