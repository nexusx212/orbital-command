import { Reveal } from "@/components/shared/Reveal";
import { industries } from "@/data/site";

export const IndustriesSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Industries
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Infrastructure for the sectors that move economies
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => (
          <Reveal key={industry.name} delay={(i % 3) * 0.06}>
            <div className="gradient-border h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-lg font-semibold text-foreground">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
