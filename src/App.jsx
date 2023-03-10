import React from 'react';
import { Layout } from './components/Layout/Layout';
import { RoadmapSection } from './components/RoadmapSection/RoadmapSection';
import { CommunitySection } from './components/CommunitySection/CommunitySection';
import { PartnerSection } from './components/PartnerSection/PartnerSection';
import { StakingOptionsSection } from './components/StakingOptionsSection/StakingOptionsSection';
import { HeroSection } from './components/HeroSection/HeroSection';
import { DualInvestmentSection } from './components/DualInvestmentSection/DualInvestmentSection';
import { CallToActionSection } from './components/CallToActionSection/CallToActionSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <DualInvestmentSection />
      <StakingOptionsSection />
      <RoadmapSection />
      <CallToActionSection />
      <CommunitySection />
      <PartnerSection />
    </Layout>
  );
}

export default App;
