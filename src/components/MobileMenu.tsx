"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { site, navLinks, ui } from "@/lib/data";

export default function MobileMenu() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  // trava o scroll da página enquanto o menu cobre a tela
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = open ? "hidden" : "";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // overlay vai por portal direto no body: o backdrop-blur do header
  // cria containing block e prenderia o position:fixed dentro dele
  const overlay = (
    <div
      className={`fixed inset-0 z-[60] flex flex-col justify-between bg-dark px-8 pb-10 pt-28 text-dark-text transition-opacity duration-500 md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Close menu"
        onClick={close}
        className="absolute right-6 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-dark-line text-dark-text"
      >
        ✕
      </button>

      <nav className="flex flex-col gap-2">
        {navLinks.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={close}
            style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            className={`font-(family-name:--font-display) text-4xl font-bold transition-[opacity,translate] duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {t(l.label)}
          </Link>
        ))}
      </nav>

      <div
        style={{ transitionDelay: open ? "400ms" : "0ms" }}
        className={`flex flex-col gap-4 transition-[opacity,translate] duration-500 ${
          open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <LanguageSwitcher dark />
        <a
          href={`mailto:${site.email}`}
          onClick={close}
          className="rounded-full bg-dark-text px-6 py-4 text-center text-sm text-dark"
        >
          {t(ui.letsTalk)} ↗
        </a>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-white"
      >
        <span
          className={`h-px w-4 bg-ink transition-transform duration-300 ${
            open ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-4 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[3.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && createPortal(overlay, document.body)}
    </div>
  );
}
