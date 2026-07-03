"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Reveal from "@/components/Reveal";
import PageTransition from "@/components/PageTransition";
import {
  pillarBySlug,
  projectsByPillar,
  site,
  type PillarSlug,
} from "@/lib/data";

gsap.registerPlugin(useGSAP);

export default function PillarPage({ slug }: { slug: PillarSlug }) {
  const pillar = pillarBySlug(slug);
  const dark = pillar.theme === "dark";
  const titleRef = useRef<HTMLHeadingElement>(null);

  // título letra por letra, como na página de case da referência
  useGSAP(
    () => {
      gsap.fromTo(
        ".pillar-letter",
        { opacity: 0, yPercent: 60 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.7,
          stagger: 0.035,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    },
    { scope: titleRef },
  );

  return (
    <PageTransition>
      <main
      className={`mx-3 my-3 min-h-svh rounded-2xl px-6 py-10 sm:mx-6 sm:px-10 ${
        dark ? "bg-dark text-dark-text" : "bg-card"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className={`rounded-full border px-5 py-2.5 text-sm transition-transform hover:scale-105 ${
            dark ? "border-dark-line" : "border-line bg-white"
          }`}
        >
          ← Back
        </Link>
        <span
          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${
            dark ? "border-dark-line" : "border-line bg-white shadow-sm"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          {site.availability}
        </span>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal onScroll={false}>
          <div className="flex flex-wrap gap-2">
            {pillar.tags.map((t) => (
              <span
                key={t}
                className={`rounded-full border px-4 py-1.5 text-xs ${
                  dark
                    ? "border-dark-line text-dark-muted"
                    : "border-line bg-white text-ink-soft"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <h1
          ref={titleRef}
          className="mt-8 font-(family-name:--font-display) text-[clamp(2.2rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-tight"
          aria-label={pillar.title}
        >
          {pillar.title.split("").map((char, i) => (
            <span
              key={i}
              aria-hidden
              className="pillar-letter inline-block whitespace-pre opacity-0"
            >
              {char}
            </span>
          ))}
          <span
            className={`ml-4 align-middle text-lg font-medium ${
              dark ? "text-dark-muted" : "text-muted"
            }`}
          >
            {pillar.tagline}
          </span>
        </h1>

        <Reveal onScroll={false} delay={0.5} className="mt-8">
          <p
            className={`max-w-xl text-base leading-relaxed ${
              dark ? "text-dark-muted" : "text-ink-soft"
            }`}
          >
            {pillar.description}
          </p>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal>
          <h2 className="font-(family-name:--font-display) text-2xl font-bold sm:text-4xl">
            /SELECTED
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {projectsByPillar(slug).map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.12}>
              <div className="group">
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.015]"
                  style={{ background: project.gradient }}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-medium leading-snug">
                  {project.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.lang && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        dark ? "bg-dark-text text-dark" : "bg-ink text-white"
                      }`}
                    >
                      {project.lang}
                    </span>
                  )}
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full border px-3 py-1 text-xs ${
                        dark
                          ? "border-dark-line text-dark-muted"
                          : "border-line text-muted"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center py-16 text-center">
        <Reveal>
          <h2 className="font-(family-name:--font-display) text-3xl font-extrabold sm:text-5xl">
            NEED {pillar.title}?
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className={`inline-block rounded-full px-8 py-4 text-sm transition-transform hover:scale-105 ${
              dark ? "bg-dark-text text-dark" : "bg-ink text-white"
            }`}
          >
            Contact Me ↗
          </a>
        </Reveal>
        </div>
      </main>
    </PageTransition>
  );
}
