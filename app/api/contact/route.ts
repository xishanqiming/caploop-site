export const runtime = 'edge';            // ✅ 让 Cloudflare Pages 识别为 Edge 路由
export const dynamic = 'force-dynamic';   // 可选：避免被静态化

type ContactPayload = {
  role: 'founder' | 'investor' | 'partner' | 'other';
  name: string;
  email: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    // 简单校验
    if (!body?.name || !body?.email) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing name or email' }), {
        status: 400,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    // 从环境变量读取（Cloudflare Pages / Vercel 都支持）
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.RESEND_TO || 'info@caploop.lu';
    const from = process.env.RESEND_FROM || 'Caploop <noreply@caploop.org>';

    if (!apiKey) {
      // 构建或预览环境没配 key 时，直接吞掉但返回 200，避免构建失败
      console.warn('RESEND_API_KEY is not set, skipping email send.');
      return new Response(JSON.stringify({ ok: true, skipped: true }), {
        status: 200,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    // 发送邮件（Resend HTTP API）
    const subject = `【Caploop 联系表单】${body.role || '未知身份'} - ${body.name}`;
    const html = `
      <div>
        <h3>Caploop 联系表单</h3>
        <ul>
          <li><b>身份/角色</b>：${escapeHtml(body.role || '')}</li>
          <li><b>姓名</b>：${escapeHtml(body.name)}</li>
          <li><b>邮箱</b>：${escapeHtml(body.email)}</li>
        </ul>
        <p><b>留言</b>：</p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace;">${escapeHtml(body.message || '')}</pre>
      </div>
    `;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return new Response(JSON.stringify({ ok: false, error: 'Resend error', detail: text }), {
        status: 502,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    const data = await resp.json();
    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }
}

// —— Edge 环境下的最小 escape 实现，避免 HTML 注入 —— //
function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
