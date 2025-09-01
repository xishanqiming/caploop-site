export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const preferredRegion = 'auto';

import { z } from 'zod';

const schema = z.object({
  role: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (ch) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]!)
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing RESEND_API_KEY' }),
        { status: 500, headers: { 'content-type': 'application/json' } }
      );
    }

    const payload = {
      from: 'Caploop <no-reply@caploop.org>',          // ASCII，避免 Workers ByteString 限制
      to: ['info@caploop.lu'],
      subject: `New Contact · ${data.role} · ${data.name}`,
      reply_to: data.email,
      html: `
        <h3>New Contact</h3>
        <p><b>Role:</b> ${escapeHtml(data.role)}</p>
        <p><b>Name:</b> ${escapeHtml(data.name)}</p>
        <p><b>Email:</b> ${escapeHtml(data.email)}</p>
        <p><b>Message:</b><br/>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
      `,
    };

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const detail = await r.text();
      return new Response(
        JSON.stringify({ ok: false, error: 'Resend error', detail }),
        { status: 502, headers: { 'content-type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
}
