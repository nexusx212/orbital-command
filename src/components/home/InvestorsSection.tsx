import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Globe2, Layers, Trophy, Map } from "lucide-react";

const pillars = [
  { icon: TrendingUp, title: "Investment Thesis", body: "Digital infrastructure companies become foundational to the economies they serve." },
  { icon: Globe2, title: "Market Opportunity", body: "54 countries, 1.4 billion people and a rapidly formalising digital economy." },
  { icon: Layers, title: "Scalability", body: "Shared platform primitives let each new product launch on existing rails." },
  { icon: Trophy, title: "Competitive Advantages", body: "Local regulatory depth combined with global engineering standards." },
  { icon: Map, title: "Roadmap", body: "Commercial launch, regional expansion, then global interconnection." },
];

export const InvestorsSection = () => (
  <section className="bg-surface-muted py-24">
    <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Investors</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Investing in Africa's Digital Infrastructure
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Digital infrastructure companies become foundational to economies. Nexus X Industries is
            building long-term infrastructure platforms that create sustainable value across multiple
            sectors.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-7 font-semibold">
            <Link to="/investors">
              Investor overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={(i % 2) * 0.08}>
            <div className="gradient-border h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <pillar.icon className="mb-4 h-5 w-5 text-primary" />
              <h3 className="font-display text-base font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
