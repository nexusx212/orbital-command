import { Reveal } from "@/components/shared/Reveal";
import { industries } from "@/data/site";
import sectorHealth from "@/assets/sector-health.jpg";
import sectorTrade from "@/assets/sector-trade.jpg";
import sectorCloud from "@/assets/sector-cloud.jpg";
import sectorCity from "@/assets/sector-city.jpg";

const images = [sectorHealth, sectorTrade, sectorCloud, sectorCity];

export const IndustriesSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Industries
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Infrastructure for the sectors that move economies
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => (
          <Reveal key={industry.name} delay={(i % 3) * 0.06}>
            <div className="gradient-border group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-36 overflow-hidden">
                <img
                  src={images[i % images.length]}
                  alt={`${industry.name} infrastructure`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
              </div>
              <div className="p-6 pt-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
