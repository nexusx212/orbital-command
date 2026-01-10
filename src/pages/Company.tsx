import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Gem, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "National Impact",
    description: "We measure success by the communities and nations we connect, not just metrics.",
  },
  {
    icon: Gem,
    title: "Technical Excellence",
    description: "We build infrastructure-grade systems designed for decades of reliable operation.",
  },
  {
    icon: Shield,
    title: "Responsible Innovation",
    description: "We deploy technology thoughtfully, considering environmental and societal implications.",
  },
  {
    icon: Clock,
    title: "Long-term Thinking",
    description: "We make decisions with generational timescales in mind, not quarterly pressures.",
  },
];

const team = [
  {
    name: "Dr. Adaeze Okafor",
    role: "Chief Executive Officer",
    credential: "Former Director, Nigerian Space Agency",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    credential: "20+ years satellite systems engineering",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "VP of Operations",
    credential: "Ex-MTN Nigeria network infrastructure",
  },
  {
    name: "Dr. Sarah Thompson",
    role: "Head of Research",
    credential: "PhD Aerospace Engineering, MIT",
  },
];

const Company = () => {
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
              About Nexus X Industries
            </h1>
            <p 
              className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              A space-technology company building critical infrastructure 
              for emerging markets, starting with Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 sm:py-32 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nexus X Industries was founded to solve one of the most 
                persistent infrastructure challenges facing emerging markets: 
                reliable, resilient connectivity that reaches every citizen 
                and critical system.
              </p>
              <p>
                We believe that space-based infrastructure is not a luxury — 
                it is essential public utility infrastructure for the 21st 
                century. Terrestrial networks alone cannot cover the vast 
                territories, difficult terrain, and climate-vulnerable regions 
                that characterize much of the developing world.
              </p>
              <p>
                Our approach combines cutting-edge satellite technology with 
                deep understanding of local markets, regulatory environments, 
                and the specific needs of African nations. We build from orbit 
                what cannot reliably be built on the ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-space-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-card border border-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-space-surface border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            We're building infrastructure for generations. 
            Partner with us or join our team.
          </p>
          <Button asChild size="lg" className="glow-cyan">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Company;
