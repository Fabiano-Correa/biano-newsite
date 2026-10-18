export interface Initiative {
  id: string;
  title: string;
  status: string;
  statusType: 'personal' | 'future' | 'mobile' | 'study';
  summary: string;
  details: string[];
  toolsUsed: string[];
  category: 'AI Product' | 'AWS Studies' | 'Community App';
  image: string;
  highlightNote?: string;
  demoUrl?: string;
}

export interface TrajectoryStation {
  id: string;
  stationNumber: string;
  period: string;
  title: string;
  company?: string;
  role?: string;
  context?: string;
  roleType: 'previous' | 'shift' | 'current';
  shortDesc: string;
  expandedDetails: string;
  highlights: string[];
  skillsApplied: string[];
  tags: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Engenharia de Dados' | 'Bancos & SQL' | 'SRE & Confiabilidade' | 'Cloud & Nuvem' | 'Infra & DevOps' | 'IA & Inovação';
  level: 'Especialista' | 'Avançado' | 'Prático';
  experienceYears: number;
  description: string;
  keyTools: string[];
  realWorldImpact: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  type: 'Pós-Graduação' | 'Graduação' | 'Formação Técnica';
  description: string;
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  badge: string;
  url?: string;
}

export interface CorePillar {
  id: string;
  title: string;
  icon: string;
  description: string;
  badges: string[];
}

export interface PortfolioDataModel {
  profile: {
    name: string;
    fullName: string;
    titles: string[];
    currentRole: string;
    currentCompany: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    instagramUrl: string;
    instagramHandle: string;
    credlyUrl: string;
    youtubeChannel: string;
    youtubeUrl: string;
    githubUrl: string;
    tagline: string;
    objective: string;
    leadSummary: string;
    originStory: {
      year1997: string;
      year1998: string;
      year2000: string;
      year2008: string;
      year2015: string;
      philosophy: string;
    };
    stats: { label: string; value: string }[];
  };
  corePillars: CorePillar[];
  projects: Initiative[];
  trajectoryStations: TrajectoryStation[];
  skills: SkillItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const PORTFOLIO_DATA: PortfolioDataModel = {
  profile: {
    name: 'Fabiano',
    fullName: 'Fabiano de Amaro Corrêa',
    titles: ['Engenheiro de Dados', 'Especialista em Dados', 'Analista de Dados'],
    currentRole: 'Especialista em Dados (Apoio SRE & Confiabilidade)',
    currentCompany: 'Serasa Experian',
    phone: '(21) 98846-4328',
    email: 'fabiano.amarocorrea@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/fabiano-amaro-58361544',
    instagramUrl: 'https://www.instagram.com/bianodati',
    instagramHandle: '@bianodati',
    credlyUrl: 'https://www.credly.com/users/fabiano-amaro-correa',
    youtubeChannel: 'Biano da TI',
    youtubeUrl: 'https://www.youtube.com',
    githubUrl: 'https://github.com',
    tagline: 'Dados · Infraestrutura · Confiabilidade',
    objective:
      'Atuar como Engenheiro de Dados no desenvolvimento, automação e melhoria de pipelines e processos de dados, com foco em Python, SQL, Spark e bancos de dados em ambientes de alta criticidade.',
    leadSummary:
      'Profissional de dados com sólida experiência em desenvolvimento de soluções em Python e SQL para integração, automação e sustentação de processos em ambientes de missão crítica do setor financeiro e de crédito. Vivência em administração e tuning de bancos relacionais (MySQL e Oracle), integração na nuvem AWS (ex.: ST-S3), apoio contínuo a demandas de SRE e sustentação técnica de alto nível (N3). Base consistente em infraestrutura com Linux, Windows, VMware ESXi e Git.',
    originStory: {
      year1997: 'Minha paixão por computadores começou em 1997, na antiga 7ª série.',
      year1998: 'Em 1999, prestei o processo seletivo para um colégio técnico estadual em informática.',
      year2000: 'Em 2000, iniciei o curso técnico em Segurança do Trabalho, segunda opção após não ser aprovado em Informática.',
      year2008: 'Por razões financeiras construiu a primeira carreira em segurança, mas a paixão pela TI falou mais alto: cursou Gestão em TI e manteve dedicação e estudos contínuos.',
      year2015: 'Em 2015, iniciou formalmente sua trajetória profissional em TI, consolidando a carreira com persistência.',
      philosophy: 'A persistência transformou cada obstáculo em degrau: desde a 7ª série em 1997, os estudos nunca pararam até consolidar a carreira em dados e confiabilidade.',
    },
    stats: [
      { label: 'Paixão por TI desde', value: '1997' },
      { label: 'Na TI formalmente desde', value: '2015' },
      { label: 'Especialização', value: 'Dados & SRE' },
      { label: 'Pós-Graduação', value: 'PUC Minas' },
    ],
  },

  // Cards de Atuação: ZERO nomes de empresas nos cards, conforme solicitado
  corePillars: [
    {
      id: 'dados-etl',
      title: 'Engenharia de Dados & ETL',
      icon: 'Database',
      description:
        'Desenvolvimento de soluções em Python e SQL para integração, automação e sustentação de processos de dados em ambientes de missão crítica do setor de crédito e dados financeiros. Criação de scripts de carga, redução de esforço manual e garantia de integridade.',
      badges: ['Python & SQL', 'ETL Pipelines', 'Data Quality', 'Portabilidade de Clientes'],
    },
    {
      id: 'bancos-performance',
      title: 'Bancos e Tuning de Queries',
      icon: 'Zap',
      description:
        'Administração de bancos relacionais MySQL e Oracle, elaboração e manutenção de objetos de banco, elaboração de relatórios gerenciais e otimização cirúrgica de queries para maximizar throughput e eliminar gargalos transacionais.',
      badges: ['MySQL DBA', 'Oracle Tuning', 'Query Optimization', 'Rotinas de Backup'],
    },
    {
      id: 'cloud-aws',
      title: 'Cloud AWS & Integrações em Nuvem',
      icon: 'Cloud',
      description:
        'Implementação de integrações em nuvem (ex.: ST-S3 na AWS) e arquiteturas escaláveis. Certificação AWS Cloud Practitioner e foco constante na modernização de rotinas legadas para serviços gerenciados.',
      badges: ['AWS S3', 'AWS Cloud Practitioner', 'Azure Fundamentals', 'Cloud Integrations'],
    },
    {
      id: 'confiabilidade-sre',
      title: 'Confiabilidade & Apoio a SRE',
      icon: 'ShieldCheck',
      description:
        'Apoio técnico a demandas de Site Reliability Engineering (SRE), com foco em estabilidade e otimização de sistemas. Atuação no suporte de nível 3 (N3) na análise e resolução rápida de problemas de alta criticidade.',
      badges: ['Apoio SRE', 'Suporte N3', 'Estabilidade de Sistemas', 'Resolução de Crises'],
    },
    {
      id: 'infra-devops',
      title: 'Infraestrutura & Virtualização',
      icon: 'Server',
      description:
        'Monitoramento pró-ativo de infraestrutura com Nagios, administração de servidores Windows e Linux, virtualização corporativa com VMware ESXi, dimensionamento de ambientes e esteiras com Git.',
      badges: ['Nagios', 'VMware ESXi', 'Linux & Windows Server', 'Git Deploy'],
    },
    {
      id: 'compartilhamento',
      title: 'Treinamento & Gestão Técnica',
      icon: 'Share2',
      description:
        'Histórico consistente de treinamento e capacitação técnica de equipes e usuários, mentoria operacional, liderança técnica de suporte e difusão de conhecimento através de documentação viva e do canal Biano da TI.',
      badges: ['Treinamento de Equipes', 'Gestão Técnica', 'Canal Biano da TI', 'Documentação'],
    },
  ],

  projects: [
    {
      id: 'labtrack',
      title: 'LabTrack',
      category: 'AI Product',
      status: 'Em uso pessoal',
      statusType: 'personal',
      image: '/src/assets/images/project_labtrack_1792285062569.jpg',
      summary:
        'Plataforma estruturada com GPT atuando como mentor técnico na preparação para certificações e laboratórios de arquitetura AWS.',
      details: [
        'Reúne cronograma semanal, questões de prova e mapeamento prático de serviços AWS.',
        'Organiza laboratórios de computação, armazenamento (S3) e bancos de dados relacionais.',
        'Prompts direcionados para esclarecimento de cenários complexos de arquitetura e confiabilidade.',
      ],
      toolsUsed: ['Inteligência Artificial (GPT)', 'AWS Learning Paths', 'Cloud Labs', 'Gestão de Conteúdo'],
      highlightNote: 'Parte desse percurso também aparece em vídeo de laboratório publicado no canal Biano da TI.',
    },
    {
      id: 'careermap',
      title: 'CareerMap',
      category: 'AI Product',
      status: 'Candidato a lançamento futuro',
      statusType: 'future',
      image: '/src/assets/images/project_careermap_1792285062415.jpg',
      summary:
        'Produto idealizado para avaliar vagas em relação ao currículo, identificar gaps de competências e gerar roteiros de entrevistas com GPT.',
      details: [
        'Analisa descrições de vagas no mercado tech comparando requisitos a competências reais.',
        'Mapeia competências prioritárias para aprimoramento em engenharia de dados, SRE e nuvem.',
        'Sugere perguntas estratégicas para levantar durante entrevistas técnicas com lideranças.',
      ],
      toolsUsed: ['Modelos GPT', 'Análise Semântica de Vagas', 'Mapeamento de Competências', 'UX Estratégico'],
    },
    {
      id: 'securityone',
      title: 'SecurityOne',
      category: 'Community App',
      status: 'Mobile em desenvolvimento',
      statusType: 'mobile',
      image: '/src/assets/images/project_securityone_1792285062815.jpg',
      summary:
        'Aplicativo mobile colaborativo de segurança comunitária inspirado no Waze, permitindo relatar incidentes urbanos em tempo real com alertas push e SOS.',
      details: [
        'Mapa de riscos atualizado colaborativamente pela própria comunidade local.',
        'Alertas push em tempo real avisando sobre incidentes próximos e rotas seguras.',
        'Recurso de SOS instantâneo com compartilhamento de emergência.',
        'Desenvolvido com apoio do Codex para acelerar a arquitetura e prototipação mobile.',
      ],
      toolsUsed: ['React Native / Mobile', 'Geolocalização', 'Codex AI', 'Push Notifications', 'Segurança'],
      highlightNote: 'Iniciativa empreendedora pessoal em segurança comunitária, fora da atuação corporativa.',
    },
    {
      id: 'aws-studies',
      title: 'Laboratórios de Estudos com AWS',
      category: 'AWS Studies',
      status: 'Em andamento constante',
      statusType: 'study',
      image: '/src/assets/images/project_aws_labs_1792285063937.jpg',
      summary:
        'Série de laboratórios práticos focados em integração ST-S3, resiliência de bancos relacionais e observabilidade cloud.',
      details: [
        'Lab 1 - Integração ST-S3 na AWS: Pipelines de ingestão automatizada e armazenamento seguro de dados brutos e tratados.',
        'Lab 2 - Otimização & Resiliência em Bancos: Cenários de carga com MySQL e Oracle simulando failover e tuning de queries em escala.',
        'Lab 3 - Observabilidade & SRE: Instrumentação de alertas pró-ativos com Amazon CloudWatch e Logs Insights.',
        'Lab 4 - Automação Operacional: Scripts em Python e SQL para automação de rotinas de carga e backup.',
      ],
      toolsUsed: ['AWS S3', 'Amazon RDS', 'CloudWatch', 'Python', 'SQL', 'MySQL', 'Oracle'],
      highlightNote: 'Experimentos práticos documentados e compartilhados na comunidade técnica.',
    },
  ],

  // Trajetória completa incorporando 1997, 1998, 2000, 2008 e 2015
  trajectoryStations: [
    {
      id: 'estacao-01',
      stationNumber: '01',
      period: '1997 – 1999',
      title: 'A Paixão por Computadores & Processo Seletivo do Colégio Técnico',
      context: 'A Origem da Vocação',
      roleType: 'shift',
      shortDesc:
        'Minha paixão por computadores começou em 1997, na antiga 7ª série. Em 1999, prestei o processo seletivo para o colégio técnico estadual: não fui aprovado em Informática (1ª opção), mas passei para Segurança do Trabalho (2ª opção).',
      expandedDetails:
        'A paixão por computadores começou em 1997, na antiga 7ª série, ao ter o primeiro contato com a informática. Em 1999, prestei o processo seletivo para um colégio técnico estadual. Não fui aprovado em Informática, minha primeira opção, mas fui classificado e passei para Segurança do Trabalho, minha segunda opção. O interesse e a vocação pela tecnologia continuaram firmes ao longo dos anos.',
      highlights: [
        '1997: Início da paixão por computadores na antiga 7ª série',
        '1999: Processo seletivo para colégio técnico estadual (1ª opção Informática, 2ª opção Segurança do Trabalho)',
        'Classificação e aprovação para o curso de Segurança do Trabalho',
      ],
      skillsApplied: ['Curiosidade Técnica', 'Resiliência', 'Vocação por Tecnologia'],
      tags: ['1997', '7ª Série', '1999', 'Colégio Técnico Estadual'],
    },
    {
      id: 'estacao-02',
      stationNumber: '02',
      period: '2000 – 2010',
      title: 'Início em Segurança do Trabalho, 1º Lugar em Microinformática & Destaque em Hardware',
      context: 'Estudos em Paralelo ao Trabalho',
      roleType: 'previous',
      shortDesc:
        'Em 2000 iniciei o curso de Segurança do Trabalho. Em 2002 comecei o curso de microinformática, concluído em 2003 com o 1º lugar da unidade de ensino. Em 2008, destaque no curso de montagem e manutenção.',
      expandedDetails:
        'No ano 2000 iniciei a formação em Segurança do Trabalho após a aprovação no colégio técnico. Em paralelo, a busca pela tecnologia nunca parou: ingressei em 2002 no curso de microinformática, concluído em 2003 conquistando com mérito o 1º lugar da unidade de ensino. Em 2008, no curso de montagem e manutenção de computadores, destaquei-me novamente como aluno exemplar.',
      highlights: [
        '2000: Ingresso na formação técnica em Segurança do Trabalho',
        '2002–2003: Conclusão do curso de Microinformática com 1º Lugar da unidade de ensino',
        '2008: Aluno destaque no curso de Montagem e Manutenção de Computadores',
        '2006–2010: Atuação em segurança eletrônica, revelação digital de imagens e gráfica',
      ],
      skillsApplied: ['1º Lugar em Microinformática', 'Hardware e Manutenção', 'Manipulação Digital', 'Treinamento'],
      tags: ['Segurança do Trabalho 2000', '1º Lugar (2002-2003)', 'Destaque 2008', 'Hardware'],
    },
    {
      id: 'estacao-03',
      stationNumber: '03',
      period: '07/2011 – 12/2014',
      title: 'Técnico em Segurança do Trabalho — Família, Casamento & Rigor Operacional',
      role: 'Técnico em Segurança do Trabalho',
      roleType: 'shift',
      context: 'Casado, com uma Filha & Rigor Operacional',
      shortDesc:
        'Iniciei a atuação na área de segurança do trabalho pois já estava casado e com uma filha. Exercia supervisão diária de frentes de trabalho, controle de EPIs, treinamento de equipes e levantamento de riscos operacionais no MetrôRio, mantendo os estudos em TI.',
      expandedDetails:
        'Iniciei a atuação na área de Segurança do Trabalho pois já estava casado e com uma filha, assumindo com responsabilidade o sustento familiar sem jamais abrir mão da vocação e dos estudos contínuos na tecnologia. Atuei até dezembro de 2014 em empresa prestadora de serviços no MetrôRio, exercendo supervisão diária de frentes operacionais críticas, controle rigoroso de EPIs, condução de treinamentos regulamentares e levantamento de riscos operacionais. Essa vivência forjou disciplina com conformidade, auditoria e prevenção — princípios de missão crítica que hoje aplico na observabilidade de sistemas, integridade de pipelines de dados e práticas de SRE.',
      highlights: [
        'Início da atuação profissional em Segurança do Trabalho pois já estava casado e com uma filha',
        'Supervisão diária em operações e frentes de manutenção críticas do MetrôRio',
        'Controle de EPIs/EPCs e levantamento rigoroso de riscos de engenharia e prevenção',
        'Desenvolvimento de forte rigor operacional e conformidade, mantendo os estudos de TI sempre ativos',
      ],
      skillsApplied: ['Análise de Riscos', 'Prevenção de Incidentes', 'Treinamento de Equipes', 'Rigor Operacional'],
      tags: ['Casado e com Filha', 'Sustento Familiar', 'Segurança do Trabalho', 'MetrôRio', 'Prevenção'],
    },
    {
      id: 'estacao-04',
      stationNumber: '04',
      period: '2013 – 2015',
      title: 'A Escolha Definitiva pela TI, Enem & MCPS',
      role: 'Graduando em Gestão de TI',
      roleType: 'shift',
      context: 'Mudança de direção',
      shortDesc:
        'Após cogitar desistir da área, o resultado no Enem abriu caminho para a graduação em Gestão de TI. Obtenção da certificação internacional MCPS Microsoft em junho de 2015.',
      expandedDetails:
        'Em 2013, após anos de esforço em paralelo ao trabalho, o Enem garantiu o ingresso no curso superior de Gestão da Tecnologia da Informação. O período foi marcado por estudos intensivos em sistemas operacionais, infraestrutura e bancos de dados, coroado com a aprovação na certificação Microsoft Certified Professional (MCPS) em junho de 2015.',
      highlights: [
        'Ingresso no ensino superior de Gestão de TI via Enem',
        'Aprofundamento em fundamentos de redes, hardware e governança de TI',
        'Certificação Microsoft Certified Professional (MCPS - jun/2015)',
      ],
      skillsApplied: ['Gestão de TI', 'Redes & Infraestrutura', 'Certificação MCPS', 'Persistência'],
      tags: ['Enem', 'Ensino Superior', 'MCPS Microsoft', 'Virada de Chave'],
    },
    {
      id: 'estacao-05',
      stationNumber: '05',
      period: '06/2015 – 09/2016',
      title: 'A Primeira Oportunidade Conquistada: Suporte Técnico',
      role: 'Suporte Técnico',
      roleType: 'shift',
      context: 'Entrada formal na TI',
      shortDesc:
        'Em junho de 2015, após anos de perseverança desde 1997, consegui minha primeira oportunidade na área de TI. Atendimento N1/N2, PHP, suporte a bancos MySQL/Oracle e deploys com Git.',
      expandedDetails:
        'Em junho de 2015, o sonho iniciado em 1997 materializou-se: fui contratado na área de tecnologia. Atuava no atendimento de 1º e 2º nível, desenvolvia rotinas em PHP, apoiava na sustentação dos bancos de dados MySQL e Oracle corporativos e participava de processos de deploy em homologação e produção utilizando Git.',
      highlights: [
        'Conquista da primeira oportunidade profissional na área de TI em junho de 2015',
        'Atendimento de 1º e 2º nível a sistemas corporativos de alta demanda',
        'Desenvolvimento em PHP e consultas SQL em MySQL e Oracle',
        'Deploys em ambientes de homologação e produção via Git',
      ],
      skillsApplied: ['PHP', 'MySQL', 'Oracle SQL', 'Git', 'Atendimento N1/N2'],
      tags: ['Primeira Vaga TI 2015', 'PHP', 'MySQL & Oracle', 'Git'],
    },
    {
      id: 'estacao-06',
      stationNumber: '06',
      period: '10/2016 – 06/2021',
      title: 'Analista de Suporte Júnior & N3: Deploys em Produção, GitFlow & Submódulos',
      role: 'Analista de Suporte Júnior & N3',
      roleType: 'previous',
      shortDesc:
        'Atuação como N3 já responsável pelos deploys em produção. Em 2020/2021, implementação do GitFlow e uso de submódulos no Git para personalizações de clientes a pedido da diretoria, além de administração de bases MySQL/Oracle.',
      expandedDetails:
        'Ao assumir a atuação de 3º nível (N3), já era o responsável direto pela execução e integridade dos deploys em produção. Entre 2020 e 2021, implementei o GitFlow e a utilização de submódulos no Git para viabilizar e implementar personalizações do sistema para os clientes a pedido da diretoria. Também responsável por diagnóstico de código em PHP, tuning e manutenção de bancos MySQL e Oracle, criação de novos ambientes e gestão da equipe de suporte.',
      highlights: [
        'Responsável pelos deploys em produção desde o início da atuação como N3',
        'Implementação de GitFlow e submódulos no Git (2020/2021) para personalizações do sistema a pedido da diretoria',
        'Resolução de incidentes de 3º nível com diagnóstico detalhado de código e banco',
        'Administração de bancos MySQL e Oracle em ambiente de produção e gestão da equipe',
      ],
      skillsApplied: ['GitFlow', 'Submódulos Git', 'Deploy em Produção', 'Suporte N3', 'MySQL & Oracle DBA', 'PHP', 'Gestão de Equipe'],
      tags: ['GitFlow', 'Submódulos Git', 'Deploy em Produção', 'Suporte N3', 'MySQL & Oracle DBA'],
    },
    {
      id: 'estacao-07',
      stationNumber: '07',
      period: '07/2021 – 01/2022',
      title: 'Analista de Infraestrutura & Operações',
      role: 'Analista de Infraestrutura',
      roleType: 'previous',
      shortDesc:
        'Monitoramento de infraestrutura com Nagios, servidores Windows e Linux, virtualização com VMware ESXi, dimensionamento de ambientes. Conclusão da graduação e certificação Azure.',
      expandedDetails:
        'Atuação formal na infraestrutura corporativa: administração de servidores Windows Server e distribuições Linux, virtualização corporativa com VMware ESXi e monitoramento preventivo 24/7 com Nagios. Nesse período conquistei a certificação Microsoft Certified: Azure Fundamentals (jul/2021) e concluí a graduação em Gestão de TI (out/2021).',
      highlights: [
        'Administração de servidores corporativos Windows Server e Linux',
        'Virtualização de servidores em clusters VMware ESXi',
        'Monitoramento ativo de serviços e infraestrutura com Nagios',
        'Conclusão da Graduação e certificação Azure Fundamentals',
      ],
      skillsApplied: ['Nagios', 'VMware ESXi', 'Linux & Windows Server', 'Azure Fundamentals', 'Redes'],
      tags: ['Infraestrutura', 'Nagios', 'VMware ESXi', 'Azure'],
    },
    {
      id: 'estacao-08',
      stationNumber: '08',
      period: '01/2022 – 10/2024',
      title: 'Uma Nova Linha: Especialização em Dados',
      role: 'Analista de Dados Sênior → Especialista em Dados',
      roleType: 'shift',
      context: 'Mudança de direção',
      shortDesc:
        'Desenvolvimento e manutenção de objetos de banco, relatórios e consultas, otimização de queries, rotinas de backup e scripts de carga. Pós-graduação na PUC Minas e certificação AWS.',
      expandedDetails:
        'Ingresso em janeiro de 2022 como Analista de Dados Sênior e promoção a Especialista em Dados em abril de 2024. Responsável pela manutenção de objetos de banco de dados, tuning de queries em MySQL e Oracle, rotinas de backup, elaboração de relatórios e suporte a times de dev. Conquista da certificação AWS Certified: Cloud Practitioner (set/2023) e conclusão da Pós-Graduação em Engenharia de Dados na PUC Minas (mar/2024).',
      highlights: [
        'Otimização de queries relacionais complexas e apoio a squads de desenvolvimento',
        'Desenvolvimento de scripts de carga de dados e controle de rotinas de backup',
        'Promoção a Especialista em Dados em abril de 2024',
        'Conclusão da Pós-Graduação em Engenharia de Dados na PUC Minas (mar/2024)',
        'Certificação AWS Certified: Cloud Practitioner (set/2023)',
      ],
      skillsApplied: ['MySQL & Oracle Tuning', 'Scripts de Carga', 'Rotinas de Backup', 'PUC Minas', 'AWS Cloud Practitioner'],
      tags: ['Análise de Dados', 'Especialização em Dados', 'PUC Minas', 'AWS'],
    },
    {
      id: 'estacao-09',
      stationNumber: '09',
      period: '11/2024 – Atual',
      title: 'A Estação Atual: Especialista em Dados & Apoio SRE',
      role: 'Especialista em Dados',
      roleType: 'current',
      context: 'Estação atual',
      shortDesc:
        'Desenvolvimento de soluções em Python e SQL para integração, automação e sustentação de processos no setor de crédito. Integração ST-S3 na AWS, portabilidade de novos clientes, apoio a SRE e suporte N3.',
      expandedDetails:
        'Em novembro de 2024 passei a atuar como Especialista em Dados em ambiente financeiro de missão crítica. Atuo no desenvolvimento de soluções em Python e SQL para integração, automação e sustentação de processos de dados com foco em eficiência e confiabilidade. Participação em iniciativas de nuvem (ex.: ST-S3 na AWS), atuação crítica no processo de portabilidade de novos clientes com fluidez e segurança, apoio a demandas de SRE para estabilidade e suporte técnico N3 em incidentes de alta complexidade.',
      highlights: [
        'Soluções em Python e SQL para processos de dados críticos do setor financeiro/crédito',
        'Iniciativas de integração em nuvem (ex.: ST-S3 na AWS) com redução de esforço manual',
        'Atuação na portabilidade de novos clientes garantindo integridade e conformidade',
        'Apoio direto a demandas de SRE com foco em estabilidade, confiabilidade e suporte N3',
      ],
      skillsApplied: ['Python', 'SQL', 'AWS ST-S3', 'Apoio SRE', 'Confiabilidade', 'Suporte N3'],
      tags: ['Especialista em Dados', 'SRE', 'Dados', 'Infraestrutura', 'Cloud AWS', 'Python & SQL'],
    },
  ],

  skills: [
    {
      id: 'python-sql',
      name: 'Python & SQL para Engenharia de Dados',
      category: 'Engenharia de Dados',
      level: 'Especialista',
      experienceYears: 6,
      description:
        'Desenvolvimento de soluções em Python e SQL para integração, automação e sustentação de processos de dados em ambientes de missão crítica do setor de crédito e financeiro.',
      keyTools: ['Python', 'SQL ANSI', 'Automação de Cargas', 'Tratamento de Dados'],
      realWorldImpact:
        'Desenvolvimento de soluções para processos de alta criticidade no setor financeiro e de crédito, reduzindo esforço manual e garantindo qualidade e integridade na portabilidade de clientes.',
    },
    {
      id: 'bancos-tuning',
      name: 'Bancos de Dados Relacionais & Query Tuning',
      category: 'Bancos & SQL',
      level: 'Especialista',
      experienceYears: 8,
      description:
        'Administração, manutenção de objetos, rotinas de backup e análise cirúrgica de queries para otimização de performance em MySQL e Oracle.',
      keyTools: ['MySQL', 'Oracle', 'Tuning de Queries', 'Backup & Recovery', 'Modelagem'],
      realWorldImpact:
        'Otimização contínua de consultas SQL e rotinas de backup em ambientes corporativos de alta demanda, garantindo tempo de resposta veloz e disponibilidade sob concorrência intensa.',
    },
    {
      id: 'cloud-aws-s3',
      name: 'Nuvem AWS & Integrações de Armazenamento',
      category: 'Cloud & Nuvem',
      level: 'Avançado',
      experienceYears: 3,
      description:
        'Integração em nuvem (ex.: ST-S3 na AWS), armazenamento em buckets S3, arquitetura em nuvem e computação elástica.',
      keyTools: ['AWS S3', 'ST-S3 Integration', 'AWS Cloud Practitioner', 'Azure Fundamentals'],
      realWorldImpact:
        'Participação ativa em iniciativas de integração de dados em nuvem AWS (ex.: ST-S3) para acelerar entregas, reduzir intervenções manuais e modernizar processos legados.',
    },
    {
      id: 'sre-confiabilidade',
      name: 'Confiabilidade & Apoio a SRE',
      category: 'SRE & Confiabilidade',
      level: 'Especialista',
      experienceYears: 4,
      description:
        'Apoio a demandas de Site Reliability Engineering (SRE), com foco em estabilidade, otimização de sistemas e suporte N3 na análise de problemas de alta criticidade.',
      keyTools: ['SRE Practices', 'Suporte N3', 'Resolução de Crises', 'Estabilidade Operacional'],
      realWorldImpact:
        'Garantia de estabilidade de plataformas corporativas em ambiente financeiro com investigação profunda de causa raiz, mitigação de incidentes e suporte de nível 3.',
    },
    {
      id: 'ecossistema-dados',
      name: 'Ecossistema de Big Data (Spark, Airflow & Kafka)',
      category: 'Engenharia de Dados',
      level: 'Avançado',
      experienceYears: 2,
      description:
        'Conhecimento prático das ferramentas do ecossistema moderno de dados para processamento distribuído, agendamento de pipelines e mensageria.',
      keyTools: ['Apache Spark', 'Apache Airflow', 'Apache Kafka', 'Data Pipelines'],
      realWorldImpact:
        'Estudos e projetos acadêmicos na Pós-Graduação da PUC Minas e aplicação prática na arquitetura de evolução de pipelines corporativos de dados.',
    },
    {
      id: 'infra-nagios-vmware',
      name: 'Infraestrutura: Linux, Windows, VMware & Nagios',
      category: 'Infra & DevOps',
      level: 'Avançado',
      experienceYears: 7,
      description:
        'Sólida base em infraestrutura: administração de servidores Windows e Linux, virtualização com VMware ESXi, monitoramento com Nagios e deploy com Git.',
      keyTools: ['Nagios', 'VMware ESXi', 'Linux Server', 'Windows Server', 'Git'],
      realWorldImpact:
        'Sustentação confiável de dezenas de servidores corporativos e garantia de monitoramento pró-ativo de serviços essenciais com alta disponibilidade.',
    },
    {
      id: 'ia-produtos',
      name: 'Inteligência Artificial Aplicada & Produtos',
      category: 'IA & Inovação',
      level: 'Avançado',
      experienceYears: 2,
      description:
        'Ideação e condução de produtos digitais com auxílio de modelos de linguagem (GPT e Codex), acelerando estudos, arquitetura e segurança comunitária.',
      keyTools: ['GPT Models', 'Codex AI', 'LabTrack', 'CareerMap', 'SecurityOne'],
      realWorldImpact:
        'Criação de ferramentas reais para estudos para certificações (LabTrack), mapeamento de vagas (CareerMap) e app mobile comunitário (SecurityOne).',
    },
  ],

  education: [
    {
      id: 'pos-puc-minas',
      title: 'Pós-Graduação em Engenharia de Dados (EaD)',
      institution: 'Pontifícia Universidade Católica de Minas Gerais — PUC Minas',
      period: 'Conclusão: 03/2024',
      type: 'Pós-Graduação',
      description:
        'Especialização com foco em arquiteturas modernas de dados, pipelines distribuídos (Spark, Kafka, Airflow), modelagem de Data Warehouses, Data Lakes e governança em nuvem.',
      badge: 'Pós-Graduação Lato Sensu',
    },
    {
      id: 'grad-infnet',
      title: 'Graduação em Gestão da Tecnologia da Informação',
      institution: 'Instituto Infnet',
      period: 'Conclusão: 10/2021',
      type: 'Graduação',
      description:
        'Formação superior em governança de TI, gestão de infraestrutura de sistemas, bancos de dados corporativos, liderança técnica e entrega de valor com tecnologia.',
      badge: 'Ensino Superior',
    },
    {
      id: 'tec-seguranca',
      title: 'Formação Técnica em Segurança do Trabalho',
      institution: 'Escola Técnica Especializada',
      period: 'Conclusão: 2011',
      type: 'Formação Técnica',
      description:
        'Qualificação técnica aplicada na supervisão operacional de segurança e mitigação de riscos no MetrôRio, iniciada para prover estabilidade à família recém-formada (já casado e com uma filha), enquanto persistia nos estudos contínuos de TI.',
      badge: 'Formação Técnica',
    },
  ],

  certifications: [
    {
      id: 'cert-aws-cp',
      title: 'AWS Certified: Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'set/2023',
      credentialId: '5TT906K1WFRE143G',
      badge: 'AWS Certified',
    },
    {
      id: 'cert-azure-fund',
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'jul/2021',
      credentialId: 'H886-3398',
      badge: 'Microsoft Certified',
    },
    {
      id: 'cert-mcps',
      title: 'MCPS: Microsoft Certified Professional',
      issuer: 'Microsoft',
      date: 'jun/2015',
      credentialId: 'F340-6941',
      badge: 'Microsoft Certified',
    },
  ],
};
