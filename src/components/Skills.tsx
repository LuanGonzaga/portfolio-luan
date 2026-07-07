"use client";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import { skills, skillsFlat } from "@/lib/data";

// duas faixas em direções opostas; duplico a lista pro loop ser contínuo
const rowA = [...skillsFlat, ...skillsFlat];
const rowB = [...[...skillsFlat].reverse(), ...[...skillsFlat].reverse()];

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="relative mb-12 px-6 sm:px-10">
        <span
          aria-hidden
          className="ghost-title font-(family-name:--font-display) font-extrabold"
        >
          SKILLS
        </span>
        <Reveal>
          <h2 className="font-(family-name:--font-display) text-3xl font-bold sm:text-5xl">
            /SKILLS
          </h2>
        </Reveal>
      </div>

      {/* marquee — leitor de tela pula (lista real vem abaixo) */}
      <div aria-hidden className="flex flex-col gap-4">
        <div className="marquee">
          <div className="marquee-track">
            {rowA.map((s, i) => (
              <SkillPill key={`a-${i}`} label={s} />
            ))}
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-track marquee-reverse">
            {rowB.map((s, i) => (
              <SkillPill key={`b-${i}`} label={s} />
            ))}
          </div>
        </div>
      </div>

      {/* versão agrupada e acessível */}
      <div className="mt-16 grid gap-8 px-6 sm:grid-cols-3 sm:px-10">
        {skills.map((group, i) => (
          <Reveal key={group.label.en} delay={i * 0.08}>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {t(group.label)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white px-3 py-1 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillPill({ label }: { label: string }) {
  return (
    <span className="shrink-0 rounded-full border border-line px-5 py-2 text-lg font-medium text-ink-soft sm:text-2xl">
      {label}
    </span>
  );
}
