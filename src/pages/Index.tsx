import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { FlagshipTeaser } from "@/components/home/FlagshipTeaser";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { FooterCTA } from "@/components/home/FooterCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <WhatWeDo />
      <FlagshipTeaser />
      <WhyItMatters />
      <FooterCTA />
    </Layout>
  );
};

export default Index;
