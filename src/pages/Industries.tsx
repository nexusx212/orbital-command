import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CTASection } from "@/components/home/CTASection";

const Industries = () => (
  <Layout>
    <PageHero
      eyebrow="Industries"
      title={<>Digital infrastructure for critical sectors</>}
      description="From healthcare and trade to energy and smart cities, our platforms give institutions the rails they need to operate, scale and serve at national level."
    />
    <IndustriesSection />
    <ImpactSection />
    <CTASection />
  </Layout>
);

export default Industries;
