export const runtime = "edge";

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Caploop — AI 驱动的卢森堡基金平台",
  description:
    "Growth → Valuation → Capital. A Luxembourg-based AI-driven fund platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        {/* 顶部导航 */}
        <header className="navbar">
          <nav className="container flex h-16 items-center justify-between">
            <Link href="#" className="text-white text-xl font-semibold">
              Caploop
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#thesis" className="navlink">
                投资理念
              </Link>
              <Link href="#structure" className="navlink">
                基金架构
              </Link>
              <Link href="#advantage" className="navlink">
                竞争优势
              </Link>
              <Link href="#process" className="navlink">
                投资流程
              </Link>
              <Link href="#team" className="navlink">
                团队背景
              </Link>
              <Link href="#contact" className="navlink">
                联系方式
              </Link>
            </div>
          </nav>
        </header>

        {children}

        {/* 页脚 */}
        <footer className="border-t border-white/10 bg-slate-950">
          <div className="container py-20 grid gap-10 md:grid-cols-4">
            <div>
              <div className="text-white text-2xl font-semibold mb-3">
                Caploop
              </div>
              <p className="text-white/70 leading-relaxed">
                Growth → Valuation → Capital. A Luxembourg-based AI-driven fund
                platform.
              </p>
            </div>
            <div>
              <div className="text-white/90 font-semibold mb-3">Platform</div>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="#thesis" className="hover:text-white">
                    投资理念
                  </Link>
                </li>
                <li>
                  <Link href="#structure" className="hover:text-white">
                    基金架构
                  </Link>
                </li>
                <li>
                  <Link href="#advantage" className="hover:text-white">
                    竞争优势
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white">
                    投资流程
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-white">
                    团队背景
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white/90 font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-white/70">
                <li>隐私政策</li>
                <li>使用条款</li>
              </ul>
            </div>
            <div>
              <div className="text-white/90 font-semibold mb-3">Contact</div>
              <ul className="space-y-2 text-white/70">
                <li>info@caploop.lu</li>
                <li>Luxembourg, LU</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="container py-6 text-sm text-white/50">
              © 2025 Caploop. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
