import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { useLocale } from "@/i18n/context";
import { Logo } from "./logo";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <div className="font-bold mb-4">{t.footer.sectorsTitle}</div>
          <ul className="space-y-2 text-sm text-white/80">
            {t.footer.sectors.map((sector) => (
              <li key={sector.href}>
                <a href={sector.href} className="hover:text-white transition-colors">
                  {sector.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">{t.footer.companyTitle}</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/blogue" className="hover:text-white transition-colors">
                {t.footer.blog}
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="hover:text-white transition-colors">
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end gap-4">
          <div className="rounded-lg bg-white px-4 py-3">
            <Logo className="h-11 sm:h-12 w-auto" />
          </div>
          <a
            href="https://www.linkedin.com/company/aquapure-analytics/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.linkedInAria}
            className="size-12 grid place-items-center rounded-md hover:bg-white/10"
          >
            <Linkedin className="size-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}
