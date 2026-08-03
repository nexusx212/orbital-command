import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AboutSection } from "@/components/home/AboutSection";
import { VisionMission } from "@/components/home/VisionMission";
import { TimelineSection } from "@/components/home/TimelineSection";
import { WhyNexus } from "@/components/home/WhyNexus";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Company = () => (
  <Layout>
    <PageHero
      eyebrow="Company"
      title={<>We build infrastructure — not just software</>}
      description="Nexus X Industries Ltd. is a Nigerian technology company building AI-powered digital infrastructure platforms that transform trade, healthcare, finance, education, governance and enterprise operations across Africa."
    />
    <AboutSection />
    <VisionMission />
    <TrustSection />
    <TimelineSection />
    <WhyNexus />
    <CTASection />
  </Layout>
);

export default Company;
