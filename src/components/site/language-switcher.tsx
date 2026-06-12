import { Globe } from "lucide-react";
import { LOCALE_LABELS, LOCALE_SHORT, LOCALES, type Locale } from "@/i18n/types";
import { useLocale } from "@/i18n/context";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <label className="inline-flex items-center gap-1 shrink-0">
      <Globe className="size-3.5 text-navy/60" aria-hidden />
      <span className="sr-only">{t.nav.language}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        aria-label={t.nav.language}
        className={`rounded-md border border-input bg-background text-navy outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer w-[3.25rem] ${
          compact ? "h-8 px-1 text-[11px]" : "h-8 px-1.5 text-xs"
        }`}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code} title={LOCALE_LABELS[code]}>
            {LOCALE_SHORT[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
