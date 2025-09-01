import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  role: "创业者" | "投资人" | "合作伙伴";
  name: string;
  email: string;
  message: string;
};

const hasKey = !!process.env.RESEND_API_KEY && /^[\x00-\x7F]+$/.test(process.env.RESEND_API_KEY!);
const resend = hasKey ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    // 开发兜底：无 KEY 时，直接假装成功（便于你现在演示）
    if (!resend) {
      return NextResponse.json({ ok: true, mocked: true });
    }

    // 真发信（所有 header 字段严格 ASCII）
    const from = process.env.CONTACT_FROM || "no-reply@caploop.lu";
    const to = process.env.CONTACT_TO || "info@caploop.lu";

    await resend.emails.send({
      from,                       // ASCII
      to,                         // ASCII
      subject: `[Caploop] ${data.role} 来访: ${data.name}`,  // 允许中文在 subject
      // 不使用 reply_to，避免 SDK 类型差异；把对方邮箱写进正文
      text: `来自: ${data.name} <${data.email}>\n角色: ${data.role}\n\n${data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    const msg = e?.message ?? "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
