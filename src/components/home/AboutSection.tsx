import { Reveal } from "@/components/shared/Reveal";
import { ShieldCheck, Layers, Sparkles } from "lucide-react";

export const AboutSection = () => (
  <section className="py-24">
    <div className="container grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">About Nexus X</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Building the Digital Backbone of Africa
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Africa is undergoing one of the world's fastest digital transformations. Yet many
              industries still rely on fragmented systems that limit efficiency, growth and
              innovation.
            </p>
            <p>
              Nexus X Industries exists to solve this challenge by building secure, scalable,
              AI-powered digital infrastructure that enables seamless trade, healthcare, enterprise
              operations, digital identity and intelligent public services.
            </p>
            <p>
              Our platforms empower businesses, governments and communities with technology that
              drives inclusive economic growth.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {[
          {
            icon: Layers,
            title: "Infrastructure, not apps",
            body: "We build the primitives other systems depend on — identity, data, compute and trade rails.",
          },
          {
            icon: Sparkles,
            title: "Intelligence at the core",
            body: "Every platform ships with AI designed into its architecture from day one.",
          },
          {
            icon: ShieldCheck,
            title: "Security by default",
            body: "Encryption, zero-trust access and auditability across all workloads.",
          },
          {
            icon: Layers,
            title: "Interoperable by design",
            body: "Open APIs and standards so institutions can connect instead of rebuild.",
          },
        ].map((item, i) => (
          <Reveal key={item.title} delay={0.08 * i}>
            <div className="gradient-border h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
