import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getTranslations } from "./translations";
import {
  LOCALE_DATE,
  LOCALE_HTML_LANG,
  LOCALES,
  type Locale,
  type Translations,
} from "./types";

const STORAGE_KEY = "aquapure-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }
  return "fr";
}

type LocaleContextValue = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  formatDate: (iso: string) => string;
  translateCategory: (category: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useMemo(() => getTranslations(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
  }, [locale]);

  const formatDate = useCallback(
    (iso: string) =>
      new Date(iso).toLocaleDateString(LOCALE_DATE[locale], {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [locale],
  );

  const translateCategory = useCallback(
    (category: string) => t.categories[category] ?? category,
    [t],
  );

  const value = useMemo(
    () => ({ locale, t, setLocale, formatDate, translateCategory }),
    [locale, t, setLocale, formatDate, translateCategory],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
