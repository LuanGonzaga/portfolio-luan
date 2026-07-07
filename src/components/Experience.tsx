"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Reveal from "@/components/Reveal";
import { useI18n, type L } from "@/lib/i18n";
import { experience, education, ui } from "@/lib/data";

gsap.registerPlugin(useGSAP);

type Row = {
  key: string;
  title: string;
  subtitle: L;
  period: string;
  logo?: string;
  description: L;
  highlights?: L[];
};

const expRows: Row[] = experience.map((e, i) => ({
  key: `exp-${i}`,
  title: e.org,
  subtitle: e.role,
  period: e.period,
  logo: e.logo,
  description: e.description,
  highlights: e.highlights,
}));

const eduRows: Row[] = education.map((e, i) => ({
  key: `edu-${i}`,
  title: e.school,
  subtitle: e.degree,
  period: e.period,
  logo: e.logo,
  description: e.description,
}));

export default function Experience() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const [open, setOpen] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);

  useGSAP(
    () => {
      if (!previewRef.current) return;
      xTo.current = gsap.quickTo(previewRef.current, "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      yTo.current = gsap.quickTo(previewRef.current, "y", {
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  const move = (e: React.MouseEvent) => {
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    xTo.current?.(e.clientX - bounds.left + 28);
    yTo.current?.(e.clientY - bounds.top - 70);
  };

  const show = (item: Row | null) => {
    if (item?.logo) setLogo(item.logo);
    gsap.to(previewRef.current, {
      opacity: item?.logo ? 1 : 0,
      scale: item?.logo ? 1 : 0.85,
      rotate: item?.logo ? -5 : 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const renderRow = (item: Row) => {
    const isOpen = open === item.key;
    return (
      <li key={item.key} className="border-t border-dark-line last:border-b">
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setOpen(isOpen ? null : item.key)}
          onMouseEnter={() => show(item)}
          onMouseLeave={() => show(null)}
          className="group flex w-full items-center justify-between gap-4 py-7 text-left"
        >
          <div className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-3">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-dark-muted">{t(item.subtitle)}</p>
          </div>
          <span className="flex shrink-0 items-center gap-4">
            <span className="text-sm text-dark-muted">{item.period}</span>
            <span
              className={`text-lg text-dark-muted transition-transform duration-500 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </span>
        </button>

        {/* card com a descrição — abre no clique */}
        <div className="pillar-body" data-open={isOpen}>
          <div>
            <div className="mb-7 rounded-xl border border-dark-line bg-white/[0.03] p-6">
              <p className="max-w-2xl text-sm leading-relaxed text-dark-muted">
                {t(item.description)}
              </p>
              {item.highlights && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h.en}
                      className="rounded-full border border-dark-line px-3 py-1 text-xs text-dark-muted"
                    >
                      {t(h)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      onMouseMove={move}
      className="relative mx-3 overflow-hidden rounded-2xl bg-dark px-6 py-24 text-dark-text sm:mx-6 sm:px-10"
    >
      {/* logo da empresa/escola segue o cursor no hover */}
      <div
        ref={previewRef}
        className="pointer-events-none absolute left-0 top-0 z-10 flex h-28 w-44 items-center justify-center rounded-xl border border-dark-line bg-[#1c1c1c] p-4 opacity-0 shadow-2xl"
      >
        {logo && (
          <Image
            src={logo}
            alt=""
            aria-hidden
            fill
            sizes="176px"
            className="object-contain p-3"
          />
        )}
      </div>

      <div className="relative mb-14 flex items-end justify-between">
        <span
          aria-hidden
          className="ghost-title font-(family-name:--font-display) font-extrabold text-white"
        >
          EXPERIENCE
        </span>
        <Reveal>
          <h2 className="font-(family-name:--font-display) text-3xl font-bold sm:text-5xl">
            /EXPERIENCE
          </h2>
        </Reveal>
        <span className="hidden text-sm text-dark-muted sm:block">
          {t(ui.multidisciplinary)}
        </span>
      </div>

      <ul>{expRows.map(renderRow)}</ul>

      <div className="mt-16">
        <Reveal>
          <h3 className="font-(family-name:--font-display) text-xl font-bold text-dark-muted sm:text-2xl">
            /EDUCATION
          </h3>
        </Reveal>
        <ul className="mt-4">{eduRows.map(renderRow)}</ul>
      </div>
    </section>
  );
}
