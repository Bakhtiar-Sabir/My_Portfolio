import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full glass text-xs tracking-widest uppercase text-muted-foreground mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}