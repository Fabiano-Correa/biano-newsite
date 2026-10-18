import React from 'react';
import { ArrowDown, FileText, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

interface HeroProps {
  onNavigateToTrajectory: () => void;
  onNavigateToResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToTrajectory, onNavigateToResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const { currentThemeConfig } = useAppTheme();

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-[114px] lg:pb-20 overflow-hidden" aria-labelledby="heroTitle">
      {/* Dynamic ambient lighting using theme accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none -z-10 opacity-30"
        style={{ backgroundColor: currentThemeConfig.accentHex }}
      />
      <div
        className="absolute top-1/3 right-10 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-20"
        style={{ backgroundColor: currentThemeConfig.secondaryHex }}
      />

      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero: 2-Row Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-14 gap-y-5 items-stretch">
          {/* Row 1 Left: Starts directly with title and ends at '...minha trajetória profissional na área.' */}
          <div className="lg:col-span-7 flex flex-col justify-start lg:min-h-[456px]">
            <h1
              id="heroTitle"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold tracking-tight text-white text-balance leading-[1.1]"
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

            {/* Inspiring authentic origin story: ends exactly at '...minha trajetória profissional na área.' */}
            <div className="mt-5 space-y-5">
              <p className="text-sm sm:text-base xl:text-[1.05rem] text-slate-300 leading-[1.78] max-w-[790px] font-normal">
                Minha paixão por computadores começou em <strong>1997</strong>, na antiga 7ª série. Em <strong>2000</strong>, iniciei o curso técnico em Segurança do Trabalho, minha segunda opção após não ser aprovado em Informática no colégio técnico estadual. Mesmo seguindo outro caminho, continuei estudando e cultivando o sonho de trabalhar com tecnologia.
              </p>

              <p className="text-sm sm:text-base xl:text-[1.05rem] text-slate-300 leading-[1.78] max-w-[790px] font-normal">
                Por razões financeiras, construí minha primeira carreira em Segurança do Trabalho. Cheguei a considerar seguir nessa área e estudar Engenharia de Segurança do Trabalho, mas a paixão pela TI falou mais alto: escolhi cursar Gestão em Tecnologia da Informação e, em <strong>2015</strong>, iniciei minha trajetória profissional na área.
              </p>
            </div>
          </div>

          {/* Row 1 Right: Card da foto perfeitamente alinhada no topo com 'Cada estação,' e na base com '...minha trajetória profissional na área.' */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full h-full">
            <div className="relative w-full h-full min-h-[456px] flex flex-col">
              <div
                className="absolute -inset-1 rounded-2xl blur-md opacity-40 transition-all pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${currentThemeConfig.accentHex}, ${currentThemeConfig.secondaryHex})`,
                }}
              />

              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border flex-1 flex flex-col h-full"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-card)',
                }}
              >
                <div className="h-[400px] w-full overflow-hidden">
                  <img
                    src="/src/assets/images/fabiano_portrait_1792285061510.jpg"
                    alt="Foto profissional de Fabiano de Amaro Corrêa"
                    className="w-full h-full object-cover object-[center_18%] filter contrast-[1.03]"
                    loading="eager"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtitle bar under the portrait */}
                <div
                  className="h-[54px] px-4 py-2 border-t flex items-center justify-between flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide leading-tight">Fabiano de Amaro Corrêa</p>
                    <p className="text-[11px] font-semibold leading-tight mt-0.5" style={{ color: currentThemeConfig.secondaryHex }}>
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

          {/* Row 2 Left: Inicia com 'Hoje atuo como...' no topo e termina com os Botões de Ação na base */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-2 h-full lg:min-h-[116px] xl:-mt-6">
            <p className="text-sm sm:text-base xl:text-[1.05rem] text-slate-200 leading-[1.75] max-w-[790px] font-normal">
              Hoje atuo como <strong className="text-white">Especialista em Dados</strong>, unindo soluções em Python, SQL, infraestrutura e apoio de missão crítica a demandas de SRE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateToTrajectory}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2"
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
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border transition-colors focus:outline-none focus:ring-2"
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
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Send className="w-4 h-4" style={{ color: currentThemeConfig.secondaryHex }} />
                <span>Contato</span>
              </a>
            </div>
          </div>

          {/* Row 2 Right: Card 'Linha da Trajetória' inicia na direção de 'Hoje atuo como...' e termina na linha 'Desde 1997 apaixonado...' */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full h-full">
            <div
              className="w-full h-full min-h-[116px] p-3 rounded-xl border shadow-lg text-xs flex flex-col justify-between"
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
                    <p className="font-bold text-white uppercase tracking-wider text-xs">
                      Linha da Trajetória · Estações
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: 'var(--border-card)',
                      color: currentThemeConfig.secondaryHex,
                    }}
                  >
                    1997 → Hoje
                  </span>
                </div>

                <p className="text-[10px] text-slate-400 font-mono">
                  Fabiano Corrêa · da 7ª série em 1997 até os dias atuais
                </p>
              </div>

              {/* Transit Map Stops: 1997 -> 1999 -> 2003 -> 2015 -> Hoje */}
              <div
                className="grid grid-cols-5 gap-1 pt-2 mt-auto border-t text-center font-mono"
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

        {/* Full-width Tagline strip matching reference screenshot */}
        <div
          className="mt-3 pt-4 border-t flex flex-wrap items-center text-xs font-mono"
          style={{ borderColor: 'var(--border-card)' }}
        >
          <span
            className="font-bold tracking-wider uppercase text-xs"
            style={{ color: currentThemeConfig.secondaryHex }}
          >
            DESDE 1997 APAIXONADO · NA TI FORMALMENTE DESDE 2015
          </span>
        </div>

        {/* 4-Column KPI strip in full-width row */}
        <div
          className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
