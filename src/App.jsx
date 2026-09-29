import React from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/common/CustomCursor';
import { GrainOverlay } from './components/common/GrainOverlay';
import { SectionProgress } from './components/common/SectionProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { SelectedWork } from './sections/SelectedWork';
import { TerraRover } from './sections/TerraRover';
import { AiWorkflows } from './sections/AiWorkflows';
import { Experience } from './sections/Experience';
import { Hackathons } from './sections/Hackathons';
import { Technologies } from './sections/Technologies';
import { Contact } from './sections/Contact';

import { navigationLinks } from './data/navigation';
import { useActiveSection } from './hooks/useActiveSection';

function PortfolioApp() {
  const sectionIds = navigationLinks.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="portfolio-app-root">
      {/* Visual Ambiance & Cursor Layers */}
      <GrainOverlay />
      <CustomCursor />

      {/* Global Navigation Layers */}
      <Navbar activeSection={activeSection} />
      <SectionProgress activeSection={activeSection} />

      {/* Main Editorial Content Sequence */}
      <main id="main-content" role="main">
        <Hero />
        <div className="section-divider-gold" />
        <About />
        <div className="section-divider" />
        <Expertise />
        <div className="section-divider-gold" />
        <SelectedWork />
        <div className="section-divider-gold" />
        <TerraRover />
        <div className="section-divider" />
        <AiWorkflows />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Hackathons />
        <div className="section-divider-gold" />
        <Technologies />
        <div className="section-divider" />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CursorProvider>
      <PortfolioApp />
    </CursorProvider>
  );
}
