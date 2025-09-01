import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0B1420] text-[#C6D0DB]">
      <div className="container mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold text-white">Caploop</div>
            <p className="mt-3 text-sm text-[#8FA0B4]">
              Growth → Valuation → Capital. A Luxembourg-based AI-driven fund platform.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold">Platform</div>
            <ul className="mt-4 space-y-3">
              {/* 关键改动：使用“绝对路径 + hash”返回首页并定位到对应区块 */}
              <li><Link className="hover:underline" href="/#ecosystem">Tokenization</Link></li>
              <li><Link className="hover:underline" href="/#lifecycle">How It Works</Link></li>
              <li><Link className="hover:underline" href="/#usp">Why Caploop</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Legal</div>
            <ul className="mt-4 space-y-3">
              <li><Link className="hover:underline" href="/privacy" target="_blank" rel="noopener">隐私政策</Link></li>
              <li><Link className="hover:underline" href="/terms" target="_blank" rel="noopener">使用条款</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Contact</div>
            <ul className="mt-4 space-y-3">
              <li>info@caploop.lu</li>
              <li>Luxembourg, LU</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-[#7890A8]">
          © {new Date().getFullYear()} Caploop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
