import Section from "@/components/Section";
import Card from "@/components/Card";
import {
  Upload,
  LineChart,
  FileText,
  MessageSquare,
  Gauge,
  BadgeDollarSign,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Financials",
    text: "安全上传或连接会计系统，最小化人工录入。",
  },
  {
    icon: LineChart,
    title: "AI Processes Data",
    text: "多模型处理信息与市场对标，生成洞察。",
  },
  {
    icon: FileText,
    title: "Get Valuation",
    text: "产出结构化估值报告，支持路演与谈判。",
  },
  {
    icon: MessageSquare,
    title: "Optional Consultation",
    text: "专家建议与投后路径梳理（可选）。",
  },
  {
    icon: Gauge,
    title: "Real-time Dashboard",
    text: "追踪关键指标与估值变化。",
  },
  {
    icon: BadgeDollarSign,
    title: "Assets Tokenization",
    text: "与合规伙伴共同推进 Tokenization 与发行。",
  },
];

export default function Structure() {
  return (
    <Section
      id="structure"
      center
      title="How Caploop Works"
      subtitle="Simple, fast path from growth to valuation to capital"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <Card key={i} className="p-6">
            <div className="inline-flex size-10 rounded-xl bg-[hsl(var(--brand-50))] items-center justify-center">
              <s.icon className="text-[hsl(var(--brand-600))]" />
            </div>
            <div className="mt-4 font-semibold">{s.title}</div>
            <p className="text-gray-600 text-sm mt-1">{s.text}</p>
            <div className="mt-4 text-xs text-[hsl(var(--brand-600))]">
              Step {i + 1}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
