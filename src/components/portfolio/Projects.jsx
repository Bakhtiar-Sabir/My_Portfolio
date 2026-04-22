import { Section } from "./Section";
import { Star } from "lucide-react";

// Import your project screenshots
// Make sure these image files exist in your src/assets/ folder
import shopsphereImg from "../../assets/shopsphere.jpg";
import pinterestImg from "../../assets/pinterest.jpg";

const projects = [
  {
    name: "ShopSphere",
    year: "2025",
    tag: "Featured",
    subtitle: "AI-Powered Full Stack E-Commerce Platform",
    desc: "A modern MERN-based e-commerce platform integrating Google Gemini AI for personalized product recommendations, intelligent search, and conversational shopping assistance. Includes secure JWT authentication, Stripe payments, admin dashboards, and a responsive React frontend.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Gemini AI", "Tailwind"],
    image: shopsphereImg, // Add image reference
    imageAlt: "ShopSphere E-commerce platform dashboard showing products and AI recommendations"
  },
  {
    name: "Pinterest Platform",
    year: "2024",
    tag: "MERN Clone",
    subtitle: "Pinterest Clone — Full Stack",
    desc: "A full-featured Pinterest-style content sharing platform built with the MERN stack. Features image uploads, user profiles, boards, follow system, and infinite-scroll discovery feed with optimized image rendering and real-time interactions.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    image: pinterestImg, // Add image reference
    imageAlt: "Pinterest clone platform showing image grid and user interface"
  },
];

export function Projects() {
  // Handle image loading errors
  const handleImageError = (e, projectName) => {
    console.error(`Failed to load image for ${projectName}`);
    e.target.style.display = 'none';
    // Show fallback
    const fallback = e.target.nextElementSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <Section id="projects" eyebrow="Projects" title="What I've Built">
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="glass-strong rounded-3xl p-7 hover-glow flex flex-col"
          >
            {/* Project Image Container */}
            <div className="relative w-full h-48 mb-5 rounded-xl overflow-hidden bg-purple-900/20">
              {/* Actual Image */}
              <img
                src={p.image}
                alt={p.imageAlt}
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                onError={(e) => handleImageError(e, p.name)}
              />
              {/* Fallback if image fails to load */}
              <div className="absolute inset-0 gradient-purple items-center justify-center hidden">
                <span className="text-2xl font-bold text-white opacity-70">{p.name}</span>
              </div>
            </div>

            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{p.year}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-primary">
                    <Star className="w-3 h-3" /> {p.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mt-2">{p.name}</h3>
                <div className="text-sm text-primary/80">{p.subtitle}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}