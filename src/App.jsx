import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { WhatIBuild } from './sections/WhatIBuild';
import { SelectedWork } from './sections/SelectedWork';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

import { ThreeBackground3D } from './components/3d/ThreeBackground3D';
import { KiboriPreloader } from './components/ui/KiboriPreloader';
import { navigationLinks } from './data/navigation';
import { useActiveSection } from './hooks/useActiveSection';

const NAV_SECTION_IDS = navigationLinks.map((item) => item.id);

export default function App() {
  const activeSection = useActiveSection(NAV_SECTION_IDS);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 3D Kibori Preloader Intro */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <KiboriPreloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="portfolio-app-root">
        {/* Real Full-Bleed 3D WebGL Three.js Background with Wave, Floating Shards, & Parallax */}
        <ThreeBackground3D />

        {/* Floating Black Glass HUD Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections in Black Glass Aesthetics */}
        <main id="main-content" role="main" style={{ position: 'relative', zIndex: 2 }}>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <WhatIBuild />
          <div className="section-divider" />
          <SelectedWork />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Contact />
        </main>

        {/* Obsidian Black Glass Footer */}
        <Footer />
      </div>
    </>
  );
}
