"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/Button";

const sections = [
  { id: "hero", label: "首页" },
  { id: "ecosystem", label: "Tokenization" },
  { id: "structure", label: "How It Works" },
  { id: "usp", label: "优势" },
  { id: "lifecycle", label: "Investor Journey" },
  { id: "team", label: "团队" },
  { id: "contact", label: "联系" },
];

export default function Nav() {
  const activeId = useScrollSpy(sections.map(s => s.id), { rootMargin: "-40% 0px -55% 0px" });
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [activeId]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100 shadow-[0_6px_20px_-16px_rgba(0,0,0,0.2)]">
      <div className="container flex h-14 items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-tight">Caploop</Link>
        <nav className="hidden md:flex items-center gap-6">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`text-sm ${activeId===s.id ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>{s.label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild href="#contact">Join / 联系我们</Button>
        </div>
        <button className="md:hidden btn btn-ghost" onClick={() => setOpen(v=>!v)}>菜单</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="container py-2 flex flex-col gap-2">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className={`text-sm ${activeId===s.id ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900"}`}>{s.label}</a>
            ))}
            <a className="btn btn-primary mt-2" href="#contact">Join / 联系我们</a>
          </div>
        </div>
      )}
    </header>
  );
}