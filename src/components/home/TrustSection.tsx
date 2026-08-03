import { Reveal } from "@/components/shared/Reveal";
import { recognitions } from "@/data/site";
import { Award } from "lucide-react";

export const TrustSection = () => (
  <section className="border-y border-border bg-surface-muted py-16">
    <div className="container">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Recognized by Leading Innovation Ecosystems
        </p>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {recognitions.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.07}>
            <div className="gradient-border h-full rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <Award className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-display text-lg font-semibold text-foreground">{item.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
