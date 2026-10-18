import React, { useState } from 'react';
import {
  Database,
  Zap,
  Cloud,
  ShieldCheck,
  Server,
  Share2,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

interface PillarModalData {
  title: string;
  description: string;
  badges: string[];
}

export const PillarsSection: React.FC = () => {
  const { corePillars } = PORTFOLIO_DATA;
  const [selectedPillar, setSelectedPillar] = useState<PillarModalData | null>(null);
  const { currentThemeConfig } = useAppTheme();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5" style={{ color: currentThemeConfig.accentHex }} />;
      case 'Zap':
        return <Zap className="w-5 h-5" style={{ color: currentThemeConfig.secondaryHex }} />;
      case 'Cloud':
        return <Cloud className="w-5 h-5" style={{ color: currentThemeConfig.accentHex }} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" style={{ color: currentThemeConfig.secondaryHex }} />;
      case 'Server':
        return <Server className="w-5 h-5" style={{ color: currentThemeConfig.accentHex }} />;
      case 'Share2':
        return <Share2 className="w-5 h-5" style={{ color: currentThemeConfig.secondaryHex }} />;
      default:
        return <Database className="w-5 h-5" style={{ color: currentThemeConfig.accentHex }} />;
    }
  };

  return (
    <section
      id="atuacao"
      className="py-12 lg:py-10 border-t scroll-mt-20"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="atuacaoTitle"
    >
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <div
            className="text-xs font-bold uppercase tracking-wider mb-2"
            style={{ color: currentThemeConfig.secondaryHex }}
          >
            Atuação Profissional
          </div>
          <h2 id="atuacaoTitle" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
            Dados, infraestrutura e confiabilidade
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Atuo na sustentação, evolução e confiabilidade de ambientes de dados críticos, unindo desenvolvimento de soluções em Python e SQL, tuning relacional em MySQL e Oracle e apoio pró-ativo a SRE.
          </p>
        </div>

        {/* Pillars Grid - NO company names in cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {corePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group p-4 rounded-xl border transition-all flex flex-col justify-between shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <div>
                <div
                  className="w-10 h-10 rounded-lg border flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: 'var(--bg-card-alt)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-[13px] text-slate-300 leading-[1.55] mb-4">
                  {pillar.description}
                </p>
              </div>

              <div>
                {/* Badges rendered cleanly without company names */}
                <div
                  className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 pt-3 border-t"
                  style={{ borderColor: 'var(--border-card)' }}
                >
                  {pillar.badges.map((badge, bIdx) => (
                    <React.Fragment key={badge}>
                      <span className="text-slate-200">{badge}</span>
                      {bIdx < pillar.badges.length - 1 && (
                        <span aria-hidden="true" style={{ color: currentThemeConfig.secondaryHex }}>·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPillar(pillar)}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors"
                  style={{ color: currentThemeConfig.accentHex }}
                >
                  <span>Ver escopo detalhado</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scope Detail Modal */}
      {selectedPillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="border rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-3 pr-8">
              {selectedPillar.title}
            </h3>

            <p className="text-sm text-slate-200 leading-relaxed mb-6">
              {selectedPillar.description}
            </p>

            <div className="space-y-3 mb-6">
              <h4
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: currentThemeConfig.secondaryHex }}
              >
                Competências & Práticas Aplicadas
              </h4>
              <div className="space-y-2">
                {selectedPillar.badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: currentThemeConfig.secondaryHex }}
                    />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t flex justify-end" style={{ borderColor: 'var(--border-card)' }}>
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors"
                style={{ backgroundColor: currentThemeConfig.accentHex }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
