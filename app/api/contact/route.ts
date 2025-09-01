export const runtime = 'edge'; // 必须：让 Cloudflare Pages 接受这个路由
export const dynamic = 'force-dynamic'; // 保证不被静态化

import { z } from 'zod';

const BodySchema = z.object({
  role: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = BodySchema.parse(json);

    // 使用 Resend REST API（Edge 兼容）
    // 参考：https://resend.com/docs/api-reference/emails/send-email
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY ?? ''}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Caploop <noreply@caploop.org>',   // 这里建议改成你在 Resend 上验证过的发件域名/地址
        to: ['info@caploop.lu'],                 // 接收邮箱
        subject: `[Caploop Contact] ${data.role} - ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Role: ${data.role}`,
          `Message: ${data.message}`,
        ].join('\n'),
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(JSON.stringify({ ok: false, error: errText }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
}
