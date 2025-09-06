// app/page.tsx
"use client";

import {
  Brain,
  GaugeCircle,
  LineChart,
  CheckCircle2,
  Layers,
  Workflow,
  Rocket,
  UsersRound,
  Building2,
  ListChecks,
  ShieldCheck,
  Database,
  BadgeCheck,
} from "lucide-react";

/** 统一的小节标题（含图标） */
function SectionTitle({
  icon: Icon,
  title,
  id,
}: {
  icon: React.ElementType;
  title: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6" id={id}>
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero —— ToValue 风格：左侧大标题 + 右侧蓝色亮点卡片 */}
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          {/* 左：大号彩色标题 */}
          <div>
            <h1 className="leading-tight font-extrabold text-slate-900 text-4xl md:text-6xl">
              <span className="text-slate-900">Caploop：</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                卢森堡 AI 驱动基金平台
              </span>
              <br />
              <span className="text-slate-900">专注</span>
              <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                SME 早期投资
              </span>
              <span className="text-slate-900">的智能化基金生态</span>
            </h1>
          </div>

          {/* 右：蓝色渐变卡片（右上/左下气泡） */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-blue-600 to-emerald-500 p-6 md:p-8 text-white shadow-xl">
            {/* 角落气泡 */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-white/10" />

            {/* 卡片标题 */}
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="text-xl md:text-2xl font-semibold">
                Caploop 亮点
              </h3>
            </div>

            {/* 四条亮点（来自文档“竞争优势”） */}
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>AI 驱动投资决策</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>系统化投后管理</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>创新退出机制</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>生态协同效应</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 01. 投资理念（白） */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle icon={Brain} title="投资理念" id="thesis" />

          {/* 标题 + 总述 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
              Caploop 基金平台
            </h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Caploop 是基于卢森堡 SCSp 架构的专业投资基金，通过 AI
              驱动的投资决策体系，
              为中小企业提供从早期投资到退出的全周期资本支持。
            </p>

            {/* 核心价值主张 */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-slate-900 font-semibold">核心价值主张：</h4>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-blue-600" />
                  <span>人工智能深度整合基金运营，实现投资决策数据化</span>
                </li>
                <li className="flex gap-2">
                  <ListChecks className="h-5 w-5 shrink-0 text-blue-600" />
                  <span>估值过程标准化，投后管理智能化</span>
                </li>
                <li className="flex gap-2">
                  <LineChart className="h-5 w-5 shrink-0 text-blue-600" />
                  <span>为被投企业提供持续成长与资本增值支持</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02. 基金架构（淡灰） */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle icon={Layers} title="基金架构" id="structure" />

          <div className="grid gap-8 md:grid-cols-2">
            {/* 法律结构 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-slate-900 font-semibold">
                <Building2 className="h-5 w-5 text-blue-600" />
                法律结构
              </h3>
              <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed">
                <li>基金形态：卢森堡 SCSp（特殊有限合伙）</li>
                <li>管理人：Caploop SARL（普通合伙人）</li>
                <li>监管框架：SCSp 注册基金，受欧盟 AIFM 指令监管</li>
                <li>合规优势：跨境募资便利，投资结构灵活</li>
              </ul>
            </div>

            {/* 投资策略 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-slate-900 font-semibold">
                <GaugeCircle className="h-5 w-5 text-blue-600" />
                投资策略
              </h3>
              <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed">
                <li>投资阶段：Pre-Seed 至 Series A</li>
                <li>地域重点：欧洲核心市场，同时覆盖中国/东南亚项目</li>
                <li>行业聚焦：AI、支付科技、消费科技、生物技术、SaaS</li>
                <li>投资规模：€200K – €2M 单笔投资</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03. 竞争优势（白） */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle icon={LineChart} title="竞争优势" id="advantage" />

          <div className="grid gap-6">
            {[
              {
                icon: Brain,
                title: "AI 驱动投资决策",
                desc: "多模型 AI 估值系统结合行业数据库，提供客观、精准的投资分析。",
              },
              {
                icon: Workflow,
                title: "系统化投后管理",
                desc: "内设 Venture Studio，提供陪跑式孵化服务与数据驱动增长策略，持续提升企业价值。",
              },
              {
                icon: Rocket,
                title: "创新退出机制",
                desc: "支持传统 M&A / IPO 及 Token 化资产退出，拓宽流动性选择。",
              },
              {
                icon: Database,
                title: "生态协同效应",
                desc: "整合增长引擎与估值平台资源，支持企业从“盈利能力提升”到“估值体系建立”的全链路成长。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-slate-900 font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. 投资流程（淡灰） */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle icon={Workflow} title="投资流程" id="process" />

          <ol className="grid gap-6 md:grid-cols-3">
            {[
              {
                no: "01",
                title: "智能项目筛选",
                desc: "AI 算法识别高潜力项目",
              },
              {
                no: "02",
                title: "标准化估值",
                desc: "多模型估值系统确保公允合理",
              },
              {
                no: "03",
                title: "专业投资决策",
                desc: "结合人工智能与专业判断",
              },
              {
                no: "04",
                title: "系统化孵化",
                desc: "Venture Studio 提供全方位支持",
              },
              {
                no: "05",
                title: "数据驱动优化",
                desc: "持续监控并优化投资表现",
              },
              { no: "06", title: "灵活退出策略", desc: "传统与创新方式并重" },
            ].map((s) => (
              <li
                key={s.no}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-semibold text-blue-600">
                  {s.no}
                </span>
                <h4 className="mt-1 font-medium text-slate-900">{s.title}</h4>
                <p className="mt-1 text-slate-700">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05. 团队背景（白） */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle icon={UsersRound} title="团队背景" id="team" />

          <div className="grid gap-8">
            {/* 核心团队 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-slate-900 font-semibold">核心团队</h3>
              <p className="mt-3 text-slate-700">
                核心团队来自知名投资机构、四大会计师事务所及科技公司，具备丰富的投资管理、技术开发和估值建模经验。
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 font-medium text-slate-900">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    专业资质
                  </div>
                  <p className="mt-1 text-slate-700">
                    基金管理、财务建模、技术评估、合规监管
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 font-medium text-slate-900">
                    <GaugeCircle className="h-5 w-5 text-blue-600" />
                    地理布局
                  </div>
                  <p className="mt-1 text-slate-700">
                    卢森堡本土团队，深耕欧洲市场
                  </p>
                </div>
              </div>
            </div>

            {/* 公司信息 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-slate-900 font-semibold">公司信息</h3>
              <p className="mt-2 text-slate-700">
                Caploop SARL | 卢森堡注册 | 欧盟监管 | 专业投资
              </p>
            </div>

            {/* 行业应用示例 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-slate-900 font-semibold">行业应用示例</h3>
              <p className="mt-2 text-slate-700">
                AI、支付科技、消费科技、生物技术、SaaS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. 联系方式（淡蓝 CTA） */}
      <section
        id="contact"
        className="bg-gradient-to-r from-blue-600 to-sky-500"
      >
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            联系方式
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* 投资人 */}
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <h3 className="text-white text-xl font-semibold">投资人</h3>
              <p className="mt-1 text-white/85">成为 LP 合伙人</p>
              <a
                href="mailto:info@caploop.lu?subject=LP%20%E6%88%90%E4%B8%BA%E5%90%88%E4%BC%99%E4%BA%BA%E9%97%AE%E8%AF%A2"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-blue-700 font-medium hover:bg-slate-100"
              >
                预约深度交流
              </a>
            </div>

            {/* 创业者 */}
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <h3 className="text-white text-xl font-semibold">创业者</h3>
              <p className="mt-1 text-white/85">申请投资支持</p>
              <a
                href="mailto:info@caploop.lu?subject=%E6%8F%90%E4%BA%A4%E9%A1%B9%E7%9B%AE&body=%E8%AF%B7%E9%99%84%E4%B8%8A%E9%A1%B9%E7%9B%AE%E7%AE%80%E4%BB%8B%E4%BB%A5%E4%BE%9D%E6%8C%89%E7%A8%8B%E5%BA%8F%E6%B5%81%E7%A8%8B%E8%BF%9B%E4%B8%8B%E6%AD%A5%E4%BC%B0%E4%BB%B7"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-blue-700 font-medium hover:bg-slate-100"
              >
                提交项目
              </a>
            </div>

            {/* 合作伙伴 */}
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <h3 className="text-white text-xl font-semibold">合作伙伴</h3>
              <p className="mt-1 text-white/85">生态合作机会</p>
              <a
                href="mailto:info@caploop.lu?subject=%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C&body=%E5%BE%85%E7%AD%BE%E7%BA%A6%E6%B5%81%E7%A8%8B%E8%AE%A8%E8%AE%BA"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-blue-700 font-medium hover:bg-slate-100"
              >
                商务合作
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
