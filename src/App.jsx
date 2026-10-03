import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { WhatIBuild } from './sections/WhatIBuild';
import { SelectedWork } from './sections/SelectedWork';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

import { StarfieldParticles } from './components/3d/StarfieldParticles';
import { navigationLinks } from './data/navigation';
import { useActiveSection } from './hooks/useActiveSection';

const NAV_SECTION_IDS = navigationLinks.map((item) => item.id);

export default function App() {
  const activeSection = useActiveSection(NAV_SECTION_IDS);

  return (
    <div className="portfolio-app-root">
      {/* 3D Cosmic Background Particle System */}
      <StarfieldParticles />

      {/* Floating Black Glass HUD Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections in Black Glass Aesthetics */}
      <main id="main-content" role="main">
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
  );
}
