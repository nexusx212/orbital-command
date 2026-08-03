import { Reveal } from "@/components/shared/Reveal";
import { technologies } from "@/data/site";
import {
  Brain,
  Boxes,
  Cloud,
  Link2,
  Lock,
  Radio,
  Code2,
  Database,
  LineChart,
  Fingerprint,
} from "lucide-react";

const icons = [Brain, Boxes, Cloud, Link2, Lock, Radio, Code2, Database, LineChart, Fingerprint];

export const TechnologySection = () => (
  <section className="relative overflow-hidden bg-midnight py-24 text-midnight-foreground">
    <div className="absolute inset-0 bg-line-grid opacity-60" />
    <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px] animate-glow-pulse" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Technology
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            The engineering stack behind every platform
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {technologies.map((tech, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={tech} delay={(i % 5) * 0.06}>
              <div className="glass group h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                <Icon className="mx-auto mb-4 h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                <p className="text-sm font-medium leading-snug">{tech}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
