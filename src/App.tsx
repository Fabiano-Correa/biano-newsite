import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { TrajectoryStations } from './components/TrajectoryStations';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveResume } from './components/InteractiveResume';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'atuacao', 'trajetoria', 'projetos', 'curriculo', 'contato'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleNavigateToTrajectory = () => {
    const el = document.getElementById('trajetoria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToResume = () => {
    const el = document.getElementById('curriculo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResumePrint = () => {
    const el = document.getElementById('curriculo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-platinum)',
      }}
    >
      {/* Top Bar Header */}
      <Header
        activeSection={activeSection}
        onOpenResumePrint={handleOpenResumePrint}
      />

      {/* Main Content */}
      <main id="conteudo" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Hero
          onNavigateToTrajectory={handleNavigateToTrajectory}
          onNavigateToResume={handleNavigateToResume}
        />

        <PillarsSection />

        <TrajectoryStations />

        <ProjectsSection />

        <InteractiveResume />

        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
