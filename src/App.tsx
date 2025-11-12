import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SpacesSection } from './components/SpacesSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <SpacesSection />
      <GallerySection />
      <Footer />
    </div>;
}