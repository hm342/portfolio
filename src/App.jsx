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

import { navigationLinks } from './data/navigation';
import { useActiveSection } from './hooks/useActiveSection';

const NAV_SECTION_IDS = navigationLinks.map((item) => item.id);

export default function App() {
  const activeSection = useActiveSection(NAV_SECTION_IDS);

  return (
    <div className="portfolio-app-root">
      {/* Sticky Minimal Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections with Light → Dark → Light → Dark Visual Rhythm */}
      <main id="main-content" role="main">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <WhatIBuild />
        <SelectedWork />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
