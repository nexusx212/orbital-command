import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutSection } from "@/components/home/AboutSection";
import { VisionMission } from "@/components/home/VisionMission";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { WhyNexus } from "@/components/home/WhyNexus";
import { ImpactSection } from "@/components/home/ImpactSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { InvestorsSection } from "@/components/home/InvestorsSection";
import { NewsroomSection } from "@/components/home/NewsroomSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => (
  <Layout transparentNav>
    <HeroSection />
    <TrustSection />
    <AboutSection />
    <VisionMission />
    <EcosystemSection />
    <IndustriesSection />
    <TechnologySection />
    <WhyNexus />
    <ImpactSection />
    <TimelineSection />
    <InvestorsSection />
    <NewsroomSection />
    <CTASection />
  </Layout>
);

export default Index;
