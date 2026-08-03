import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { newsroom } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NewsroomSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Newsroom</span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold text-foreground sm:text-4xl">
            Research and perspectives from our teams
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <Link to="/news">
              All articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {newsroom.slice(0, 3).map((post, i) => (
          <Reveal key={post.title} delay={i * 0.08}>
            <article className="gradient-border h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {post.category}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
