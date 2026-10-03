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

export default function App() {
  const navSectionIds = navigationLinks.map((item) => item.id);
  const activeSection = useActiveSection(navSectionIds);

  return (
    <div className="portfolio-app-root">
      {/* Sticky Minimal Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
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

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
