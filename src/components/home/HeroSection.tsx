import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { OrbitalCanvas } from "./OrbitalCanvas";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Orbital animation */}
      <div className="absolute inset-0">
        <OrbitalCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Building the{" "}
            <span className="text-gradient">Orbital Intelligence Layer</span>{" "}
            for Emerging Markets
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Nexus X Industries designs space-based and digital infrastructure 
            that delivers resilient connectivity, precision services, and 
            national-scale capability — starting with Nigeria.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="glow-cyan text-base px-8 py-6"
            >
              <Link to="/product">
                Explore Project Helios-NG
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-base px-8 py-6 border-border hover:bg-secondary"
            >
              <Link to="/contact">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
