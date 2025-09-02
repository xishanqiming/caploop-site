export const runtime = 'edge';           // 让 CF Pages / next-on-pages 识别为 Edge Runtime
export const dynamic = 'force-dynamic';  // 避免被静态化

import type { NextRequest } from 'next/server';

// 极简校验，避免引入任何第三方（Zod 也没问题，但为稳妥这里改为手写）
function isNonEmptyString(x: unknown): x is string {
  return typeof x === 'string' && x.trim().length > 0;
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const role    = (json?.role ?? '') as string;
    const name    = (json?.name ?? '') as string;
    const email   = (json?.email ?? '') as string;
    const message = (json?.message ?? '') as string;

    // 简单校验（防止把 Node-only 校验库带进来）
    if (!isNonEmptyString(role) || !isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
      return new Response(JSON.stringify({ ok:false, error:'Invalid payload' }), {
        status: 400,
        headers: { 'content-type': 'application/json' }
      });
    }

    // 使用 Resend 的 REST API（Edge 兼容）
    // 注意：需要在 Cloudflare Pages > Settings > Environment Variables 配置 RESEND_API_KEY
    const apiKey = (process.env.RESEND_API_KEY ?? '').toString();
    if (!apiKey) {
      return new Response(JSON.stringify({ ok:false, error:'RESEND_API_KEY not set' }), {
        status: 500,
        headers: { 'content-type': 'application/json' }
      });
    }

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Caploop <noreply@caploop.org>',  // 用你在 Resend 验证过的发件域名/地址
        to: ['info@caploop.lu'],
        subject: `[Caploop Contact] ${role} - ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Role: ${role}`,
          `Message: ${message}`
        ].join('\n'),
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return new Response(JSON.stringify({ ok:false, error: err }), {
        status: 502,
        headers: { 'content-type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ ok:true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return new Response(JSON.stringify({ ok:false, error: msg }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
}
