import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { TechnologySection } from "@/components/home/TechnologySection";
import { CTASection } from "@/components/home/CTASection";
import { Beaker, Brain, Rocket, Users } from "lucide-react";

const labs = [
  {
    icon: Brain,
    title: "Applied AI Lab",
    body: "Model routing, agent orchestration and evaluation tooling tuned for African data and connectivity conditions.",
  },
  {
    icon: Beaker,
    title: "Infrastructure Research",
    body: "Edge delivery, data residency and resilient network design for markets with variable power and bandwidth.",
  },
  {
    icon: Rocket,
    title: "Venture Studio",
    body: "Turning validated infrastructure primitives into new commercial platforms with dedicated teams.",
  },
  {
    icon: Users,
    title: "Ecosystem Partnerships",
    body: "Working with governments, universities and development agencies to translate research into deployment.",
  },
];

const Innovation = () => (
  <Layout>
    <PageHero
      eyebrow="Innovation"
      title={<>Where our next infrastructure layers are invented</>}
      description="Our research and venture teams build the primitives that become tomorrow's Nexus X platforms — grounded in the operating realities of African markets."
    />

    <section className="py-24">
      <div className="container grid gap-6 md:grid-cols-2">
        {labs.map((lab, i) => (
          <Reveal key={lab.title} delay={(i % 2) * 0.08}>
            <div className="gradient-border h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <lab.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">{lab.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lab.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <TechnologySection />
    <CTASection />
  </Layout>
);

export default Innovation;
