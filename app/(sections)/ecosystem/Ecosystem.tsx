import Section from "@/components/Section";
import Card from "@/components/Card";
import { Check, Blocks, Droplets, ShieldCheck } from "lucide-react";

export default function Ecosystem(){
  return (
    <Section id="ecosystem" title="What is Tokenization?" center subtitle="将现实世界资产转化为可在区块链上流通的数字权益，提升流动性、透明度与可接入的投资者范围。">
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
        <Card className="card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Blocks className="text-[hsl(var(--brand-600))]" />
            <div className="font-semibold">Digital Asset Representation</div>
          </div>
          <p className="text-gray-600 text-sm">
            将股权、收益权、IP 等映射为可管理的链上凭证，便于交易与托管。
          </p>

          <div className="flex items-center gap-3">
            <Droplets className="text-[hsl(var(--brand-600))]" />
            <div className="font-semibold">Enhanced Liquidity</div>
          </div>
          <p className="text-gray-600 text-sm">解锁 24/7 的全球市场机会，灵活退出策略。</p>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[hsl(var(--brand-600))]" />
            <div className="font-semibold">Transparency & Trust</div>
          </div>
          <p className="text-gray-600 text-sm">链上可验证记录，最小化对手方风险与信息不对称。</p>
        </Card>

        <Card className="card p-6">
          <div className="font-semibold">Tokenization Benefits for SMEs</div>
          <ul className="mt-4 space-y-2 text-gray-700">
            {[
              "接入全球投资者与资金池",
              "分割化与多样化所有权",
              "降低交易与合规成本",
              "自动化合规与报告",
              "资产使用效率提升"
            ].map((x, i)=>(
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-1 size-5 text-[hsl(var(--brand-600))]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-gray-500">
            * 遵循欧盟监管框架，逐步推进场外/合格投资者流通方案。
          </div>
        </Card>
      </div>
    </Section>
  );
}