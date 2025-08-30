import Section from "@/components/Section";
import teamJson from "@/content/team.json";

type Member = { name: string; role: string; tags: string[] };
type TeamData = { members: Member[] };

const team = teamJson as TeamData;

export default function Team(){
  return (
    <Section id="team" title="团队与合规" subtitle="专业团队 · 法律结构 · 审计与托管">
      <div className="grid md:grid-cols-3 gap-4">
        {team.members.map((m: Member, i: number)=> (
          <div key={i} className="rounded-2xl border border-gray-100 p-5">
            <div className="text-lg font-semibold">{m.name}</div>
            <div className="text-gray-600">{m.role}</div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {m.tags.map((t: string, j: number) => <span key={j} className="badge">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
