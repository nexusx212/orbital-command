import { AlertTriangle, Wifi, MapPin } from "lucide-react";

const challenges = [
  {
    icon: Wifi,
    stat: "40%+",
    text: "of Nigerians lack reliable broadband access",
  },
  {
    icon: AlertTriangle,
    stat: "Critical",
    text: "Terrestrial networks fail during floods and outages",
  },
  {
    icon: MapPin,
    stat: "Essential",
    text: "Critical systems require resilient positioning and timing",
  },
];

export const WhyItMatters = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why It Matters
            </h2>
            <p className="text-muted-foreground text-lg">
              Nigeria-first infrastructure addressing real connectivity gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="text-center p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-2xl font-bold text-foreground mb-2">
                  {challenge.stat}
                </p>
                <p className="text-muted-foreground text-sm">
                  {challenge.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-display text-foreground max-w-2xl mx-auto leading-relaxed">
              "We build from orbit what cannot reliably be built on the ground."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
