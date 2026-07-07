"use client";

import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import MobileMenu from "@/components/MobileMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { site, navLinks, ui } from "@/lib/data";

export default function Nav() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 rounded-t-2xl bg-card/85 px-6 py-4 backdrop-blur-md sm:px-10">
      <Link
        href="/"
        className="hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium shadow-sm sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        {t(site.availability)}
      </Link>

      <nav className="hidden items-center gap-8 text-sm md:flex">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="link-underline group text-ink-soft transition-colors hover:text-ink"
          >
            {t(l.label)}
            {l.count && (
              <sup className="ml-0.5 text-[10px] text-muted group-hover:text-ink-soft">
                [{l.count}]
              </sup>
            )}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <LanguageSwitcher />
        </div>
        <Magnetic>
          <a
            href={`mailto:${site.email}`}
            className="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm text-white"
          >
            {t(ui.letsTalk)} ↗
          </a>
        </Magnetic>
        <MobileMenu />
      </div>
    </header>
  );
}
