import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsApp from "@/components/icons/WhatsApp";
import { proofProjects, site, whatsapp } from "@/lib/data";
import HeroVariant from "./HeroVariant";
import QualificationForm from "./QualificationForm";

export const metadata: Metadata = {
  title: "Landing pages que geram contatos",
  description:
    "Landing pages profissionais, rápidas e pensadas para transformar visitas em contatos pelo WhatsApp. Design, copy, publicação e mensuração.",
  alternates: { canonical: "/landing-pages" },
  keywords: ["criação de landing page", "landing page profissional", "página de vendas", "landing page WhatsApp"],
  openGraph: {
    title: "Landing pages que transformam visitas em contatos",
    description: "Design, copy e desenvolvimento para apresentar melhor seu negócio e gerar oportunidades.",
    url: "/landing-pages",
    siteName: "Luan Gonzaga",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/landing-pages-og.jpg", width: 1200, height: 630, alt: "Landing pages que transformam visitas em contatos — Luan Gonzaga" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing pages que transformam visitas em contatos",
    description: "Design, copy e desenvolvimento para apresentar melhor seu negócio e gerar oportunidades.",
    images: ["/images/landing-pages-og.jpg"],
  },
  robots: { index: true, follow: true },
};

const contactMessage = encodeURIComponent(
  "Olá, Luan! Quero uma landing page para apresentar melhor meu negócio e gerar mais contatos.",
);
const contactHref = `${whatsapp.href}?text=${contactMessage}`;

const solutions = [
  {
    label: "Para começar bem",
    title: "Presença que gera contato",
    description:
      "Uma página objetiva para apresentar seu serviço, construir confiança e levar o visitante direto ao WhatsApp.",
    items: ["Página focada em conversão", "Serviços, avaliações e localização", "Hospedagem, domínio e publicação"],
  },
  {
    label: "Para crescer",
    title: "Captação com dados",
    description:
      "Mais recursos para receber pedidos de orçamento e entender de onde chegam as melhores oportunidades.",
    items: ["Formulário de orçamento", "Analytics e pixels", "SEO básico e galeria"],
  },
  {
    label: "Para escalar",
    title: "Operação mais completa",
    description:
      "Uma estrutura para ofertas maiores, com automações, acompanhamento e prioridade nos ajustes.",
    items: ["Estrutura ampliada", "Automação de mensagens", "Relatórios e suporte prioritário"],
  },
];

const steps = [
  ["01", "Conversa inicial", "Começamos pelo WhatsApp. Entendo seu serviço, público, objetivo e indico a estrutura mais adequada."],
  ["02", "Materiais", "Reunimos logotipo, informações do negócio e, quando houver, fotos profissionais, do serviço, equipe ou espaço. Eu ajudo a definir o que faz sentido usar."],
  ["03", "Criação e ajustes", "Desenvolvo a página e envio para sua avaliação. Os ajustes de conteúdo combinados estão inclusos antes da publicação."],
  ["04", "Site no ar", "Cuido do domínio, hospedagem na HostGator e publicação. Depois da entrega, o suporte e a hospedagem continuam no plano mensal."],
];

const faqs = [
  ["Preciso já ter textos e fotos?", "Não. Eu ajudo a organizar o conteúdo e indico o que precisamos reunir para construir uma página convincente."],
  ["A página funciona bem no celular?", "Sim. A experiência mobile é prioridade, porque é onde grande parte dos contatos pelo WhatsApp acontece."],
  ["Domínio e hospedagem estão inclusos?", "A estrutura pode incluir domínio, hospedagem, publicação e os ajustes de conteúdo combinados no projeto."],
  ["É possível medir os resultados?", "Sim. Conforme a necessidade, configuro formulário, Google Analytics, Meta Pixel e eventos de conversão."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function LandingPagesSalesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f2] pb-24 text-[#102d2b] sm:pb-0">
      <header className="sticky top-0 z-50 border-b border-[#173f3b]/10 bg-[#f7f6f2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="font-(family-name:--font-display) text-sm font-bold tracking-[-0.02em]">
            {site.firstName} {site.lastName}
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#496461] md:flex" aria-label="Navegação principal">
            <a href="#solucoes" className="hover:text-[#102d2b]">Soluções</a>
            <a href="#projetos" className="hover:text-[#102d2b]">Projetos</a>
            <a href="#processo" className="hover:text-[#102d2b]">Como funciona</a>
          </nav>
          <a href={contactHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#153f3a] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0b6257] sm:text-sm">
            <WhatsApp className="h-4 w-4" /> Conversar
          </a>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.03fr_.97fr] lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#173f3b]/15 bg-white/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#3f5e5a]">
            <span className="h-2 w-2 rounded-full bg-[#df6b45]" /> Landing pages com atendimento direto
          </div>
          <HeroVariant />
          <p className="mt-6 max-w-xl text-base leading-7 text-[#496461] sm:text-lg">
            Eu crio landing pages que explicam seu valor, passam confiança e conduzem o visitante até o contato — sem enrolação e sem aparência de site genérico.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={contactHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b94e2d] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(185,78,45,.2)] transition-transform hover:-translate-y-0.5">
              Quero melhorar minha presença online <Arrow />
            </a>
            <a href="#projetos" className="rounded-full border border-[#173f3b]/20 px-6 py-3.5 text-center text-sm font-semibold hover:bg-white">Ver projetos reais</a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-5 text-[#526a67]">
            <span>✓ Você fala diretamente comigo</span><span>✓ Resposta em horário comercial</span><span>✓ Sem compromisso</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#b8ddd4]/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#173f3b]/10 bg-white p-2 shadow-[0_24px_70px_rgba(16,45,43,.14)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#dce8e3]">
              <Image src="/images/luan-profile.webp" alt="Luan Gonzaga, responsável pela criação das landing pages" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-[center_28%]" />
              <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[#153f3a]/92 px-4 py-3 text-white backdrop-blur-sm">
                <p className="text-sm font-bold">Eu cuido do seu projeto do início ao suporte.</p>
                <p className="mt-1 text-xs text-[#c7d8d5]">Estratégia, design, desenvolvimento e publicação.</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 py-3 text-xs">
              <span className="font-semibold">Luan Gonzaga</span>
              <span className="text-[#526a67]">Desenvolvedor web</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#173f3b]/10 bg-white/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {[["42+", "projetos no acervo"], ["Mobile", "pensado primeiro"], ["Direto", "sem intermediários"], ["Completo", "da ideia à publicação"]].map(([value, label]) => (
            <div key={value} className="border-[#173f3b]/10 px-3 py-6 first:border-l sm:border-r sm:px-6">
              <strong className="block text-lg font-bold text-[#0b7769]">{value}</strong>
              <span className="mt-1 block text-xs text-[#526a67]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="solucoes" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0b7769]">Uma solução para cada momento</p>
          <h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Você não precisa de mais páginas. Precisa da estrutura certa.</h2>
          <p className="mt-4 text-sm leading-6 text-[#5c7471] sm:text-base">O escopo é definido pelo que seu negócio precisa agora — da captação direta pelo WhatsApp a uma operação com formulários, métricas e automações.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <article key={solution.title} className={`rounded-2xl border p-6 sm:p-7 ${index === 1 ? "border-[#0b7769] bg-[#153f3a] text-white" : "border-[#173f3b]/12 bg-white"}`}>
              <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${index === 1 ? "text-[#80d4c5]" : "text-[#0b7769]"}`}>{solution.label}</p>
              <h3 className="mt-4 text-xl font-bold tracking-[-0.02em]">{solution.title}</h3>
              <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-[#c7d8d5]" : "text-[#5c7471]"}`}>{solution.description}</p>
              <ul className={`mt-6 space-y-3 border-t pt-5 text-sm ${index === 1 ? "border-white/15" : "border-[#173f3b]/10"}`}>
                {solution.items.map((item) => <li key={item} className="flex gap-3"><span className={index === 1 ? "text-[#80d4c5]" : "text-[#df6b45]"}>✓</span>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-[#526a67]">O formato ideal é recomendado depois de entender seu objetivo. Sem empurrar recurso que você não precisa.</p>
      </section>

      <section id="projetos" className="bg-[#153f3a] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#80d4c5]">Trabalhos reais</p>
              <h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Experiência em diferentes mercados.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#b8cbc8]">Cada projeto recebe uma direção própria, alinhada ao público, à oferta e ao próximo passo esperado.</p>
          </div>
          <div className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {proofProjects.slice(1, 7).map((project) => (
              <article key={project.image}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#214b47]">
                  <Image src={project.image.replace("/proof/", "/proof/optimized/")} alt={`Projeto desenvolvido para ${project.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 hover:scale-[1.025]" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 text-sm"><h3 className="font-semibold">{project.name}</h3><span className="text-xs text-[#9cb4b0]">{project.segment.pt}</span></div>
              </article>
            ))}
          </div>
          <details className="group mt-10 border-t border-white/15 pt-6">
            <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-[#153f3a]">
              Ver todos os {proofProjects.length} projetos <span className="transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {proofProjects.filter((_, index) => index === 0 || index > 6).map((project) => (
                <article key={`all-${project.image}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#214b47]">
                    <Image src={project.image.replace("/proof/", "/proof/optimized/")} alt={`Projeto desenvolvido para ${project.name}`} fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 hover:scale-[1.025]" />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm"><h3 className="font-semibold">{project.name}</h3><span className="text-xs text-[#9cb4b0]">{project.segment.pt}</span></div>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="processo" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0b7769]">Como funciona</p>
          <h2 className="mt-4 max-w-md font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Você sabe o que está acontecendo em cada etapa.</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#5c7471]">Processo simples, comunicação direta e decisões explicadas. Nada de desaparecer depois de receber o material.</p>
          <div className="mt-7 rounded-2xl border border-[#173f3b]/12 bg-white p-5">
            <strong className="block text-sm">Prazo de entrega</strong>
            <p className="mt-2 text-sm leading-6 text-[#5c7471]">Uma landing page simples pode ficar pronta em até 2 dias úteis após o recebimento dos materiais. Projetos com mais páginas, integrações ou automações recebem um prazo específico.</p>
          </div>
        </div>
        <ol className="border-t border-[#173f3b]/15">
          {steps.map(([number, title, description]) => (
            <li key={number} className="grid gap-2 border-b border-[#173f3b]/15 py-6 sm:grid-cols-[3rem_.7fr_1.3fr] sm:gap-4">
              <span className="text-xs font-bold text-[#df6b45]">{number}</span><h3 className="font-bold">{title}</h3><p className="text-sm leading-6 text-[#5c7471]">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-[#173f3b]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-3xl bg-[#dce8e3]">
            <Image src="/images/luan-profile.webp" alt="Luan Gonzaga, responsável pelos projetos" fill loading="lazy" sizes="(max-width: 1024px) 390px, 35vw" className="object-cover" />
          </div>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0b7769]">Quem vai criar sua página</p>
            <h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Atendimento e desenvolvimento diretamente comigo.</h2>
            <p className="mt-5 text-sm leading-6 text-[#5c7471] sm:text-base">Eu sou Luan Gonzaga, desenvolvedor web com atuação também em marketing digital. Isso me permite cuidar não apenas da aparência da página, mas da mensagem, da experiência e do caminho até o contato.</p>
            <p className="mt-4 text-sm leading-6 text-[#5c7471] sm:text-base">Você conversa comigo do início ao suporte depois da publicação — sem repassar o projeto para terceiros e sem ficar tentando descobrir quem está cuidando de cada etapa.</p>
            <Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#173f3b]/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#153f3a] hover:text-white">Conhecer meu portfólio completo <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["O que você precisa enviar", "Informações do negócio e, se disponíveis, logotipo e fotos profissionais, dos serviços, da equipe ou do local. Organizamos tudo juntos pelo WhatsApp."],
            ["Como funcionam os ajustes", "Você avalia a página antes da publicação e me envia as alterações de conteúdo necessárias. Os ajustes combinados no projeto estão inclusos."],
            ["Depois da publicação", "Entrego o site completo, com domínio configurado e hospedagem na HostGator. O plano mensal mantém hospedagem, suporte e ajustes de conteúdo."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-[#173f3b]/12 bg-white p-6">
              <span className="text-[#b94e2d]">✓</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#5c7471]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="orcamento" className="border-y border-[#173f3b]/10 bg-[#eaf0ec] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0b7769]">Comece por aqui</p>
            <h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Conte um pouco sobre o que você precisa.</h2>
            <p className="mt-4 text-sm leading-6 text-[#5c7471] sm:text-base">São quatro respostas rápidas. Elas chegam organizadas no WhatsApp e ajudam a tornar nossa primeira conversa mais objetiva.</p>
          </div>
          <QualificationForm whatsappHref={whatsapp.href} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0b7769]">Dúvidas frequentes</p><h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Antes de começarmos</h2></div>
        <div className="mt-8 border-t border-[#173f3b]/15">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-[#173f3b]/15 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">{question}<span className="text-xl text-[#0b7769] transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5c7471]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-6 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#e8b74d] px-6 py-14 text-center text-[#193431] sm:px-12 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.16em]">Vamos conversar?</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Sua página pode trabalhar melhor pelo seu negócio.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#36534f] sm:text-base">Me conte o que você vende e onde quer chegar. Eu te ajudo a entender qual estrutura faz sentido.</p>
          <a href="#orcamento" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#153f3a] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#0b6257]">Responder 4 perguntas rápidas <Arrow /></a>
          <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#36534f]"><span>Atendimento direto</span><span>·</span><span>Resposta em horário comercial</span><span>·</span><span>Sem compromisso</span></div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-8 text-xs text-[#526a67] sm:flex-row sm:px-8"><span>© {new Date().getFullYear()} {site.firstName} {site.lastName}</span><span>Landing pages · Design · Desenvolvimento</span></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#153f3a]/96 p-3 backdrop-blur-md sm:hidden">
        <a href={contactHref} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b94e2d] px-5 py-3.5 text-sm font-bold text-white"><WhatsApp className="h-5 w-5" /> Quero falar sobre minha página</a>
      </div>
    </main>
  );
}
