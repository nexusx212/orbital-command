import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobeCanvas } from "./GlobeCanvas";
import { Counter } from "@/components/shared/Counter";
import heroBackground from "@/assets/hero-background.jpg";

const heroStats = [
  { value: 54, label: "African Countries" },
  { value: 100, suffix: "M+", label: "Potential Users" },
  { value: 99.98, suffix: "%", label: "Target Network Uptime", display: "99.98%" },
  { value: 100, prefix: "$", suffix: "B+", label: "Economic Enablement" },
];

export const HeroSection = () => (
  <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-midnight-gradient pt-24 text-midnight-foreground">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-midnight/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
    </div>
    <div className="absolute inset-0 bg-line-grid opacity-70" />
    <div className="absolute -left-24 top-24 h-[380px] w-[380px] rounded-full bg-primary/25 blur-[150px] animate-glow-pulse" />
    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[160px] animate-glow-pulse" />

    <div className="container relative z-10 grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-midnight-foreground/15 bg-midnight-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Africa's Digital Infrastructure Company
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 font-display text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-[3.75rem]"
        >
          Building Africa's Digital Infrastructure for the{" "}
          <span className="text-gradient">Next Generation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-midnight-foreground/70"
        >
          We develop AI-powered digital infrastructure that enables governments, enterprises and
          millions of people to participate in Africa's digital economy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-7 text-base font-semibold shadow-elevated">
            <Link to="/platforms">
              Explore Our Platforms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-midnight-foreground/25 bg-transparent px-7 text-base font-semibold text-midnight-foreground hover:bg-midnight-foreground/10 hover:text-midnight-foreground"
          >
            <Link to="/contact">Partner With Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-5 text-base font-semibold text-midnight-foreground/80 hover:bg-midnight-foreground/10 hover:text-midnight-foreground"
          >
            <Link to="/innovation">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Our Vision
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-4 text-center sm:px-3 sm:py-5"
            >
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                {stat.display ? (
                  stat.display
                ) : (
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1800}
                  />
                )}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-midnight-foreground/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative h-[380px] sm:h-[460px] lg:h-[560px]"
      >
        <GlobeCanvas />
        <div className="glass absolute left-0 top-8 hidden rounded-2xl px-5 py-4 animate-float sm:block">
          <p className="text-xs uppercase tracking-[0.14em] text-midnight-foreground/55">Network uptime</p>
          <p className="mt-1 font-display text-2xl font-semibold text-midnight-foreground">99.98%</p>
        </div>
        <div className="glass absolute bottom-10 right-0 hidden rounded-2xl px-5 py-4 animate-float-slow sm:block">
          <p className="text-xs uppercase tracking-[0.14em] text-midnight-foreground/55">Countries in scope</p>
          <p className="mt-1 font-display text-2xl font-semibold text-midnight-foreground">54</p>
        </div>
      </motion.div>
    </div>
  </section>
);
