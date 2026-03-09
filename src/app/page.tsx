"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyPicolearn } from "@/components/WhyPicolearn";
import WhatAIDetects from "@/components/WhatAIDetects";
import { Features } from "@/components/Features";
import { AIInsightsEngine } from "@/components/AIInsightsEngine";
import { HowItWorks } from "@/components/HowItWorks";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Testimonials } from "@/components/Testimonials";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { FooterCTA } from "@/components/FooterCTA";
import { NeoMinimalFooter } from "@/components/ui/neo-minimal-footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatAIDetects />
        <WhyPicolearn />
        <Features />
        <AIInsightsEngine />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <Integrations />
        <CTA />
        <FooterCTA />
      </main>
      <NeoMinimalFooter />
    </>
  );
}
