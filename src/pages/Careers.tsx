import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { openRoles } from "@/data/site";
import { ArrowRight, Globe2, GraduationCap, HeartHandshake, Rocket } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Work on foundations", body: "Ship systems that other companies and governments build on top of." },
  { icon: Globe2, title: "Remote-friendly", body: "Distributed teams across Nigeria and the wider continent." },
  { icon: GraduationCap, title: "Continuous learning", body: "Budget and time for research, conferences and certification." },
  { icon: HeartHandshake, title: "Real ownership", body: "Small teams, high trust and meaningful equity participation." },
];

const Careers = () => (
  <Layout>
    <PageHero
      eyebrow="Careers"
      title={<>Join us in building technology that shapes Africa's future</>}
      description="We are hiring engineers, designers and domain experts who want their work to matter at national scale."
    >
      <Button asChild size="lg" className="rounded-full px-7 font-semibold">
        <Link to="/contact">
          Send us your profile
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </PageHero>

    <section className="py-24">
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <Reveal key={benefit.title} delay={(i % 4) * 0.07}>
            <div className="gradient-border h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <benefit.icon className="mb-4 h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold text-foreground">{benefit.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="bg-surface-muted py-24">
      <div className="container">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Open roles</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {openRoles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.04}>
              <div className="flex flex-col gap-4 p-6 transition-colors hover:bg-muted/60 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{role.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.team} · {role.location} · {role.type}
                  </p>
                </div>
                <Button asChild variant="outline" className="rounded-full font-semibold sm:w-auto">
                  <Link to="/contact">Apply</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
