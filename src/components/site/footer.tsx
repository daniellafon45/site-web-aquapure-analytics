import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        <div>
          <div className="font-bold mb-4">Secteurs d&apos;activité</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Eaux municipales</li>
            <li>Mine</li>
            <li>Pâte et papier</li>
            <li>Agroalimentaire</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">Expertise</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Notre offre</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">Entreprise</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Carrières</li>
            <li>Espace presse</li>
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
