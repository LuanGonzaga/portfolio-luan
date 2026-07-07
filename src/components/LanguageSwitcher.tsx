"use client";

import { useI18n, locales, localeLabels } from "@/lib/i18n";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-medium ${
        dark ? "border-dark-line" : "border-line bg-white"
      }`}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? dark
                  ? "bg-dark-text text-dark"
                  : "bg-ink text-white"
                : dark
                  ? "text-dark-muted hover:text-dark-text"
                  : "text-muted hover:text-ink"
            }`}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
