import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowDown, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

export const TrajectoryStations: React.FC = () => {
  const { trajectoryStations } = PORTFOLIO_DATA;
  const [expandedId, setExpandedId] = useState<string | null>('estacao-11');
  const { currentThemeConfig } = useAppTheme();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const scrollToCurrent = () => {
    const el = document.getElementById('estacao-11');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setExpandedId('estacao-11');
    }
  };

  return (
    <section
      id="trajetoria"
      className="py-24 border-t"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="trajetoriaTitle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header directly inspired by ideia 1.png & ideia2.png */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: currentThemeConfig.secondaryHex }}
            >
              LINHA F · MINHA TRAJETÓRIA
            </div>
            <h2 id="trajetoriaTitle" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Nem toda trajetória é uma linha reta.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-xl">
              Algumas estações foram escolhas conscientes. Outras, desafios e novas responsabilidades de vida. Todas fazem parte de quem sou profissionalmente.
            </p>
          </div>

          {/* Legend inspired by ideia 1.png */}
          <div
            className="p-6 rounded-2xl border shadow-xl space-y-4 max-w-md w-full"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: currentThemeConfig.accentHex }}
            >
              Legenda da Linha
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full border-2 border-slate-500 bg-transparent flex-shrink-0" />
                <span>Uma etapa da jornada</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full border-2 p-0.5 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: currentThemeConfig.accentHex }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: currentThemeConfig.accentHex }}
                  />
                </span>
                <span className="font-medium" style={{ color: currentThemeConfig.accentHex }}>
                  Mudança de direção / Virada
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full border-2 ring-2 flex-shrink-0"
                  style={{
                    backgroundColor: currentThemeConfig.secondaryHex,
                    borderColor: currentThemeConfig.secondaryHex,
                    boxShadow: `0 0 10px ${currentThemeConfig.secondaryHex}60`,
                  }}
                />
                <span className="font-bold text-white">
                  Estação atual (Especialista em Dados & SRE)
                </span>
              </div>
            </div>

            <div className="pt-2 border-t" style={{ borderColor: 'var(--border-card)' }}>
              <button
                onClick={scrollToCurrent}
                className="w-full text-center py-2 px-3 text-xs font-semibold rounded-lg border transition-colors flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--bg-card-alt)',
                  borderColor: 'var(--border-card)',
                  color: currentThemeConfig.secondaryHex,
                }}
              >
                <span>Ir à estação atual</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Station Timeline Line */}
        <div
          className="relative border-l-2 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12"
          style={{ borderColor: 'var(--border-card)' }}
        >
          {trajectoryStations.map((station) => {
            const isExpanded = expandedId === station.id;
            const isCurrent = station.roleType === 'current';
            const isShift = station.roleType === 'shift';

            return (
              <div
                key={station.id}
                id={station.id}
                className={`relative group transition-all duration-200 ${
                  isCurrent ? 'scroll-mt-32' : 'scroll-mt-24'
                }`}
              >
                {/* Station Node Marker */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: isCurrent
                      ? currentThemeConfig.secondaryHex
                      : 'var(--bg-main)',
                    color: isCurrent ? '#000000' : 'var(--text-platinum)',
                    borderColor: isCurrent
                      ? currentThemeConfig.secondaryHex
                      : isShift
                      ? currentThemeConfig.accentHex
                      : 'var(--border-card)',
                    borderWidth: '2px',
                    boxShadow: isCurrent
                      ? `0 0 16px ${currentThemeConfig.secondaryHex}80`
                      : 'none',
                  }}
                >
                  <span className="text-[11px] font-bold font-mono">
                    {station.stationNumber}
                  </span>
                </div>

                {/* Station Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                    isCurrent ? 'shadow-2xl' : 'hover:border-opacity-100'
                  }`}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: isCurrent
                      ? currentThemeConfig.secondaryHex
                      : 'var(--border-card)',
                  }}
                >
                  {/* Station metadata header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-slate-300">
                        ESTAÇÃO {station.stationNumber}
                      </span>
                      <span aria-hidden="true" className="text-slate-500">/</span>
                      <span
                        className="font-semibold"
                        style={{
                          color: isCurrent
                            ? currentThemeConfig.secondaryHex
                            : currentThemeConfig.accentHex,
                        }}
                      >
                        {station.period}
                      </span>
                    </div>

                    {isCurrent && (
                      <span
                        className="text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1.5 border"
                        style={{
                          backgroundColor: `${currentThemeConfig.secondaryHex}20`,
                          borderColor: currentThemeConfig.secondaryHex,
                          color: currentThemeConfig.secondaryHex,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: currentThemeConfig.secondaryHex }}
                        />
                        Estação atual
                      </span>
                    )}

                    {!isCurrent && station.context && (
                      <span
                        className="text-[11px] font-medium px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: `${currentThemeConfig.accentHex}15`,
                          borderColor: `${currentThemeConfig.accentHex}40`,
                          color: currentThemeConfig.accentHex,
                        }}
                      >
                        {station.context}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {station.title}
                  </h3>

                  {station.role && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold mb-3">
                      <Briefcase className="w-3.5 h-3.5" style={{ color: currentThemeConfig.accentHex }} />
                      <span className="text-slate-200">{station.role}</span>
                    </div>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {station.shortDesc}
                  </p>

                  {/* Station Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {station.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-300 px-2.5 py-0.5 rounded border"
                        style={{
                          backgroundColor: 'var(--bg-card-alt)',
                          borderColor: 'var(--border-card)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Button for Expanded Details */}
                  <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-card)' }}>
                    <button
                      onClick={() => toggleExpand(station.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                      style={{ color: currentThemeConfig.accentHex }}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Ocultar detalhes operacionais' : 'Ver contexto e realizações detalhadas'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span>{station.skillsApplied.slice(0, 2).join(' · ')}</span>
                    </div>
                  </div>

                  {/* Expanded Section with Detailed Employment Records */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t space-y-4 animate-in fade-in duration-200" style={{ borderColor: 'var(--border-card)' }}>
                      <div
                        className="text-sm text-slate-200 leading-relaxed p-4 rounded-xl border"
                        style={{
                          backgroundColor: 'var(--bg-card-alt)',
                          borderColor: 'var(--border-card)',
                        }}
                      >
                        {station.expandedDetails}
                      </div>

                      {station.highlights.length > 0 && (
                        <div className="space-y-2">
                          <h4
                            className="text-xs font-semibold uppercase tracking-wider"
                            style={{ color: currentThemeConfig.secondaryHex }}
                          >
                            Atividades & Marcos Registrados
                          </h4>
                          <ul className="space-y-1.5">
                            {station.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                <span style={{ color: currentThemeConfig.accentHex }} className="mt-0.5 font-bold">•</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4
                          className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-400"
                        >
                          Competências Praticadas nesta Estação
                        </h4>
                        <div className="flex flex-wrap gap-2 text-xs">
                          {station.skillsApplied.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded border font-medium"
                              style={{
                                backgroundColor: 'var(--bg-card-alt)',
                                borderColor: 'var(--border-card)',
                                color: currentThemeConfig.accentHex,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
