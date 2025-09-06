import Link from "next/link";

const platform = [
  { href: "#thesis", label: "投资理念" },
  { href: "#structure", label: "基金架构" },
  { href: "#advantage", label: "竞争优势" },
  { href: "#process", label: "投资流程" },
  { href: "#team", label: "团队背景" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      {/* 联系方式区（紫蓝渐变 + 大标题白字） */}
      <section id="contact" className="contact-gradient text-white">
        <div className="container py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            联系方式
          </h2>
          <p className="text-white/90 mb-6">
            Caploop SARL | 卢森堡注册 | 欧盟监管 | 专业投资
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@caploop.lu?subject=预约深度交流"
              className="rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/20"
            >
              预约深度交流
            </a>
            <a
              href="mailto:info@caploop.lu?subject=提交项目"
              className="rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/20"
            >
              提交项目
            </a>
            <a
              href="mailto:info@caploop.lu?subject=商务合作"
              className="rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/20"
            >
              商务合作
            </a>
          </div>
        </div>
      </section>

      {/* 底部导航区 */}
      <div className="bg-white">
        <div className="container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600"></div>
              <span className="font-semibold text-slate-900">Caploop</span>
            </div>
            <p className="text-sm text-slate-600 leading-6">
              Growth → Valuation → Capital. A Luxembourg-based AI-driven fund
              platform.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900 mb-3">
              Platform
            </div>
            <ul className="space-y-2">
              {platform.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-slate-600 hover:text-sky-700"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900 mb-3">
              Legal
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-sm text-slate-600 hover:text-sky-700"
                >
                  隐私政策
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-sm text-slate-600 hover:text-sky-700"
                >
                  使用条款
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="mailto:info@caploop.lu"
                  className="text-sm text-slate-600 hover:text-sky-700"
                >
                  info@caploop.lu
                </a>
                <div className="text-xs text-slate-500 mt-1">
                  Luxembourg, LU
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="container py-4 text-xs text-slate-500">
            © 2025 Caploop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
