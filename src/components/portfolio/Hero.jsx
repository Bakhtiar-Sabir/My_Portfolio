import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import profile from "@/assets/bakhtiar.png";

// CV file - make sure this file exists in your public folder or adjust path
const cvUrl = "/Bakhtiar-Sabir-CV.pdf";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Bakhtiar-Sabir-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative pt-36 pb-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="block">Bakhtiar</span>
            <span className="block gradient-text">Sabir</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-medium">
            MERN Stack Developer & ERP Intern
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            CS student at NED University, building enterprise-grade web
            applications, AI-integrated platforms, and ERP solutions. Based in
            Karachi, Pakistan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-purple text-white font-medium hover-glow"
            >
              <FolderGit2 className="w-4 h-4" />
              View Projects
            </a>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover-glow cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            {[
              { n: "2+", l: "Years Coding" },
              { n: "2+", l: "Projects Built" },
              { n: "2", l: "Internships" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative float-anim">
            <div className="absolute -inset-6 rounded-full gradient-purple blur-3xl opacity-40" />
            <div className="absolute -inset-2 rounded-full gradient-purple opacity-70" />
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden glow-purple-strong border-4 border-white/10 bg-gradient-purple">
              <img
                src={profile}
                alt="Bakhtiar Sabir, MERN stack developer"
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 20%",
                  transform: "scale(1.4)",
                  transformOrigin: "50% 20%",
                }}
                onError={(e) => {
                  console.error("Image failed to load");
                  e.target.style.display = "none";
                  const parent = e.target.parentElement;
                  const fallback = document.createElement("div");
                  fallback.className = "w-full h-full gradient-purple flex items-center justify-center";
                  fallback.innerHTML = '<span class="text-6xl font-bold text-white">BS</span>';
                  parent.appendChild(fallback);
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-[0.3em]">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}