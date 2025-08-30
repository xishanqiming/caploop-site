import Section from "@/components/Section";
import Card from "@/components/Card";
import { Rocket, ShieldCheck, Cpu, Scale } from "lucide-react";

const rows = [
  { icon: Rocket, title: "Speed & Affordability", text: "分钟级估值与周级融资流程，成本仅为传统路径的一个量级。" },
  { icon: ShieldCheck, title: "Transparency & Trust", text: "可追溯方法学与对标数据，配合第三方审计/托管。" },
  { icon: Cpu, title: "Future-Ready", text: "估值-发行-流通 一体化路线，平滑过渡到合规 Tokenization。" },
  { icon: Scale, title: "Compliance by Design", text: "欧洲监管框架优先策略，最小化跨境合规摩擦。"}
];

export default function Usp(){
  return (
    <Section id="usp" center title="Why Caploop Stands Out" subtitle="The edge that differentiates us from traditional platforms">
      <div className="grid md:grid-cols-4 gap-6">
        {rows.map((r, i)=>(
          <Card key={i} className="p-6">
            <div className="inline-flex size-10 rounded-xl bg-[hsl(var(--brand-50))] items-center justify-center">
              <r.icon className="text-[hsl(var(--brand-600))]" />
            </div>
            <div className="mt-3 font-semibold">{r.title}</div>
            <p className="text-gray-600 text-sm mt-1">{r.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}