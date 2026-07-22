"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { proofProjects } from "@/lib/data";
import { useI18n, type L } from "@/lib/i18n";

const copy = {
  eyebrow: { en: "SELECTED LANDING PAGES", pt: "LANDING PAGES SELECIONADAS", es: "LANDING PAGES SELECCIONADAS" },
  title: {
    en: "Landing pages and interfaces developed for different markets.",
    pt: "Landing pages e interfaces desenvolvidas para diferentes mercados.",
    es: "Landing pages e interfaces desarrolladas para diferentes mercados.",
  },
  body: {
    en: "A visual record of web projects across healthcare, education, retail, local services and digital businesses.",
    pt: "Um registro visual de projetos web nos segmentos de saúde, educação, varejo, serviços locais e negócios digitais.",
    es: "Un registro visual de proyectos web en salud, educación, retail, servicios locales y negocios digitales.",
  },
  note: {
    en: "A selection of delivered interfaces across different markets.",
    pt: "Uma seleção de interfaces entregues para diferentes mercados.",
    es: "Una selección de interfaces entregadas para diferentes mercados.",
  },
  showAll: {
    en: "View all 42 landing pages",
    pt: "Ver todas as 42 landing pages",
    es: "Ver las 42 landing pages",
  },
  showLess: { en: "Show fewer", pt: "Mostrar menos", es: "Mostrar menos" },
} satisfies Record<string, L>;

export default function SocialProof() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="web-work-title" className="mt-24 rounded-2xl bg-dark px-6 py-16 text-dark-text sm:px-10 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <Reveal>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-dark-muted">/{t(copy.eyebrow)}</p>
            <h2 id="web-work-title" className="mt-5 max-w-3xl font-(family-name:--font-display) text-3xl font-extrabold leading-tight sm:text-5xl">
              {t(copy.title)}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-relaxed text-dark-muted sm:text-base">{t(copy.body)}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {proofProjects.slice(0, 9).map((project, index) => (
          <Reveal key={project.image} delay={(index % 3) * 0.08}>
            <ProofCard project={project} />
          </Reveal>
        ))}
      </div>

      <details className="proof-details mt-10">
        <summary className="mx-auto w-fit cursor-pointer list-none rounded-full border border-dark-line px-6 py-3 text-sm text-dark-text transition-colors hover:bg-white hover:text-dark">
          <span className="proof-open-label">{t(copy.showAll)}</span>
          <span className="proof-close-label">{t(copy.showLess)}</span>
        </summary>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proofProjects.slice(9).map((project) => (
            <ProofCard key={project.image} project={project} />
          ))}
        </div>
        <button
          type="button"
          onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
          className="proof-bottom-summary mx-auto mt-10 cursor-pointer rounded-full border border-dark-line px-6 py-3 text-sm text-dark-text transition-colors hover:bg-white hover:text-dark"
        >
          {t(copy.showLess)}
        </button>
      </details>

      <p className="mt-6 text-xs text-dark-muted">{t(copy.note)}</p>
    </section>
  );
}

function ProofCard({ project }: { project: (typeof proofProjects)[number] }) {
  const { t } = useI18n();
  return (
    <article className="group overflow-hidden rounded-xl border border-dark-line bg-white/[0.03]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#202020]">
        <Image
          src={project.image}
          alt={`${project.name} — ${t(project.service)}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="font-medium">{project.name}</h3>
          <p className="mt-1 text-xs text-dark-muted">{t(project.segment)}</p>
        </div>
        <span className="shrink-0 rounded-full border border-dark-line px-3 py-1 text-xs text-dark-muted">
          {t(project.service)}
        </span>
      </div>
    </article>
  );
}
