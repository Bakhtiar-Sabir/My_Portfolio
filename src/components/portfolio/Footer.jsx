import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 py-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© 2026 Bakhtiar Sabir. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <a 
            href="https://linkedin.com/in/bakhtiar-sabir" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn" 
            className="w-9 h-9 grid place-items-center rounded-lg glass hover-glow"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com/Bakhtiar-Sabir" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub" 
            className="w-9 h-9 grid place-items-center rounded-lg glass hover-glow"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a 
            href="mailto:bakhtiar.sabir025@gmail.com" 
            aria-label="Email" 
            className="w-9 h-9 grid place-items-center rounded-lg glass hover-glow"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <div>Built with React & Tailwind CSS</div>
      </div>
    </footer>
  );
}