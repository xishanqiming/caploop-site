"use client";

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      {/* ===== 投资理念 ===== */}
      <section id="thesis" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">投资理念</h2>

        <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">Caploop基金平台</h3>
        <p className="text-lg leading-8 mb-10">
          Caploop是基于卢森堡SCSp架构的专业投资基金，通过AI驱动的投资决策体系，为中小企业提供从早期投资到退出的全周期资本支持。
        </p>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h4 className="text-xl font-bold mb-4">核心价值主张：</h4>
          <ul className="space-y-3 list-disc pl-5">
            <li>人工智能深度整合基金运营，实现投资决策数据化</li>
            <li>估值过程标准化，投后管理智能化</li>
            <li>为被投企业提供持续成长与资本增值支持</li>
          </ul>
        </div>
      </section>

      {/* ===== 基金架构 ===== */}
      <section id="structure" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">基金架构</h2>

        <div className="rounded-2xl bg-slate-50 p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">法律结构</h3>
          <ul className="space-y-3 list-disc pl-5 text-lg">
            <li>基金形态：卢森堡SCSp（特殊有限合伙）</li>
            <li>管理人：Caploop SARL（普通合伙人）</li>
            <li>监管框架：SCSP注册基金，受欧盟AIFM指令监管</li>
            <li>合规优势：跨境募资便利，投资结构灵活</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">投资策略</h3>
          <ul className="space-y-3 list-disc pl-5 text-lg">
            <li>投资阶段：Pre-Seed至Series A</li>
            <li>地域重点：欧洲核心市场，同时覆盖中国/东南亚项目</li>
            <li>行业聚焦：AI、支付科技、消费科技、生物技术、SaaS</li>
            <li>投资规模：€200K - €2M单笔投资</li>
          </ul>
        </div>
      </section>

      {/* ===== 竞争优势 ===== */}
      <section id="advantages" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">竞争优势</h2>

        <div className="space-y-6">
          <AdvItem index="1" title="AI驱动投资决策" text="多模型AI估值系统结合行业数据库，提供客观、精准的投资分析。" />
          <AdvItem index="2" title="系统化投后管理" text="内设Venture Studio，提供陪跑式孵化服务与数据驱动增长策略，持续提升企业价值。" />
          <AdvItem index="3" title="创新退出机制" text="支持传统M&A/IPO及Token化资产退出，拓宽流动性选择。" />
          <AdvItem index="4" title="生态协同效应" text="整合增长引擎与估值平台资源，支持企业从“盈利能力提升”到“估值体系建立”的全链路成长。" />
        </div>
      </section>

      {/* ===== 投资流程 ===== */}
      <section id="process" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">投资流程</h2>

        <p className="text-lg mb-6">项目筛选 → AI辅助估值 → 投资决策 → 孵化陪跑 → 持续支持 → 多元退出</p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <FlowCard title="智能筛选" text="AI算法识别高潜力项目" />
          <FlowCard title="标准化估值" text="多模型估值系统" />
          <FlowCard title="专业决策" text="AI + 专业判断" />
          <FlowCard title="系统孵化" text="Venture Studio支持" />
          <FlowCard title="数据优化" text="持续优化" />
          <FlowCard title="灵活退出" text="传统 + 创新方式" />
        </div>

        <ol className="space-y-4 text-lg">
          <li>1 智能项目筛选 —— AI算法识别高潜力项目</li>
          <li>2 标准化估值 —— 多模型估值系统确保定价合理</li>
          <li>3 专业投资决策 —— 结合人工智能与专业判断</li>
          <li>4 系统化孵化 —— Venture Studio提供全方位支持</li>
          <li>5 数据驱动优化 —— 持续监控并优化投资表现</li>
          <li>6 灵活退出策略 —— 传统与创新方式并重</li>
        </ol>
      </section>

      {/* ===== 团队背景 ===== */}
      <section id="team" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">团队背景</h2>

        <div className="rounded-2xl bg-amber-50 p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">核心团队</h3>
          <p className="text-lg mb-6">核心团队来自知名投资机构、四大会计师事务所及科技公司，具备丰富投资管理、技术开发和估值建模经验。</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-amber-200 bg-white p-5">
              <h4 className="font-bold mb-2">专业资质</h4>
              <p>基金管理、财务建模、技术评估、合规监管</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-white p-5">
              <h4 className="font-bold mb-2">地理布局</h4>
              <p>卢森堡本土团队，深耕欧洲市场</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50 p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">公司信息</h3>
          <p className="text-lg">Caploop SARL | 卢森堡注册 | 欧盟监管 | 专业投资</p>
        </div>

        <div className="rounded-2xl bg-amber-50 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">行业应用示例</h3>
          <p className="text-lg">AI、支付科技、消费科技、生物技术、SaaS</p>
        </div>
      </section>

      {/* ===== 联系方式（Contact） ===== */}
      <section id="contact" className="w-full bg-gradient-to-r from-indigo-700 to-violet-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          {/* 统一风格的模块标题（白色、半粗、合适字号） */}
          <h2 className="text-white/90 text-[22px] md:text-3xl font-semibold tracking-tight mb-8">联系方式</h2>

          {/* 三列卡片：投资人 / 创业者 / 合作伙伴 */}
          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard title="投资人" subtitle="成为LP合伙人" buttonText="预约深度交流" href="#" />
            <ContactCard title="创业者" subtitle="申请投资支持" buttonText="提交项目" href="#" />
            <ContactCard title="合作伙伴" subtitle="生态合作机会" buttonText="商务合作" href="#" />
          </div>
        </div>
      </section>
    </main>
  );
}

function AdvItem({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-emerald-50 p-6 border border-emerald-100">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">{index}</span>
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-lg leading-8">{text}</p>
        </div>
      </div>
    </div>
  );
}

function FlowCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

// 修复类型：支持 buttonText 与可选 href
function ContactCard({ title, subtitle, buttonText, href }: { title: string; subtitle: string; buttonText: string; href?: string }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur p-6">
      <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
      <p className="mb-4 opacity-90">{subtitle}</p>
      {href ? (
        <a
          href={href}
          className="inline-block rounded-xl bg-white text-indigo-700 px-4 py-2 font-semibold hover:opacity-90"
        >
          {buttonText}
        </a>
      ) : (
        <button className="rounded-xl bg-white text-indigo-700 px-4 py-2 font-semibold hover:opacity-90">
          {buttonText}
        </button>
      )}
    </div>
  );
}
