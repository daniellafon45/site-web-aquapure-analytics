import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/context";
import { hasConsentDecision, setConsent } from "@/lib/consent/storage";

export function ConsentBanner() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasConsentDecision());
  }, []);

  const handleChoice = (analytics: boolean) => {
    setConsent(analytics);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.consent.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-navy text-navy-foreground shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
        <p className="text-sm leading-relaxed text-white/85 sm:max-w-2xl">
          {t.consent.message}{" "}
          <Link to="/confidentialite" className="font-medium text-white underline underline-offset-2 hover:text-white/90">
            {t.consent.learnMore}
          </Link>
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="rounded-md border border-white/25 bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            {t.consent.reject}
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:bg-white/90 transition-colors"
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
