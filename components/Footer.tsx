import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold">Caploop</div>
            <p className="mt-3 text-sm text-slate-400">
              Growth → Valuation → Capital. A Luxembourg-based AI-driven fund platform.
            </p>
          </div>
          <div>
            <div className="font-semibold">Platform</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#ecosystem">Tokenization</a></li>
              <li><a href="#structure">How It Works</a></li>
              <li><a href="#usp">Why Caploop</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><Link href="/privacy">隐私政策</Link></li>
              <li><Link href="/terms">使用条款</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>info@caploop.lu</li>
              <li>Luxembourg, LU</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Caploop. All rights reserved.</div>
      </div>
    </footer>
  );
}