import { Section } from "./Section";
import { GraduationCap, Building2, Brain, MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react";

const cards = [
  { icon: GraduationCap, title: "NED University", desc: "BSCS — Expected 2026" },
  { icon: Building2, title: "Systems Limited", desc: "ERP Intern (D365 F&O)" },
  { icon: Brain, title: "AI Integration", desc: "Gemini-powered platforms" },
];

const details = [
  { icon: MapPin, label: "Karachi, Pakistan" },
  { icon: Calendar, label: "BSCS (2026)" },
  { icon: Briefcase, label: "MERN + ERP Focus" },
  { icon: CheckCircle2, label: "Open to Work" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I Am">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="glass-strong rounded-3xl p-8 hover-glow">
          <p className="text-muted-foreground leading-relaxed">
            Fourth-year B.S. Computer Science student at{" "}
            <span className="text-foreground font-medium">NED University</span>{" "}
            (graduating June 2026) and a full-stack MERN developer with practical
            experience in ERP systems, enterprise software customization, and
            scalable web applications. Completed a professional internship at{" "}
            <span className="text-foreground font-medium">Systems Limited</span>{" "}
            — one of Pakistan's leading IT firms — working on Microsoft Dynamics
            365 ERP modules, customizing business logic in X++, and generating
            SSRS reports. Skilled in building AI-integrated e-commerce platforms,
            RESTful APIs, and responsive frontend interfaces. A proactive team
            player with strong leadership and problem-solving abilities, eager to
            contribute to enterprise IT environments involving SAP/ERP ecosystems.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="glass rounded-2xl p-5 hover-glow text-center"
              >
                <div className="w-11 h-11 mx-auto mb-3 rounded-xl gradient-purple grid place-items-center glow-purple">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-semibold text-sm">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Quick Facts
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5"
                >
                  <d.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}