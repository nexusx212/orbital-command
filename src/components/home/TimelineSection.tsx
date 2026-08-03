import { Reveal } from "@/components/shared/Reveal";
import { timeline } from "@/data/site";

export const TimelineSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our Journey
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            From concept to continental infrastructure
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-[15px] top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
        <div className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <div
                className={`relative flex flex-col gap-3 pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute left-2 top-2 h-3 w-3 rounded-full bg-brand-gradient ring-4 ring-background md:left-auto ${
                    i % 2 === 0 ? "md:-right-[6px]" : "md:-left-[6px]"
                  }`}
                />
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
