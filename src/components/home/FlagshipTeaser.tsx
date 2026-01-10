import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Radio } from "lucide-react";

export const FlagshipTeaser = () => {
  return (
    <section className="py-24 sm:py-32 bg-space-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Our Flagship Platform
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Project Helios-NG
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              An intelligent Low-Earth-Orbit satellite swarm delivering 
              direct-to-device connectivity and precision services for 
              unserved regions.
            </p>
            <Button asChild size="lg" className="glow-cyan">
              <Link to="/product">
                View Product
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Orbital rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-orbit-slow" />
              <div className="absolute inset-8 border border-primary/15 rounded-full animate-orbit-medium" style={{ animationDirection: "reverse" }} />
              <div className="absolute inset-16 border border-primary/10 rounded-full animate-orbit-fast" />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center glow-cyan-strong">
                  <Globe className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Satellite points */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-primary animate-glow-pulse" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
              <div className="absolute left-8 top-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
              </div>
            </div>

            {/* Feature badges */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-foreground">Low Latency</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
                <Radio className="w-4 h-4 text-primary" />
                <span className="text-foreground">Direct-to-Device</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
