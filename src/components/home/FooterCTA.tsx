import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export const FooterCTA = () => {
  return (
    <section className="py-24 sm:py-32 bg-space-surface border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Let's build the future of connectivity — together.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Partner with Nexus X Industries to bring resilient space-based 
          infrastructure to emerging markets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="glow-cyan">
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary"
          >
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
