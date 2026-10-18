import React, { useState, useMemo } from 'react';
import {
  Search,
  Printer,
  GraduationCap,
  Award,
  Clock,
  FileText,
  Copy,
  Check,
  Phone,
  Mail,
  Linkedin,
  SlidersHorizontal,
  ShieldCheck,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { useAppTheme } from '../context/ThemeContext';

interface InteractiveResumeProps {
  initialViewMode?: 'interactive' | 'executive';
}

export const InteractiveResume: React.FC<InteractiveResumeProps> = ({
  initialViewMode = 'interactive',
}) => {
  const { skills, education, certifications, profile } = PORTFOLIO_DATA;
  const [viewMode, setViewMode] = useState<'interactive' | 'executive'>(initialViewMode);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkillModal, setSelectedSkillModal] = useState<SkillItem | null>(null);
  const [copiedBio, setCopiedBio] = useState(false);
  const { currentThemeConfig } = useAppTheme();

  // Categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(skills.map((s) => s.category)));
    return ['all', ...cats];
  }, [skills]);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    return skills.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keyTools.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.realWorldImpact.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchTerm]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyBio = () => {
    const summary = `${profile.fullName}\n${profile.titles.join(' | ')}\nTel: ${profile.phone} • E-mail: ${profile.email}\nLinkedIn: ${profile.linkedinUrl}\nInstagram: ${profile.instagramUrl}\n\nOBJETIVO:\n${profile.objective}\n\nRESUMO DE QUALIFICAÇÕES:\n${profile.leadSummary}`;
    navigator.clipboard.writeText(summary);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2500);
  };

  const realExperiences = [
    {
      company: 'Serasa Experian',
      role: 'Especialista em Dados',
      period: '11/2024 – atual',
      summary:
        'Desenvolvimento de soluções em Python e SQL para integração, automação e sustentação de processos de dados, com foco em eficiência, confiabilidade e agilidade operacional em ambiente do setor de crédito e dados financeiros. Participação em iniciativas de integração em nuvem (ex.: ST-S3 na AWS), contribuindo para a evolução de processos e a redução de esforço manual. Atuação no processo de portabilidade de novos clientes, apoiando etapas críticas para garantir fluidez, segurança e qualidade na entrada de novas operações. Apoio a demandas de SRE, com foco em estabilidade e otimização de sistemas, e suporte N3 na análise e resolução de problemas técnicos de alta criticidade.',
      tags: ['Python', 'SQL', 'AWS ST-S3', 'Apoio SRE', 'Portabilidade de Clientes', 'Suporte N3'],
    },
    {
      company: 'TEx Tecnologia',
      role: 'Especialista em Dados',
      period: '04/2024 – 10/2024',
      summary:
        'Monitoramento e controle de rotinas de backup, desenvolvimento de scripts de carga de dados e apoio às equipes de análise de dados e desenvolvimento, com foco na melhoria contínua dos processos internos de dados.',
      tags: ['Rotinas de Backup', 'Scripts de Carga', 'Apoio a Dev', 'Melhoria Contínua'],
    },
    {
      company: 'TEx Tecnologia',
      role: 'Analista de Dados Sênior',
      period: '01/2022 – 04/2024',
      summary:
        'Desenvolvimento e manutenção de objetos de banco de dados, elaboração de relatórios e consultas em diversas bases corporativas, e otimização de queries conforme as necessidades do cliente. Suporte à equipe de desenvolvimento em todas as tarefas envolvendo criação e manipulação de bancos de dados, além de apoio à sustentação na resolução de chamados que envolviam tratamento de dados.',
      tags: ['MySQL', 'Oracle', 'Tuning de Queries', 'Relatórios', 'Manipulação de Bases'],
    },
    {
      company: 'Cognitiva Tecnologia & Informação',
      role: 'Analista de Infraestrutura',
      period: '07/2021 – 01/2022',
      summary:
        'Monitoramento de infraestrutura com Nagios, administração de servidores Windows e Linux, virtualização com VMware ESXi, dimensionamento de ambientes e implementação de serviços conforme demanda interna e externa.',
      tags: ['Nagios', 'Windows Server', 'Linux', 'VMware ESXi', 'Dimensionamento'],
    },
    {
      company: 'Cognitiva Tecnologia & Informação',
      role: 'Analista de Suporte Júnior & N3',
      period: '10/2016 – 06/2021',
      summary:
        'Atendimento de 3º nível (N3). Ao iniciar como N3, já era responsável direto pelos deploys em produção. Entre 2020 e 2021, implementou o GitFlow e a utilização de submódulos no Git para viabilizar e implementar personalizações do sistema para os clientes a pedido da diretoria. Desenvolvimento de funcionalidades em PHP, administração de bancos de dados MySQL e Oracle, administração do ambiente Git, criação e configuração de novos ambientes, treinamento e gestão da equipe de suporte.',
      tags: ['GitFlow', 'Submódulos Git', 'Deploy em Produção', 'Suporte N3', 'MySQL & Oracle DBA', 'PHP'],
    },
    {
      company: 'Cognitiva Tecnologia & Informação',
      role: 'Suporte Técnico',
      period: '06/2015 – 09/2016',
      summary:
        'Atendimento de 1º e 2º nível, desenvolvimento em PHP, suporte a bancos de dados MySQL e Oracle e deploy em ambientes de homologação e produção via Git.',
      tags: ['Suporte N1/N2', 'PHP', 'MySQL', 'Deploy com Git'],
    },
    {
      company: 'Montec Montagens e Instalações Ltda-ME',
      role: 'Técnico em Segurança do Trabalho',
      period: '07/2011 – 12/2014',
      summary:
        'Supervisão do local de trabalho, controle de EPIs, treinamento de funcionários e levantamento de riscos operacionais no MetrôRio (atuação iniciada por já estar casado e com uma filha, honrando a responsabilidade familiar enquanto persistia nos estudos contínuos em TI).',
      tags: ['Supervisão', 'Controle de EPIs', 'MetrôRio', 'Prevenção de Riscos'],
    },
  ];

  return (
    <section
      id="curriculo"
      className="py-24 border-t"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-card)',
      }}
      aria-labelledby="curriculoTitle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: currentThemeConfig.secondaryHex }}
            >
              Currículo Oficial & Histórico
            </div>
            <h2 id="curriculoTitle" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Currículo interativo
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Consulte minhas qualificações reais, experiências registradas, formação acadêmica e certificações oficiais com verificação de credencial.
            </p>
          </div>

          {/* Mode Switcher & Actions */}
          <div className="flex flex-wrap items-center gap-3 no-print">
            <div
              className="p-1 rounded-xl flex items-center border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                  viewMode === 'interactive'
                    ? 'text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: viewMode === 'interactive' ? currentThemeConfig.accentHex : 'transparent',
                }}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Visão Interativa</span>
              </button>

              <button
                onClick={() => setViewMode('executive')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                  viewMode === 'executive'
                    ? 'text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: viewMode === 'executive' ? currentThemeConfig.accentHex : 'transparent',
                }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Visão Currículo PDF</span>
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-2"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
                color: 'var(--text-platinum)',
              }}
              title="Imprimir ou gerar PDF"
            >
              <Printer className="w-4 h-4" style={{ color: currentThemeConfig.secondaryHex }} />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>

        {/* ----------------- INTERACTIVE MODE ----------------- */}
        {viewMode === 'interactive' && (
          <div className="space-y-16 animate-in fade-in duration-200">
            {/* Search and Category Filters */}
            <div
              className="p-6 rounded-2xl border space-y-4"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search
                    className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: currentThemeConfig.accentHex }}
                  />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar competência (ex: Python, SQL, MySQL, Oracle, SRE, Nagios, ST-S3)..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 border transition-all"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                    }}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>

              {/* Category buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400 mr-1">Filtrar área:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border"
                    style={{
                      backgroundColor: selectedCategory === cat ? currentThemeConfig.accentHex : 'var(--bg-card-alt)',
                      color: selectedCategory === cat ? '#ffffff' : 'var(--text-platinum)',
                      borderColor: selectedCategory === cat ? currentThemeConfig.accentHex : 'var(--border-card)',
                    }}
                  >
                    {cat === 'all' ? 'Todas as Áreas' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Competencies Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5" style={{ color: currentThemeConfig.secondaryHex }} />
                  <span>Competências Técnicas Comprovadas</span>
                </h3>
                <span className="text-xs font-mono" style={{ color: currentThemeConfig.secondaryHex }}>
                  {filteredSkills.length} competência{filteredSkills.length !== 1 ? 's' : ''}
                </span>
              </div>

              {filteredSkills.length === 0 ? (
                <div
                  className="text-center py-12 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                  }}
                >
                  <p className="text-slate-400 text-sm">Nenhuma competência encontrada com os termos informados.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-3 text-xs underline"
                    style={{ color: currentThemeConfig.accentHex }}
                  >
                    Redefinir filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.id}
                      onClick={() => setSelectedSkillModal(skill)}
                      className="cursor-pointer group p-6 rounded-2xl border transition-all flex flex-col justify-between shadow-lg"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-card)',
                      }}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h4 className="text-lg font-bold text-white transition-colors">
                            {skill.name}
                          </h4>
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded border shrink-0"
                            style={{
                              backgroundColor: `${currentThemeConfig.secondaryHex}15`,
                              borderColor: `${currentThemeConfig.secondaryHex}50`,
                              color: currentThemeConfig.secondaryHex,
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                          {skill.description}
                        </p>

                        <div
                          className="p-3 rounded-lg border mb-4"
                          style={{
                            backgroundColor: 'var(--bg-card-alt)',
                            borderColor: 'var(--border-card)',
                          }}
                        >
                          <p className="text-xs text-slate-200">
                            <strong style={{ color: currentThemeConfig.secondaryHex }}>Aplicação Real:</strong>{' '}
                            {skill.realWorldImpact}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-card)' }}>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                          {skill.keyTools.slice(0, 3).map((t, idx) => (
                            <React.Fragment key={t}>
                              <span className="text-slate-300">{t}</span>
                              {idx < Math.min(skill.keyTools.length, 3) - 1 && (
                                <span aria-hidden="true" style={{ color: currentThemeConfig.secondaryHex }}>·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-xs font-mono tabular-nums" style={{ color: currentThemeConfig.secondaryHex }}>
                          <Clock className="w-3.5 h-3.5" />
                          <span>{skill.experienceYears}+ anos</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Official Certifications with real credential verification */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" style={{ color: currentThemeConfig.secondaryHex }} />
                    <span>Certificações Oficiais (Comprovadas)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Certificações emitidas por entidades globais com credenciais e badges autenticados.
                  </p>
                </div>

                <a
                  href={profile.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all shadow-sm self-start sm:self-auto hover:bg-white/5"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: currentThemeConfig.secondaryHex,
                    color: currentThemeConfig.secondaryHex,
                  }}
                  title="Acessar perfil público oficial do Fabiano no Credly"
                >
                  <span className="w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold" style={{ borderColor: currentThemeConfig.secondaryHex }}>
                    C
                  </span>
                  <span>Verificar Perfil no Credly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-2xl border flex flex-col justify-between shadow-lg"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-2" style={{ color: currentThemeConfig.secondaryHex }}>
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        Credencial Oficial:{' '}
                        <span className="text-white font-mono font-bold select-all">{cert.credentialId}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t flex items-center justify-between gap-2" style={{ borderColor: 'var(--border-card)' }}>
                      <span
                        className="text-[11px] font-semibold px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: `${currentThemeConfig.secondaryHex}15`,
                          borderColor: `${currentThemeConfig.secondaryHex}50`,
                          color: currentThemeConfig.secondaryHex,
                        }}
                      >
                        {cert.badge}
                      </span>
                      <a
                        href={profile.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: currentThemeConfig.accentHex }}
                      >
                        <span>Credly</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Academic Education */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" style={{ color: currentThemeConfig.accentHex }} />
                  <span>Formação Acadêmica</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 rounded-2xl border flex flex-col justify-between shadow-lg"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2 font-mono">
                        <span className="font-semibold" style={{ color: currentThemeConfig.secondaryHex }}>
                          {edu.type}
                        </span>
                        <span className="tabular-nums text-slate-400">{edu.period}</span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-1.5">
                        {edu.title}
                      </h4>

                      <p className="text-xs font-medium mb-3" style={{ color: currentThemeConfig.accentHex }}>
                        {edu.institution}
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {edu.badge && (
                      <div className="mt-4 pt-3 border-t" style={{ borderColor: 'var(--border-card)' }}>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: 'var(--bg-card-alt)',
                            borderColor: 'var(--border-card)',
                            color: 'var(--text-platinum)',
                          }}
                        >
                          {edu.badge}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ----------------- EXECUTIVE MODE (Formal Printable PDF Format) ----------------- */}
        {viewMode === 'executive' && (
          <div
            className="p-8 sm:p-12 rounded-2xl border shadow-2xl print-card animate-in fade-in duration-200"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            {/* Header of Executive CV - ZERO location as requested */}
            <div
              className="border-b pb-8 mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6"
              style={{ borderColor: 'var(--border-card)' }}
            >
              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {profile.fullName}
                </h3>
                <p className="text-sm font-semibold mt-1" style={{ color: currentThemeConfig.secondaryHex }}>
                  {profile.titles.join(' | ')}
                </p>
                <div className="mt-2 text-xs text-slate-300 space-y-1">
                  <p className="flex items-center gap-2 flex-wrap">
                    <Phone className="w-3.5 h-3.5" style={{ color: currentThemeConfig.secondaryHex }} />
                    <span>{profile.phone}</span>
                    <span>•</span>
                    <Mail className="w-3.5 h-3.5" style={{ color: currentThemeConfig.secondaryHex }} />
                    <span>{profile.email}</span>
                  </p>
                  <p className="flex items-center gap-2 flex-wrap">
                    <Linkedin className="w-3.5 h-3.5" style={{ color: currentThemeConfig.accentHex }} />
                    <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    <span>•</span>
                    <Instagram className="w-3.5 h-3.5 text-rose-400" />
                    <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{profile.instagramHandle}</a>
                    <span>•</span>
                    <span className="font-bold font-mono text-[10px] px-1 rounded border" style={{ borderColor: currentThemeConfig.secondaryHex, color: currentThemeConfig.secondaryHex }}>Credly</span>
                    <a href={profile.credlyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300">credly.com/users/fabiano-amaro-correa</a>
                  </p>
                </div>
              </div>

              <div className="text-right sm:text-right">
                <span
                  className="text-xs font-mono font-bold px-3 py-1 rounded border"
                  style={{
                    backgroundColor: `${currentThemeConfig.secondaryHex}15`,
                    borderColor: currentThemeConfig.secondaryHex,
                    color: currentThemeConfig.secondaryHex,
                  }}
                >
                  {profile.currentCompany}
                </span>
                <p className="text-xs text-slate-300 mt-2">
                  Cargo atual: {profile.currentRole}
                </p>
              </div>
            </div>

            {/* Objetivo */}
            <div className="mb-8">
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-2 border-b pb-1"
                style={{ borderColor: 'var(--border-card)', color: currentThemeConfig.secondaryHex }}
              >
                Objetivo
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {profile.objective}
              </p>
            </div>

            {/* Resumo de Qualificações */}
            <div className="mb-8">
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-2 border-b pb-1"
                style={{ borderColor: 'var(--border-card)', color: currentThemeConfig.secondaryHex }}
              >
                Resumo de Qualificações
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {profile.leadSummary}
              </p>
            </div>

            {/* Experiência Profissional (Exact records from PDF) */}
            <div className="mb-10">
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-4 border-b pb-1"
                style={{ borderColor: 'var(--border-card)', color: currentThemeConfig.secondaryHex }}
              >
                Experiência Profissional
              </h4>
              <div className="space-y-6">
                {realExperiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 pl-4 py-0.5"
                    style={{ borderColor: currentThemeConfig.accentHex }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">
                          {exp.company}
                        </span>
                        <span className="text-slate-400">—</span>
                        <span className="font-semibold" style={{ color: currentThemeConfig.secondaryHex }}>
                          {exp.role}
                        </span>
                      </div>
                      <span className="font-mono tabular-nums text-slate-300">{exp.period}</span>
                    </div>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] text-slate-300 px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: 'var(--bg-card-alt)',
                            borderColor: 'var(--border-card)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formação Acadêmica Real */}
            <div className="mb-8">
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1"
                style={{ borderColor: 'var(--border-card)', color: currentThemeConfig.secondaryHex }}
              >
                Formação
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                {education.map((edu) => (
                  <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <strong className="text-white">{edu.title}</strong> — {edu.institution}
                    </div>
                    <span className="font-mono tabular-nums shrink-0" style={{ color: currentThemeConfig.secondaryHex }}>
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações com Credenciais */}
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1"
                style={{ borderColor: 'var(--border-card)', color: currentThemeConfig.secondaryHex }}
              >
                Certificações
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <strong className="text-white">{cert.title}</strong> — {cert.issuer} ({cert.date})
                    </div>
                    <span className="font-mono text-slate-300 select-all">
                      Credencial:{' '}
                      <strong style={{ color: currentThemeConfig.secondaryHex }}>
                        {cert.credentialId}
                      </strong>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono" style={{ borderColor: 'var(--border-card)' }}>
                <span>Verificação pública digital dos badges no Credly:</span>
                <a
                  href={profile.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                  style={{ color: currentThemeConfig.secondaryHex }}
                >
                  credly.com/users/fabiano-amaro-correa ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Skill Modal Detail */}
      {selectedSkillModal && (
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
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold" style={{ color: currentThemeConfig.secondaryHex }}>
                {selectedSkillModal.category}
              </span>
              <span
                className="text-xs font-mono border px-2.5 py-0.5 rounded"
                style={{
                  backgroundColor: `${currentThemeConfig.secondaryHex}15`,
                  borderColor: currentThemeConfig.secondaryHex,
                  color: currentThemeConfig.secondaryHex,
                }}
              >
                Nível: {selectedSkillModal.level} ({selectedSkillModal.experienceYears}+ anos)
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedSkillModal.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {selectedSkillModal.description}
            </p>

            <div
              className="p-4 rounded-xl border mb-5"
              style={{
                backgroundColor: 'var(--bg-card-alt)',
                borderColor: 'var(--border-card)',
              }}
            >
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                style={{ color: currentThemeConfig.secondaryHex }}
              >
                Aplicação Real & Impacto Comprovado
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                {selectedSkillModal.realWorldImpact}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Ferramentas Associadas
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {selectedSkillModal.keyTools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded border text-slate-200"
                    style={{
                      backgroundColor: 'var(--bg-card-alt)',
                      borderColor: 'var(--border-card)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t" style={{ borderColor: 'var(--border-card)' }}>
              <button
                onClick={() => setSelectedSkillModal(null)}
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
