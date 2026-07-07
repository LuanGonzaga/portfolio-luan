"use client";

import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import WhatsApp from "@/components/icons/WhatsApp";
import { useI18n } from "@/lib/i18n";
import { site, ui, whatsapp } from "@/lib/data";

export default function ContactCTA() {
  const { t } = useI18n();
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-6 py-32 text-center sm:px-10"
    >
      <Reveal>
        <span className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium shadow-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {t(site.availability)}
        </span>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <h2 className="font-(family-name:--font-display) text-4xl font-extrabold tracking-tight sm:text-7xl">
          {t(ui.ctaHeading)}
        </h2>
      </Reveal>

      <Reveal delay={0.2} className="mt-6">
        <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          {t(ui.ctaBlurb)}
        </p>
      </Reveal>

      <Reveal delay={0.3} className="mt-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              className="inline-block rounded-full bg-ink px-8 py-4 text-sm text-white"
            >
              {t(ui.contactMe)} ↗
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-white"
            >
              <WhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
