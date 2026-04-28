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
    <Section id="about" eyebrow="About" title="Professional Profile">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="glass-strong rounded-3xl p-8 hover-glow">
          <p className="text-muted-foreground leading-relaxed">
            Final-year Computer Science student at{" "}
            <span className="text-foreground font-medium">NED University</span>{" "}
            (graduating June 2026) specializing in Full-Stack MERN development
            and Enterprise Resource Planning (ERP). My professional background
            includes an internship at{" "}
            <span className="text-foreground font-medium">Systems Limited</span>,
            where I gained hands-on experience with Microsoft Dynamics 365,
            customizing business logic in X++, and developing SSRS reports. I
            excel at building AI-integrated web applications, designing RESTful
            APIs, and creating high-performance user interfaces. I am a
            proactive problem-solver and collaborative team player, driven to
            build scalable solutions that bridge the gap between modern web
            technologies and enterprise ecosystems.
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