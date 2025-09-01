import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

type ContactPayload = {
  name: string;
  email: string;
  role: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    // 基础校验
    if (!body?.email || !body?.name) {
      return NextResponse.json({ ok: false, error: "Missing name or email" }, { status: 400 });
    }

    // 如果没有配置邮件服务密钥，则直接“假发送”，保证构建/预览环境通过
    if (!resend) {
      return NextResponse.json({ ok: true, preview: true });
    }

    // 真的发送（你可按需调整收件人、模板）
    await resend.emails.send({
      from: "Caploop <noreply@caploop.org>",
      to: ["info@caploop.lu"],
      subject: `New Contact: ${body.name} (${body.role || "N/A"})`,
      text: `Email: ${body.email}\n\nMessage:\n${body.message || ""}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
