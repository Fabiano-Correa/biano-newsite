import React from 'react';
import { ArrowDown, FileText, Send, Sparkles, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

interface HeroProps {
  onNavigateToTrajectory: () => void;
  onNavigateToResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToTrajectory, onNavigateToResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const { currentThemeConfig, theme } = useAppTheme();

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden" aria-labelledby="heroTitle">
      {/* Dynamic ambient lighting using theme accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none -z-10 opacity-30"
        style={{ backgroundColor: currentThemeConfig.accentHex }}
      />
      <div
        className="absolute top-1/3 right-10 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-20"
        style={{ backgroundColor: currentThemeConfig.secondaryHex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero inspired by ideia2.png and ideia 1.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: currentThemeConfig.secondaryHex }}>
              <span>FABIANO CORRÊA · ENGENHEIRO & ESPECIALISTA EM DADOS</span>
            </div>

            <h1
              id="heroTitle"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]"
            >
              Cada estação,{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentThemeConfig.accentHex}, ${currentThemeConfig.secondaryHex})`,
                }}
              >
                uma nova versão de mim.
              </span>
            </h1>

            {/* Inspiring authentic origin story: 1997, 1999, 2000, 2002-2003, 2008, 2015 */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl text-pretty font-normal">
              Meu primeiro contato com a TI foi em <strong>1997</strong>, na antiga 7ª série, quando me apaixonei por computadores. Em <strong>1999</strong> fiz a prova para o colégio técnico estadual em informática e, no ano <strong>2000</strong>, iniciei a formação técnica em segurança do trabalho.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Iniciei a atuação em segurança do trabalho pois já estava casado e com uma filha, mantendo sempre o compromisso com os estudos de TI: conquistei o <span className="font-semibold text-white">1º lugar da unidade</span> no curso de microinformática (<strong>2002–2003</strong>) e em <strong>2008</strong> me destaquei em montagem e manutenção. Em <strong>2015</strong>, após anos de esforço, conquistei minha primeira oportunidade na TI.
            </p>

            {/* Bloco Hoje atuo + Ações e Card Linha da Trajetória em harmonia e alinhamento perfeito */}
            <div className="pt-1">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                {/* Lado Esquerdo: Bloco Hoje atuo + Botões de Ação */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-3">
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-semibold mb-1"
                      style={{ color: currentThemeConfig.secondaryHex }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Atuação Atual</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">
                      Hoje atuo como <strong className="text-white">Especialista em Dados</strong>, unindo soluções em Python, SQL, infraestrutura e apoio de missão crítica a demandas de SRE.
                    </p>
                  </div>

                  {/* Botões do bloco alinhados */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      onClick={onNavigateToTrajectory}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: currentThemeConfig.accentHex,
                        boxShadow: `0 10px 25px -5px ${currentThemeConfig.accentHex}40`,
                      }}
                    >
                      <span>Embarque na minha história</span>
                      <ArrowDown className="w-4 h-4 text-white" />
                    </button>

                    <button
                      onClick={onNavigateToResume}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border transition-colors focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-card)',
                        color: 'var(--text-platinum)',
                      }}
                    >
                      <FileText className="w-4 h-4" style={{ color: currentThemeConfig.accentHex }} />
                      <span>Currículo Interativo</span>
                    </button>

                    <a
                      href="#contato"
                      className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" style={{ color: currentThemeConfig.secondaryHex }} />
                      <span>Contato</span>
                    </a>
                  </div>
                </div>

                {/* Lado Direito: Card Linha da Trajetória perfeitamente alinhado com topo de Hoje atuo e base dos botões */}
                <div className="md:col-span-6">
                  <div
                    className="h-full w-full p-3.5 rounded-xl border shadow-lg text-xs flex flex-col justify-between"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-4 h-4 rounded-full text-white flex items-center justify-center font-bold text-[9px]"
                            style={{ backgroundColor: currentThemeConfig.accentHex }}
                          >
                            F
                          </div>
                          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
                            Linha da Trajetória · Estações
                          </p>
                        </div>
                        <span
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded-full border hidden sm:inline-block"
                          style={{
                            borderColor: 'var(--border-card)',
                            color: currentThemeConfig.secondaryHex,
                          }}
                        >
                          1997 → Hoje
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono leading-tight">
                        Fabiano Corrêa · da 7ª série em 1997 até os dias atuais
                      </p>
                    </div>

                    {/* Transit Map Stops: 1997 -> 1999 -> 2003 -> 2015 -> Hoje */}
                    <div
                      className="grid grid-cols-5 gap-1 pt-2 mt-2 border-t text-center font-mono"
                      style={{ borderColor: 'var(--border-card)' }}
                    >
                      <div className="flex flex-col items-center">
                        <span
                          className="w-2 h-2 rounded-full border-2 mb-1"
                          style={{ borderColor: currentThemeConfig.accentHex, backgroundColor: 'transparent' }}
                        />
                        <span className="text-[9px] text-slate-300 font-semibold">1997</span>
                        <span className="text-[8px] text-slate-400 truncate w-full">7ª série</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-2 h-2 rounded-full border-2 mb-1"
                          style={{ borderColor: '#f97316', backgroundColor: 'transparent' }}
                        />
                        <span className="text-[9px] text-slate-300 font-semibold">1999</span>
                        <span className="text-[8px] text-slate-400 truncate w-full">Col. Téc.</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-2 h-2 rounded-full border-2 mb-1"
                          style={{ borderColor: currentThemeConfig.secondaryHex, backgroundColor: 'transparent' }}
                        />
                        <span className="text-[9px] text-slate-300 font-semibold">2003</span>
                        <span
                          className="text-[8px] font-bold truncate w-full"
                          style={{ color: currentThemeConfig.secondaryHex }}
                        >
                          1º Lugar
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-2 h-2 rounded-full border-2 mb-1"
                          style={{ borderColor: currentThemeConfig.accentHex, backgroundColor: 'transparent' }}
                        />
                        <span className="text-[9px] text-slate-300 font-semibold">2015</span>
                        <span
                          className="text-[8px] font-bold truncate w-full"
                          style={{ color: currentThemeConfig.accentHex }}
                        >
                          Vaga TI
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-2 h-2 rounded-full border-2 mb-1 shadow-sm"
                          style={{
                            borderColor: currentThemeConfig.secondaryHex,
                            backgroundColor: currentThemeConfig.secondaryHex,
                          }}
                        />
                        <span className="text-[9px] font-bold" style={{ color: currentThemeConfig.secondaryHex }}>
                          Hoje
                        </span>
                        <span className="text-[8px] text-white font-semibold truncate w-full">Dados & SRE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline Footer Badge from ideia2.png */}
            <div
              className="pt-3 border-t flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono"
              style={{ borderColor: 'var(--border-card)' }}
            >
              <span
                className="font-bold tracking-wider uppercase text-[11px]"
                style={{ color: currentThemeConfig.secondaryHex }}
              >
                DESDE 1997 APAIXONADO · NA TI FORMALMENTE DESDE 2015
              </span>
              <span className="text-slate-400 text-[11px]">
                Especialista em Dados & SRE
              </span>
            </div>
          </div>

          {/* Right Column: Portrait restored to its full stature, raised higher on screen, with div below img */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start self-start w-full pt-1">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-1 rounded-2xl blur-md opacity-40 transition-all"
                style={{
                  background: `linear-gradient(135deg, ${currentThemeConfig.accentHex}, ${currentThemeConfig.secondaryHex})`,
                }}
              />

              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-card)',
                }}
              >
                <img
                  src="/src/assets/images/fabiano_portrait_1792285061510.jpg"
                  alt="Foto profissional de Fabiano de Amaro Corrêa"
                  className="w-full h-[470px] sm:h-[500px] object-cover object-top filter contrast-[1.03]"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />

                {/* Subtitle div placed under img */}
                <div
                  className="p-4 border-t"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold text-white tracking-wide">Fabiano de Amaro Corrêa</p>
                      <p className="text-xs font-semibold" style={{ color: currentThemeConfig.secondaryHex }}>
                        Especialista em Dados & SRE
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-mono text-slate-300">Python · SQL · AWS · SRE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI strip in full-width row */}
        <div
          className="mt-14 pt-8 border-t grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          style={{ borderColor: 'var(--border-card)' }}
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <p
                className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight tabular-nums"
                style={{ color: currentThemeConfig.secondaryHex }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
