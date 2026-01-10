import { Satellite, Smartphone, Shield } from "lucide-react";

const services = [
  {
    icon: Satellite,
    title: "Intelligent Space Systems",
    description: "LEO satellite platforms built for resilience, scale, and autonomy.",
  },
  {
    icon: Smartphone,
    title: "Direct-to-Device Connectivity",
    description: "Connecting standard mobile devices directly from orbit.",
  },
  {
    icon: Shield,
    title: "Precision & Resilience Services",
    description: "Positioning, timing, and emergency connectivity for critical systems.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Space-based infrastructure designed for emerging markets and critical national systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
