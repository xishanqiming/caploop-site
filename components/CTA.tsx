"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      aria-label="行动按钮"
      className="bg-gradient-to-r from-sky-50 to-blue-50 border-y border-slate-200"
    >
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-semibold text-slate-800 tracking-tight">
          Growth → Valuation → Capital
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="mailto:info@caploop.lu?subject=预约深度交流"
            className="rounded-full px-4 py-2 text-sm font-medium border border-sky-300 text-sky-700 hover:bg-sky-50"
          >
            预约深度交流
          </Link>
          <Link
            href="mailto:info@caploop.lu?subject=提交项目"
            className="rounded-full px-4 py-2 text-sm font-medium border border-sky-300 text-sky-700 hover:bg-sky-50"
          >
            提交项目
          </Link>
          <Link
            href="mailto:info@caploop.lu?subject=商务合作"
            className="rounded-full px-4 py-2 text-sm font-medium border border-sky-300 text-sky-700 hover:bg-sky-50"
          >
            商务合作
          </Link>
        </div>
      </div>
    </section>
  );
}
