import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { newsroom } from "@/data/site";
import { CTASection } from "@/components/home/CTASection";

const News = () => (
  <Layout>
    <PageHero
      eyebrow="Newsroom"
      title={<>Research, announcements and perspectives</>}
      description="How we think about AI, healthcare, trade, innovation and government technology across the continent."
    />

    <section className="py-24">
      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsroom.map((post, i) => (
          <Reveal key={post.title} delay={(i % 3) * 0.08}>
            <article className="gradient-border flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default News;
