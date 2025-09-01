
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  role: z.string().optional(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
});

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = ContactSchema.parse(json);

    if (!process.env.RESEND_API_KEY) {
      // 本地/未配置密钥时，直接返回成功；避免 500 阻断
      return NextResponse.json({ ok: true, dryRun: true });
    }

    await resend.emails.send({
      from: "Caploop <noreply@caploop.org>",
      to: ["info@caploop.lu"],
      subject: `Contact · ${data.role ?? "Unknown"} · ${data.name}`,
      text: `From: ${data.name} <${data.email}>\nRole: ${data.role ?? "-"}\n\n${data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // zod 或 resend 错误
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 400 }
    );
  }
}
