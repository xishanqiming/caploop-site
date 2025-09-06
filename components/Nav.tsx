"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#thesis", label: "投资理念" },
  { href: "#structure", label: "基金架构" },
  { href: "#edge", label: "竞争优势" },
  { href: "#process", label: "投资流程" },
  { href: "#team", label: "团队背景" },
  { href: "#contact", label: "联系方式" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      {/* bar */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/caploop-logo.svg"
              alt="Caploop"
              width={128}
              height={32}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen((s) => !s)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>

      {/* 分隔横线 */}
      <div className="h-px w-full bg-slate-200" />

      {/* mobile sheet */}
      {open && (
        <div className="md:hidden border-b border-slate-200 bg-white">
          <nav className="mx-auto max-w-6xl px-6 py-3 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-slate-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
