"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pillars } from "@/lib/data";

export default function Pillars() {
  const [open, setOpen] = useState(0);

  return (
    <section id="pillars" className="relative px-6 py-24 sm:px-10">
      <div className="relative mb-14">
        <span
          aria-hidden
          className="ghost-title font-(family-name:--font-display) font-extrabold"
        >
          PILLARS
        </span>
        <Reveal>
          <h2 className="font-(family-name:--font-display) text-3xl font-bold sm:text-5xl">
            /PILLARS
          </h2>
        </Reveal>
      </div>

      <ul>
        {pillars.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.slug} className="border-t border-line last:border-b">
              <div
                className={`transition-colors duration-500 ${
                  isOpen ? "rounded-2xl bg-dark text-dark-text" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-2 py-7 text-left sm:px-6"
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className={`text-xs ${isOpen ? "text-dark-muted" : "text-muted"}`}
                    >
                      {p.tagline}
                    </span>
                    <span className="font-(family-name:--font-display) text-2xl font-bold tracking-tight sm:text-5xl">
                      {p.title}
                    </span>
                  </span>
                  <span className="text-2xl">{isOpen ? "✕" : "↗"}</span>
                </button>

                <div className="pillar-body" data-open={isOpen}>
                  <div>
                    <div className="flex flex-col gap-6 px-2 pb-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
                      <div>
                        <p className="max-w-md text-sm leading-relaxed text-dark-muted">
                          {p.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-dark-line px-3 py-1 text-xs text-dark-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={`/${p.slug}`}
                        transitionTypes={["nav-forward"]}
                        className="shrink-0 rounded-full bg-dark-text px-6 py-3 text-sm text-dark transition-transform hover:scale-105"
                      >
                        Explore {p.title.toLowerCase()} ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
