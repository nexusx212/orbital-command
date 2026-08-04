import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaNetwork from "@/assets/cta-network.jpg";

export const CTASection = () => (
  <section className="relative overflow-hidden bg-midnight-gradient py-24 text-midnight-foreground">
    <img
      src={ctaNetwork}
      alt="Connected digital network across Africa"
      loading="lazy"
      width={1600}
      height={912}
      className="absolute inset-0 h-full w-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-midnight/60" />
    <div className="absolute inset-0 bg-line-grid opacity-60" />
    <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[160px] animate-glow-pulse" />

    <div className="container relative z-10 text-center">
      <Reveal>
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Building the Digital Infrastructure Powering Africa's Future
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-midnight-foreground/70">
          Partner with us to deploy secure, intelligent infrastructure across your institution,
          market or country.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-7 text-base font-semibold shadow-elevated">
            <Link to="/contact">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-midnight-foreground/25 bg-transparent px-7 text-base font-semibold text-midnight-foreground hover:bg-midnight-foreground/10 hover:text-midnight-foreground"
          >
            <Link to="/careers">Join the team</Link>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
