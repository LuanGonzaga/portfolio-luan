// ===== EDIT ME: todo o conteúdo do site vive aqui =====

export const site = {
  firstName: "LUAN",
  lastName: "GONZAGA",
  availability: "Available for new projects",
  email: "luangonzaga@vk.com",
  roles: ["Web Developer", "Offensive Security", "Digital Marketing"],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/LuanGonzaga" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luangonzagaa/" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/pwnedby" },
];

export type PillarSlug = "dev" | "security" | "marketing";

export type Pillar = {
  slug: PillarSlug;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  theme: "light" | "dark";
};

export const pillars: Pillar[] = [
  {
    slug: "dev",
    title: "WEB DEVELOPMENT",
    tagline: "/01",
    description:
      "Fast, scalable and well-crafted web applications. From landing pages that convert to full-stack products — clean code, modern stack, performance first.",
    tags: ["Next.js", "TypeScript", "Node", "APIs"],
    theme: "light",
  },
  {
    slug: "security",
    title: "OFFENSIVE SECURITY",
    tagline: "/02",
    description:
      "Penetration testing, vulnerability research and CTF writeups. I break things to make them safer — web apps, networks and everything in between.",
    tags: ["Pentest", "CTF", "Web Security", "Recon"],
    theme: "dark",
  },
  {
    slug: "marketing",
    title: "DIGITAL MARKETING",
    tagline: "/03",
    description:
      "Growth driven by data. Paid traffic, funnels, copy and conversion — marketing that ships measurable results, not vanity metrics.",
    tags: ["Paid Traffic", "Funnels", "Copy", "Analytics"],
    theme: "light",
  },
];

export type Project = {
  slug: string;
  title: string;
  pillar: PillarSlug;
  tags: string[];
  year: string;
  // screenshot do front em public/projects/<slug>.png
  image?: string;
  // site em produção (card abre em nova aba)
  url?: string;
  // idioma do produto
  lang?: string;
  // fallback visual enquanto não há screenshot
  gradient: string;
  // false = não aparece no site ainda (placeholder/WIP)
  published?: boolean;
};

// Projetos reais (thumbnails: public/projects/<slug>.png quando tiver prints)
export const projects: Project[] = [
  {
    slug: "mixtudo",
    title: "MIX Tudo — Multi-tenant SaaS for Mercado Livre resellers",
    pillar: "dev",
    tags: ["SaaS", "Multi-tenant", "Mercado Livre API"],
    year: "2025",
    image: "/projects/mixbrinde-home.png",
    lang: "PT-BR",
    gradient: "linear-gradient(135deg, #151520 0%, #2a2a3a 100%)",
  },
  {
    slug: "workrapp",
    title: "Workrapp — AI resume builder SaaS",
    pillar: "dev",
    tags: ["Next.js", "Supabase", "Mercado Pago"],
    year: "2026",
    image: "/projects/workrapp.png",
    lang: "PT-BR",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
  },
  {
    slug: "levoo",
    title: "Levoo — Cash-on-delivery marketplace on Firebase",
    pillar: "dev",
    tags: ["Firebase", "Cloud Functions", "Pix"],
    year: "2025",
    image: "/projects/levoo.png",
    lang: "PT-BR",
    gradient: "linear-gradient(135deg, #10151a 0%, #24333f 100%)",
  },
  {
    // TODO: substituir pelo primeiro writeup real (THM/HTB/CTF)
    slug: "writeup-web",
    title: "CTF Writeup — Web Exploitation (coming soon)",
    pillar: "security",
    tags: ["CTF", "Writeup"],
    year: "2026",
    gradient: "linear-gradient(135deg, #0a0f0a 0%, #1e3a2a 100%)",
    published: false,
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  logo?: string;
  description: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    org: "HuntersPay",
    role: "Bug Hunter — Bug Bounty & VDP",
    period: "Dec 2025 - Now",
    logo: "/logos/hunterspay.png",
    description:
      "Active participation in Bug Bounty and Vulnerability Disclosure Programs, performing security testing on Web and Mobile applications and responsibly reporting vulnerabilities.",
    highlights: [
      "Web and Mobile security testing",
      "IDOR, authentication/authorization flaws, data exposure",
      "Clear and concise technical vulnerability reporting",
    ],
  },
  {
    org: "Jet Service Aquecedores",
    role: "IT Analyst — Infrastructure & Security",
    period: "Sep 2023 - Apr 2026",
    logo: "/logos/jetservice.png",
    description:
      "IT Infrastructure and Security: network management, cybersecurity measures, regular vulnerability assessments, e-commerce support and Python automations to streamline processes.",
    highlights: [
      "Network management & Active Directory",
      "Vulnerability assessments",
      "Python automations",
    ],
  },
  {
    org: "JetService",
    role: "E-commerce Assistant",
    period: "Mar 2021 - Aug 2021",
    logo: "/logos/jetservice.png",
    description:
      "Stock orders, customer consultations, online/offline sales invoices, product registration, website updates and marketing/social media campaigns, with monthly revenue reporting.",
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  logo?: string;
  description: string;
};

export const education: Education[] = [
  {
    school: "FIAP",
    degree: "Associate's Degree — Cybersecurity & Information Assurance",
    period: "2024 - 2025",
    logo: "/logos/fiap.png",
    description:
      "Computer and Information Systems Security / Information Assurance. Operating systems, cloud essentials, network security and 12+ related competencies.",
  },
];

export const pillarBySlug = (slug: PillarSlug) =>
  pillars.find((p) => p.slug === slug)!;

export const projectsByPillar = (slug: PillarSlug) =>
  projects.filter((p) => p.pillar === slug && p.published !== false);

export const publishedProjects = projects.filter((p) => p.published !== false);

// ===== Links de navegação =====
export type NavLink = { label: string; href: string; count?: string };

export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Pillars", href: "/#pillars", count: `${pillars.length}` },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
