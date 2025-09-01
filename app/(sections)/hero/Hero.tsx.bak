"use client";
import DownloadDialog from "@/components/DownloadDialog";
import onepager from "@/content/onepager.json";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero(){
  return (
    <section id="hero" className="section hero-grad">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">MVP · One-Page</span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            {onepager.title.split("SME")[0]}<span className="highlight">SME</span>{onepager.title.split("SME")[1] || ""}
          </h1>
          <p className="mt-4 text-gray-600">{onepager.subtitle}</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            {onepager.bullets.map((b: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-1 size-4 text-[hsl(var(--brand-600))]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <Button asChild href="#structure">了解流程</Button>
            <Button variant="ghost" asChild href="#contact">预约/申请</Button>
            <DownloadDialog />
          </div>
        </div>

        <Reveal delay={.15}>
          <Card className="p-6 bg-gradient-to-br from-[hsl(var(--brand-200))] to-[hsl(var(--brand-50))]">
            <div className="text-sm text-gray-700">The Caploop Edge</div>
            <ul className="mt-3 space-y-2 text-gray-900">
              {[
                "速度与成本优势",
                "面向未来的 Tokenization 路线",
                "可审计/可验证的估值与所有权",
                "透明与可信的方法论"
              ].map((x, i)=>(
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-flex size-5 rounded-full bg-white/70 border border-white justify-center items-center">
                    <Check className="size-3.5 text-[hsl(var(--accent-600))]" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}