import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const cookieValue = encodeURIComponent(JSON.stringify(body));
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    const headers = new Headers();
    headers.append('Set-Cookie', `cookie_consent=${cookieValue}; Path=/; Max-Age=${maxAge}; SameSite=Lax`);
    return new NextResponse(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (e) {
    return new NextResponse(JSON.stringify({ ok: false }), { status: 400 });
  }
}
