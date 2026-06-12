import { Globe } from "lucide-react";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/i18n/types";
import { useLocale } from "@/i18n/context";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <label className="inline-flex items-center gap-1.5 shrink-0">
      <Globe className="size-4 text-navy/60" aria-hidden />
      <span className="sr-only">{t.nav.language}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        aria-label={t.nav.language}
        className={`rounded-md border border-input bg-background text-navy outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer ${
          compact ? "h-9 px-2 text-xs" : "h-10 px-2.5 text-sm"
        }`}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
