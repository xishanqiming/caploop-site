import { NextResponse } from "next/server";

export const runtime = "edge"; // 必须：Cloudflare Pages/next-on-pages 需要 Edge Runtime

type ContactPayload = {
  role?: string;
  name: string;
  email: string;
  message?: string;
};

function isValidEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactPayload;

    if (!data?.name || !data?.email) {
      return NextResponse.json(
        { ok: false, error: "Missing name or email" },
        { status: 400 }
      );
    }
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // ⚠️ Edge/Workers 对 header 的 ByteString 有严格限制，From 里不要放非 ASCII 字符
    const from = "Caploop <no-reply@caploop.org>";
    const to = ["info@caploop.lu"]; // 你的接收邮箱
    const subject = `Caploop Contact: ${data.name}${data.role ? ` (${data.role})` : ""}`;

    // 简单 HTML（避免非 ASCII header；内容里可以有中文）
    const html = `
      <div>
        <h3>新表单提交</h3>
        <p><strong>角色/身份:</strong> ${data.role ?? "-"}</p>
        <p><strong>姓名:</strong> ${data.name}</p>
        <p><strong>邮箱:</strong> ${data.email}</p>
        <p><strong>留言:</strong></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace">
${(data.message ?? "").replace(/[<>&]/g, s => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[s] as string))}
        </pre>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // 用 Resend 的 HTTP API（Edge 100% 兼容）
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,           // ASCII only
        to,             // 收件人数组
        subject,
        html,           // 邮件内容
        reply_to: data.email, // 允许你在邮箱里直接“回复”给用户
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `Email send failed: ${resp.status} ${errText}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json(
      { ok: false, error: (e as Error)?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
