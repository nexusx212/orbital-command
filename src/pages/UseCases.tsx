import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Wifi,
  AlertTriangle,
  Clock,
  Ship,
  Building,
  Tractor
} from "lucide-react";

const useCases = [
  {
    icon: Wifi,
    title: "Rural Connectivity",
    description: "Bringing reliable broadband to underserved rural communities where terrestrial infrastructure is not viable.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "Resilient connectivity for first responders and disaster relief operations when ground networks fail.",
  },
  {
    icon: Clock,
    title: "Precision Timing",
    description: "Highly accurate positioning and timing services for critical infrastructure, finance, and autonomous systems.",
  },
  {
    icon: Ship,
    title: "Maritime & Aviation",
    description: "Seamless connectivity for vessels and aircraft operating beyond terrestrial network reach.",
  },
  {
    icon: Building,
    title: "Government Infrastructure",
    description: "Secure, sovereign connectivity solutions for national security and government operations.",
  },
  {
    icon: Tractor,
    title: "IoT & Agriculture",
    description: "Connecting sensors, equipment, and monitoring systems across vast agricultural and industrial areas.",
  },
];

const UseCases = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in"
            >
              Use Cases
            </h1>
            <p 
              className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Space-based infrastructure serving critical sectors 
              where terrestrial networks fall short.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-space-surface border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Have a specific use case in mind?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            We work with organizations across sectors to design 
            customized connectivity solutions.
          </p>
          <Button asChild size="lg" className="glow-cyan">
            <Link to="/contact">
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
