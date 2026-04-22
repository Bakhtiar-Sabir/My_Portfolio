import { Section } from "./Section";
import { GraduationCap, Trophy } from "lucide-react";

const education = [
  {
    degree: "B.S. Computer Science",
    school: "NED University of Engineering & Technology",
    period: "2022 – 2026 (Expected)",
    note: "Focus on software engineering, databases, and enterprise systems.",
  },
  {
    degree: "Pre-Engineering (HSC)",
    school: "Government College for Men Nazimabad",
    period: "2020 – 2022",
    note: "Mathematics, Physics, Chemistry.",
  },
  {
    degree: "Matriculation",
    school: "The Smart School Campus 1",
    period: "2018 – 2020",
    note: "Computer Science group. ",
  },
];

const achievements = [
  {
    title: "Koderz Combat Award",
    year: "2022",
    desc: "Recognized for outstanding performance in a competitive programming contest at NED University.",
  },
  {
    title: "Hangman Game Certificate",
    year: "2023",
    desc: "Awarded for designing and developing an interactive Hangman game during a university software showcase.",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.degree} className="glass-strong rounded-2xl p-6 hover-glow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-purple grid place-items-center glow-purple shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <div className="text-sm text-primary">{e.school}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {e.period}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{e.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" /> Achievements
          </h3>
          {achievements.map((a) => (
            <div key={a.title} className="glass-strong rounded-2xl p-6 hover-glow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold">{a.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                  {a.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}