import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "ERP Intern",
    company: "Systems Limited",
    location: "Karachi",
    period: "Mar 2025 – Apr 2025",
    bullets: [
      "Worked on Microsoft Dynamics 365 Finance & Operations ERP modules.",
      "Customized business logic in X++ to meet specific client requirements.",
      "Generated SSRS reports for financial and operational data analysis.",
      "Collaborated with senior developers on enterprise-grade ERP customizations.",
      "Gained hands-on experience in real-world Dynamics 365 implementation cycles.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "KDA — Karachi District Authority",
    location: "Karachi",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Provided technical IT support across multiple departments.",
      "Diagnosed and resolved hardware and software issues for end users.",
      "Maintained network systems and assisted with infrastructure setup.",
      "Documented support tickets and contributed to internal IT processes.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work History">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
        <div className="space-y-12">
          {jobs.map((j, i) => (
            <div
              key={j.company}
              className={`relative grid sm:grid-cols-2 gap-6 ${
                i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-purple glow-purple ring-4 ring-background" />
              <div className="pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Briefcase className="w-3.5 h-3.5" />
                  {j.period}
                </div>
                <h3 className="text-xl font-semibold mt-2">{j.role}</h3>
                <div className="text-primary text-sm">{j.company}</div>
                <div className="text-xs text-muted-foreground">{j.location}</div>
              </div>
              <div className="pl-12 sm:pl-10">
                <div className="glass-strong rounded-2xl p-5 hover-glow">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}