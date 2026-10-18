import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useAppTheme } from '../context/ThemeContext';

interface HeaderProps {
  activeSection: string;
  onOpenResumePrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenResumePrint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentThemeConfig } = useAppTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero', id: 'hero' },
    { label: 'Atuação', href: '#atuacao', id: 'atuacao' },
    { label: 'Trajetória', href: '#trajetoria', id: 'trajetoria' },
    { label: 'Projetos & IA', href: '#projetos', id: 'projetos' },
    { label: 'Currículo', href: '#curriculo', id: 'curriculo' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print ${
        isScrolled
          ? 'backdrop-blur-md shadow-lg py-3.5 border-b'
          : 'bg-transparent py-5'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: isScrolled ? 'var(--border-card)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Brand with dot */}
          <a
            href="#hero"
            className="flex flex-col group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 rounded"
          >
            <div className="flex items-center text-xl font-bold tracking-tight text-white group-hover:opacity-90 transition-opacity">
              <span>fabiano</span>
              <span
                className="w-1.5 h-1.5 rounded-full ml-0.5 inline-block"
                style={{ backgroundColor: currentThemeConfig.secondaryHex }}
              />
            </div>
            <span
              className="text-[11px] font-medium tracking-wide"
              style={{ color: currentThemeConfig.accentHex }}
            >
              Dados · Infraestrutura · Confiabilidade
            </span>
          </a>

          {/* Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive ? 'font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                  style={{
                    color: isActive ? currentThemeConfig.accentHex : undefined,
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                      style={{ backgroundColor: currentThemeConfig.accentHex }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action buttons + Theme Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Switcher */}
            <ThemeSwitcher />

            <button
              onClick={onOpenResumePrint}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
                color: 'var(--text-platinum)',
              }}
              title="Visualizar currículo para impressão ou download em PDF"
            >
              <FileDown className="w-3.5 h-3.5" style={{ color: currentThemeConfig.accentHex }} />
              <span>PDF CV</span>
            </button>

            <a
              href="#contato"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 font-medium"
              style={{
                backgroundColor: currentThemeConfig.accentHex,
                color: '#ffffff',
              }}
            >
              Contato
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-card)',
          }}
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border-card)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumePrint();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg border text-white"
              style={{
                backgroundColor: 'var(--bg-card-alt)',
                borderColor: 'var(--border-card)',
              }}
            >
              <FileDown className="w-4 h-4" style={{ color: currentThemeConfig.accentHex }} />
              <span>Ver Currículo para Impressão / PDF</span>
            </button>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-xs font-bold rounded-lg text-white"
              style={{
                backgroundColor: currentThemeConfig.accentHex,
              }}
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
