import { Section } from "./Section";
import { Database, Server, Code2, Layers, Wrench, Building2 } from "lucide-react";

const groups = [
  {
    icon: Building2,
    title: "ERP & Enterprise",
    items: ["Microsoft Dynamics 365 F&O", "X++ Customization", "SSRS Reports", "ERP Integration"],
  },
  {
    icon: Layers,
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Design", "JWT Auth"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"],
  },
  {
    icon: Code2,
    title: "Languages",
    items: ["JavaScript (ES6+)", "Python", "C++", "C#", "X++"],
  },
  {
    icon: Wrench,
    title: "Tools & AI",
    items: ["Git", "GitHub", "Postman", "Stripe", "Google Gemini AI"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I Work With">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="glass-strong rounded-2xl p-6 hover-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl gradient-purple grid place-items-center glow-purple">
                <g.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}