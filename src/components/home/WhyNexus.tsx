import { Reveal } from "@/components/shared/Reveal";
import { differentiators } from "@/data/site";
import { ShieldCheck, TrendingUp, Sparkles, Cloud, MapPin, Globe2 } from "lucide-react";

const icons = [ShieldCheck, TrendingUp, Sparkles, Cloud, MapPin, Globe2];

export const WhyNexus = () => (
  <section className="bg-surface-muted py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Why Nexus X
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Engineered for institutions that cannot fail
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="gradient-border h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
