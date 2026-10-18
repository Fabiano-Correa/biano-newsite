import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Youtube } from 'lucide-react';
import { PORTFOLIO_DATA, Initiative } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'ai' | 'aws'>('all');
  const [selectedProject, setSelectedProject] = useState<Initiative | null>(null);
  const { currentThemeConfig } = useAppTheme();

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return p.category === 'AI Product' || p.category === 'Community App';
    if (filter === 'aws') return p.category === 'AWS Studies';
    return true;
  });

  const getStatusBadge = (statusType: Initiative['statusType'], status: string) => {
    return (
      <span
        className="text-xs font-semibold flex items-center gap-1.5"
        style={{ color: currentThemeConfig.secondaryHex }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: currentThemeConfig.secondaryHex }}
        />
        {status}
      </span>
    );
  };

  return (
    <section
      id="projetos"
      className="py-24 border-t"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="projetosTitle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: currentThemeConfig.secondaryHex }}
            >
              Iniciativas & Pesquisa Prática
            </div>
            <h2 id="projetosTitle" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projetos em andamento
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Iniciativas de produtos digitais concebidas e impulsionadas por IA generativa (GPT e Codex), somadas a laboratórios contínuos de computação em nuvem AWS.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            className="flex items-center gap-1 p-1 rounded-xl self-start md:self-auto border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              style={{
                backgroundColor: filter === 'all' ? currentThemeConfig.accentHex : 'transparent',
              }}
            >
              Todos os Projetos
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'ai'
                  ? 'text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              style={{
                backgroundColor: filter === 'ai' ? currentThemeConfig.accentHex : 'transparent',
              }}
            >
              Iniciativas com IA
            </button>
            <button
              onClick={() => setFilter('aws')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'aws'
                  ? 'text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              style={{
                backgroundColor: filter === 'aws' ? currentThemeConfig.accentHex : 'transparent',
              }}
            >
              Estudos com AWS
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border rounded-2xl overflow-hidden shadow-xl transition-all flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <div>
                {/* Visual Preview Screenshot */}
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden border-b"
                  style={{
                    backgroundColor: 'var(--bg-card-alt)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  <img
                    src={project.image}
                    alt={`Interface do projeto ${project.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute top-3 left-3 backdrop-blur-md px-3 py-1 rounded-md border"
                    style={{
                      backgroundColor: 'rgba(33, 37, 41, 0.85)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    {getStatusBadge(project.statusType, project.status)}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: currentThemeConfig.secondaryHex }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights preview */}
                  <div
                    className="space-y-1.5 mb-5 p-3.5 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    {project.details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span style={{ color: currentThemeConfig.accentHex }} className="mt-0.5 font-bold">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight note if present */}
                  {project.highlightNote && (
                    <div
                      className="mb-4 text-xs p-2.5 rounded-lg flex items-center gap-2 border"
                      style={{
                        backgroundColor: 'var(--bg-card-alt)',
                        borderColor: 'var(--border-card)',
                        color: currentThemeConfig.secondaryHex,
                      }}
                    >
                      <Youtube className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{project.highlightNote}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div
                className="px-6 pb-6 pt-0 border-t flex items-center justify-between"
                style={{ borderColor: 'var(--border-card)' }}
              >
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 pt-3">
                  {project.toolsUsed.slice(0, 3).map((tool, tIdx) => (
                    <React.Fragment key={tool}>
                      <span className="text-slate-300">{tool}</span>
                      {tIdx < Math.min(project.toolsUsed.length, 3) - 1 && (
                        <span aria-hidden="true" style={{ color: currentThemeConfig.secondaryHex }}>·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors shrink-0"
                  style={{ color: currentThemeConfig.accentHex }}
                >
                  <span>Ver arquitetura</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div
              className="rounded-xl overflow-hidden border mb-6 aspect-[16/9]"
              style={{
                backgroundColor: 'var(--bg-card-alt)',
                borderColor: 'var(--border-card)',
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              {getStatusBadge(selectedProject.statusType, selectedProject.status)}
            </div>

            <p
              className="text-sm font-mono mb-4"
              style={{ color: currentThemeConfig.accentHex }}
            >
              Categoria: {selectedProject.category}
            </p>

            <p className="text-base text-slate-200 leading-relaxed mb-6">
              {selectedProject.summary}
            </p>

            <div className="space-y-4 mb-6">
              <h4
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: currentThemeConfig.secondaryHex }}
              >
                Detalhamento & Objetivos Técnicos
              </h4>
              <div className="space-y-2.5">
                {selectedProject.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-300 p-3 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: currentThemeConfig.secondaryHex }} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedProject.highlightNote && (
              <div
                className="mb-6 p-3 rounded-xl border text-xs"
                style={{
                  backgroundColor: 'var(--bg-card-alt)',
                  borderColor: 'var(--border-card)',
                  color: currentThemeConfig.secondaryHex,
                }}
              >
                <strong>Divulgação de conhecimento:</strong> {selectedProject.highlightNote}
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Stack & Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {selectedProject.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-md border font-mono"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                      color: 'var(--text-platinum)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t flex justify-end" style={{ borderColor: 'var(--border-card)' }}>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold text-white rounded-lg transition-colors"
                style={{ backgroundColor: currentThemeConfig.accentHex }}
              >
                Concluir leitura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
