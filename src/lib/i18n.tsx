"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

/** string traduzível: uma entrada por idioma */
export type L = Record<Locale, string>;

const DEFAULT: Locale = "en";
const STORAGE_KEY = "locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** resolve uma string traduzível pro locale atual */
  t: (value: L) => string;
};

const LocaleContext = createContext<Ctx | null>(null);

function detectInitial(): Locale {
  if (typeof window === "undefined") return DEFAULT;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && locales.includes(saved as Locale)) return saved as Locale;
  const nav = window.navigator.language.slice(0, 2).toLowerCase();
  return (locales as readonly string[]).includes(nav) ? (nav as Locale) : DEFAULT;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // SSR/first paint sempre no default (evita mismatch de hidratação);
  // ajusta pro idioma salvo/detectado logo após montar
  const [locale, setLocaleState] = useState<Locale>(DEFAULT);

  useEffect(() => {
    const initial = detectInitial();
    if (initial !== DEFAULT) setLocaleState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const t = (value: L) => value[locale] ?? value[DEFAULT];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useI18n must be used within LocaleProvider");
  return ctx;
}
