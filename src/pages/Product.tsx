import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Satellite, 
  Smartphone, 
  Radio, 
  Globe,
  Zap,
  Shield,
  Clock
} from "lucide-react";

const howItWorks = [
  {
    step: "01",
    title: "Satellite Swarm Deployment",
    description: "LEO constellation of intelligent satellites deployed at optimal orbital positions.",
  },
  {
    step: "02",
    title: "Direct-to-Device Signal",
    description: "Satellites communicate directly with standard mobile devices without ground infrastructure.",
  },
  {
    step: "03",
    title: "Autonomous Network Management",
    description: "AI-powered systems optimize coverage, handoffs, and resource allocation in real-time.",
  },
  {
    step: "04",
    title: "Ground Integration",
    description: "Seamless integration with existing mobile networks and national infrastructure.",
  },
];

const useCases = [
  "Rural broadband coverage for underserved communities",
  "Emergency connectivity during natural disasters",
  "Precision positioning for autonomous systems",
  "Maritime and aviation communications",
  "Government and defense applications",
  "IoT connectivity for agriculture and utilities",
];

const roadmap = [
  { year: "2026", milestone: "Technology demonstration and pilot programs" },
  { year: "2027", milestone: "Initial constellation deployment (Phase 1)" },
  { year: "2028", milestone: "Commercial service launch in Nigeria" },
  { year: "2029+", milestone: "Pan-African expansion and scale" },
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4 opacity-0 animate-fade-in">
              Our Flagship Platform
            </p>
            <h1 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Project Helios-NG
            </h1>
            <p 
              className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              An intelligent Low-Earth-Orbit satellite swarm delivering 
              direct-to-device connectivity and precision services for 
              Nigeria and emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* System Diagram */}
      <section className="py-24 sm:py-32 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Satellite */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <Satellite className="w-12 h-12 text-primary" />
                </div>
                <p className="font-display font-semibold text-foreground">LEO Satellite Swarm</p>
                <p className="text-sm text-muted-foreground">Intelligent constellation</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-primary/40" />
              </div>
              <div className="md:hidden">
                <div className="w-px h-8 bg-primary/40" />
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
                <p className="font-display font-semibold text-foreground">Standard Devices</p>
                <p className="text-sm text-muted-foreground">No special hardware</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-primary/40" />
              </div>
              <div className="md:hidden">
                <div className="w-px h-8 bg-primary/40" />
              </div>

              {/* Ground */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <Radio className="w-12 h-12 text-primary" />
                </div>
                <p className="font-display font-semibold text-foreground">Ground Network</p>
                <p className="text-sm text-muted-foreground">Seamless integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 sm:py-32 bg-space-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Challenge
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Emerging markets face persistent connectivity gaps that 
                  terrestrial infrastructure cannot solve alone. Difficult terrain, 
                  limited investment, and natural disasters create barriers to 
                  reliable coverage.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span>Remote terrain makes ground infrastructure prohibitively expensive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span>Floods, storms, and outages frequently disrupt terrestrial networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span>Critical systems lack resilient positioning and timing sources</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto bg-card rounded-2xl border border-border p-8 flex items-center justify-center">
                <Globe className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Helios-NG Solution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Space-based infrastructure that complements and extends 
              terrestrial networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Direct-to-Device
              </h3>
              <p className="text-muted-foreground">
                Connect standard smartphones directly from orbit without 
                specialized hardware or modifications.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Autonomous Swarm
              </h3>
              <p className="text-muted-foreground">
                AI-powered satellite constellation that self-optimizes 
                coverage, capacity, and resilience.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Low Latency
              </h3>
              <p className="text-muted-foreground">
                LEO altitude enables responsive connectivity suitable for 
                voice, data, and real-time applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-space-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 sm:py-32 bg-space-surface border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Roadmap
            </h2>
            <div className="space-y-8">
              {roadmap.map((item, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="font-display text-2xl font-bold text-primary w-20 flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border pl-8 relative">
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                    <p className="text-foreground text-lg">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            We work with national operators, government agencies, and 
            strategic partners to deploy Helios-NG infrastructure.
          </p>
          <Button asChild size="lg" className="glow-cyan">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
