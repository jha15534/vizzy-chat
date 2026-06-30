import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import FeatureSection from "../components/home/FeatureSection";
import HomeBusiness from "../components/home/HomeBusiness";
import HowItWorks from "../components/home/HowItWorks";
import WhatVizzyCreates from "../components/home/WhatVizzyCreates";
import ChatPreview from "../components/home/ChatPreview";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <HomeBusiness />
      <HowItWorks />
      <WhatVizzyCreates />
      <ChatPreview />
      <CTA />
      <Footer />
    </>
  );
}