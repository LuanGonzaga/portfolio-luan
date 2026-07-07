"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import { publishedProjects, pillarBySlug } from "@/lib/data";

export default function Work() {
  const { t } = useI18n();
  return (
    <section id="work" className="relative px-6 py-24 sm:px-10">
      <div className="relative mb-14">
        <span
          aria-hidden
          className="ghost-title font-(family-name:--font-display) font-extrabold"
        >
          WORK
        </span>
        <Reveal>
          <h2 className="font-(family-name:--font-display) text-3xl font-bold sm:text-5xl">
            /WORK
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {publishedProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.12}>
            <Link
              href={project.url ?? `/${project.pillar}`}
              {...(project.url
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { transitionTypes: ["nav-forward"] })}
              className="group block"
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.015]"
                style={{ background: project.gradient }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={t(project.title)}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="relative flex h-full items-end p-5">
                  <span className="rounded-full bg-black/40 px-2 py-0.5 text-xs text-white/80 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
                {/* seta desliza no hover */}
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-block -translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                    ↗
                  </span>
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium leading-snug transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1">
                {t(project.title)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-white px-3 py-1 text-xs text-ink-soft">
                  {t(pillarBySlug(project.pillar).title)}
                </span>
                {project.lang && (
                  <span className="rounded-full bg-ink px-3 py-1 text-xs text-white">
                    {project.lang}
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
