import { Reveal } from "@/components/shared/Reveal";
import { Compass, Target } from "lucide-react";

export const VisionMission = () => (
  <section className="relative overflow-hidden bg-midnight py-24 text-midnight-foreground">
    <div className="absolute inset-0 bg-line-grid opacity-60" />
    <div className="absolute -right-20 top-10 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[150px] animate-glow-pulse" />
    <div className="container relative z-10">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Vision & Mission
        </span>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {[
          {
            icon: Compass,
            label: "Vision",
            body: "To become Africa's leading digital infrastructure company powering the continent's digital future.",
          },
          {
            icon: Target,
            label: "Mission",
            body: "To build intelligent, secure and scalable digital infrastructure platforms that transform critical industries and unlock opportunities across Africa.",
          },
        ].map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1}>
            <div className="glass h-full rounded-3xl p-8 lg:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {item.label}
              </p>
              <p className="mt-4 font-display text-2xl font-medium leading-snug lg:text-3xl">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
