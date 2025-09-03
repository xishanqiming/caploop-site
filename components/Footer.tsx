"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1A24] text-neutral-300">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-4">Caploop</h3>
          <p className="leading-7">
            Growth → Valuation → Capital. A Luxembourg-based AI-driven fund platform.
          </p>
        </div>

        {/* Platform：改为五个锚点，指向页面模块 */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Platform</h4>
          <ul className="space-y-3">
            <li><a href="#thesis" className="hover:text-white">投资理念</a></li>
            <li><a href="#structure" className="hover:text-white">基金架构</a></li>
            <li><a href="#advantages" className="hover:text-white">竞争优势</a></li>
            <li><a href="#process" className="hover:text-white">投资流程</a></li>
            <li><a href="#team" className="hover:text-white">团队背景</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/privacy" className="hover:text-white">隐私政策</Link></li>
            <li><Link href="/terms" className="hover:text-white">使用条款</Link></li>
          </ul>
        </div>

        {/* Contact（仅文字，不渲染 CTA 卡片） */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3">
            <li><a href="mailto:info@caploop.lu" className="hover:text-white">info@caploop.lu</a></li>
            <li>Luxembourg, LU</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-neutral-400">
          © 2025 Caploop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
