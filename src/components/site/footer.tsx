import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Logo } from "./logo";

const sectors = [
  { label: "Eaux municipales", href: "/#eaux-municipales" },
  { label: "Mine", href: "/#mine" },
  { label: "Pâte et papier", href: "/#pate-et-papier" },
  { label: "Agroalimentaire", href: "/#agroalimentaire" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <div className="font-bold mb-4">Secteurs d&apos;activité</div>
          <ul className="space-y-2 text-sm text-white/80">
            {sectors.map((sector) => (
              <li key={sector.href}>
                <a href={sector.href} className="hover:text-white transition-colors">
                  {sector.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">Entreprise</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/blogue" className="hover:text-white transition-colors">
                Blogue
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end gap-4">
          <div className="rounded-lg bg-white px-3 py-2">
            <Logo className="h-7 w-auto" />
          </div>
          <a
            href="https://www.linkedin.com/company/aquapure-analytics/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AquaPure Analytics sur LinkedIn"
            className="size-8 grid place-items-center rounded-md hover:bg-white/10"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
