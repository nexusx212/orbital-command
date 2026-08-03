import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { InvestorsSection } from "@/components/home/InvestorsSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { CTASection } from "@/components/home/CTASection";

const Investors = () => (
  <Layout>
    <PageHero
      eyebrow="Investors"
      title={<>Investing in Africa's Digital Infrastructure</>}
      description="Digital infrastructure companies become foundational to economies. We are building long-term platforms that create sustainable value across multiple sectors."
    />
    <InvestorsSection />
    <ImpactSection />
    <TimelineSection />
    <CTASection />
  </Layout>
);

export default Investors;
