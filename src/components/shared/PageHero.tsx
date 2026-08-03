import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-midnight-gradient text-midnight-foreground">
    <div className="absolute inset-0 bg-line-grid opacity-70" />
    <div className="absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[140px] animate-glow-pulse" />
    <div className="container relative z-10 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-midnight-foreground/70">{description}</p>
        {children && <div className="mt-10">{children}</div>}
      </motion.div>
    </div>
  </section>
);
