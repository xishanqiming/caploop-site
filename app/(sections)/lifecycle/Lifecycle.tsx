import Section from "@/components/Section";
import Card from "@/components/Card";
import { Search, FileSignature, Users2 } from "lucide-react";

const cards = [
  { icon: Search,        title: "Browse Objects", text: "按行业/区域/估值筛选，发现匹配的投资标的。" },
  { icon: FileSignature, title: "Review Profiles", text: "访问结构化资料与报告，理解潜力与风险画像。" },
  { icon: Users2,        title: "Connect Directly", text: "建立直连，高效推进与管理投资流程。" },
];

export default function Lifecycle(){
  return (
    <Section id="lifecycle" center title="The Investor Journey" subtitle="Discover opportunities with transparent data">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i)=>(
          <Card key={i} className="p-6">
            <div className="inline-flex size-10 rounded-xl bg-[hsl(var(--brand-50))] items-center justify-center">
              <c.icon className="text-[hsl(var(--brand-600))]" />
            </div>
            <div className="mt-3 font-semibold">{c.title}</div>
            <p className="text-gray-600 text-sm mt-1">{c.text}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 card p-6 bg-gradient-to-r from-[hsl(var(--brand-50))] to-white text-center">
        <span className="text-[hsl(var(--brand-600))] font-medium">
          我们并非经纪商，我们促进“数据透明 + 直连沟通”，让流程更高效且合规友好。
        </span>
      </div>
    </Section>
  );
}