import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { platforms } from "@/data/site";
import { ArrowRight, Check } from "lucide-react";

export const EcosystemSection = () => (
  <section className="bg-surface-muted py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our Ecosystem
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Six platforms. One infrastructure layer.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Each platform stands alone — and compounds when connected.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform, i) => (
          <Reveal key={platform.slug} delay={(i % 3) * 0.08}>
            <article className="gradient-border group h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient">
                <platform.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{platform.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{platform.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {platform.description}
              </p>
              <ul className="mt-6 space-y-2">
                {platform.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold">
            <Link to="/platforms">
              View all platforms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
