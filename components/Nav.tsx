"use client";
import Link from "next/link";

export default function Nav() {
  const items = [
    { href: "#thesis", label: "投资理念" },
    { href: "#structure", label: "基金架构" },
    { href: "#advantages", label: "竞争优势" },
    { href: "#process", label: "投资流程" },
    { href: "#team", label: "团队背景" },
    { href: "#contact", label: "联系方式" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-extrabold">Caploop</Link>
        <ul className="hidden md:flex gap-5 text-sm">
          {items.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="hover:text-indigo-700">{it.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
