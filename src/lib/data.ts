// ===== EDIT ME: todo o conteúdo do site vive aqui =====
// Strings traduzíveis usam L = { en, pt, es }. Nomes próprios
// (empresas, projetos, techs, certificações) ficam como string única.

import type { L } from "@/lib/i18n";

export const site = {
  firstName: "LUAN",
  lastName: "GONZAGA",
  availability: {
    en: "Available for new projects",
    pt: "Disponível para novos projetos",
    es: "Disponible para nuevos proyectos",
  } as L,
  email: "luangonzaga@vk.com",
  roles: [
    { en: "Web Developer", pt: "Desenvolvedor Web", es: "Desarrollador Web" },
    {
      en: "Offensive Security",
      pt: "Segurança Ofensiva",
      es: "Seguridad Ofensiva",
    },
    { en: "Digital Marketing", pt: "Marketing Digital", es: "Marketing Digital" },
  ] as L[],
};

// textos de interface reutilizados
export const ui = {
  letsTalk: { en: "Let's Talk", pt: "Vamos conversar", es: "Hablemos" },
  letsCollaborate: {
    en: "Let's collaborate",
    pt: "Vamos colaborar",
    es: "Colaboremos",
  },
  contactMe: { en: "Contact Me", pt: "Fale comigo", es: "Contáctame" },
  heroBlurb: {
    en: "I build web products, break them to make them safer, and market them to grow.",
    pt: "Eu construo produtos web, os quebro para torná-los mais seguros e faço marketing para crescê-los.",
    es: "Construyo productos web, los rompo para hacerlos más seguros y hago marketing para hacerlos crecer.",
  },
  scroll: { en: "scroll", pt: "rolar", es: "desliza" },
  multidisciplinary: {
    en: "multi-disciplinary",
    pt: "multidisciplinar",
    es: "multidisciplinario",
  },
  earned: { en: "earned", pt: "conquistadas", es: "obtenidas" },
  selected: { en: "/SELECTED", pt: "/SELECIONADOS", es: "/SELECCIONADOS" },
  certificationsHeading: {
    en: "/CERTIFICATIONS",
    pt: "/CERTIFICAÇÕES",
    es: "/CERTIFICACIONES",
  },
  back: { en: "Back", pt: "Voltar", es: "Volver" },
  ctaHeading: {
    en: "HAVE A PROJECT IN MIND?",
    pt: "TEM UM PROJETO EM MENTE?",
    es: "¿TIENES UN PROYECTO EN MENTE?",
  },
  ctaBlurb: {
    en: "Build it, secure it, grow it — or all three. Let's talk about what you need.",
    pt: "Construir, proteger, crescer — ou os três. Vamos conversar sobre o que você precisa.",
    es: "Construir, proteger, crecer — o los tres. Hablemos de lo que necesitas.",
  },
  // padrões com {x} substituído no componente
  explore: { en: "Explore {x}", pt: "Explorar {x}", es: "Explorar {x}" },
  need: { en: "NEED {x}?", pt: "PRECISA DE {x}?", es: "¿NECESITAS {x}?" },
} satisfies Record<string, L>;

/** substitui {x} num padrão traduzível */
export const fill = (pattern: string, x: string) => pattern.replace("{x}", x);

export type PillarSlug = "dev" | "security" | "marketing";

export type Pillar = {
  slug: PillarSlug;
  title: L;
  tagline: string;
  description: L;
  tags: string[];
  theme: "light" | "dark";
};

export const pillars: Pillar[] = [
  {
    slug: "dev",
    title: {
      en: "WEB DEVELOPMENT",
      pt: "DESENVOLVIMENTO WEB",
      es: "DESARROLLO WEB",
    },
    tagline: "/01",
    description: {
      en: "Fast, scalable and well-crafted web applications. From landing pages that convert to full-stack products — clean code, modern stack, performance first.",
      pt: "Aplicações web rápidas, escaláveis e bem construídas. De landing pages que convertem a produtos full-stack — código limpo, stack moderna, performance em primeiro lugar.",
      es: "Aplicaciones web rápidas, escalables y bien construidas. Desde landing pages que convierten hasta productos full-stack — código limpio, stack moderno, rendimiento primero.",
    },
    tags: ["Next.js", "TypeScript", "Node", "APIs"],
    theme: "light",
  },
  {
    slug: "security",
    title: {
      en: "OFFENSIVE SECURITY",
      pt: "SEGURANÇA OFENSIVA",
      es: "SEGURIDAD OFENSIVA",
    },
    tagline: "/02",
    description: {
      en: "Bug bounty, penetration testing and Active Directory red teaming. CRTA & CRTS certified — I break web apps, APIs and networks to make them safer, then report clearly.",
      pt: "Bug bounty, testes de invasão e red team em Active Directory. Certificado CRTA e CRTS — quebro aplicações web, APIs e redes para torná-las mais seguras, e reporto com clareza.",
      es: "Bug bounty, pruebas de penetración y red team en Active Directory. Certificado CRTA y CRTS — rompo aplicaciones web, APIs y redes para hacerlas más seguras, y reporto con claridad.",
    },
    tags: ["Bug Bounty", "Red Team", "Active Directory", "API Pentest"],
    theme: "dark",
  },
  {
    slug: "marketing",
    title: {
      en: "DIGITAL MARKETING",
      pt: "MARKETING DIGITAL",
      es: "MARKETING DIGITAL",
    },
    tagline: "/03",
    description: {
      en: "Growth driven by data. Paid traffic, funnels, copy and conversion — marketing that ships measurable results, not vanity metrics.",
      pt: "Crescimento guiado por dados. Tráfego pago, funis, copy e conversão — marketing que entrega resultados mensuráveis, não métricas de vaidade.",
      es: "Crecimiento impulsado por datos. Tráfico pago, embudos, copy y conversión — marketing que entrega resultados medibles, no métricas de vanidad.",
    },
    tags: ["Paid Traffic", "Funnels", "Copy", "Analytics"],
    theme: "light",
  },
];

export type Project = {
  slug: string;
  title: L;
  pillar: PillarSlug;
  tags: string[];
  year: string;
  image?: string;
  url?: string;
  lang?: string;
  gradient: string;
  published?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mixtudo",
    title: {
      en: "MIX Tudo — Multi-tenant SaaS for Mercado Livre resellers",
      pt: "MIX Tudo — SaaS multi-tenant para revendedores do Mercado Livre",
      es: "MIX Tudo — SaaS multi-tenant para revendedores de Mercado Libre",
    },
    pillar: "dev",
    tags: ["SaaS", "Multi-tenant", "Mercado Livre API"],
    year: "2025",
    image: "/projects/mixbrinde-home.png",
    lang: "PT-BR",
    gradient: "linear-gradient(135deg, #151520 0%, #2a2a3a 100%)",
  },
  {
    slug: "workrapp",
    title: {
      en: "Workrapp — AI resume builder SaaS",
      pt: "Workrapp — SaaS de criação de currículos com IA",
      es: "Workrapp — SaaS de creación de currículums con IA",
    },
    pillar: "dev",
    tags: ["Next.js", "Supabase", "Mercado Pago"],
    year: "2026",
    image: "/projects/workrapp.png",
    lang: "PT-BR",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
  },
  {
    slug: "levoo",
    title: {
      en: "Levoo — Cash-on-delivery marketplace on Firebase",
      pt: "Levoo — Marketplace de pagamento na entrega com Firebase",
      es: "Levoo — Marketplace de pago contra entrega con Firebase",
    },
    pillar: "dev",
    tags: ["Firebase", "Cloud Functions", "Pix"],
    year: "2025",
    image: "/projects/levoo.png",
    lang: "PT-BR",
    gradient: "linear-gradient(135deg, #10151a 0%, #24333f 100%)",
  },
  {
    slug: "writeup-web",
    title: {
      en: "CTF Writeup — Web Exploitation (coming soon)",
      pt: "Writeup CTF — Exploração Web (em breve)",
      es: "Writeup CTF — Explotación Web (próximamente)",
    },
    pillar: "security",
    tags: ["CTF", "Writeup"],
    year: "2026",
    gradient: "linear-gradient(135deg, #0a0f0a 0%, #1e3a2a 100%)",
    published: false,
  },
];

export type Experience = {
  org: string;
  role: L;
  period: string;
  logo?: string;
  description: L;
  highlights?: L[];
};

export const experience: Experience[] = [
  {
    org: "HuntersPay",
    role: {
      en: "Bug Hunter — Bug Bounty & VDP",
      pt: "Bug Hunter — Bug Bounty e VDP",
      es: "Bug Hunter — Bug Bounty y VDP",
    },
    period: "Dec 2025 - Now",
    logo: "/logos/hunterspay.png",
    description: {
      en: "Active participation in Bug Bounty and Vulnerability Disclosure Programs, performing security testing on Web and Mobile applications and responsibly reporting vulnerabilities.",
      pt: "Participação ativa em programas de Bug Bounty e VDP, realizando testes de segurança em aplicações Web e Mobile e reportando vulnerabilidades de forma responsável.",
      es: "Participación activa en programas de Bug Bounty y VDP, realizando pruebas de seguridad en aplicaciones Web y Mobile y reportando vulnerabilidades de forma responsable.",
    },
    highlights: [
      {
        en: "Web and Mobile security testing",
        pt: "Testes de segurança Web e Mobile",
        es: "Pruebas de seguridad Web y Mobile",
      },
      {
        en: "IDOR, authentication/authorization flaws, data exposure",
        pt: "IDOR, falhas de autenticação/autorização, exposição de dados",
        es: "IDOR, fallas de autenticación/autorización, exposición de datos",
      },
      {
        en: "Clear and concise technical vulnerability reporting",
        pt: "Relatórios técnicos de vulnerabilidade claros e concisos",
        es: "Reportes técnicos de vulnerabilidad claros y concisos",
      },
    ],
  },
  {
    org: "Jet Service Aquecedores",
    role: {
      en: "IT Analyst — Infrastructure & Security",
      pt: "Analista de TI — Infraestrutura e Segurança",
      es: "Analista de TI — Infraestructura y Seguridad",
    },
    period: "Sep 2023 - Apr 2026",
    logo: "/logos/jetservice.png",
    description: {
      en: "Strengthening internal infrastructure security through hardening, network segmentation and access controls, while running vulnerability assessments and responding to incidents on critical systems.",
      pt: "Fortalecimento da segurança da infraestrutura interna com hardening, segmentação de rede e controles de acesso, além de avaliações de vulnerabilidade e resposta a incidentes em sistemas críticos.",
      es: "Fortalecimiento de la seguridad de la infraestructura interna con hardening, segmentación de red y controles de acceso, además de evaluaciones de vulnerabilidad y respuesta a incidentes en sistemas críticos.",
    },
    highlights: [
      {
        en: "Hardening, segmentation & access control",
        pt: "Hardening, segmentação e controle de acesso",
        es: "Hardening, segmentación y control de acceso",
      },
      {
        en: "OWASP Top 10 assessments — SQLi, XSS, CSRF, auth flaws",
        pt: "Avaliações OWASP Top 10 — SQLi, XSS, CSRF, falhas de autenticação",
        es: "Evaluaciones OWASP Top 10 — SQLi, XSS, CSRF, fallas de autenticación",
      },
      {
        en: "Python automations",
        pt: "Automações em Python",
        es: "Automatizaciones en Python",
      },
      {
        en: "E-commerce performance & security",
        pt: "Performance e segurança de e-commerce",
        es: "Rendimiento y seguridad de e-commerce",
      },
      {
        en: "Monitoring & incident response",
        pt: "Monitoramento e resposta a incidentes",
        es: "Monitoreo y respuesta a incidentes",
      },
    ],
  },
  {
    org: "JetService",
    role: {
      en: "E-commerce Assistant",
      pt: "Assistente de E-commerce",
      es: "Asistente de E-commerce",
    },
    period: "Mar 2021 - Aug 2021",
    logo: "/logos/jetservice.png",
    description: {
      en: "Managed the e-commerce operation end to end: product registration, sales invoicing, customer support, website updates and marketing campaigns, reporting monthly revenue and costs to leadership.",
      pt: "Gestão da operação de e-commerce de ponta a ponta: cadastro de produtos, faturamento de vendas, suporte ao cliente, atualizações do site e campanhas de marketing, com relatórios mensais de faturamento e custos à diretoria.",
      es: "Gestión de la operación de e-commerce de punta a punta: registro de productos, facturación de ventas, soporte al cliente, actualizaciones del sitio y campañas de marketing, con reportes mensuales de ingresos y costos a la dirección.",
    },
    highlights: [
      {
        en: "Product registration & catalog",
        pt: "Cadastro de produtos e catálogo",
        es: "Registro de productos y catálogo",
      },
      {
        en: "Marketing campaigns & social media",
        pt: "Campanhas de marketing e redes sociais",
        es: "Campañas de marketing y redes sociales",
      },
      {
        en: "Monthly revenue & cost reporting",
        pt: "Relatórios mensais de faturamento e custos",
        es: "Reportes mensuales de ingresos y costos",
      },
    ],
  },
];

export type Education = {
  school: string;
  degree: L;
  period: string;
  logo?: string;
  description: L;
};

export const education: Education[] = [
  {
    school: "FIAP",
    degree: {
      en: "Technologist in Cyber Defense",
      pt: "Tecnólogo em Defesa Cibernética",
      es: "Tecnólogo en Defensa Cibernética",
    },
    period: "Jan 2024 - Dec 2025",
    logo: "/logos/fiap.png",
    description: {
      en: "Full degree in cyber defense: offensive and defensive security, network architecture, secure systems, incident response and vulnerability analysis.",
      pt: "Graduação completa em defesa cibernética: segurança ofensiva e defensiva, arquitetura de redes, sistemas seguros, resposta a incidentes e análise de vulnerabilidades.",
      es: "Grado completo en defensa cibernética: seguridad ofensiva y defensiva, arquitectura de redes, sistemas seguros, respuesta a incidentes y análisis de vulnerabilidades.",
    },
  },
];

export type Certification = {
  name: string;
  issuer: string;
  description: L;
};

export const certifications: Certification[] = [
  {
    name: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarFare Labs",
    description: {
      en: "Hands-on offensive security: advanced attack techniques, post-exploitation and lateral movement.",
      pt: "Segurança ofensiva prática: técnicas avançadas de ataque, pós-exploração e movimentação lateral.",
      es: "Seguridad ofensiva práctica: técnicas avanzadas de ataque, post-explotación y movimiento lateral.",
    },
  },
  {
    name: "Certified AD Red Team Specialist (CRTS)",
    issuer: "CyberWarFare Labs",
    description: {
      en: "Active Directory offense: enumeration, delegation abuse, trusts, kerberoasting and ADCS exploitation.",
      pt: "Ofensiva em Active Directory: enumeração, abuso de delegação, trusts, kerberoasting e exploração de ADCS.",
      es: "Ofensiva en Active Directory: enumeración, abuso de delegación, trusts, kerberoasting y explotación de ADCS.",
    },
  },
  {
    name: "Cyber Security Analyst (C3SA)",
    issuer: "Solyd Offensive Security",
    description: {
      en: "Complete training in security analysis, vulnerabilities and cyber defense.",
      pt: "Formação completa em análise de segurança, vulnerabilidades e defesa cibernética.",
      es: "Formación completa en análisis de seguridad, vulnerabilidades y defensa cibernética.",
    },
  },
  {
    name: "API Penetration Testing",
    issuer: "APIsec University",
    description: {
      en: "Identifying and exploiting vulnerabilities in modern APIs.",
      pt: "Identificação e exploração de vulnerabilidades em APIs modernas.",
      es: "Identificación y explotación de vulnerabilidades en APIs modernas.",
    },
  },
  {
    name: "ISO/IEC 27001 Information Security Associate",
    issuer: "SkillFront",
    description: {
      en: "Information security management and compliance fundamentals.",
      pt: "Fundamentos de gestão e conformidade em segurança da informação.",
      es: "Fundamentos de gestión y cumplimiento en seguridad de la información.",
    },
  },
  {
    name: "Network Security",
    issuer: "Cisco",
    description: {
      en: "Advanced network security: secure architecture, segmentation, firewalls, IDS/IPS and protection policies.",
      pt: "Segurança de redes avançada: arquitetura segura, segmentação, firewalls, IDS/IPS e políticas de proteção.",
      es: "Seguridad de redes avanzada: arquitectura segura, segmentación, firewalls, IDS/IPS y políticas de protección.",
    },
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco",
    description: {
      en: "Threat identification, analysis and mitigation.",
      pt: "Identificação, análise e mitigação de ameaças.",
      es: "Identificación, análisis y mitigación de amenazas.",
    },
  },
  {
    name: "Network Defense",
    issuer: "Cisco",
    description: {
      en: "Network defense, monitoring and threat mitigation.",
      pt: "Defesa de redes, monitoramento e mitigação de ameaças.",
      es: "Defensa de redes, monitoreo y mitigación de amenazas.",
    },
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    description: {
      en: "Security fundamentals, investigation and incident response.",
      pt: "Fundamentos de segurança, investigação e resposta a incidentes.",
      es: "Fundamentos de seguridad, investigación y respuesta a incidentes.",
    },
  },
  {
    name: "Cybersecurity Awareness (CAPC)",
    issuer: "CAPC",
    description: {
      en: "Official awareness and threat prevention training.",
      pt: "Treinamento oficial de conscientização e prevenção de ameaças.",
      es: "Capacitación oficial de concientización y prevención de amenazas.",
    },
  },
  {
    name: "RHCSA (EX124 & EX134)",
    issuer: "Red Hat",
    description: {
      en: "Linux server administration, service management, automation and advanced Red Hat administration.",
      pt: "Administração de servidores Linux, gestão de serviços, automação e administração avançada Red Hat.",
      es: "Administración de servidores Linux, gestión de servicios, automatización y administración avanzada Red Hat.",
    },
  },
  {
    name: "CCNA 1",
    issuer: "SENAI",
    description: {
      en: "Networking fundamentals, routing and switching.",
      pt: "Fundamentos de redes, roteamento e switching.",
      es: "Fundamentos de redes, enrutamiento y switching.",
    },
  },
  {
    name: "Network Technician Career Path",
    issuer: "Cisco",
    description: {
      en: "Practical training in network fundamentals and operation.",
      pt: "Formação prática em fundamentos e operação de redes.",
      es: "Formación práctica en fundamentos y operación de redes.",
    },
  },
];

export type SkillGroup = {
  label: L;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: { en: "Security", pt: "Segurança", es: "Seguridad" },
    items: [
      "Burp Suite",
      "Wazuh",
      "MITRE ATT&CK",
      "OSINT",
      "Sysmon",
      "Malware Analysis",
      "ELK Stack",
      "Active Directory",
    ],
  },
  {
    label: { en: "Development", pt: "Desenvolvimento", es: "Desarrollo" },
    items: [
      "Python",
      "JavaScript",
      "HTML",
      "jQuery",
      "MySQL",
      "Bash",
      "Git",
      "Docker",
    ],
  },
  {
    label: { en: "Infrastructure", pt: "Infraestrutura", es: "Infraestructura" },
    items: [
      "Linux",
      "Windows Server",
      "TCP/IP",
      "Network Security",
      "Network Infrastructure",
    ],
  },
];

export const skillsFlat = skills.flatMap((g) => g.items);

export const socials = [
  { label: "GitHub", href: "https://github.com/LuanGonzaga" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luangonzagaa/" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/pwnedby" },
];

export const pillarBySlug = (slug: PillarSlug) =>
  pillars.find((p) => p.slug === slug)!;

export const projectsByPillar = (slug: PillarSlug) =>
  projects.filter((p) => p.pillar === slug && p.published !== false);

export const publishedProjects = projects.filter((p) => p.published !== false);

// ===== Links de navegação =====
export type NavLink = { label: L; href: string; count?: string };

export const navLinks: NavLink[] = [
  { label: { en: "Work", pt: "Trabalhos", es: "Trabajos" }, href: "/#work" },
  {
    label: { en: "Pillars", pt: "Pilares", es: "Pilares" },
    href: "/#pillars",
    count: `${pillars.length}`,
  },
  {
    label: { en: "Experience", pt: "Experiência", es: "Experiencia" },
    href: "/#experience",
  },
  { label: { en: "Contact", pt: "Contato", es: "Contacto" }, href: "/#contact" },
];
