import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  role: z.enum(["创业者","投资人","合作伙伴"]),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5).max(2000)
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Caploop <no-reply@caploop.example>",
      to: "info@caploop.lu",
      subject: `[Caploop] ${data.role} 来访：${data.name}`,
      replyTo: data.email, // ✅ 正确字段名
      text: `来自：${data.name} <${data.email}>\n角色：${data.role}\n\n${data.message}`
    });

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
