import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { platforms } from "@/data/site";
import { Check } from "lucide-react";
import { TechnologySection } from "@/components/home/TechnologySection";
import { CTASection } from "@/components/home/CTASection";

const Platforms = () => (
  <Layout>
    <PageHero
      eyebrow="Platforms"
      title={<>The Nexus X platform ecosystem</>}
      description="Six interoperable platforms covering trade, health, AI, cloud, identity and data — designed to run independently and compound together."
    />

    <section className="py-24">
      <div className="container space-y-8">
        {platforms.map((platform, i) => (
          <Reveal key={platform.slug} delay={0.04 * i}>
            <article className="gradient-border grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elevated lg:grid-cols-[1fr_1fr] lg:p-12">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient">
                  <platform.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">{platform.name}</h2>
                <p className="mt-2 font-semibold text-primary">{platform.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {platform.description}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-muted p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Capabilities
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <TechnologySection />
    <CTASection />
  </Layout>
);

export default Platforms;
