import { Reveal } from "@/components/shared/Reveal";
import { Counter } from "@/components/shared/Counter";
import { impactStats } from "@/data/site";

export const ImpactSection = () => (
  <section className="relative overflow-hidden bg-midnight-gradient py-24 text-midnight-foreground">
    <div className="absolute inset-0 bg-line-grid opacity-60" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Impact</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            The scale we are building for
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {impactStats.map((stat, i) => (
          <Reveal key={stat.label} delay={(i % 3) * 0.08}>
            <div className="glass h-full rounded-3xl p-8">
              <p className="font-display text-4xl font-bold text-gradient lg:text-5xl">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  display={stat.display}
                />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-midnight-foreground/70">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
