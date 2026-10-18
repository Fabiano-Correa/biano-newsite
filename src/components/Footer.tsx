import React from 'react';
import { ArrowUp, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const { currentThemeConfig } = useAppTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t text-sm no-print"
      style={{
        backgroundColor: 'var(--bg-card-alt)',
        borderColor: 'var(--border-card)',
        color: 'var(--text-platinum)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                {profile.name}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: currentThemeConfig.secondaryHex }}
              />
              <span
                className="text-xs font-mono font-bold"
                style={{ color: currentThemeConfig.accentHex }}
              >
                Dados & SRE
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Fabiano de Amaro Corrêa — Engenheiro de Dados & Especialista em Dados. Atuação em soluções de dados com Python e SQL, tuning relacional em MySQL e Oracle, integrações em nuvem AWS (ST-S3) e confiabilidade operacional (SRE).
            </p>
            <div
              className="text-xs font-mono font-bold uppercase tracking-wider"
              style={{ color: currentThemeConfig.secondaryHex }}
            >
              DESDE 1997 APAIXONADO · NA TI FORMALMENTE DESDE 2015
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="text-slate-300 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#atuacao" className="text-slate-300 hover:text-white transition-colors">
                  Atuação Profissional
                </a>
              </li>
              <li>
                <a href="#trajetoria" className="text-slate-300 hover:text-white transition-colors">
                  Trajetória em Estações
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-slate-300 hover:text-white transition-colors">
                  Projetos & IA
                </a>
              </li>
              <li>
                <a href="#curriculo" className="text-slate-300 hover:text-white transition-colors">
                  Currículo Oficial
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes & Conexões */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Conexões
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" style={{ color: currentThemeConfig.accentHex }} />
                  <span>LinkedIn Oficial</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram (@bianodati)</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] font-bold" style={{ borderColor: currentThemeConfig.secondaryHex, color: currentThemeConfig.secondaryHex }}>
                    C
                  </span>
                  <span>Credly (Badges Oficiais)</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5 text-rose-400" />
                  <span>YouTube (Biano da TI)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Scroll to Top */}
        <div
          className="mt-6 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400"
          style={{ borderColor: 'var(--border-card)' }}
        >
          <p>
            &copy; {new Date().getFullYear()} Fabiano de Amaro Corrêa · Dados, infraestrutura, confiabilidade e iniciativas de produtos.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
              color: 'var(--text-platinum)',
            }}
            aria-label="Voltar ao início da página"
          >
            <ArrowUp className="w-3.5 h-3.5" style={{ color: currentThemeConfig.secondaryHex }} />
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
